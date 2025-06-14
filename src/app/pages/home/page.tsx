export default function Home() {
  return (
    <section className="bg-[#d47bb7] text-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to SheTech
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Empowering women in technology through collaboration, innovation, and growth.
      </p>
      <a
        href="/events"
        className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-100 transition"
      >
        Explore Events
      </a>
    </section>
  );
}
