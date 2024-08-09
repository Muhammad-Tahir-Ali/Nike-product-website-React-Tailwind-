import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageShuffler = ({ title, description, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changed interval to 3 seconds for better UX

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <motion.h1
            className="text-3xl font-bold mb-4 sm:text-4xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg mb-4 sm:text-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {description}
            <br />
            SERVICES. TRY OUR NEW SHOES NOW AND ENJOY THE EXPERIENCE THAT
            YOU WILL GET.
          </motion.p>
        </div>

        {/* Image Display */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-fit h-auto rounded-lg shadow-lg lg:w-[70%]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageShuffler;
