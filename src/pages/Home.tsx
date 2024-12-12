import React from "react";
import FullWidthCard from "../components/common/FullWidthCard";
import homepageVideo from "../assets/homepage-video.mp4";

const Home: React.FC = () => {
  return (
    <div>
      {/* Pass a different video source */}
      <FullWidthCard videoSrc={homepageVideo} showText={true} pageType="home" />
    </div>
  );
};

export default Home;
