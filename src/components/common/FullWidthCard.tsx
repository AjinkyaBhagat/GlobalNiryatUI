import React from "react";
import { Card, Box } from "@mui/material";
import HomePageText from "../home/HomePageText";
import ProductsPageText from "../product/ProductsPageText";

interface FullWidthCardProps {
  videoSrc: string; // Prop for video source
  showText?: boolean; // Optional prop to control text visibility
  pageType: "home" | "products"; // Prop to conditionally render different text
}

const FullWidthCard: React.FC<FullWidthCardProps> = ({
  videoSrc,
  showText = false,
  pageType,
}) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: "600px", // Fixed height for the card
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
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
          objectFit: "cover", // Ensures video covers the card area
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content (Shown only if showText is true) */}
      {showText && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {pageType === "home" ? <HomePageText /> : <ProductsPageText />}
        </Box>
      )}
    </Card>
  );
};

export default FullWidthCard;
