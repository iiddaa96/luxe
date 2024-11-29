"use client";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import CategoryCards from "./CategoryCards";

const Subheader: React.FC = () => {
  return (
    <main>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid black",
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
            color="inherit"
            sx={{ padding: "10px", fontWeight: "bold" }}
          >
            Tutorial
          </Button>
        </Box>
        <IconButton
          component={Link}
          href="favorite"
          aria-label="favorite icon"
          color="inherit"
          sx={{ marginRight: "-4rem" }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="/checkout"
          size="large"
          aria-label="show cart items"
          color="inherit"
          sx={{ p: 0 }}
        >
          <Badge
            sx={{ marginRight: "-10rem" }}
            //badgeContent={totalQuantity}
            color="secondary"
          >
            <AddShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Box>
    </main>
  );
};

export default Subheader;
