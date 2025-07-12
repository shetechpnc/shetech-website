// "use client";
// import React from "react";

// export default function TeamCard({ name, position, photo }: { name: string; position: string; photo: string }) {
//   return (
//     <div className="flex-shrink-0 w-64 h-80 rounded-lg shadow-lg p-4 flex flex-col items-center justify-start bg-white">
//       <img src={photo} alt={name} className="w-full h-56 object-cover mb-4 rounded-md" />
//       <h2 className="text-xl font-semibold text-pink-600 text-center">{name}</h2>
//       <p className="text-gray-600 text-center">{position}</p>
//     </div>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TeamCard({
  name,
  position,
  photo,
}: {
  name: string;
  position: string;
  photo: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex-shrink-0 w-64 h-80 rounded-lg shadow-lg p-4 flex flex-col items-center justify-start bg-white cursor-pointer"
    >
      <img
        src={photo}
        alt={name}
        className="w-full h-56 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold text-pink-600 text-center">
        {name}
      </h2>
      <p className="text-gray-600 text-center">{position}</p>
    </motion.div>
  );
}
