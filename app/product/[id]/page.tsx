import { Box, CardMedia, Grid, Typography } from "@mui/material";

export default async function Product() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, marginLeft: "8rem" }}>
            <CardMedia
              component="img"
              width="auto"
              height="200"
              image="https://images.unsplash.com/photo-1606876430311-6b09172238b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 1, padding: "80px 30px" }}>
            <Typography variant="h4" gutterBottom data-cy="product-title">
              Titel
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              incidunt repellat odio accusamus tempora sed delectus quas cumque
              labore earum doloribus molestiae quisquam non ea, accusantium
              veniam nesciunt possimus soluta.
            </Typography>
            <Typography variant="body2" gutterBottom>
              kr
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
