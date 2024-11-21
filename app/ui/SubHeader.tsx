"use client";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Badge, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

const Subheader: React.FC = () => {
  return (
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
      <IconButton
        component={Link}
        href="/checkout"
        size="large"
        aria-label="show cart items"
        color="inherit"
        sx={{ p: 0 }}
      >
        <Badge
          //badgeContent={totalQuantity}
          color="secondary"
          data-cy="cart-items-count-badge"
        >
          <AddShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default Subheader;
