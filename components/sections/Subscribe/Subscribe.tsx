import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Section from "../../shared/Section";

const ColorMask = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(135deg,rgba(30,33,33,.70) 0%, rgba(32,32,32,.3) 100%)",
      backgroundPosition: "0 0, 50% 50%",
      backgroundSize: "auto,cover",
      zIndex: 1,
    }}
  />
);

export default function Subscribe() {
  const { t } = useTranslation("subscribeBlock");

  return (
    <Section backgroundColor="transparent">
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 6, sm: 12 },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h2" color="text.contrast">
            {t("headline")}
          </Typography>
        </Box>
      </Container>

      <ColorMask />
    </Section>
  );
}
