"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TeamCard from "../../components/TeamCard";

type Team = {
  name: string;
  position: string;
  photo: string;
  tenure: string;
};

export default function TeamSection() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch(`/assets/team/2025-26/data.json`)
      .then((res) => res.json())
      .then((json: Team[]) => setTeams(json))
      .catch((err) => console.error("Failed to load teams:", err));
  }, []);

  return (
    <section id="teams" className="bg-pink-50 py-10 mt-20 scroll-mt-20">
      <p className="text-center text-[#555555] font-semibold">OUR TEAM</p>
      <h1 className="text-4xl text-center font-serif mb-8">
        The faces of future <span className="text-pink-500">Women Leaders</span>
      </h1>

      <motion.div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-8 w-max"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        >
          {teams.concat(teams).map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </motion.div>
      </motion.div>

      <Link href="/pages/teams">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 mt-6 cursor-pointer group"
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
    </section>
  );
}
