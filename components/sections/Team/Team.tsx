import {
  Avatar,
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import antonioTeamMemberImage from "./antonio.jpeg";
import allieTeamMemberImage from "./allie.jpeg";
import guillermoTeamMemberImage from "./guillermo.jpg";
import LinkedInLogo from "./LinkedInLogo";
import { useTranslation } from "next-i18next";

export default function Team() {
  const { t } = useTranslation("team");

  const teamMembers = [
    {
      name: "Antonio Sanchis",
      role: t("antonioTitle"),
      image: antonioTeamMemberImage,
      linkedInProfileUrl: "https://www.linkedin.com/in/antoniogonzalezsanchis/",
      websiteUrl: "https://productcontractor.com/",
    },
    {
      name: "Allie DeCastro",
      role: t("allieTitle"),
      image: allieTeamMemberImage,
      linkedInProfileUrl:
        "https://www.linkedin.com/in/allie-decastro-b26a9452/",
      websiteUrl: undefined,
    },
    {
      name: "Guillermo de la Puente",
      role: t("guillermoTitle"),
      image: guillermoTeamMemberImage,
      linkedInProfileUrl: "https://www.linkedin.com/in/guillermodlpa/",
      websiteUrl: "https://guillermodlpa.com",
    },
  ];

  return (
    <Section>
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4, sm: 8 },
          pb: { xs: 6, sm: 12 },
          px: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            width: "100%",
          }}
        >
          <Typography variant="h5" component="p">
            {t("headline")}
          </Typography>

          <List
            sx={{
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
              gridTemplateRows: ["1fr 1fr 1fr", "1fr"],
              gap: [4, null],
            }}
          >
            {teamMembers.map((teamMember) => (
              <ListItem
                key={teamMember.name}
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ width: 96, height: 96 }}>
                    <Image
                      src={teamMember.image}
                      alt={`Avatar of ${teamMember.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Avatar>
                </ListItemAvatar>

                <Box
                  mr={{
                    xs: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <ListItemText
                    sx={{ whiteSpace: "nowrap" }}
                    primary={teamMember.name}
                    secondary={teamMember.role}
                    primaryTypographyProps={{
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                    secondaryTypographyProps={{ textAlign: "center" }}
                  />
                  {teamMember.websiteUrl && (
                    <Link
                      href={teamMember.websiteUrl}
                      rel="noopener"
                      target="_blank"
                    >
                      {teamMember.websiteUrl}
                    </Link>
                  )}
                  <Link
                    href={teamMember.linkedInProfileUrl}
                    color="secondary"
                    rel="noopener"
                    target="_blank"
                    sx={{
                      flexShrink: 0,
                      marginTop: 1,
                      transition: "opacity 0.25s ease",
                      opacity: 1,
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <LinkedInLogo />
                  </Link>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Section>
  );
}
