import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CategoryCards from "../CategoryCards";
import CheckoutButton from "../CheckoutButton";

interface HeaderProps {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        paddingBottom: "3px",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Hamburger menu (visible only on mobile) */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo (centered on mobile, and positioned correctly on desktop) */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
              marginTop: { xs: "10px", sm: "2rem" },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              LUXE
            </Typography>
          </Box>

          {/* Cart Icon (visible only on mobile beside loggan) */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <CheckoutButton />
          </Box>
        </Box>
      </Toolbar>

      {/* Mobil meny */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        <Box
          sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
        >
          <Button
            component={Link}
            href="/tutorial"
            aria-label="View tutorial page"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Tutorial
          </Button>
          <CategoryCards />
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
