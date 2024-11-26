"use client";
import db from "@/prisma/db";
import NavigateBeforeSharpIcon from "@mui/icons-material/NavigateBeforeSharp";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";

export default function CategorySlider() {
  const bestSellerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleBestSellerScroll = (scrollOffset: number) => {
    if (bestSellerRef.current) {
      bestSellerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const products = await db.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "1rem",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#000000",
          padding: "1rem",
          fontWeight: 700,
        }}
      >
        SHOP BEST SELLERS
      </Typography>

      <Box
        ref={bestSellerRef}
        sx={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "0 1rem",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{
              width: 280,
              flexShrink: 0,
              height: "auto",
              borderRadius: 0,
              border: "none",
              boxShadow: "none",
              overflow: "hidden",
              margin: 0,
              position: "relative",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <CardActionArea
              disableRipple
              sx={{
                "&:hover": {
                  background: "none !important",
                },
                "&:active": {
                  background: "none !important",
                },
                cursor: "default",
                backgroundColor: "#FAFAFB",
              }}
            >
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                passHref
                style={{
                  textDecoration: "none",
                }}
              >
                <CardMedia
                  component="img"
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  sx={{
                    height: "auto",
                    maxHeight: "250px",
                    width: "auto",
                    maxWidth: "80%",
                    margin: "0 auto",
                    objectFit: "contain",
                    marginY: "1rem",
                    display: "block",
                    transition: "transform 0.3s ease",
                    backgroundColor: "#FAFAFB",
                    ...(hoveredCard === product.id && {
                      transform: "scale(0.80)",
                    }),
                  }}
                />
              </Link>
              <CardContent
                sx={{
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease",
                  padding: "0.5rem",
                  ...(hoveredCard === product.id && {
                    transform: "translateY(-50px)",
                  }),
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "uppercase",
                    marginTop: "0.5rem",
                    marginBottom: 0,
                    underline: "none",
                  }}
                >
                  {product.title}
                </Typography>
                <Typography variant="body2">EUR {product.price}€</Typography>
              </CardContent>
            </CardActionArea>

            {/* Overlay for buttons */}
            <Box
              className="hover-overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#FAFAFB",
                color: "#fff",
                display: {
                  xs: "flex",
                  md: "none",
                },
                "@media (min-width: 900px) and (max-width: 1024px)": {
                  display: "flex", // Lägg till i tema
                },
                justifyContent: "space-around",
                alignItems: "center",
                padding: "0.2rem",
                zIndex: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 0,
                  boxShadow: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                ADD TO BAG
              </Button>
            </Box>

            <Box
              className="hover-overlay-desktop"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#FAFAFB",
                color: "#fff",
                display: {
                  xs: "none",
                  md: "flex",
                },
                "@media (min-width: 900px) and (max-width: 1024px)": {
                  display: "none", // Lägg till i tema
                },
                justifyContent: "space-around",
                alignItems: "center",
                padding: "0.2rem",
                transform: "translateY(100%)",
                transition: "transform 0.3s ease",
                ...(hoveredCard === product.id && {
                  transform: "translateY(0)",
                }),
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 0,
                  boxShadow: "none",
                  width: "48%",
                  boxSizing: "border-box",
                }}
              >
                ADD TO BAG
              </Button>
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                passHref
                style={{
                  textDecoration: "none",
                  width: "45%",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: 0,
                    boxShadow: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  VIEW MORE
                </Button>
              </Link>
            </Box>
          </Card>
        ))}
      </Box>

      <IconButton
        color="primary"
        onClick={() => handleBestSellerScroll(-300)}
        disableRipple
        disableFocusRipple
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "none",
          border: "none",
          boxShadow: "none",
          padding: 0,
          "&:hover": {
            background: "none",
          },
        }}
      >
        <NavigateBeforeSharpIcon
          sx={{ color: "#000000", background: "none" }}
        />
      </IconButton>

      <IconButton
        color="primary"
        onClick={() => handleBestSellerScroll(300)}
        disableRipple
        disableFocusRipple
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "none",
          border: "none",
          boxShadow: "none",
          padding: 0,
          "&:hover": {
            background: "none",
          },
        }}
      >
        <NavigateNextSharpIcon sx={{ color: "#000000", background: "none" }} />
      </IconButton>
    </Box>
  );
}
