import { Container } from "@mui/material";
import { ElementType, ReactNode } from "react";

export default function Section({
  almostFullHeight,
  component = "div",
  backgroundColor = "background.default",
  children,
}: {
  almostFullHeight?: boolean;
  component?: ElementType;
  children: ReactNode;
  backgroundColor?: string;
}) {
  return (
    <Container
      sx={{
        position: "relative",
        py: 6,
        px: 3,
        m: 0,
        minHeight: almostFullHeight ? "90vh" : undefined,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        zIndex: 1,
        overflow: "hidden",
      }}
      maxWidth={false}
      component={component}
    >
      {children}
    </Container>
  );
}
