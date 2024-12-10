import React from "react";
import { Card, CardMedia, Button } from "@mui/material";
// Import the image directly
import backgroundImage from "../../assets/product-fullwidthcard.jpg";

const FullWidthCard: React.FC = () => {
  return (
    <Card sx={{ position: "relative", width: "100%" }}>
      <CardMedia
        component="img"
        image={backgroundImage} // Use the imported image
        alt="Background"
        sx={{ height: "600px", objectFit: "cover" }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#007BFF",
          fontWeight: "bold",
          padding: "8px 24px",
        }}
      >
        Enquiry
      </Button>
    </Card>
  );
};

export default FullWidthCard;
