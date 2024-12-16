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
            aria-label="Go to homepage"
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
              aria-label="Company name luxe"
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

          {/* Varukorg ikon (synlig bara på mobil) */}
          <Box
            aria-label="Checkout icon button"
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
          <Button
            component={Link}
            href="/admin"
            aria-label="admin page"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Admin
          </Button>
          <CategoryCards />
          <Button
            component={Link}
            href="/tutorial"
            aria-label="View tutorial page"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Tutorial
          </Button>
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
