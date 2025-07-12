"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
    "/assets/gallery/img1.png",
  ];

  return (
    <section className="bg-[#FEF9FD] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h4 className="uppercase text-gray-500 text-sm font-medium tracking-wide">Our Gallery</h4>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#333]">
          Glimpses Of <span className="text-pink-500">Progress And Community</span> Building
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-sm">
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <Link href="/pages/gallery">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 cursor-pointer group"
          >
            <p className="font-semibold text-[#555555] group-hover:text-pink-500 transition-colors duration-300">
              View Full Team
            </p>
            <svg
              className="transition-colors duration-300 group-hover:fill-pink-500"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.189 7.59359H1.80469C1.53288 7.59359 1.3125 7.78248 1.3125 8.01546V9.98421C1.3125 10.2172 1.53288 10.4061 1.80469 10.4061H14.189V12.0253C14.189 12.7771 15.2493 13.1535 15.8694 12.622L19.3992 9.59647C19.7836 9.26695 19.7836 8.73272 19.3992 8.40323L15.8694 5.37772C15.2493 4.84619 14.189 5.22265 14.189 5.97436V7.59359Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
