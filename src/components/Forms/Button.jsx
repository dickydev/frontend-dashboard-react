export default function Button({
  label,
  icon,
  onClick,
  color = "blue",
  outline = false,
  fullWidth = false,
  size = "md",
  type = "button",
}) {
  const colorMap = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
    gray: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  const outlineMap = {
    blue: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    green: "border border-green-600 text-green-600 hover:bg-green-50",
    gray: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  const sizeMap = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm sm:text-base",
    lg: "px-5 py-3 text-base",
  };

  const baseStyle =
    "flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500";

  const colorStyle = outline
    ? outlineMap[color] || outlineMap.gray
    : colorMap[color] || colorMap.blue;
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${colorStyle} ${sizeMap[size]} ${widthStyle}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </button>
  );
}
