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
import MiddleImage from "./assets/smink4.jpg";
import ProductSlider from "./ui/CategorySlider";

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
        <div
          style={{
            width: "99%",
            height: "60vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={MiddleImage}
            alt="Stor Bild"
            layout="fill"
            objectFit="cover"
          />
          <Typography
            variant="h3"
            component="div"
            sx={{
              position: "absolute",
              color: "white",
              textShadow: "1px 1px 2px #000000",
              textAlign: "left",
              width: "auto",
              top: "55%",
              left: "60px",
              transform: "translateY(-50%)",
              fontWeight: "bold",
            }}
          >
            L U X E
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              position: "absolute",
              color: "white",
              fontStyle: "italic",
              textShadow: "1px 1px 2px #000000",
              textAlign: "right",
              width: "auto",
              top: "53%",
              right: "50px",
              transform: "translateY(-50%)",
              fontWeight: "bold",
            }}
          >
            Where makeup lasts all day
          </Typography>
        </div>
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
            height: "60vh",
            overflow: "hidden",
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <CardMedia
            component="img"
            image="https://caiacosmetics.se/dokument/bibliotek/Image/CAIA_HP_MID_BANNER_DESKTOP_RADIANT_TOUCH_LAUNCH_GIF_OCT_24.webp"
            alt="LastImage"
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
                      alt={product.title}
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
                        {product.price} EUR €
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
