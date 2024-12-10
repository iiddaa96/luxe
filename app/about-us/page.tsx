import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AboutImage from "../assets/contact.jpg";

function AboutUs() {
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
          src={AboutImage}
          alt="About Us Background"
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
            maxWidth: "600px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold" }}
            variant="h5"
            component="h2"
            gutterBottom
          >
            ABOUT US
          </Typography>
          <Typography sx={{ marginBottom: "16px" }}>
            Welcome to LUXE! We are a company dedicated to bringing the finest
            products and services to our customers. Our team is passionate about
            quality and innovation, and we strive to exceed expectations every
            day.
          </Typography>
          <Typography>
            Located in the heart of Göteborg, we pride ourselves on our
            commitment to excellence and customer satisfaction. Join us on our
            journey as we continue to make an impact in the world of luxury
            goods and services.
          </Typography>
        </Box>
      </Box>
    </main>
  );
}

export default AboutUs;
