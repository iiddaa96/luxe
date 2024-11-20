"use client";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

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
      component="header"
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "20px",
        paddingBottom: "10px",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Hamburger menu (visible only on mobile) */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
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
            flexGrow: { xs: "0.9", sm: "1" },
            textDecoration: "none",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "1rem",
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
        <Box sx={{ position: "absolute", right: "2rem", top: "2rem" }}>
          <AddShoppingCartOutlinedIcon />
        </Box>
      </Box>

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
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: "1200px",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
          }}
        >
          <Button
            component={Link}
            href="/admin"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Admin
          </Button>
          <Button
            component={Link}
            href="/about us"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            About us
          </Button>
          <Button
            component={Link}
            href="/favorite"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Favorite
          </Button>
          <Button
            component={Link}
            href="/contact"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Contact
          </Button>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
