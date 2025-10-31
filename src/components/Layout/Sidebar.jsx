import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Briefcase,
  DollarSign,
  Folder,
  BarChart3,
  LogOut,
  Building2,
  X,
} from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const links = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Inventory", path: "/inventory", icon: <Package size={18} /> },
    { name: "CRM", path: "/crm", icon: <Briefcase size={18} /> },
    { name: "Finance", path: "/finance", icon: <DollarSign size={18} /> },
    { name: "Human Resources", path: "/hr", icon: <Users size={18} /> },
    { name: "Projects", path: "/projects", icon: <Folder size={18} /> },
    { name: "Reports", path: "/reports", icon: <BarChart3 size={18} /> },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden backdrop-blur-sm bg-white/10"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed md:relative top-0 left-0 z-40 h-screen bg-white shadow-md flex flex-col transition-all duration-300 
          ${
            isOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full md:translate-x-0 md:w-20"
          }`}
      >
        <div className="h-16 flex items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Building2 className="text-blue-600" size={22} />
            {isOpen && (
              <span className="text-lg font-semibold text-blue-600">
                ERP System
              </span>
            )}
          </div>

          <button
            className="md:hidden text-gray-500 hover:text-blue-600 transition"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => toggleSidebar(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              {link.icon}
              {isOpen && (
                <span className="text-sm font-medium truncate">
                  {link.name}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t">
          <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 w-full transition">
            <LogOut size={18} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
