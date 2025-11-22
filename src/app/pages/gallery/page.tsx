// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Gallery() {
//   const images = [
//     "/assets/gallery/img1.png",
//     "/assets/gallery/img2.png",
//     "/assets/gallery/img3.png",
//     "/assets/gallery/img4.png",
//     "/assets/gallery/img5.png",
//     "/assets/gallery/img6.png",
//     "/assets/gallery/img7.png",
//     "/assets/gallery/img8.png",
//     "/assets/gallery/img10.png",
//     "/assets/gallery/img11.png",
//     "/assets/gallery/img12.png",
//     "/assets/gallery/img13.png",
//     "/assets/gallery/img14.png",
//     "/assets/gallery/img15.png",
//     "/assets/gallery/img16.png",
//     "/assets/gallery/img17.png",
//     "/assets/gallery/img18.png",
//   ];

//   return (
//     <section className="bg-[#FEF9FD] py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h4 className="uppercase text-gray-500 text-sm font-medium tracking-wide">Our Gallery</h4>
//         <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#333]">
//           Glimpses Of <span className="text-pink-500">Progress And Community</span> Building
//         </h2>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="overflow-hidden rounded-lg shadow-sm"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           >
//             <Image
//               src={img}
//               alt={`Gallery image ${index + 1}`}
//               width={500}
//               height={400}
//               className="w-full h-auto object-cover rounded-lg"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';

type GalleryItem = {
  id: number;
  image: string;
  year: string;
};

const Gallery = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState('Best Match');

  useEffect(() => {
    fetch('/assets/gallery/data.json')
      .then((res) => res.json())
      .then((json: GalleryItem[]) => setGallery(json))
      .catch((err) => console.error('Failed to load gallery data:', err));
  }, []);

  const filteredGallery =
    filter === 'Best Match' ? gallery : gallery.filter((g) => g.year === filter);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* 🌈 Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0.2% 0.2%, #fff7c2 8%, transparent 12%),
            radial-gradient(circle at 85% 60%, #ffd4e7 5%, transparent 14%),
            linear-gradient(to bottom right, #fff1f9, #fff7f1, #ffe6f6)
          `,
        }}
      ></div>

      <div className="relative z-10 p-6">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl text-pink-600 font-bold mb-2">Our Gallery</h1>
          <div className="w-42 h-1 bg-pink-600 rounded-full mb-1"></div>
          <div className="border-t border-gray-300 mb-8 -mx-6"></div>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-6 flex items-center gap-2 relative w-fit">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Sort By:
          </label>
          <div className="relative">
            <select
              id="sort"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-sm px-3 py-1 pr-8 rounded-md border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 appearance-none"
            >
              <option value="Best Match">Best Match</option>
              <option value="2024/25">Tenure 2024/25</option>
              <option value="2025/26">Tenure 2025/26</option>
            </select>

            {/* Chevron Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-md transition group"
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

