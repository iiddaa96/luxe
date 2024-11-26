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
import CategoryCards from "./CategoryCards";

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
        marginTop: "20px",
        paddingBottom: "10px",
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
          {/* <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              component={Link}
              href="/checkout"
              size="large"
              aria-label="show cart items"
              color="inherit"
              sx={{ p: 0 }}
            >
              <Badge
                sx={{ marginRight: "5px" }}
                // badgeContent={totalQuantity}
                color="secondary"
              >
                <AddShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box> */}
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
            href="/favorite"
            color="inherit"
            sx={{ padding: "10px" }}
            onClick={handleCloseNavMenu}
          >
            Favorite
          </Button>
          <Button
            component={Link}
            href="/tutorial"
            color="inherit"
            sx={{ padding: "10px" }}
          >
            Tutorial
          </Button>
          <Button
            component={Link}
            href="/about us"
            color="inherit"
            sx={{ padding: "10px" }}
            onClick={handleCloseNavMenu}
          >
            About us
          </Button>
          <Button
            component={Link}
            href="/contact"
            color="inherit"
            sx={{ padding: "10px" }}
            onClick={handleCloseNavMenu}
          >
            Contact
          </Button>
          <CategoryCards />
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Header;
