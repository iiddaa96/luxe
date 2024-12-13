"use client";
import { useCart } from "@/app/context/CheckoutContext";
import QuantityButton from "@/app/ui/QuantitySelector";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { ConfirmDeleteToast } from "./DeleteToast";
import { ItemsProps } from "./TotalPrice";

export const CartItems = ({ cart }: ItemsProps) => {
  console.log("Current cart in checkout:", cart);
  const { removeFromCart } = useCart();
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string>("");

  const handleDelete = (itemId: string) => {
    setShowDeleteToast(true);
    setSelectedItemId(itemId);
  };

  const handleConfirmDelete = () => {
    removeFromCart(selectedItemId);
    setShowDeleteToast(false);
  };

  return (
    <Container>
      {cart.map((item) => (
        <Grid
          item
          xs={12}
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            position: "relative",
            gap: { xs: 1, sm: 2 },
          }}
        >
          {item.image && (
            <Box
              sx={{
                width: { xs: "100%", sm: "15%" },
                marginRight: { xs: "0", sm: "2rem" },
                // display: "flex",
                // justifyContent: "center",
              }}
            >
              <Image
                src={item.image}
                alt="Produktbild"
                style={{ borderRadius: "8px" }}
                width={100}
                height={100}
              />
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: { xs: "100%", sm: "70%" },
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                marginBottom: "6px",
                fontWeight: "bold",
                wordBreak: "break-word",
                whiteSpace: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="h6"
            >
              {item.title}
            </Typography>

            <QuantityButton
              showTotalPrice
              productId={item.id!.toString()}
              initialQuantity={item.quantity}
            />
          </Box>

          {/* Delete Button Position */}
          <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
            <IconButton
              color="inherit"
              aria-label="delete"
              onClick={() => handleDelete(item.id?.toString() || "")}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Grid>
      ))}
      {showDeleteToast && (
        <ConfirmDeleteToast
          selectedItemId={selectedItemId}
          removeFromCart={handleConfirmDelete}
          setShowDeleteToast={setShowDeleteToast}
        />
      )}
    </Container>
  );
};
