"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CheckoutContext";
import { CartItems } from "./components/CheckoutItems";
import TotalPrice from "./components/TotalPrice";

const Checkout = () => {
  const { cart, setConfirmedCart } = useCart();
  const router = useRouter();

  const handleConfirm = () => {
    setConfirmedCart(cart);
    router.push("/confirmation");
  };

  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{ fontFamily: "Roboto, sans-serif" }}
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "40px",
        }}
      >
        Checkout
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          {" "}
          <CartItems cart={cart} />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginTop: "20px",
          padding: { xs: "0 1rem", md: "0 2rem" },
        }}
      >
        <Grid item xs={6} sm={6} sx={{ textAlign: { xs: "left", md: "left" } }}>
          <Typography variant="h6">Total:</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            textAlign: { xs: "right", md: "right" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "18px", md: "20px" },
              marginRight: "1.2rem",
            }}
          >
            <TotalPrice cart={cart} />
          </Typography>
        </Grid>
      </Grid>

      {/* Knapp för att bekräfta köp */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", sm: "50%", md: "30%" },
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgrey",
            },
          }}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
