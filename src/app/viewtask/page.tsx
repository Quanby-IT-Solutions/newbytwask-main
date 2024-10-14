"use client";

import _Header from "@/components/_header";
import _Navbar from "@/components/_navbar";
import _TaskTitle from "./_tasktitle"
import _Thumbnails from "./_thumbnails";
import _Descriptions from "./_description";
import _InfoTabs from "./_infotabs";
import _Recommended from "./_recommend";
import _HirePackages from "./_hirepackage";
import _Footer from "@/components/_footer";
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

      {/* Render Task Page Content */}
      <section className="flex flex-col min-[1820px]:flex-row">
        <div className="w-[1020px] flex flex-col px-16">
          <_TaskTitle />

          <_Thumbnails />

          <_Descriptions />

          <_InfoTabs />

          <_Recommended />
        </div>
        <div className="w-[1020px] h-fit flex justify-center px-16">
          <_HirePackages/>
        </div>
      </section>
      
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
