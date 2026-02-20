"use client";

import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";

type Event = {
  id: number;
  title: string;
  image: string;
  description: string;
  year: string;
};

export default function EventSection() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/assets/events/data.json")
      .then((res) => res.json())
      .then((data: Event[]) => {
        const firstFour = data.slice(0, 4);
        setEvents(firstFour);
      })
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  return (
    <section
      id="events"
      className="py-16 px-4 sm:px-10 lg:px-20 bg-white scroll-mt-20"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase">Our Events</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-pink-600">Workshops</span> Driving Growth In{" "}
          <br /> Tech And Leadership.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/pages/events"
          className="text-sm font-medium text-gray-800 hover:text-pink-600 transition inline-flex items-center"
        >
          View All Events
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
