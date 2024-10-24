"use client";

import { useState, useEffect } from "react";
import _Header from "@/components/_header";
import _Navbar from "@/components/_navbar";
import _PersonalDetails from "./_personaldetails";
import _Address from "./_address";
import _ValID from "./_valid";
import _Publish from "./_publish";
import _Footer from "@/components/_footer";
import _AuthSliderModal from "../(auth)/_authslidermodal";
import { motion } from "framer-motion";
import MomentumScroll from "@/components/animations/_momentumscroll";
import { useRouter } from 'next/navigation'
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperTitle,
} from "@/components/ui/stepper"; 
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  useDisclosure} from "@nextui-org/react";
import { Button } from "@/components/ui/button"; // TailwindCSS button
import { Player } from "@lottiefiles/react-lottie-player"; 
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

const BecomeTaskerPage = () => {
  const {isOpen: isIntroOpen, onOpen: onIntroOpen, onOpenChange: onItroOpenChange} = useDisclosure();
  const {isOpen: isConfirmOpen, onOpen: onConfirmOpen, onOpenChange: onConfirmOpenChange} = useDisclosure();

  useEffect(() => {
    onIntroOpen(); // Open the modal when the page loads
  }, [onIntroOpen]);

  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [activeStep, setActiveStep] = useState(0); // Start from index 0

  const steps = [
    { title: "Personal Details" },
    { title: "Address" },
    { title: "Valid ID" },
    { title: "Publish" },
  ];

  const toggleRegisterModal = () => setOpenRegister(!openRegister);
  const toggleLoginModal = () => setOpenLogin(!openLogin);
  const closeModal = () => {
    setOpenRegister(false);
    setOpenLogin(false);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <_PersonalDetails />;
      case 1:
        return <_Address />;
      case 2:
        return <_ValID />;
      case 3:
        return <_Publish />;
      default:
        return null;
    }
  };

  const getStepState = (index: number) => {
    if (index === activeStep) {
      return "active";
    } else if (index < activeStep) {
      return "completed";
    }
    return "disabled";
  };
  
  const router = useRouter();

  return (
    <MomentumScroll >
      <motion.main className="w-full gap-10">
        <Modal backdrop="blur" isOpen={isIntroOpen} onOpenChange={onItroOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col w-fit pt-8 self-center gap-1">Welcome Future Tasker!</ModalHeader>
                <ModalBody>
                  <p> 
                    So you want to become a tasker? Great! We&apos;ll help you get up and running.
                    But before that, we need to fill out some forms.
                    Don&apos;t worry, Thiss will be quick!
                  </p>
                  <p>
                    *Please do keep in mind to fill out the fields with information that is seen in any id that you will be uploading in a future step.
                    This will be used to help us verify the details that you have submitted.
                    Do take not also that the any valid ID that you upload will only be used to validate your application to becomming a tasker.*
                  </p>
                  <p>
                    Thank you and may we hope that you get approved!
                  </p>
                </ModalBody>
                <ModalFooter className="flex flex-col">
                  <p className="text-xs text-gray-500 font-light">
                    If you have no more questions, click on the &quo;Start&quo; button to start filling out the form
                  </p>
                  <Button variant="default" onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-400">
                    Start
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <_Header
          toggleRegisterModal={toggleRegisterModal}
          toggleLoginModal={toggleLoginModal}
        />

        <_Navbar />

        <div className="relative flex justify-center">
          <div className="flex flex-col items-center w-[1020px] p-24">
            <Stepper currentStep={activeStep} className="w-full flex justify-center pb-8">
              {steps.map((step, index) => (
                <StepperItem
                  key={index}
                  state={getStepState(index)}
                  currentStep={activeStep}
                  className="h-fit flex items-center"
                >
                  <StepperTrigger onClick={() => setActiveStep(index)} asChild>
                    <Button
                      variant={activeStep >= index ? "default" : "outline"}
                      size="icon"
                      disabled={activeStep < index}
                      className={`w-6 h-6 text-sm text-white font-semibold border-none rounded-full ${
                        activeStep >= index ? "bg-green-500 scale-125" : "bg-gray-500"
                      }`}
                    >
                      {activeStep > index ? "✔" : index + 1}
                    </Button>
                  </StepperTrigger>
                  <div className="flex flex-col self-center text-center">
                    <StepperTitle currentStep={index} className={`text-sm ${activeStep >= index ? "text-gray-700 font-bold" : "text-gray-400 font-light"}`}>
                      {step.title}
                    </StepperTitle>
                  </div>
                  {index < 3 && (
                    <KeyboardDoubleArrowRightRoundedIcon className={`mx-5 ${activeStep >= index ? "text-gray-700 font-bold" : "text-gray-400 font-light"}`}/>
                  )}
                </StepperItem>
              ))}
            </Stepper>

            <div className="w-full p-8 mt-10 border bg-white rounded-lg shadow-2xl">
              <div className="form-container">{renderForm()}</div>
              
              <div className={`mt-16 flex ${(activeStep > 0 && activeStep < 3) ? "justify-between" : "justify-end"}`}>
                {(activeStep > 0 && activeStep < 3) && (
                  <Button onClick={handlePrev} disabled={activeStep === 0} className="px-6 py-4 text-sm bg-blue-500 hover:bg-blue-400 hover:scale-110 transition ease-in-out">
                    Back
                  </Button>
                )}
                {activeStep === 2 ? (
                  <div>
                    <Button onClick={onConfirmOpen} className="px-6 py-4 text-sm bg-green-500 hover:bg-green-400 hover:scale-110 transition ease-in-out">
                      Submit
                    </Button>
                    <Modal backdrop="blur" isOpen={isConfirmOpen} onOpenChange={onConfirmOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col w-fit pt-8 self-center gap-1">Submit Form?</ModalHeader>
                            <ModalBody>
                              <Player
                                autoplay
                                loop
                                src="https://lottie.host/fd20fbc8-2fb8-4b44-ac05-6a86523f794f/S8qiufWrp3.json" // Update path to the correct src location
                                style={{ height: '300px', width: '300px' }} // Set height and width
                              />
                              <p className="mt-8"> 
                                You are about to submit the details that you have inputted.
                              </p>
                              <p>
                                Are you sure you have double-checked every detail if they are correct and want to proceed with the submission??
                              </p>
                            </ModalBody>
                            <ModalFooter className="flex flex-col">
                              <p className="pb-2 self-center text-center text-sm text-red-500 font-medium">
                                Proceed?
                              </p>
                              <div className="flex justify-between">
                                <Button variant="default" onClick={ onClose } className="w-fit self-center bg-blue-500 hover:bg-blue-400">
                                  Go Back
                                </Button>
                                <Button variant="default" onClick={ handleNext } className="relative dark:bg-white dark:text-black text-white flex justify-center group/modal-btn overflow-hidden bg-green-500 hover:bg-green-400 hover:scale-110 transition ease-in-out">
                                  <span className="group-hover/modal-btn:-translate-x-40 text-center transition duration-500">
                                    Proceed
                                  </span>
                                  <div className="translate-x-40 w-fit group-hover/modal-btn:translate-x-10 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                    ✔
                                  </div>
                                </Button>
                              </div>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </div>
                ): activeStep === 3 ? (
                <Button onClick={() => router.push('/homepage')} className="px-6 py-4 text-sm bg-blue-500 hover:bg-blue-400 hover:scale-110 transition ease-in-out">
                  Go Home
                </Button>
                ):(
                <Button onClick={handleNext} className="px-6 py-4 text-sm bg-green-500 hover:bg-green-400 hover:scale-110 transition ease-in-out">
                  Next
                </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <_Footer />

        <_AuthSliderModal
          open={openRegister || openLogin}
          onClose={closeModal}
          isLogin={openLogin}
        />
      </motion.main>
    </MomentumScroll>
  );
};

export default BecomeTaskerPage;
