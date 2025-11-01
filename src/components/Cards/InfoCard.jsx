export default function InfoCard({
  label,
  value,
  icon,
  color = "blue",
  textColor,
}) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    gray: "bg-gray-100 text-gray-600",
  };
  const textColorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    red: "text-red-600",
    gray: "text-gray-600",
  };

  const colorClass = colorMap[color] || colorMap.blue;

  return (
    <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2
          className={`text-xl sm:text-2xl font-bold ${
            textColorMap[textColor] || textColorMap.blue
          } `}
        >
          {value}
        </h2>
      </div>
      <div className={`${colorClass.split(" ")[0]} p-3 rounded-lg`}>
        <span className={colorClass.split(" ")[1]}>{icon}</span>
      </div>
    </div>
  );
}
