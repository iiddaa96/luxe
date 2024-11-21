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
import MiddleImage from "./assets/smink4.jpg";

export default async function Home() {
  const cardStyle = { width: 280, height: 310 }; // Fasta dimensioner för kort
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

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "24px",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid sx={{ marginBottom: "24px" }} item>
            <Card sx={{ ...cardStyle, margin: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1609126785261-f3d484e75a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Titel
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem" }}
                  >
                    kr
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
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
          }}
        >
          <CardMedia
            component="img"
            image="https://caiacosmetics.se/dokument/bibliotek/Image/CAIA_HP_MID_BANNER_DESKTOP_RADIANT_TOUCH_LAUNCH_GIF_OCT_24.webp"
            alt="LastImage"
          />
        </div>
      </Box>
    </main>
  );
}
