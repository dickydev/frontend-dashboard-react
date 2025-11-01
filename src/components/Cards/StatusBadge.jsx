export default function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-600",
    "On Leave": "bg-yellow-100 text-yellow-700",
    "Low Stock": "bg-orange-100 text-orange-700",
    "In Stock": "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}
