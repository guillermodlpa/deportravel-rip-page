import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Typography
      variant="h1"
      gutterBottom
      fontSize={{ xs: 45, sm: 60 }}
      fontWeight="bold"
    >
      depor
      <Typography
        component="span"
        color="primary.main"
        variant="inherit"
        fontWeight="bold"
      >
        {`.`}
      </Typography>
      travel
    </Typography>
  );
}
