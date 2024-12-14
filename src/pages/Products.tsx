// import React from "react";
import { Box } from "@mui/material";
import FullWidthCard from "../components/common/FullWidthCard";
import ProductCard from "../components/product/ProductCard";
import productsVideo from "../assets/onion-video.mp4";

// Import images
import redOnionImage from "../assets/red-onion-powder.jpg";
import whiteOnionImage from "../assets/white-onion-powder.jpg";

const Products: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* FullWidthCard at the top */}
      <Box sx={{ marginBottom: "24px" }}>
        <FullWidthCard
          videoSrc={productsVideo}
          showText={true}
          pageType="products"
        />
      </Box>

      {/* Card 1: Image on the left, Description on the right */}
      <ProductCard
        image={redOnionImage}
        name="Red Onion Powder"
        description="Premium red onion powder made from fresh, high-quality onions.
                    Ground to perfection for a smooth, consistent texture.
                    Rich in flavor, perfect for seasoning a variety of dishes.
                    Ideal for soups, sauces, and marinades.
                    A must-have pantry staple for onion lovers."
        originCountry="India"
      />

      {/* Card 2: Image on the right, Description on the left */}
      <ProductCard
        image={whiteOnionImage}
        name="White Onion Powder"
        description="Finely ground white onion powder with a mild, sweet flavor.
                    Made from carefully selected, fresh white onions.
                    Enhances the taste of sauces, dips, and dressings.
                    Perfect for seasoning meats, vegetables, and soups.
                    A versatile and essential ingredient for home kitchens."
        originCountry="India"
        reverse={true} // Reverses the layout
      />
    </Box>
  );
};

export default Products;
