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
} from "lucide-react";

export default function Sidebar({ isOpen }) {
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
    <aside
      className={`fixed md:relative z-40 h-full bg-white shadow-md flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-16 flex items-center justify-center border-b px-4">
        <div className="flex items-center gap-2">
          <Building2 className="text-blue-600" size={22} />
          {isOpen && (
            <span className="text-lg font-semibold text-blue-600">
              ERP System
            </span>
          )}
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
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
              <span className="text-sm font-medium truncate">{link.name}</span>
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
  );
}
