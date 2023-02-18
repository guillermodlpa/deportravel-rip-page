import { Typography, Link } from "@mui/material";
import Section from "../../shared/Section";
import StyledAppName from "../../shared/StyledAppName";
import InstagramLogo from "./InstagramLogo";

const INSTAGRAM_HREF = "https://www.instagram.com/depor.travel/";

export default function AppFooter() {
  return (
    <Section component="footer">
      <Link
        href={INSTAGRAM_HREF}
        rel="noopener"
        target="_blank"
        color="primary"
        sx={{
          my: 2,
          flexShrink: 0,
          marginTop: 1,
          transition: "opacity 0.25s ease",
          opacity: 1,
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        <InstagramLogo />
      </Link>

      <Typography variant="body2">
        © 2022 <StyledAppName />
      </Typography>
    </Section>
  );
}
