import React from "react";
import image from "../assets/hero-image.png";
import { BsAmazon } from "react-icons/bs";
import { SiFlipkart } from "react-icons/si";
import { SiMdnwebdocs } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 mt-6 md:mt-10 py-8 md:py-10">
      <div className="flex flex-wrap md:flex-wrap items-center pt-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            YOUR FEET DESERVE THE BEST
          </motion.h1>
          <motion.p
            className="mb-4 text-sm sm:text-base lg:text-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES SERVICES. TRY OUR NEW SHOES NOW AND ENJOY THE EXPERIENCE
            THAT YOU WILL GET.
          </motion.p>
          <motion.span
            className="flex flex-col sm:flex-row gap-4 mt-3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button
              onClick={() => window.location.href = "/products"}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:border-2 hover:border-black hover-glow"
            >
              SHOP NOW
            </button>
            <div className="flex justify-center gap-4 mt-4 sm:mt-0">
              <BsAmazon className="text-yellow-600 text-3xl lg:text-4xl p-2 border border-yellow-600 rounded-full bg-white hover:cursor-pointer hover-glow" />
              <SiFlipkart className="text-blue-600 text-3xl lg:text-4xl p-2 border border-blue-600 rounded-full bg-white hover:cursor-pointer hover-glow" />
              <SiMdnwebdocs className="text-green-600 text-3xl lg:text-4xl p-2 border border-green-600 rounded-full bg-white hover:cursor-pointer hover-glow" />
            </div>
          </motion.span>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 px-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img
            src={image}
            alt="shoe image of hero section"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
