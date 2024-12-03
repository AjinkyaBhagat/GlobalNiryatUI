import React from "react";
import AppRoutes from "./routes"; // Adjust based on your file structure

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <AppRoutes />
    </div>
  );
};

export default App;
