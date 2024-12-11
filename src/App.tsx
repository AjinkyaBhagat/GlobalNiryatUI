import React from "react";
import AppRoutes from "./routes/index"; // Import routes from index.tsx
import SocialButtons from "./components/common/SocialButtons";

const App: React.FC = () => {
  return (
    <div>
      {/* Global SocialButtons */}
      <SocialButtons />
      <AppRoutes /> {/* Routes will now be defined in AppRoutes */}
    </div>
  );
};

export default App;
