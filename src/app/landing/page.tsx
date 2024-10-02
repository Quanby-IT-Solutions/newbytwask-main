"use client";

import _HeroSection from "./_herosection";
import _Category from "./_categorysection";
import _Contents from "./_contentsection";
import _Jobs from "./_jobsection";
import _News from "./_newsection";
import _Subscribe from "./_subscribesection";
import _Footer from "@/components/_footer";
import _FramerMotionWrapper from "@/components/animations/_framermotionwrapper";
import _GSAPAnimation from "@/components/animations/_gsapanimation";

const LandingPage = () => {
  return (
    <main className="w-full">
      {/* Hero Section Wrapped in Framer Motion Wrapper for Animation */}
      <_FramerMotionWrapper>
        <_HeroSection />
      </_FramerMotionWrapper>

      {/* Some Custom Section with GSAP Animation */}

      <_GSAPAnimation>
        <_Category />
      </_GSAPAnimation>
      
      <_GSAPAnimation>
        <_Contents />
      </_GSAPAnimation>

      <_GSAPAnimation>
        <_Jobs />
      </_GSAPAnimation>

      <_GSAPAnimation>
        <_News />
      </_GSAPAnimation>

      <_GSAPAnimation>
        <_Subscribe />
      </_GSAPAnimation>

      <_Footer />
    </main>
  );
};

export default LandingPage;
