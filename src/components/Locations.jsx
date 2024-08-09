import React from "react";
import { motion } from "framer-motion";
import map from "../assets/map.png";

const Locations = () => {
  return (
    <>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold flex items-center justify-center mt-8"
      ><br /><br />
        Our Locations
      </motion.h1>
      <motion.div
        className="flex items-center justify-center bg-white rounded-lg mt-6 px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.img
          src={map}
          alt="map"
          className="object-cover rounded-lg w-full max-w-4xl pb-4"
        />
      </motion.div>
    </>
  );
};

export default Locations;
