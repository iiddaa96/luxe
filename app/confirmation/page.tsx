"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useCart } from "../context/CheckoutContext";

const Confirmation = () => {
  const { confirmedCart } = useCart();

  const totalPrice = confirmedCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginTop: "20px",
          padding: "20px",
          minHeight: "300px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Confirmation Order
        </Typography>
        <Typography>
          Thank you for your purchase! We hope you are really happy with your
          new products.
        </Typography>
        <Typography>
          Here&apos;s your digital receipt from LUXE. Explore more exciting
          products on our website Luxe.se
        </Typography>
        <Typography>
          Hope to see you again soon! Greetings from us at LUXE.
        </Typography>

        <Grid container spacing={2}>
          {confirmedCart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
              <Typography>Price: {item.price} kr</Typography>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Total: {totalPrice} kr
        </Typography>
      </Box>
    </Container>
  );
};

export default Confirmation;
