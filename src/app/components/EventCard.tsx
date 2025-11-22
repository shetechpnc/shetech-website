"use client";
import React from "react";

type EventProps = {
  title: string;
  image: string;
  description: string;
};

const EventCard = ({ title, image, description }: EventProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow hover:shadow-md transition group">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      {/* Hover Text Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm mt-1 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
