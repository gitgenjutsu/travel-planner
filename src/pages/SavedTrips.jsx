import { Link } from "react-router-dom";

const trips = [
  {
    id: 1,
    title: "Tokyo Adventure",
    destination: "Tokyo, Japan",
    startDate: "2025-09-10",
    endDate: "2025-09-15",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
  },
  {
    id: 2,
    title: "Paris Getaway",
    destination: "Paris, France",
    startDate: "2025-12-01",
    endDate: "2025-12-07",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    id: 3,
    title: "Bali Retreat",
    destination: "Bali, Indonesia",
    startDate: "2026-01-20",
    endDate: "2026-01-30",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export default function SavedTrips() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        📂 Your Saved Trips
      </h1>

      {trips.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No trips yet — start planning your first adventure!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold dark:text-white">
                  {trip.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {trip.destination}
                </p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                  {new Date(trip.startDate).toLocaleDateString()} —{" "}
                  {new Date(trip.endDate).toLocaleDateString()}
                </p>
                <Link to={`/dashboard/trip/${trip.id}`}>
                  <button className="mt-4 w-full px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
