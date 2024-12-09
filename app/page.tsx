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
import middleImage from "./assets/middleImage.webp";
import AnimationTextHeader from "./ui/AnimationTextHeader";
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
        <AnimationTextHeader />
      </Box>
      {/* produkt slider här */}
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
            alt="Middle Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
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
                        sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        {product.title}
                      </Typography>
                      <Typography
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
