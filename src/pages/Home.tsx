// export default Home;
import React from "react";
import FullWidthCard from "../components/common/FullWidthCard";
import homepageVideo from "../assets/homepage-video.webm";
import AnimatedCards from "../components/common/AnimatedCard";
import WhyChooseSection from "../components/home/WhyChooseSection";
import SplitScreenSection from "../components/home/SplitScreenSection";

const Home: React.FC = () => {
  return (
    <div>
      {/* Pass a different video source */}
      <FullWidthCard videoSrc={homepageVideo} showText={true} pageType="home" />
      <WhyChooseSection />
      <AnimatedCards />
      <SplitScreenSection />
    </div>
  );
};

export default Home;
