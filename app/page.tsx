import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MiddleImage from "./assets/color.jpg";

export default async function Home() {
  return (
    <main>
      <Box
        sx={{
          width: "95%",
          height: "200px",
          justifyContent: "center",
          position: "relative",
          paddingTop: "30%",
          margin: "32px auto",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Image
          src={MiddleImage}
          alt="Stor Bild"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "24px",
        }}
      >
        <Grid container spacing={4}>
          <Card
            sx={{
              maxWidth: 345,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              m: "auto",
              boxShadow: 3,
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              width="auto"
              height="200"
              image="https://images.unsplash.com/photo-1606876430311-6b09172238b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          </Card>
        </Grid>
      </Box>
    </main>
  );
}
