// export default Home;
import React from "react";
import FullWidthCard from "../components/common/FullWidthCard";
import homepageVideo from "../assets/homepage-video.mp4";
import AnimatedCards from "../components/common/AnimatedCard";
import WhyChooseSection from "../components/home/WhyChooseSection";

const Home: React.FC = () => {
  return (
    <div>
      {/* Pass a different video source */}
      <FullWidthCard videoSrc={homepageVideo} showText={true} pageType="home" />
      <WhyChooseSection />
      <AnimatedCards />
    </div>
  );
};

export default Home;
