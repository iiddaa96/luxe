"use client";
import { Product } from "@prisma/client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartItem } from "../zod-validation/products";

export interface CartContextType {
  cart: CartItem[];
  confirmedCart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setConfirmedCart: (items: CartItem[]) => void;
}

const CART_LOCAL_STORAGE_KEY = "cart";

export const CartContext = createContext<CartContextType>({
  cart: [],
  confirmedCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  setConfirmedCart: () => {},
});

export const useCart = () => useContext(CartContext);
// Om jag ändrar till PropsWithChildren<React.ReactNode så fungerar inte min layout, men jag får ts fel på vercel här om jag inte ändrar
export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [confirmedCart, setConfirmedCart] = useState<CartItem[]>([]);

  // Funktion för att hantera inställning av bekräftade varor i varukorgen
  const handleSetConfirmedCart = (items: CartItem[]) => {
    setConfirmedCart(items);
  };

  // Effekt för att ladda varukorgen från lokal lagring när komponenten monteras
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  // Effekt för att spara varukorgen till lokal lagring när den uppdateras
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

  // Funktion för att lägga till en produkt i varukorgen
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      const updatedCart = [...prevCart];

      if (existingProductIndex >= 0) {
        const updatedItem = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        updatedCart[existingProductIndex] = updatedItem;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });
  };

  // Funktion för att ta bort en produkt från varukorgen
  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id?.toString() !== productId)
    );
  };

  // Funktion för att uppdatera kvantiteten av en produkt i varukorgen
  const updateQuantity = (productId: string, quantity: number) => {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id?.toString() === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  // Funktion för att rensa varukorgen
  const clearCart = () => {
    if (cart.length > 0) {
      localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
      setCart([]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setConfirmedCart: handleSetConfirmedCart,
        confirmedCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
