"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const openGmail = () => {
    const email = "shetechpnc@gmail.com";
    const subject = "Your Subject";
    const body = "Your message here";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <footer className="bg-pink-100 text-center py-14 px-4 font-jakarta">
      {/* Email Section */}
      <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
        Any query? You can email us at
      </p>

      <button
        onClick={openGmail}
        className="cursor-pointer hover:text-pink-500 transition-colors"
      >
        shetechpnc@gmail.com
      </button>

      {/* Divider Text */}
      <p className="uppercase tracking-widest text-sm text-gray-600 mt-10 mb-4">
        Or reach us via
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-10">
        {[
          {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/profile.php?id=61563881190341",
          },
          { icon: <FaYoutube />, link: "https://www.youtube.com/@SheTechPNC" },
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/company/shetech-pnc/posts/?feedView=all",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/shetechpncofficial/",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs tracking-widest text-gray-600">
        © 2025 SHETECH PNC. ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
