"use client";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";

// Design för admin sidan
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "black",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    maxWidth: 300,
    margin: "auto",
  },
}));

export interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <Container fixed>
      <Typography
        variant="h1"
        aria-label="Admin title"
        sx={{
          marginTop: "-3rem",
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        ADMIN
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {products.map((product: Product, index: number) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard sx={{ backgroundColor: "#FCF5F3" }}>
                  <CardActionArea>
                    <CardMedia
                      aria-label={product.alt}
                      component="img"
                      sx={{
                        height: { xs: 200, sm: 300 },
                      }}
                      width="100%"
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent>
                      <Typography
                        aria-label={product.title}
                        gutterBottom
                        variant="h6"
                        sx={{
                          color: "primary.main",
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        aria-label="Product price"
                        gutterBottom
                        variant="h6"
                        sx={{
                          color: "secondary.main",
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                      >
                        {`${product.price.toString()}Kr`}
                      </Typography>
                      <Box
                        aria-label="Link button to edit product"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          aria-label="Navigate to edit form"
                          href={`/admin/product/${product.id}`}
                          passHref
                        >
                          <EditNoteIcon fontSize="large" />
                        </Link>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
