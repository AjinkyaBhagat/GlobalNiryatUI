import axios from "axios";

export const fetchProduct = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
};
