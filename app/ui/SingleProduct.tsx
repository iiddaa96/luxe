"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import QuantitySelector from "./QuantitySelector";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  const handleUpdateQuantity = (quantity: number) => {
    console.log(`Product ${product.id} quantity updated to: ${quantity}`);
    // Här kan du lägga till logik för att lägga till produkten i kundvagnen
  };
  return (
    <main>
      <Grid container spacing={2}>
        <Grid
          item
          xs={10}
          sm={6}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "5.3rem",
              marginBottom: { xs: "-4rem", sm: "-4rem", md: "4rem" },
              marginTop: "10px",
            }}
          >
            <div key={product.id}>
              <CardMedia
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: {
                    xs: "auto",
                    sm: "300px",
                    md: "400px",
                    lg: "500px",
                    xl: "600px",
                  },
                  objectFit: "contain",
                }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "70px 10px" }}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.content}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {product.price} kr
            </Typography>
            <FavoriteIcon />
            <QuantitySelector
              initialQuantity={1}
              productId={product.id}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
