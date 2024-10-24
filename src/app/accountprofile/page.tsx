"use client"

import React from "react";
import _Header from "@/components/_header";
import _Navbar from "@/components/_navbar";
import _CarouselAddTips from "./_carouseladdtips";
import _AccountLink from "./_accountlink";
import _ActiveTasks from "./_activetasks";
import _Inbox from "./_inbox";
import _InfoData from "./_infodata";
import _TaskTips from "./_tasktips";
import _Footer from "@/components/_footer";
import _FramerMotionWrapper from "@/components/animations/_framermotionwrapper";
import _AuthSliderModal from "../(auth)/_authslidermodal";
import MomentumScroll from "@/components/animations/_momentumscroll";

import { useState } from "react";

const PageTemplate = () => {
  
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
    <MomentumScroll>
    <main className="w-full bg-gray-50/50 gap-10">
      <_Header toggleRegisterModal={toggleRegisterModal} toggleLoginModal={toggleLoginModal}/>
        
      <_Navbar />
      <div className="flex w-fit mx-auto self-center">
        <section className="flex flex-col w-fit p-10 gap-5">

        <_InfoData />

        <_Inbox />

        <_AccountLink />
        </section>

        <section className="flex flex-col w-fit p-10 gap-">
        <_ActiveTasks />

        <_TaskTips />

        <_CarouselAddTips />

        </section>
      </div>
              
      <_Footer />

      {/* Render AuthSliderModal */}
      <_AuthSliderModal
        open={openRegister || openLogin}
        onClose={closeModal}
        isLogin={openLogin}
      />
    </main>
  </MomentumScroll>
  );
};

export default PageTemplate;
