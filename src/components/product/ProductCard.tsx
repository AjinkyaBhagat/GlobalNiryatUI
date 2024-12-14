import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price?: string;
  originCountry?: string;
  reverse?: boolean; // To reverse the layout for Card 2
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  originCountry,
  reverse = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: reverse ? "row-reverse" : "row" }, // Responsive layout
          height: { xs: "auto", sm: "400px" }, // Full height on larger screens
          width: "100%",
          overflow: "hidden",
          marginBottom: "16px", // Add spacing between cards
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: { xs: "100%", sm: "50%" }, // Full width for mobile, half for larger screens
            height: { xs: "200px", sm: "100%" }, // Fixed height for mobile
            objectFit: "cover",
          }}
        />

        {/* Content Section */}
        <CardContent
          sx={{
            width: { xs: "100%", sm: "50%" }, // Full width for mobile, half for larger screens
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {/* <Typography variant="h4" fontWeight="bold">
            {name}
          </Typography> */}
          <Typography
            variant="h4"
            align="left"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "8px" }}
          >
            {description}
          </Typography>
          {price && (
            <Typography variant="body2" fontWeight="bold">
              Price: {price}
            </Typography>
          )}
          {originCountry && (
            <Typography variant="body2">
              Country of Origin: {originCountry}
            </Typography>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
