"use client";

import _Header from "@/components/_header";
import _Navbar from "@/components/_navbar";
import _MyTasks from "./_mytasks";
import _Footer from "@/components/_footer";
import _FramerMotionWrapper from "@/components/animations/_framermotionwrapper";
import _AuthSliderModal from "../(auth)/_authslidermodal";
import MomentumScroll from "@/components/animations/_momentumscroll";


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
    <MomentumScroll>
      <main className="w-full gap-10">
        <_Header toggleRegisterModal={toggleRegisterModal} toggleLoginModal={toggleLoginModal}/>
        
        <_Navbar />
        
        <_FramerMotionWrapper>
          <_MyTasks />
        </_FramerMotionWrapper>

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

export default TaskPage;
