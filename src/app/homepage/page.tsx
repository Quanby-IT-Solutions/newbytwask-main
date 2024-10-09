"use client";

import _Header from "@/components/_header";
import _Navbar from "@/components/_navbar";
import _HeroCarousel from "./_carousel";
import _PopularGigs from "./_populargigs";
import _MayLikeGigs from "./_maylikegigs";
import _VeriProService from "./_veriproservice";
import _Footer from "@/components/_footer";
import _FramerMotionWrapper from "@/components/animations/_framermotionwrapper";
import _GSAPAnimation from "@/components/animations/_gsapanimation";
import _AuthSliderModal from "../(auth)/_authslidermodal";


import { useState } from "react";


const TaskPage = () => {
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

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
    <main className="w-full gap-10">
      <_Header toggleRegisterModal={toggleRegisterModal} toggleLoginModal={toggleLoginModal}/>
      
      <_Navbar />

      <_FramerMotionWrapper>
        <_HeroCarousel />
      </_FramerMotionWrapper>

      <_FramerMotionWrapper>
        <_PopularGigs />
      </_FramerMotionWrapper>
      
      <_FramerMotionWrapper>
        <_MayLikeGigs />
      </_FramerMotionWrapper>

      <_FramerMotionWrapper>
        <_VeriProService />
      </_FramerMotionWrapper>

      <_Footer />

      {/* Render AuthSliderModal */}
      <_AuthSliderModal
        open={openRegister || openLogin}
        onClose={closeModal}
        isLogin={openLogin}
      />
    </main>
  );
};

export default TaskPage;
