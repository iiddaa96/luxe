"use client";
import { keyframes } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

// Animation för att tona in och flytta texten
const fadeInMove = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeInSlogan = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AnimationBanner: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40vh",
        background: "linear-gradient(135deg, #792F41, #4B1C29)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography
        aria-label="Company name"
        variant="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: { xs: "3rem", sm: "5rem" },
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          animation: `${fadeInMove} 1.5s ease-out forwards`,
        }}
      >
        L U X E
      </Typography>

      <Typography
        aria-label="Company tagline"
        variant="h5"
        sx={{
          color: "white",
          fontWeight: "300",
          marginTop: "20px",
          fontSize: { xs: "1rem", sm: "1.5rem" },
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
          animation: `${fadeInSlogan} 2s ease-out forwards`,
        }}
      >
        Where makeup lasts all day
      </Typography>
    </Box>
  );
};

export default AnimationBanner;
