import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

// Import the dummy image from the assets folder
import dummyImage from "../assets/background-image.jpg"; // Adjust path based on your file structure

// Updated Product interface to reflect your API response
interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  quantity: number;
  price: number;
  currency: string;
  originCountry: string;
  destinationCountries: string[];
  status: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch all products from the API
    axios
      .get(`http://localhost:3000/api/products`) // Fetch all products
      .then((response) => {
        setProducts(response.data); // Set products data to state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Error loading product details. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 0 }}>
      {/* Full-Width Card with Dummy Image */}
      <Card
        sx={{
          mb: 4,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 0,
          margin: 0,
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image={dummyImage} // Use the imported dummy image
          alt="Dummy Image"
          sx={{ objectFit: "cover", width: "100%", margin: 0, padding: 0 }}
        />
        <CardContent
          sx={{
            flex: 1,
            padding: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "white" }}
          >
            Featured Products
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ color: "white" }}
          >
            Check out our latest collection of products!
          </Typography>
        </CardContent>
      </Card>

      {/* Display all products */}
      {products.map((product) => (
        <Card key={product._id} sx={{ maxWidth: 600, margin: "auto", mb: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={product.image} // Product-specific image
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="body2" color="text.primary" mt={2}>
                Price: {product.currency} {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available Quantity: {product.quantity}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Products;
