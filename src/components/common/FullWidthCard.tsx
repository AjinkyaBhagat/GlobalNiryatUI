// import React from "react";
// import { Card, CardMedia, Typography, Box } from "@mui/material";
// import backgroundImage from "../../assets/product-fullwidthcard.jpg";
// import trustGif from "../../assets/trust.gif"; // Import the GIF

// const FullWidthCard: React.FC = () => {
//   return (
//     <Card
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: "600px", // Fixed height for the card
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Image */}
//       <CardMedia
//         component="img"
//         image={backgroundImage}
//         alt="Background"
//         sx={{
//           height: "100%",
//           width: "100%",
//           objectFit: "cover",
//         }}
//       />

//       {/* Centered Content */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)", // Centers the text and GIF horizontally and vertically
//           textAlign: "center",
//           backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent gray background
//           color: "white",
//           padding: "16px 24px",
//           borderRadius: "8px",
//           display: "flex",
//           flexDirection: "row", // Align text and GIF horizontally
//           alignItems: "center", // Center both the text and GIF vertically
//           justifyContent: "center",
//         }}
//       >
//         {/* Heading */}
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           sx={{
//             color: "white",
//             marginRight: "16px", // Space between text and GIF
//           }}
//         >
//           Your Trusted Partner in Onion Powder Trade
//         </Typography>

//         {/* GIF */}
//         <Box
//           component="img"
//           src={trustGif}
//           alt="Trust"
//           sx={{
//             width: "40px", // Adjust the size of the GIF
//             height: "auto",
//           }}
//         />
//       </Box>
//     </Card>
//   );
// };

// export default FullWidthCard;
import React from "react";
import { Card, Typography, Box } from "@mui/material";
import trustGif from "../../assets/trust.gif"; // Import the GIF
import onionVideo from "../../assets/onion-video.mp4";

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
        <source src="/assets/onion-video.mp4" type="video/mp4" />
        {/* You can add other formats for compatibility */}
        <source src={onionVideo} />
        <source src="/assets/onion-video.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centers the content
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent gray background
          color: "white",
          padding: "16px 24px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row", // Align text and GIF horizontally
          alignItems: "center", // Center both text and GIF vertically
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
