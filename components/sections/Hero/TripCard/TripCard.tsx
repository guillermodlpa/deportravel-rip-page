import { Box, Button, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

// For convenience: https://mui.com/material-ui/material-icons/?theme=Rounded
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

function InformationItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, pb: 1 }}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}

export default function TripCard({
  title,
  image,
  imageAlt,
  sport,
  location,
  dates,
  price,
}: {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  sport: string;
  location: string;
  dates: string;
  price: string;
}) {
  const { t } = useTranslation("tripCard");

  const [infoRequested, setInfoRequested] = useState(false);
  useEffect(() => {
    if (infoRequested) {
      const timeout = setTimeout(() => {
        setInfoRequested(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [infoRequested]);

  return (
    <Paper elevation={5}>
      <Box
        p={2}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        <Box sx={{ position: "relative" }} height={200} width="100%">
          <Image src={image} layout="fill" objectFit="cover" alt={imageAlt} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>

          <InformationItem
            icon={<DirectionsRunRoundedIcon fontSize="small" />}
            text={sport}
          />

          <InformationItem
            icon={<PublicRoundedIcon fontSize="small" />}
            text={location}
          />

          <InformationItem
            icon={<DateRangeRoundedIcon fontSize="small" />}
            text={dates}
          />

          <InformationItem
            icon={<SellRoundedIcon fontSize="small" />}
            text={price}
          />
        </Box>

        <Box>
          <Button
            variant="outlined"
            color={infoRequested ? "secondary" : "primary"}
            fullWidth
            onClick={() => setInfoRequested(true)}
          >
            {infoRequested ? t("buttonLabelClicked") : t("buttonLabel")}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
