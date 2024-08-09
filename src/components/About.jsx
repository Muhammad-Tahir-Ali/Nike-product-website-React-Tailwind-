import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white mt-10 pt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Revolutionizing Sports and Business
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-500 sm:text-xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Nike, the global sportswear giant, has not just dominated the
            athletic apparel industry; it has revolutionized the way we perceive
            sports and business. Founded in 1964 as Blue Ribbon Sports by Bill
            Bowerman and Phil Knight, the company rebranded as Nike in 1971,
            drawing inspiration from the Greek goddess of victory. Since then,
            Nike has become synonymous with innovation, performance, and style.
          </motion.p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <motion.div
              className="flex flex-col px-4 py-8 text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <dt className="text-lg font-medium text-gray-500">
                Total Sales
              </dt>
              <dd className="text-3xl font-extrabold text-red-600 sm:text-4xl md:text-5xl">
                $4.8m
              </dd>
            </motion.div>

            <motion.div
              className="flex flex-col px-4 py-8 text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <dt className="text-lg font-medium text-gray-500">
                Official Addons
              </dt>
              <dd className="text-3xl font-extrabold text-red-600 sm:text-4xl md:text-5xl">
                24
              </dd>
            </motion.div>

            <motion.div
              className="flex flex-col px-4 py-8 text-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <dt className="text-lg font-medium text-gray-500">
                Total Addons
              </dt>
              <dd className="text-3xl font-extrabold text-red-600 sm:text-4xl md:text-5xl">
                86
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
