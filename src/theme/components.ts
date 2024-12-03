const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        padding: "8px 16px",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

export default components;
