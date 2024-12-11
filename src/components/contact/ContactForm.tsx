// import React from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
//   category: string;
// }

// interface ContactFormProps {
//   formData: FormData;
//   handleInputChange: (
//     e:
//       | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//       | SelectChangeEvent
//   ) => void;
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// const ContactForm: React.FC<ContactFormProps> = ({
//   formData,
//   handleInputChange,
//   handleSubmit,
// }) => {
//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{ backgroundColor: "#f8f9fa", p: 4, borderRadius: 2, boxShadow: 1 }}
//     >
//       <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
//         Send Us a Message
//       </Typography>

//       <Box
//         sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3 }}
//       >
//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <TextField
//           fullWidth
//           label="Phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleInputChange}
//         />
//         <FormControl fullWidth>
//           <InputLabel>Category</InputLabel>
//           <Select
//             value={formData.category}
//             label="Category"
//             name="category"
//             onChange={handleInputChange} // This will now work for the Select component
//           >
//             <MenuItem value="general">General Inquiry</MenuItem>
//             <MenuItem value="feedback">Feedback</MenuItem>
//           </Select>
//         </FormControl>

//         <TextField
//           fullWidth
//           label="Subject"
//           name="subject"
//           value={formData.subject}
//           onChange={handleInputChange}
//           required
//         />
//         <TextField
//           fullWidth
//           label="Message"
//           name="message"
//           multiline
//           rows={4}
//           value={formData.message}
//           onChange={handleInputChange}
//           required
//         />
//       </Box>

//       <Box sx={{ mt: 4, textAlign: "center" }}>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{ borderRadius: 2, textTransform: "none", px: 6, py: 1.5 }}
//         >
//           Send Message
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ContactForm;
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  category: string;
}

interface ContactFormProps {
  formData: FormData;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
}) => {
  // Modified handleSubmit to trigger Gmail compose in a new tab
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Construct the mailto link with the entered form data
    const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nMessage: ${formData.message}`
    )}`;

    // Open the mailto link in a new tab
    window.open(mailtoLink, "_blank");
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit} // Use the new handleFormSubmit method
      sx={{ backgroundColor: "#f8f9fa", p: 4, borderRadius: 2, boxShadow: 1 }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Send Us a Message
      </Typography>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 3 }}
      >
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            label="Category"
            name="category"
            onChange={handleInputChange}
          >
            <MenuItem value="general">General Inquiry</MenuItem>
            <MenuItem value="feedback">Feedback</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </Box>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: 2, textTransform: "none", px: 6, py: 1.5 }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
