// LandingPage.jsx
"use client";

import React, { useState } from "react";
import _HeroSection from "./_herosection";
import _Category from "./_categorysection";
import _Contents from "./_contentsection";
import _Jobs from "./_jobsection";
import _News from "./_newsection";
import _Subscribe from "./_subscribesection";
import _Header from "@/components/_header";
import _Footer from "@/components/_footer";
import _FramerMotionWrapper from "@/components/animations/_framermotionwrapper";
import _GSAPAnimation from "@/components/animations/_gsapanimation";
import AuthSliderModal from "../(auth)/AuthSliderModal";

const LandingPage = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const toggleRegisterModal = () => {
    setOpenRegister(!openRegister);
  };

  const toggleLoginModal = () => {
    setOpenLogin(!openLogin);
  };

  const closeModal = () => {
    setOpenRegister(false);
    setOpenLogin(false);
  };

  return (
    <main className="w-full">
      <_Header
        toggleRegisterModal={toggleRegisterModal}
        toggleLoginModal={toggleLoginModal}
      />

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

      {/* Render AuthSliderModal */}
      <AuthSliderModal
        open={openRegister || openLogin}
        onClose={closeModal}
        isLogin={openLogin}
      />
    </main>
  );
};

export default LandingPage;
