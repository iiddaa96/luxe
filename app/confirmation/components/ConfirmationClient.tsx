"use client";
import { useCart } from "@/app/context/CheckoutContext";
import { CartItem } from "@/app/zod-validation/products";
import { useCallback, useEffect } from "react";

export const ConfirmationClient = ({
  initialCart,
}: {
  initialCart: CartItem[];
}) => {
  const { clearCart, setConfirmedCart } = useCart();
  const clearCartCallback = useCallback(() => {
    clearCart();
  }, [clearCart]);

  const setConfirmedCartCallback = useCallback(
    (items: CartItem[]) => {
      setConfirmedCart(items);
    },
    [setConfirmedCart]
  );
  useEffect(() => {
    if (initialCart.length > 0) {
      setConfirmedCartCallback(initialCart);
      clearCartCallback();
    }
  }, [initialCart, setConfirmedCartCallback, clearCartCallback]);

  return null;
};
