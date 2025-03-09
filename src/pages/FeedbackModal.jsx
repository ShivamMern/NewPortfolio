import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";
import formImage from "../assets/FormImage.jpg";

const FeedbackModal = ({ open, handleClose ,count ,setFeedBack ,feedBack}) => {






 

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex overflow-hidden"
          >
            {/* Left Side Image */}
            <div className="w-1/2 hidden lg:block p-3">
              <img
                src={formImage}
                alt="Feedback"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side Content */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col">
              <h2 className="text-2xl font-bold">Your Feedback Matters</h2>
              <p className="text-gray-600">
                We value your opinion! Let us know what you think.
              </p>
              <p className="font-semibold mt-2">
                💬 {count} people recorded their feedback
              </p>

              <form
                
                className="flex flex-col mt-4"
              >
                <textarea
                  id="feedback"
                  className="outline-none p-3 w-full h-24 bg-gray-100 border border-gray-300 rounded-lg"
                  placeholder="Write your feedback..."
                  value={feedBack}
                  onChange={(e) => setFeedBack(e.target.value)}
                />
               

                <NavHashLink
                  smooth
                  to="#contact"
                  onClick={() => {
                    // setHome(false);
                    // setAbout(false);
                    // setPortfolio(false);
                    // setContact(true);
                    handleClose()
                  }}
                  className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold shadow-md transition-all hover:scale-105 text-center"
                >
                  Record Feedback
                </NavHashLink>
              </form>

              <button
                onClick={handleClose}
                className="mt-4 text-gray-500 hover:text-gray-700 self-end"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FeedbackModalWrapper = ({count ,setFeedBack ,feedBack}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasSeenModal", "true");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  return <FeedbackModal open={isOpen} handleClose={() => setIsOpen(false)} count={count} setFeedBack={setFeedBack} feedBack={feedBack} />;
};

export default FeedbackModalWrapper;
