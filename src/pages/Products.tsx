import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import FullWidthCard from "../components/common/FullWidthCard";
import ProductCard from "../components/product/ProductCard";
import { fetchProduct } from "../services/productService";

const ProductsPage: React.FC = () => {
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

      {/* Responsive Cards Section */}
      <Grid container spacing={3} sx={{ marginTop: "32px" }}>
        {/* First Card (Fetched from API) */}
        <Grid item xs={12} sm={6}>
          <ProductCard
            image={product?.image || "/assets/product1.jpg"}
            name={product?.name || "Product Name"}
            description={
              product?.description || "Product description goes here."
            }
            price={
              product?.price ? `${product.currency} ${product.price}` : "INR 0"
            }
            originCountry={product?.originCountry || "N/A"}
          />
        </Grid>

        {/* Dummy Cards */}
        <Grid item xs={12} sm={6}>
          <ProductCard
            image="/assets/product2.jpg"
            name="Test Product 1"
            description="Dummy description for product 1."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductCard
            image="/assets/product2.jpg"
            name="Test Product 2"
            description="Dummy description for product 2."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductCard
            image="/assets/product1.jpg"
            name="Test Product 3"
            description="Dummy description for product 3."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
