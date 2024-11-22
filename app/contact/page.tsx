import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import ContactImage from "../assets/contact.jpg";

function Contact() {
  return (
    <main>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          src={ContactImage}
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: -1 }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "80%",
            maxWidth: "500px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "16px" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </main>
  );
}

export default Contact;
