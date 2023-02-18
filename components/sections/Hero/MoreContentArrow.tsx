import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0% {
    opacity: 0.7;
    transform: translateY(0%);
  }
  50% {
    opacity: 1;
    transform: translateY(50%);
  }
  100% {
    opacity: 0.7;
    transform: translateY(0%);
  }
`;

export default function MoreContentArrow() {
  return (
    <Box
      sx={{ animation: `${bounce} 2s infinite ease`, color: "secondary.main" }}
      role="presentation"
      mt={[4, undefined, 0]}
    >
      <KeyboardArrowDownIcon fontSize="medium" />
    </Box>
  );
}
