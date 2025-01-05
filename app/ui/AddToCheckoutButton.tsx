"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton, Snackbar } from "@mui/material";
import { Product } from "@prisma/client";
import React, { useState } from "react";
import { useCart } from "../context/CheckoutContext";

interface AddToCheckoutButtonProps {
  product: Product;
}

// Knapp för att lägga till en produkt i kundvagnen och visa en snackbar
const AddToCheckoutButton: React.FC<AddToCheckoutButtonProps> = ({
  product,
}) => {
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddToCheckout = () => {
    console.log("Adding product to cart:", product);
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(productWithQuantity);
    setSnackbarMessage(`${product.title} has been added to your cart`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <IconButton
        aria-label="add to cart"
        onClick={(e) => {
          e.preventDefault();
          handleAddToCheckout();
        }}
        style={{
          zIndex: 1000,
          position: "relative",
        }}
      >
        <AddShoppingCartIcon style={{ color: "black" }} />{" "}
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
};

export default AddToCheckoutButton;
