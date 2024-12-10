"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import CategoryCards from "../CategoryCards";
import CheckoutButton from "../CheckoutButton";

const Subheader: React.FC = () => {
  return (
    <main>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          // borderBottom: "1px solid black",
          backgroundColor: "#FCF5F3",
          // position: "sticky",
          // top: 0,
          // zIndex: 999,
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
            sx={{ padding: "10px", fontWeight: "bold" }}
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
            <CategoryCards />
          </Box>
          <Button
            component={Link}
            href="/tutorial"
            aria-label="Go to tutorial page"
            color="inherit"
            sx={{ padding: "10px", fontWeight: "bold" }}
          >
            Tutorial
          </Button>
        </Box>
        <IconButton
          component={Link}
          href="favorite"
          aria-label="Go to favorite page"
          color="inherit"
          sx={{ marginRight: "-4rem" }}
        >
          <FavoriteIcon />
        </IconButton>
        <CheckoutButton />
      </Box>
    </main>
  );
};

export default Subheader;
