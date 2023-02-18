import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "./theme";

export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
