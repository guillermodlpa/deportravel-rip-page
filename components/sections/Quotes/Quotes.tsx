import { Avatar, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import avatarImageGerardIzquierdo from "./avatar_gerard_izquierdo.png";
import avatarImageRogerFornas from "./avatar_roger_fornas.png";
import avatarImageAnnettKowalski from "./avatar_annett_kowalski.png";
import { useTranslation } from "next-i18next";

const ColorMask = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(135deg,rgba(255, 255, 255,0.8) 0%, rgba(255,255,255,0.95) 100%)",
      backgroundPosition: "0 0, 50% 50%",
      backgroundSize: "auto,cover",
      zIndex: 1,
      backdropFilter: "blur(5px)",
    }}
  />
);

export default function Quotes() {
  const { t } = useTranslation("quotes");

  const QUOTES = [
    {
      name: "Annett Kowalski",
      image: avatarImageAnnettKowalski,
      content: t("annetQuote"),
    },
    {
      name: "Gerard Izquierdo",
      image: avatarImageGerardIzquierdo,
      content: t("gerardQuote"),
    },
    {
      name: "Roger Fornàs",
      image: avatarImageRogerFornas,
      content: t("rogerQuote"),
    },
  ];

  return (
    <Section backgroundColor={"transparent"}>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          pt: { xs: 4, sm: 8 },
          pb: { xs: 6, sm: 12 },
          gap: { xs: 6, sm: 8 },
          zIndex: 2,
        }}
      >
        {QUOTES.map(({ name, content, image }) => (
          <Box
            key={name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar sx={{ width: "8rem", height: "8rem" }}>
              <Image src={image} alt="Avatar" layout="fill" objectFit="cover" />
            </Avatar>
            <Typography
              variant="subtitle1"
              component="p"
              textAlign="center"
              fontWeight="bold"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
            >{`"${content}"`}</Typography>
          </Box>
        ))}
      </Container>

      <ColorMask />
    </Section>
  );
}
