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
        <h1>Kategori hittades inte</h1>
      </div>
    );
  }

  return (
    <main>
      <Box>
        <Grid container spacing={4}>
          {category.products.map((product) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
                <Link href={`/product/${product.id}`} passHref>
                  <Card
                    sx={{
                      maxWidth: 345,
                      m: "auto",
                      boxShadow: 3,
                      position: "relative",
                      marginBottom: "24px",
                      marginTop: "24px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width="auto"
                      height="280"
                      image={product.image}
                      alt={product.title}
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
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.8rem" }}
                          >
                            {`${product.price}`}kr
                          </Typography>
                        </Box>
                        {/* <AddToCartButton product={product} /> */}
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
