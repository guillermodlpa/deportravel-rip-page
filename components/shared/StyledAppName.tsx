import { Typography } from "@mui/material";

export default function StyledAppName() {
  return (
    <Typography variant="inherit" fontWeight="bold" component="span">
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
