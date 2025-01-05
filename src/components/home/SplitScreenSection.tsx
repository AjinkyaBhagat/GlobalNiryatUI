import React from "react";
import { Box, Typography, Button, styled, keyframes } from "@mui/material";
import ConnectingWorld from "../../assets/connecting-world.webm";

// Define fade-in animation for text
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Typography for header
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  textAlign: "center",
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  //padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  fontSize: "2rem", // Default font size
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  animation: `${fadeIn} 1.5s ease-out`,
}));

// Styled Box for the oval-shaped video container
const OvalVideoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "400px",
  aspectRatio: "1/1",
  borderRadius: "50%", // Ensures the oval shape
  overflow: "hidden",
  margin: "auto",
  background: "#000",
  [theme.breakpoints.up("md")]: {
    maxWidth: "450px", // Larger size on medium screens
  },
}));

const SplitScreenSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        height: "60%",
        padding: "2rem",
      }}
    >
      {/* Left Side - Oval Video */}
      <OvalVideoContainer>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={ConnectingWorld} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </OvalVideoContainer>

      {/* Right Side - Text Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "2rem",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <StyledTypography variant="h3">
          Unlocking Global Opportunities with AirSeaExim
        </StyledTypography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          At AirSeaExim, we specialize in connecting India to the world through
          efficient and reliable export-import services. Our end-to-end trade
          and logistics solutions make cross-border business easier, faster, and
          more profitable. Join us in shaping the future of international trade.
        </Typography>
      </Box>
    </Box>
  );
};

export default SplitScreenSection;
