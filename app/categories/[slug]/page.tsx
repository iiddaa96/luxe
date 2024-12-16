import AddToCheckoutButton from "@/app/ui/AddToCheckoutButton";
import db from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  const category = await db.category.findFirst({
    where: { name: slug },
    include: {
      products: {
        where: {
          isArchived: false,
        },
      },
    },
  });

  if (!category) {
    return (
      <div>
        <Typography variant="h6" color="text.secondary" align="center">
          Categories not found
        </Typography>
      </div>
    );
  }

  return (
    <main>
      <Box>
        <Grid container spacing={2}>
          {category.products.map((product) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
                <Link
                  href={`/product/${product.id}`}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#FCF5F3",
                      width: 300,
                      height: 400,
                      m: "auto",
                      boxShadow: 3,
                      position: "relative",
                      marginTop: "24px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "translateY(-4px)",
                        transition: "transform 0.3s, box-shadow 0.3s",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        width: "100%",
                        height: 240,
                        objectFit: "contain",
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h1"
                            sx={{
                              fontSize: "1.25rem",
                              marginBottom: "8px",
                              color: "#000000",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            {product.title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              columnGap: 22,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "0.95rem",
                                fontWeight: "bold",
                                color: "#666",
                              }}
                            >
                              {`${product.price} kr`}
                            </Typography>
                            <AddToCheckoutButton product={product} />
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </main>
  );
}
