"use client";
import React, { useEffect, useState } from "react";
import TeamCard from "../../components/TeamCard";

type Team = {
  name: string;
  position: string;
  photo: string;
  tenure: string;
};

export default function TeamPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTenure, setSelectedTenure] = useState("2025/26");

  useEffect(() => {
    fetch(`/assets/team/${selectedTenure.replace("/", "-")}/data.json`)
      .then((res) => res.json())
      .then((json: Team[]) => setTeams(json))
      .catch((err) => console.error("Failed to load teams:", err));
  }, [selectedTenure]);

  const filteredTeam = teams.filter(
    (member) => member.tenure === selectedTenure
  );

  return (
    <section className="bg-pink-50 py-10 px-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-serif text-secondary mb-4 md:mb-0 text-center">
          Meet <span className=" text-pink-600 ">Our Team</span>
        </h1>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-gray-700 font-medium">
            Sort By:
          </label>
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
        <p className="text-center text-gray-600">
          No members available for tenure {selectedTenure}
        </p>
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
