import { Box, Button } from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export default function CategoryCards() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Button
        component={Link}
        href="/categories/Lipstick"
        color="inherit"
        sx={{ padding: "10px", fontWeight: { md: "bold" } }}
      >
        Lipstick
      </Button>
      <Button
        component={Link}
        href="/categories/Eyeshadow"
        color="inherit"
        sx={{ padding: "10px", fontWeight: { md: "bold" } }}
      >
        Eyeshadow
      </Button>
      <Button
        component={Link}
        href="/categories/Foundation"
        color="inherit"
        sx={{ padding: "10px", fontWeight: { md: "bold" } }}
      >
        Foundation
      </Button>
      <Button
        component={Link}
        href="/categories/Eyeliner"
        color="inherit"
        sx={{ padding: "10px", fontWeight: { md: "bold" } }}
      >
        Eyeliner
      </Button>
    </Box>
  );
}
