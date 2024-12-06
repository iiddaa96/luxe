"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useCart } from "../context/CheckoutContext";
// import { BackButton } from "../ui/BackButton";
// import PaymentSection from "../ui/PaymentSection";
import { CartItems } from "./components/CheckoutItems";
import TotalPrice from "./components/TotalPrice";

const Checkout = () => {
  const { cart } = useCart();

  console.log("Current cart in checkout:", cart);

  return (
    <Container maxWidth="md" component="main">
      {/* <BackButton /> */}
      <Typography
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
      <Grid container sx={{ alignItems: "center", marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h6">Total:</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              fontWeight: "bold",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            {" "}
            <TotalPrice cart={cart} />
          </div>
        </Grid>
      </Grid>
      {/* <PaymentSection /> */}
    </Container>
  );
};

export default Checkout;
