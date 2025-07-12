"use client";
import React, { useState } from "react";
import TeamCard from "../../components/TeamCard";

const fullTeam = [
  { name: "Sarika Ghimire", position: "President", photo: "/assets/team/SarikaGhimire.png", tenure: "2024/25" },
  { name: "Priti Ranabhat", position: "Vice-President", photo: "/assets/team/PritiRanabhat.png", tenure: "2024/25" },
  { name: "Pooja Gurung", position: "Secretary", photo: "/assets/team/PoojaGurung.png", tenure: "2024/25" },
  { name: "Savyata Bhurtel", position: "Treasurer", photo: "/assets/team/SavyataBhurtel.png", tenure: "2024/25" },
  { name: "Swostika Shrestha", position: "Graphics Designer", photo: "/assets/team/SwostikaShrestha.png", tenure: "2024/25" },
  { name: "Purnima Wagle", position: "Tech Lead", photo: "/assets/team/PurnimaWagle.png", tenure: "2024/25" },
  { name: "Rashmi KC", position: "Social Media Lead", photo: "/assets/team/RashmiKC.png", tenure: "2024/25" },
  { name: "Binita Dhakal", position: "PR Lead", photo: "/assets/team/BinitaDhakal.png", tenure: "2024/25" },
  { name: "Mamta Thapa", position: "Executive", photo: "/assets/team/MamtaThapa.png", tenure: "2024/25" },
  { name: "Dinisha Gyanwali", position: "Event Manager", photo: "/assets/team/DinishaGyanwali.png", tenure: "2024/25" },
  { name: "Dikshya Devkota", position: "Executive", photo: "/assets/team/DikshyaDevkota.png", tenure: "2024/25" },
];

export default function TeamPage() {
  const [selectedTenure, setSelectedTenure] = useState("2024/25");

  const filteredTeam = fullTeam.filter((member) => member.tenure === selectedTenure);

  return (
    <section className="bg-pink-50 py-10 px-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-serif text-secondary mb-4 md:mb-0 text-center">Meet <span className=" text-pink-600 ">Our Team</span></h1>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-700 font-medium">Sort By:</label>
          <select
            id="sort"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={selectedTenure}
            onChange={(e) => setSelectedTenure(e.target.value)}
          >
            <option value="2024/25">Tenure 2024/25</option>
            <option value="2025/26">Tenure 2025/26</option>
          </select>
        </div>
      </div>

      {filteredTeam.length === 0 ? (
        <p className="text-center text-gray-600">No members available for tenure {selectedTenure}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredTeam.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      )}
    </section>
  );
}
