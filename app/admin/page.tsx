"use client";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField } from "@mui/material";

export default function Admin() {
  return (
    <Box
      component="form"
      //   onSubmit={form.handleSubmit(save)}
      sx={{
        borderRadius: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <TextField
        fullWidth
        label="Image URL"
        // value={imageUrl}
        // onChange={(e) => setImageUrl(e.target.value)}
        id="image-url"
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        label="Title"
        // helperText={form.formState.errors.title?.message}
        // error={Boolean(form.formState.errors.title)}
        id="demo-helper-text-aligned-no-helper"
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        label="Price"
        // helperText={form.formState.errors.price?.message}
        // error={Boolean(form.formState.errors.price)}
        id="demo-helper-text-aligned-no-helper"
      />

      <TextField
        id="outlined-multiline-static"
        label="Content"
        // helperText={form.formState.errors.description?.message}
        // error={Boolean(form.formState.errors.description)}
        rows={6}
        variant="outlined"
        sx={{ width: "100%", marginBottom: "20px", marginTop: "20px" }}
      />

      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Button type="submit" variant="contained" sx={{ width: "150px" }}>
          <SaveIcon fontSize="large" />
          Save
        </Button>
      </Box>
    </Box>
  );
}
