import React from "react";
import AppRoutes from "./routes/index"; // Import routes from index.tsx

const App: React.FC = () => {
  return (
    <div>
      <AppRoutes /> {/* Routes will now be defined in AppRoutes */}
    </div>
  );
};

export default App;
