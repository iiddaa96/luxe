import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CheckoutButton from "../CheckoutButton";

// Hanterar header-komponenten
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
        backgroundColor: "#FCF5F3",
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
          {/* Hambugare meny (synlig bara på mobil) */}
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

          {/* Loggan (centrerad på mobil) */}
          <Box
            component={Link}
            href="/"
            aria-label="Navigate to homepage"
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
              aria-label="Header Luxe"
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              LUXE
            </Typography>
          </Box>

          {/* Varukorg ikon (synlig bara på mobil) */}
          <Box
            aria-label="Navigate to checkout"
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
        aria-labelledby="menu-appbar"
      >
        <Box
          sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
        >
          <MenuItem
            component={Link}
            href="/admin"
            aria-label="Navigate to admin page"
            color="inherit"
            sx={{ fontWeight: "bold" }}
            onClick={handleCloseNavMenu}
          >
            Admin
          </MenuItem>
          <MenuItem
            component={Link}
            href="/categories/Lipstick"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Lipstick
          </MenuItem>
          <MenuItem
            component={Link}
            href="/categories/Eyeshadow"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Eyeshadow
          </MenuItem>
          <MenuItem
            component={Link}
            href="/categories/Foundation"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Foundation
          </MenuItem>
          <MenuItem
            component={Link}
            href="/categories/Eyeliner"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Eyeliner
          </MenuItem>
          <MenuItem
            component={Link}
            href="/tutorial"
            aria-label="Navigate to tutorial page"
            color="inherit"
            sx={{ fontWeight: "bold" }}
            onClick={handleCloseNavMenu}
          >
            Tutorial
          </MenuItem>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
