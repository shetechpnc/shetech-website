"use client"
import Image from "next/image";
import {motion} from "framer-motion"

export default function About() {
  return (
    <section className="px-6 py-12 max-w-6xl pb-0 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
       
        <div className="relative ">
           <motion.div
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease:"easeInOut"}
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-1 mr-[50px] cursor-pointer"
            >

          <Image 
            src="/assets/team.svg"
            alt="Group Of Women In Tech"
            width={600}
            height={400}
            className="w-full h-auto max-w-[410px] transition-transform duration-300 ease-in-out hover:scale-110"
          />
            </motion.div>
          
          
        </div>

        <div className="space-y-10 pb-0">
           <motion.div
              whileHover={{
                y: -6,
                transition: { duration:0.3, ease:"easeInOut" }
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-1 mr-[50px] cursor-pointer"
            >

          <div>
            <h4 className="uppercase text-gray-500 font-semibold text-lg mb-4">About us</h4>
            <h2 className="text-4xl md:text-4xl font-serif mb-4">
              Cultivating <span className="text-[#dd47a3]">Tech Excellence</span> Among Women
            </h2>
            <p className="text-gray-700 text-lg font-sans leading-snug mb-[70px] ">
              We are a women-led organization dedicated to empowering and advancing women in the field of technology.
            </p>
          </div>
            </motion.div>

          
          <div className="grid sm:grid-cols-2 font-sans mb-0 relative ">
            
            <div className="flex flex-col items-start space-y-0 gap-1 mr-[50px] transition-shadow ease-in-out hover:shadow-lg cursor-pointer group">
               <motion.div
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-1 mr-[50px] cursor-pointer"
            >

              <Image src="/assets/target.svg"
              alt="Target" 
              width={60} 
              height={60} />
              <div className="w-full text-left transition-transform group-hover:animate-bounce-once">
                <h5 className="text-2xl text-gray-900 mb-4">OUR VISION</h5>
                <p className="text-gray-600 text-md leading-snug mb-4 mx-auto  ">
                  To empower and inspire women to become leaders and innovators in the tech industry.
                </p>
              </div>
            </motion.div>
            </div>
            <div className="flex flex-col items-start space-y-0 gap-1 ml-[25px] transition-shadow ease-in-out hover:shadow-lg cursor-pointer">
               <motion.div
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-1 mr-[50px] cursor-pointer"
            >

              <Image src="/assets/rocket.svg"
               alt="Rocket" 
               width={60} 
               height={60}
               className="float" />
              <div>
                <h5 className="text-2xl text-gray-900 mb-4">OUR MISSION</h5>
                <p className="text-gray-600 text-md leading-snug">
                  To support women in tech through education, opportunities, and a strong community network.
                </p>
              </div>
            </motion.div>

            </div>
          </div>
        </div>
      <div className="hidden lg:block absolute mt-[600px] right-0 z-10 pointer-events-auto sm:overflow-hidden sm:h-[240px] sm:mt-[300px] md:h-[300px] md:mt-[300px] lg:h-[300] lg:mt-[400px] ">
        <Image src = "/assets/yellow.svg"
        alt = "yellow"
        width = {170}
        height = {242}
        className="translate-y-[50px]"/>
      </div>
      </div>
    </section>
  );
}
