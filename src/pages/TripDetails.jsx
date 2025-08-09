import { useParams, useNavigate } from "react-router-dom";

export default function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy trip data (will be replaced by Firebase later)
  const trip = {
    id,
    title: "Tokyo Adventure",
    destination: "Tokyo, Japan",
    startDate: "2025-09-10",
    endDate: "2025-09-15",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    itinerary: [
      { day: 1, activity: "Visit Shibuya Crossing & Hachiko Statue" },
      { day: 2, activity: "Explore Asakusa and Senso-ji Temple" },
      { day: 3, activity: "Day trip to Mount Fuji" },
    ],
    notes: "Remember to try ramen at Ichiran!",
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
      >
        ← Back
      </button>

      {/* Hero Image */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Trip Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold dark:text-white">{trip.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{trip.destination}</p>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          {new Date(trip.startDate).toLocaleDateString()} —{" "}
          {new Date(trip.endDate).toLocaleDateString()}
        </p>
      </div>

      {/* Itinerary */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          🗓 Itinerary
        </h2>
        <ul className="space-y-2">
          {trip.itinerary.map((item) => (
            <li
              key={item.day}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <span className="font-semibold">Day {item.day}:</span>{" "}
              {item.activity}
            </li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          📝 Notes
        </h2>
        <p className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {trip.notes}
        </p>
      </div>

      {/* File Upload Placeholder */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          📂 Uploaded Files
        </h2>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400">
          No files uploaded yet.
        </div>
      </div>
    </div>
  );
}
