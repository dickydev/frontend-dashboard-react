import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768); // default open only on desktop

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Responsiveness: auto close sidebar when screen < 768
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
