"use client";
import Image from "next/image";
import Link from "next/link";
import EventSection from "./Event";
import About from "../about/page";

import GallerySection from "./GallerySection";
import FAQPage from "../faq/page";
export default function Home() {
  return (
    <div>
      <section className="relative  lg:w-[1400px] bg-gradient-to-b from-[#FEF9FD] via-[#FCE7F3] to-[#FEF9FD] py-16 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#f7d276] rounded-full blur-3xl opacity-30 z-0"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#FFA8DE] rounded-full blur-3xl opacity-30 z-0"></div>

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center  md:gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 lg:px-10">
            {/* Tag */}
            <span className="font-jakarta text-[#DD47A3] font-semibold px-5 py-2 bg-[#fdfdfd] rounded-full text-sm inline-block mb-4">
              #Women-Led Tech Community
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-ptserif  text-[#333333] leading-snug">
              Empowering <span className="text-[#DD47A3]">Women</span> in
              Technology
            </h1>

            {/* Description */}
            <p className="text-[#333333] font-jakarta text-base md:text-lg mt-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              Join our vibrant community of women breaking barriers in
              technology. Learn, connect, and grow with like-minded
              professionals.
            </p>

            {/* Button */}
            <Link href="/pages/about">
              <button className="border-fuchsia-600 border-2 flex items-center mt-8 justify-center gap-2 bg-white text-[#333333] px-6 py-2 rounded-full hover:bg-fuchsia-600 hover:text-white transition duration-300 mx-auto lg:mx-0">
                Discover More <span className="text-center text-2xl">+</span>
              </button>
            </Link>

            {/* Decorative Elements */}
            <div className="flex justify-center lg:justify-start mt-4 relative">
              <Image
                src="/assets/home/dot-icon.png"
                alt="Dot pattern"
                width={40}
                height={60}
                className="opacity-70 z-10"
              />
              <Image
                src="/assets/home/circle.png"
                alt="Circle"
                width={150}
                height={150}
                className="absolute -top-4 left-10 lg:mt-12 opacity-50 z-0"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Dot Top */}
            <Image
              src="/assets/home/dot-icon.png"
              alt="Dot pattern"
              width={30}
              height={30}
              className="absolute top-0 left-0 opacity-70 z-10"
            />

            {/* Arch Image */}
            <div className="relative w-[90%] sm:w-150 md:w-[380px] lg:w-[500px] z-20">
              {/* Arch Frame on top */}
              <div className="absolute inset-0 top-3 rounded-t-full "></div>

              {/* Main Group Image */}
              <Image
                src="/assets/group-photo.svg"
                alt="Women in Tech"
                width={600}
                height={600}
                className=" relative z-20 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <EventSection />
      <FAQPage />

      <GallerySection />
    </div>
  );
}
