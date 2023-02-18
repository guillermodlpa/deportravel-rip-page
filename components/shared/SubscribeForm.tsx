import { Alert, AlertTitle, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import getConfig from "next/config";
import { FormEvent, useRef, useState } from "react";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const { publicRuntimeConfig } = getConfig();

enum SubmitStatus {
  IDDLE,
  SUBMITTING,
  SUBMITTED,
  ERROR,
}

export default function SubscribeForm() {
  const { t } = useTranslation("subscribeForm");
  const router = useRouter();

  const [status, setStatus] = useState(SubmitStatus.IDDLE);
  const [email, setEmail] = useState("");
  const form = useRef();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStatus(SubmitStatus.SUBMITTING);
    const data = new FormData(form.current);
    const action = (event.target as HTMLFormElement).action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        setStatus(SubmitStatus.SUBMITTED);
      })
      .catch((error) => {
        console.error(error);
        setStatus(SubmitStatus.ERROR);
      });
  };

  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", gap: 2, alignItems: "stretch", flexWrap: 1 }}
        method="POST"
        action={publicRuntimeConfig.FORM_POST_ACTION}
        onSubmit={handleSubmit}
        ref={form}
      >
        {status !== SubmitStatus.SUBMITTED ? (
          <>
            <TextField
              type="email"
              label="Email"
              name={t("emailInputLabel")}
              required
              sx={{ backgroundColor: "background.default", borderRadius: 1 }}
              InputLabelProps={{
                color: "secondary",
              }}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input type="hidden" value={router.locale || ""} name="Locale" />
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={status === SubmitStatus.SUBMITTING}
              sx={{ flexShrink: 0 }}
            >
              {t("buttonLabel")}
            </LoadingButton>
          </>
        ) : (
          <Alert
            severity="success"
            variant="filled"
            icon={<CelebrationRoundedIcon fontSize="inherit" />}
            sx={{ flexGrow: 1 }}
          >
            <AlertTitle>{t("confirmationTitle")}</AlertTitle>
            <Trans
              ns="subscribeForm"
              i18nKey="confirmationBody"
              values={{ email }}
            />
          </Alert>
        )}
      </Box>
      {status === SubmitStatus.ERROR && (
        <Alert severity="error" variant="filled">
          {t("defaultErrorMessage")}
        </Alert>
      )}
    </>
  );
}
