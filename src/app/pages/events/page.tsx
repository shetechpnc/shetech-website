'use client';

import React, { useEffect, useState } from 'react';

type Event = {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
};

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState('Best Match');

  useEffect(() => {
    fetch('/assets/events/data.json')
      .then((res) => res.json())
      .then((json: Event[]) => setEvents(json))
      .catch((err) => console.error('Failed to load events:', err));
  }, []);

  const filteredEvents =
    filter === 'Best Match' ? events : events.filter((e) => e.year === filter);

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

      {/* Main Content */}
      <div className="relative z-10 p-6">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
      
        </div>

        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl text-pink-600 font-bold mb-2">Our Events</h1>
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


        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-md transition group"
            >
              <img
                src={event.image}
                alt={event.title}
  className="w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 flex flex-col justify-end">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm mt-1 line-clamp-3">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
