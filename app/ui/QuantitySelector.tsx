import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";

// Props för att definiera produkt-id och det initiala antalet
interface QuantitySelectorProps {
  initialQuantity: number;
  productId: number;
  onUpdateQuantity: (quantity: number) => void;
}

const QuantitySelector = ({
  initialQuantity,
  productId,
  onUpdateQuantity,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleIncrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onUpdateQuantity(newQuantity); // Anropa callback för att uppdatera i state
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        onUpdateQuantity(newQuantity); // Anropa callback för att uppdatera i state
        return newQuantity;
      });
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handleDecrement} color="inherit">
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6">{quantity}</Typography>
      <IconButton onClick={handleIncrement} color="inherit">
        <AddIcon />
      </IconButton>
      <Button
        onClick={() => onUpdateQuantity(quantity)}
        variant="contained"
        sx={{ marginLeft: 2, color: "white", backgroundColor: "black" }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default QuantitySelector;
