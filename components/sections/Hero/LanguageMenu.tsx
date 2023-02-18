import { Button, Link, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NextLink from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function LanguageMenu() {
  const { t } = useTranslation("common");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          position: "absolute",
          top: "1rem",
          right: { xs: "1rem", md: "2rem" },
        }}
      >
        {t("languageMenuButton")}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
          <NextLink href="/" locale="en" passHref>
            <Link underline="none" sx={{ py: 1, px: 3 }}>
              English
            </Link>
          </NextLink>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
          <NextLink href="/" locale="es">
            <Link underline="none" sx={{ py: 1, px: 3 }}>
              Español
            </Link>
          </NextLink>
        </MenuItem>
      </Menu>
    </>
  );
}
