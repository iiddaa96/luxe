import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function Tutorial() {
  const cardStyle = {
    width: 300,
    margin: "20px",
  };

  return (
    <main style={{ backgroundColor: "rgba(253, 226, 226, 0.73)" }}>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: "2.5rem" }}
          variant="h1"
          component="h1"
          gutterBottom
        >
          Your ultimate makeup guide
        </Typography>
        <Typography variant="body1" component="p">
          Makeup tips and tutorials tailored just for you! Discover everything
          you need for flawless eyes, lips, and more.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://caiacosmetics.se/img/dokument/bibliotek/Image/CAIA_HP_MENY_DESKTOP_CATEGORY_BRUSHES_AND_TOOLS_OCT_24.jpg?w=1000"
                alt="Girl with makeup brush"
                aria-label="Girl with makeup brush"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  How to bake your face
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1551392505-f4056032826e?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Girl with eyeshadow"
                aria-label="Girl with eyeshadow"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Smoking eyes
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={cardStyle}>
              <CardMedia
                component="img"
                height="200"
                image="https://caiacosmetics.se/img/925/1078//bilder/artiklar/zoom/CAI457_2.jpg?m=1714638774?quality=100"
                alt="Lips with lipstick"
                aria-label="Lips with lipstick"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Perfect lips
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default Tutorial;
