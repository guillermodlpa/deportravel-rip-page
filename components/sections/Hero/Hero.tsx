import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Trans, useTranslation } from "next-i18next";
import Section from "../../shared/Section";
import StyledAppName from "../../shared/StyledAppName";
import Carousel from "./Carousel";
import LanguageMenu from "./LanguageMenu";

import Logo from "./Logo";
import MoreContentArrow from "./MoreContentArrow";

export default function Hero() {
  const { t } = useTranslation("hero");

  const smallViewport = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Section almostFullHeight>
      <LanguageMenu />
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 15 },
          }}
        >
          <Box
            sx={{
              width: { sm: "66%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box>
              <Logo />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h2">
                {t("headline1")}
                <br />
                {t("headline2")}
              </Typography>
            </Box>

            {smallViewport && (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "20rem",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
              >
                <Carousel />
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" paragraph width="100%">
                <Trans
                  ns="hero"
                  i18nKey="body1"
                  components={{ StyledAppName: <StyledAppName /> }}
                />
              </Typography>
              <Typography variant="body1" paragraph width="100%">
                {t("body2")}
              </Typography>
            </Box>
          </Box>

          {!smallViewport && (
            <Box
              sx={{
                width: "33%",
                flexShrink: 0,
              }}
            >
              <Carousel />
            </Box>
          )}
        </Box>

        <MoreContentArrow />
      </Container>
    </Section>
  );
}
