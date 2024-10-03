"use client";

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

import { useState } from "react";
import _RegisterModal from '@/app/(auth)/register/registermodal';
import _LoginModal from "../(auth)/login/loginmodal";

const LandingPage = () => {
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  const toggleRegisterModal = () => {
    setOpenRegister(!openRegister);
  };

  const toggleLoginModal = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <main className="w-full">
      <_Header toggleRegisterModal={toggleRegisterModal} toggleLoginModal={toggleLoginModal}/>
      
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

      <_RegisterModal open={openRegister} onClose={toggleRegisterModal} toggleLoginModal={toggleLoginModal}/> {/* Render the Register modal component */}

      <_LoginModal open={openLogin} onClose={toggleLoginModal} toggleRegisterModal={toggleRegisterModal}/> {/* Render the Login modal component */}

    </main>
  );
};

export default LandingPage;
