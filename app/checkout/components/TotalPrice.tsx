import { CartItem } from "@/app/zod-validation/products";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export interface ItemsProps {
  cart: CartItem[];
}

export default function TotalPrice({ cart }: ItemsProps) {
  const [totalPrice, setTotalPrice] = useState(0);

  // Räkna ut totalpriset för varukorgen varje gång varukorgen uppdateras
  useEffect(() => {
    const calculateTotalPrice = () => {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  return (
    <Box>
      <p>{totalPrice} kr</p>
    </Box>
  );
}
