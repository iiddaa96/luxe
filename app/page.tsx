import db from "@/prisma/db";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import middleImage from "./assets/middleImage2.png";
import AnimationBanner from "./ui/AnimationBanner";
import ProductSlider from "./ui/Slider/ProductSlider";

export default async function Home() {
  const products = await db.product.findMany({
    orderBy: { id: "desc" },
  });

  const cardStyle = { width: 280, height: 310 };

  return (
    <main>
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          margin: "20px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <AnimationBanner />
      </Box>
      {/* Produkt slider här */}
      <ProductSlider />
      <Box
        sx={{
          width: "95%",
          justifyContent: "center",
          position: "relative",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "99%",
            height: "65vh",
            overflow: "hidden",
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <Image
            src={middleImage}
            alt="Middle image of products"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 68,
              left: "50%",
              transform: "translateX(-50%)",
              bottom: 68,
              backgroundColor: "#792F41",
              width: "28%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
              color: "white",
              "@media (max-width: 400px)": {
                width: "100%",
                top: "20%",
                padding: "8px",
              },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                aria-label="The glow up formula"
                sx={{
                  fontWeight: 700,
                  marginBottom: "1rem",
                  "@media (max-width: 400px)": { fontSize: "3rem" },
                }}
              >
                THE GLOW UP FORMULA
              </Typography>
              <Typography
                aria-label="Discover our handpicked beauty selection"
                variant="body1"
                sx={{
                  fontWeight: 400,
                }}
              >
                DISCOVER OUR HANDPICKED BEAUTY SELECTION
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
      {/* Mappar ut produkt */}
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {products.map((product) => (
            <Grid sx={{ marginBottom: "24px" }} item key={product.id}>
              <Link href={`/product/${product.id}`} passHref>
                <Card sx={{ ...cardStyle, margin: 1 }}>
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 200, objectFit: "cover" }}
                      component="img"
                      image={product.image}
                      alt={product.alt}
                      aria-label={product.alt}
                    />
                    <CardContent>
                      <Typography
                        aria-label="Product title"
                        sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        aria-label="Product price"
                        sx={{ fontSize: "1rem", fontWeight: "medium" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {product.price} Kr
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
