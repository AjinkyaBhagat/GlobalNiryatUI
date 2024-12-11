import React, { useState } from "react"; // Import useState
import { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent from MUI

export const useForm = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    category: string;
  }>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLElement> | SelectChangeEvent
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { formData, handleInputChange };
};
