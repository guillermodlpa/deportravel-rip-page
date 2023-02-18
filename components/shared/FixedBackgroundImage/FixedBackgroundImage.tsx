import { Box } from "@mui/material";
import Image from "next/image";
import backgroundImage from "./62821f05bb31bdb20d0191c4_david-marcu-VfUN94cUy4o-unsplash.jpeg";

const COVER_BLOCK_ALT = "Ciclista y paisaje";

export default function FixedBackgroundImage() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Image
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="60% center"
        quality={100}
        alt={COVER_BLOCK_ALT}
        priority
        placeholder="blur"
      />
    </Box>
  );
}
