import React from "react";
import { assets } from "../assets/assets";
import {motion} from "framer-motion"

const Description = () => {
  return (
    <motion.div 
     initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div >
          <h2 className="text-3xl font-medium max:w-lmb-4g">Introducing the AI-powered Text to Image Generator</h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery,our tool
            transform your text into eye-catching image with just a few clicks.
            Imagine it, describe it, and watch it come to life instantly.🚀
          </p>
          <p className="text-gray-600">
            Transform simple words into breathtaking visuals with our free AI
            Image Generator. Whether you need professional designs, creative
            artwork, or unique imagery, our tool makes it effortless. Just
            describe your idea, and watch AI turn it into stunning, high-quality
            images in seconds. No design skills needed — only your imagination.
            🚀
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
