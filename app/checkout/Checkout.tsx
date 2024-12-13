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

      <Grid container spacing={3}>
        <CartItems cart={cart} />
      </Grid>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginLeft: "1.5rem" }}>
            <Typography variant="h6">Total:</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              fontWeight: "bold",
              display: "inline-block",
              verticalAlign: "middle",
              marginLeft: "20.5rem",
            }}
          >
            {" "}
            <TotalPrice cart={cart} />
          </Box>
        </Grid>
      </Grid>
      {/* <Confirm knapp, renderar till confirm sidan /> */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            width: "30%",
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
