// import React from "react";
// import { Card, Typography, Box } from "@mui/material";
// import trustGif from "../../assets/trust.gif"; // Import the GIF

// interface FullWidthCardProps {
//   videoSrc: string; // Prop for video source
//   showText?: boolean; // Optional prop to control text visibility
// }

// const FullWidthCard: React.FC<FullWidthCardProps> = ({
//   videoSrc,
//   showText = false,
// }) => {
//   return (
//     <Card
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: "600px", // Fixed height for the card
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover", // Ensures video covers the card area
//         }}
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Centered Content (Shown only if showText is true) */}
//       {showText && (
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)", // Centers the content
//             textAlign: "center",
//             backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent gray background
//             color: "white",
//             padding: "16px 24px",
//             borderRadius: "8px",
//             display: "flex",
//             flexDirection: "row", // Align text and GIF horizontally
//             alignItems: "center", // Center both text and GIF vertically
//             justifyContent: "center",
//           }}
//         >
//           {/* Heading */}
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             sx={{
//               color: "white",
//               marginRight: "16px", // Space between text and GIF
//             }}
//           >
//             Your Trusted Partner in Onion Powder Trade
//           </Typography>

//           {/* GIF */}
//           <Box
//             component="img"
//             src={trustGif}
//             alt="Trust"
//             sx={{
//               width: "40px", // Adjust the size of the GIF
//               height: "auto",
//             }}
//           />
//         </Box>
//       )}
//     </Card>
//   );
// };

import React from "react";
import { Card, Box } from "@mui/material";
import HomePageText from "../../home/HomePageText";
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
