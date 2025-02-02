"use client";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRef } from "react";

interface ProductSliderClientProps {
  products: {
    id: number;
    title: string;
    image: string;
    alt: string;
    price: number;
    content: string;
  }[];
}

export default function ProductSliderClient({
  products,
}: ProductSliderClientProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Hanterar scrollning av produkter
  const handleScroll = (direction: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "1rem",
        position: "relative",
        marginBottom: "3rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#000000",
          padding: "1rem",
          fontWeight: 700,
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        DISCOVER THE LATEST EYESHADOWS
      </Typography>

      <Box
        ref={containerRef}
        id="product-slider"
        sx={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          padding: "0 1rem",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{ width: 280, flexShrink: 0, backgroundColor: "#FCF5F3" }}
          >
            <CardActionArea>
              <Link href={`/product/${product.id}`} passHref>
                <CardMedia
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: 240,
                    objectFit: "contain",
                  }}
                />
              </Link>
              <CardContent
                sx={{ backgroundColor: "transparent", textAlign: "center" }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#666",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {product.price} Kr
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Navigation för att scrolla */}
      <IconButton
        aria-label="Scroll left"
        onClick={() => handleScroll(-200)}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <NavigateBeforeSharpIcon sx={{ color: "#000000" }} />
      </IconButton>

      <IconButton
        aria-label="Scroll right"
        onClick={() => handleScroll(200)}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <NavigateNextSharpIcon sx={{ color: "#000000" }} />
      </IconButton>
    </Box>
  );
}
