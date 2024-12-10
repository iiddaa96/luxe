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
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "600px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              width: "95%",
              padding: "15px",
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "24px" },
            }}
            variant="h1"
            component="h2"
            gutterBottom
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              marginBottom: "16px",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Welcome to LUXE! We are a company dedicated to bringing the finest
            products and services to our customers. Our team is passionate about
            quality and innovation, and we strive to exceed expectations every
            day.
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
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
