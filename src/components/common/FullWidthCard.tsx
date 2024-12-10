// import React from "react";
// import { Card, CardMedia, Button } from "@mui/material";
// // Import the image directly
// import backgroundImage from "../../assets/product-fullwidthcard.jpg";

// const FullWidthCard: React.FC = () => {
//   return (
//     <Card sx={{ position: "relative", width: "100%" }}>
//       <CardMedia
//         component="img"
//         image={backgroundImage} // Use the imported image
//         alt="Background"
//         sx={{ height: "600px", objectFit: "cover" }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         sx={{
//           position: "absolute",
//           bottom: "16px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           backgroundColor: "#007BFF",
//           fontWeight: "bold",
//           padding: "8px 24px",
//         }}
//       >
//         Your Trusted Partner in Onion Powder Trade
//       </Button>
//     </Card>
//   );
// };

// export default FullWidthCard;
import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import backgroundImage from "../../assets/product-fullwidthcard.jpg";
import trustGif from "../../assets/trust.gif"; // Import the GIF

const FullWidthCard: React.FC = () => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: "600px", // Fixed height for the card
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <CardMedia
        component="img"
        image={backgroundImage}
        alt="Background"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centers the text and GIF horizontally and vertically
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent gray background
          color: "white",
          padding: "16px 24px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row", // Align text and GIF horizontally
          alignItems: "center", // Center both the text and GIF vertically
          justifyContent: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "white",
            marginRight: "16px", // Space between text and GIF
          }}
        >
          Your Trusted Partner in Onion Powder Trade
        </Typography>

        {/* GIF */}
        <Box
          component="img"
          src={trustGif}
          alt="Trust"
          sx={{
            width: "40px", // Adjust the size of the GIF
            height: "auto",
          }}
        />
      </Box>
    </Card>
  );
};

export default FullWidthCard;
