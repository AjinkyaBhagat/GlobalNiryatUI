import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import FullWidthCard from "../components/common/FullWidthCard";
import ProductCard from "../components/product/ProductCard";
import { fetchProduct } from "../services/productService";

const Products: React.FC = () => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProduct();
      setProduct(data);
    };
    loadProduct();
  }, []);

  return (
    <Box sx={{ width: "100%", padding: "16px" }}>
      {/* Full-Width Card */}
      <FullWidthCard />

      {/* Responsive Cards Section using Stack */}
      <Stack
        direction={{ xs: "column", sm: "row" }} // Stack direction based on screen size
        spacing={3} // Spacing between the cards
        sx={{
          marginTop: "32px",
          flexWrap: "wrap",
          justifyContent: "space-between", // Ensures space between cards
        }}
      >
        {/* First Card (Fetched from API) */}
        <Box
          sx={{
            flex: "1 1 calc(50% - 16px)", // 50% width with margin
            maxWidth: "350px", // Max width of card
            marginBottom: "16px", // Margin at the bottom of the card
          }}
        >
          <ProductCard
            image={product?.image || "../assets/product1.jpg"}
            name={product?.name || "Product Name"}
            description={
              product?.description || "Product description goes here."
            }
            price={
              product?.price ? `${product.currency} ${product.price}` : "INR 0"
            }
            originCountry={product?.originCountry || "N/A"}
          />
        </Box>

        {/* Dummy Cards */}
        <Box
          sx={{
            flex: "1 1 calc(50% - 16px)", // 50% width with margin
            maxWidth: "350px", // Max width of card
            marginBottom: "16px", // Margin at the bottom of the card
          }}
        >
          <ProductCard
            image="/assets/product2.jpg"
            name="Test Product 1"
            description="Dummy description for product 1."
          />
        </Box>
        <Box
          sx={{
            flex: "1 1 calc(50% - 16px)", // 50% width with margin
            maxWidth: "350px", // Max width of card
            marginBottom: "16px", // Margin at the bottom of the card
          }}
        >
          <ProductCard
            image="/assets/product2.jpg"
            name="Test Product 2"
            description="Dummy description for product 2."
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Products;
