"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import CheckoutButton from "../CheckoutButton";

const Subheader: React.FC = () => {
  return (
    <main>
      {/*  Synlig på desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#FCF5F3",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            href="/admin"
            aria-label="Go to admin page"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Admin
          </Button>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Button
              component={Link}
              href="/categories/Lipstick"
              color="inherit"
              sx={{ padding: "14px", fontWeight: "bold" }}
            >
              Lipstick
            </Button>
            <Button
              component={Link}
              href="/categories/Eyeshadow"
              color="inherit"
              sx={{ padding: "14px", fontWeight: "bold" }}
            >
              Eyeshadow
            </Button>
            <Button
              component={Link}
              href="/categories/Foundation"
              color="inherit"
              sx={{ padding: "14px", fontWeight: "bold" }}
            >
              Foundation
            </Button>
            <Button
              component={Link}
              href="/categories/Eyeliner"
              color="inherit"
              sx={{ padding: "14px", fontWeight: "bold" }}
            >
              Eyeliner
            </Button>
          </Box>
          <Button
            component={Link}
            href="/tutorial"
            aria-label="Go to tutorial page"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Tutorial
          </Button>
        </Box>
        <IconButton
          component={Link}
          href="favorite"
          aria-label="Go to favorite page"
          color="inherit"
          sx={{ marginRight: "-4rem", fontWeight: "bold" }}
        >
          <FavoriteIcon />
        </IconButton>
        <CheckoutButton />
      </Box>
    </main>
  );
};

export default Subheader;
