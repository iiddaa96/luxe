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
    <main style={{ backgroundColor: "rgba(255, 215, 215, 0.73)" }}>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Typography variant="h3" component="h3" gutterBottom>
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
                alt="Placeholder Image 1"
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
                image="https://bethbenderbeauty.com/cdn/shop/articles/38890936_s_923a7fa5-65d1-4c3d-b960-52cf377c2a90.jpg?v=1646253403"
                alt="Placeholder Image 2"
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
                alt="Placeholder Image 3"
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