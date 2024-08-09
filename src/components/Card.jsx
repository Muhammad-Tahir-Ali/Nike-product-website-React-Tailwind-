import React from "react";
import { motion } from "framer-motion";

const Inventory = (props) => {
  return (
    <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-black dark:bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        class="h-48 w-full object-cover object-center "
        src={props.image}
        alt="Product Image"
      />
      <div class="p-4 text-white">
        <h2 class="mb-2 text-lg font-medium dark:text-black text-black">
          {props.title}
        </h2>
        <p class="mb-2 text-base dark:text-black text-black">
          {props.description}
        </p>
        <div class="flex items-center">
          <p class="mr-2 text-lg font-semibolddark:text-black text-black">
            $20.00
          </p>
          <p class="text-base  font-medium text-gray-400 line-through dark:text-gray-500">
            $25.00
          </p>
          <p class="ml-auto text-base font-medium text-green-400">20% off</p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
