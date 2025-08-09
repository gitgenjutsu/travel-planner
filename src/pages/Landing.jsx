import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          🌍 AI Travel Planner
        </h1>
        <nav>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Log In
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Plan Smarter. Travel Better.
        </h2>
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 mb-8">
          Discover destinations, create AI-powered itineraries, and explore the
          world with friends — all in one place.
        </p>
        <Link
          to="/signup"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500 text-sm dark:text-gray-400">
        © {new Date().getFullYear()} AI Travel Planner. All rights reserved.
      </footer>
    </div>
  );
}
