"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid black",
        justifyContent: "space-around",
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        marginTop: "20px",
        backgroundColor: "white",
        flexDirection: "row", // För desktop-läge
        "@media (max-width: 600px)": {
          flexDirection: "column", // För mobilläge
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          Contact us here:
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>L U X E </Typography>
        <Typography sx={{ fontSize: "14px" }}>Hittepå gatan 01</Typography>
        <Typography sx={{ fontSize: "14px" }}>442 11 Göteborg</Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          ©️ Copyright av
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>LUXE Company</Typography>
        <Typography sx={{ fontSize: "14px" }}>
          Copyright @IdaCasperson
        </Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", fontWeight: "bold" }}
        >
          Follow us!
        </Typography>
        <FacebookIcon sx={{ fontSize: "2rem" }}></FacebookIcon>
        <InstagramIcon sx={{ fontSize: "2rem" }}></InstagramIcon>
        <YouTubeIcon sx={{ fontSize: "2rem" }}></YouTubeIcon>
      </Box>
    </Box>
  );
}

export default Footer;
