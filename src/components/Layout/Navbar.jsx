import { useLocation } from "react-router-dom";
import { Bell, Search, Settings, User, Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/inventory": "Inventory Management",
    "/crm": "Customer Relationship Management",
    "/finance": "Finance",
    "/hr": "Human Resources",
    "/projects": "Projects",
    "/reports": "Reports",
  };

  const title = pageTitles[location.pathname] || "ERP System";

  return (
    <header className="h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 bg-white border-b sticky top-0 z-30">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative hidden md:block w-48 lg:w-64">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg pl-9 pr-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        </div>

        <button className="md:hidden text-gray-600 hover:text-blue-600">
          <Search size={20} />
        </button>

        <button className="relative text-gray-600 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="hidden sm:block text-gray-600 hover:text-blue-600">
          <Settings size={20} />
        </button>

        <div className="flex items-center gap-2 border-l pl-3 sm:pl-4">
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
