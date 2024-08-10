import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blueGray-200 pt-6 pb-4 sm:pt-8 sm:pb-6 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mb-4 lg:mb-0">
            <motion.h4
              className="text-2xl font-semibold text-blueGray-700 px-3"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's keep in touch!
            </motion.h4>
            <motion.h5
              className="text-md mt-1 mb-4 text-blueGray-600 px-3"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Find us on any of these platforms. We respond within 1-2 business
              days.
            </motion.h5>
            <motion.div
              className="flex space-x-2 px-3"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-8 w-8 rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-8 w-8 rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-8 w-8 rounded-full outline-none focus:outline-none"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </motion.div>
          </div>
          <div className="w-full lg:w-6/12 px-4 flex flex-wrap flex-row-reverse">
          <div className="w-full flex flex-wrap lg:flex-row-reverse lg:flex-1 lg:w-6/12 px-4">
            <div className="w-full flex flex-wrap lg:flex-row  lg:space-x-4">
              <div className="flex-1 mb-4 lg:mb-0">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled text-sm">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled text-sm">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-red-500 block pb-1"
                      href=""
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </div>
        <hr className="my-4 border-blueGray-300" />
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-8/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
              All Rights Reserved by Nike
              <a
                href=""
                className="text-blueGray-500 hover:text-blueGray-800"
              >
            
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
