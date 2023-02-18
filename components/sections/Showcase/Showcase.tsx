import {
  Box,
  Container,
  Link,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NextImage from "next/image";
import Section from "../../shared/Section";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import HomepageDesktopScreenshot from "./assets/homepage-desktop-screenshot.png";
import HomepageMobileScreenshot from "./assets/homepage-mobile-screenshot.png";
import TrippageMobileScreenshot from "./assets/trippage-mobile-screenshot.png";
import InstagramPosts from "./assets/instagram-posts.png";
import MiroDesigns from "./assets/miro-designs.png";
import MiroUserInterviews from "./assets/miro-user-interviews.png";
import MiroCollaboration from "./assets/miro-collaboration.png";

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

const slides = [
  {
    id: "HomepageDesktopScreenshot",
    caption: "depor.travel homepage",
    image: HomepageDesktopScreenshot,
  },
  {
    id: "HomepageMobileScreenshot",
    caption: "depor.travel homepage",
    image: HomepageMobileScreenshot,
  },
  {
    id: "TrippageMobileScreenshot",
    caption: "depor.travel trip page",
    image: TrippageMobileScreenshot,
  },
  {
    id: "InstagramPosts",
    caption: "Instagram posts",
    image: InstagramPosts,
  },
  {
    id: "MiroDesigns",
    caption: "Designs (collaboration with Miro)",
    image: MiroDesigns,
  },
  {
    id: "MiroUserInterviews",
    caption: "User interviews",
    image: MiroUserInterviews,
  },
  {
    id: "MiroCollaboration",
    caption: "Miro board for collaboration",
    image: MiroCollaboration,
  },
];

function SlideContent({ slide }: { slide: typeof slides[0] }) {
  return (
    <Box
      component="figure"
      margin={0}
      sx={{ position: "relative" }}
      width={"100%"}
      height="calc(100% - 3rem)"
      display="flex"
      flexDirection={"column"}
    >
      <Box sx={{ position: "relative" }} flexGrow={1}>
        <NextImage src={slide.image} objectFit="contain" />
      </Box>
      <Typography
        variant="body2"
        textAlign="center"
        component="figcaption"
        marginTop={2}
        flexShrink={0}
      >
        {slide.caption}
      </Typography>
    </Box>
  );
}

export default function Showcase() {
  const { t } = useTranslation("showcase");

  const smallViewport = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const theme = useTheme();

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            width: "100%",
          }}
        >
          <Typography variant="h4" component="h3">
            Show case
          </Typography>

          {/* dirty override of the Swiper theme color */}
          <style>
            {`:root {
              --swiper-theme-color: ${theme.palette.primary.main};
            }`}
          </style>

          <Swiper
            slidesPerView={smallViewport ? 1 : 2.5}
            spaceBetween={20}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ width: "100%" }}
            autoplay={{
              delay: 3000,
            }}
            autoHeight
            modules={[Autoplay, Pagination, Navigation]}
            speed={1000}
            freeMode
            pagination={{ enabled: true, type: "progressbar" }}
            navigation
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <SlideContent slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Box
            width="100%"
            display="flex"
            alignItems={"center"}
            flexDirection="column"
          >
            <Typography
              variant="h4"
              component="h3"
              marginBottom={4}
              marginTop={6}
            >
              Demo
            </Typography>

            <Box maxWidth={{ base: "90%", md: "80%" }} mx="auto">
              <video
                style={{ width: "100%" }}
                controls
                poster="https://res.cloudinary.com/dwt7cth1hv/image/upload/v1676731307/deportravel-rip-page/homepage-desktop-screenshot_gwvhy1.png"
              >
                <source
                  src="https://res.cloudinary.com/dwt7cth1hv/video/upload/v1676729266/deportravel-rip-page/deportravel-website-demo_bzmlfu.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://res.cloudinary.com/dwt7cth1hv/video/upload/v1676729491/deportravel-rip-page/deportravel-website-demo_pezwrk.webm"
                  type="video/webm"
                />
              </video>
            </Box>

            <Box
              width="100%"
              display="flex"
              alignItems={"center"}
              flexDirection="column"
              marginTop={8}
            >
              <Typography
                variant="h4"
                component="h3"
                marginBottom={4}
                marginTop={6}
              >
                Instagram Reel
              </Typography>

              <Box maxWidth={{ base: "80%", md: "50%" }} mx="auto">
                <video style={{ width: "100%" }} controls>
                  <source
                    src="https://res.cloudinary.com/dwt7cth1hv/video/upload/v1676729965/deportravel-rip-page/deportravel-instagram-campaign_fosegu.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://res.cloudinary.com/dwt7cth1hv/video/upload/v1676730068/deportravel-rip-page/deportravel-instagram-campaign_s6ikf4.webm"
                    type="video/webm"
                  />
                </video>
              </Box>
            </Box>

            <Box marginTop={8} maxWidth={{ base: "80%", md: "50%" }}>
              <Typography textAlign="center">
                {t("learnMoreTechnicalDetails")}{" "}
                <Link
                  href="https://guillermodlpa.com/portfolio/depor-travel"
                  rel="noopener"
                >
                  https://guillermodlpa.com/portfolio/depor-travel
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <ColorMask />
    </Section>
  );
}
