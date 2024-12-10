import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price?: string;
  originCountry?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  originCountry,
}) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ width: "40%", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography
          variant="body2"
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
  );
};

export default ProductCard;
