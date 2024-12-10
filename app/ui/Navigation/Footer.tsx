"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#FCF5F3",
        // borderTop: "1px solid black",
        display: "flex",
        justifyContent: "center",
        gap: "10rem",
        padding: "20px",
        marginTop: "20px",
        flexWrap: "wrap",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        },
      }}
    >
      {/* Kontaktsektionen */}
      <Box
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}>
          CONTACT
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>L U X E </Typography>
        <Typography sx={{ fontSize: "14px" }}>Hittepå gatan 01</Typography>
        <Typography sx={{ fontSize: "14px" }}>442 11 Göteborg</Typography>
      </Box>

      {/* Informationssektionen */}
      <Box
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}>
          INFORMATION
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>Cookies </Typography>
        <Typography sx={{ fontSize: "14px" }}>Privacy Policy</Typography>
        <Typography sx={{ fontSize: "14px" }}>Terms of purchase</Typography>
        <Typography
          component={Link}
          href="/contact"
          sx={{
            display: "block",
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
            fontSize: "14px",
          }}
        >
          Contact
        </Typography>
        <Typography
          component={Link}
          href="/about us"
          sx={{
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
            fontSize: "14px",
          }}
        >
          About us
        </Typography>
      </Box>

      {/* Följ oss-sektionen */}
      <Box
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mb: 1 }}>
          FOLLOW US
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "8px",
          }}
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <FacebookIcon sx={{ marginRight: "5px" }} />
            Facebook
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <InstagramIcon sx={{ marginRight: "5px" }} />
            Instagram
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <YouTubeIcon sx={{ marginRight: "5px" }} />
            YouTube
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
