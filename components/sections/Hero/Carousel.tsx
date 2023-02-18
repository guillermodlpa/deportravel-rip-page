import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useEffect, useState, useMemo } from "react";
import TripCard from "./TripCard";
import getTrips from "./trips/list";

const positionOffset = 33;
const scaleOffset = 0.2;

export default function Carousel() {
  const { t } = useTranslation("carouselTrips");
  const trips = useMemo(() => getTrips(t), [t]);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((activeIndex) =>
        activeIndex >= trips.length - 1 ? 0 : activeIndex + 1
      );
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        flexGrow: 1,
        height: { xs: "20rem", sm: "80vh" },
        display: "flex",
        alignItems: "center",
        transform: { xs: "scale(0.5)", sm: "scale(0.75)" },
      }}
      role="presentation"
    >
      {trips.map((trip, index) => {
        const indexDiff = Math.abs(index - activeIndex);
        if (indexDiff > 2 && index !== 0) {
          return null;
        }
        return (
          <Box
            key={trip.title}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              transform: `
                translateX(${(index - activeIndex) * positionOffset}%)
                translateY(-50%)
                scale(${1 - indexDiff * scaleOffset})
            `,
              opacity: indexDiff === 0 ? 1 : indexDiff <= 1 ? 0.5 : 0,
              zIndex: trips.length - indexDiff,
              transition:
                "transform 0.5s ease-out, opacity 0.5s cubic-bezier(0,0.75,0.75,1)",
              userSelect: "none",
            }}
            onClick={() => {
              const isVisible = indexDiff <= 1;
              if (isVisible) {
                setActiveIndex(index);
              }
            }}
          >
            <TripCard {...trip} />
          </Box>
        );
      })}
    </Box>
  );
}
