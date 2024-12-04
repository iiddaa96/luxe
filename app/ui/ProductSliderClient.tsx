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
        variant="h4"
        sx={{
          color: "#000000",
          padding: "1rem",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        SHOP BEST SELLERS
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
          <Card key={product.id} sx={{ width: 280, flexShrink: 0 }}>
            <CardActionArea>
              <Link href={`/product/${product.id}`} passHref>
                <CardMedia
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    height: 200,
                    width: "100%",
                    objectFit: "cover",
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
                <Typography variant="body2" color="text.secondary">
                  {product.price} Kr
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Navigation för att scrolla */}
      <IconButton
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
