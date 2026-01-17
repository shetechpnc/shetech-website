"use client";

import { useState } from "react";
import { Check } from "lucide-react";
const options = [
  "Designing",
  "Development",
  "AI / Machine Learning",
  "Cybersecurity",
  "Data Science / Analysis",
  "Game Development",
];

export default function GetInTouch() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <main className="flex flex-col items-center p-4">
      {/* Heading */}
      <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
        Get in touch
      </p>

      <h1 className="text-3xl text-center font-serif mb-10">
        We’d Love <span className="text-pink-500">To Hear</span> From You
      </h1>

      {/* Card */}
      <div className="bg-pink-50 w-full max-w-xl rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Area of Interest</h2>

        <div className="space-y-3">
          {options.map((opt) => {
            const isChecked = selected.includes(opt);

            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggle(opt)}
                className="font-jakarta w-full flex items-center gap-4 rounded-xl px-4 py-3 transition bg-white cursor-pointer"
              >
                {/* Custom checkbox */}
                <span
                  className={`h-5 w-5 rounded-full border flex items-center justify-center
                    ${
                      isChecked
                        ? "bg-pink-500 border-pink-500"
                        : "border-gray-300"
                    }`}
                >
                  {isChecked && <Check size={12} className="text-white" />}
                </span>

                <span className="text-gray-700 text-sm">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6">
        <button
          disabled={selected.length === 0}
          className="px-10 py-3 rounded-full bg-pink-500 text-white text-lg font-medium
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-pink-600 transition"
        >
          Next
        </button>
      </div>
    </main>
  );
}
