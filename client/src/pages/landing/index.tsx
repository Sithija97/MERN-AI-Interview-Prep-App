/* eslint-disable @typescript-eslint/no-unused-vars */
import { ROUTES } from "@/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import { APP_FEATURES } from "@/utils/data";
import { SignIn, SignUp } from "@/pages/auth";
import { Modal } from "@/components";

export const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(ROUTES.SIGN_IN);

  const handleCTA = () => {};

  return (
    <>
      <div className="w-full min-h-full bg-blue-50 2xl:px-80">
        <div className="hidden md:block w-[500px] h-[500px] bg-blue-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* header */}
          <header className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
            <div className="text-xl text-black font-bold">
              Interview Prep AI
            </div>
            <button
              className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer w-full sm:w-auto"
              onClick={() => setOpenAuthModal(true)}
            >
              Sign in / Sign Up
            </button>
          </header>

          {/* hero content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                  <LuSparkles /> Ai Powered
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-medium mb-6 leading-tight">
                Ace Interviews with <br />{" "}
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,#3b82f6_0%,_#1d4ed8_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-base sm:text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                Get role specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is
                here.
              </p>

              <button
                className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-blue-100 hover:text-black border border-blue-50 hover:border-blue-300 transition-colors cursor-pointer w-full sm:w-auto"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10 mb-20 md:mb-56">
        <div>
          <section className="flex items-center justify-center -mt-16 md:-mt-36">
            <img
              src="https://cdn.dribbble.com/userupload/17604158/file/original-2338d17434e2373c57539c6549b4da08.jpg?resize=1504x965&vertical=center"
              alt="Hero Img"
              className="w-full max-w-[90vw] md:max-w-[80vw] rounded-lg object-cover"
            />
          </section>
        </div>

        <div className="w-full min-h-full bg-blue-50 mt-10">
          <div className="container mx-auto px-4 2xl:px-80 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-xl sm:text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>
              <div className="flex flex-col items-center gap-8">
                {/* first 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-blue-50 p-6 rounded-xl shadow-xs hover:shadow-lg shadow-blue-100 transition border border-blue-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* remaining 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-blue-100 p-6 rounded-xl shadow-xs hover:shadow-lg shadow-blue-200 transition border border-blue-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          Happy Coding...
        </div>
      </div>

      {/* <Modal title="" isOpen={true} onClose={() => {}}>
        <div>
          {currentPage === ROUTES.SIGN_IN && (
            <SignIn setCurrentPage={setCurrentPage} />
          )}
          {currentPage === ROUTES.SIGN_UP && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal> */}
    </>
  );
};
