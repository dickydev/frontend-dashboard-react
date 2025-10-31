import Layout from "../components/Layout/Layout";
import {
  Users,
  UserPlus,
  Calendar,
  Award,
  User,
  MapPin,
  Filter,
  Search,
  DollarSign,
} from "lucide-react";

export default function DashboardHR() {
  const employees = [
    {
      initials: "JD",
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
      location: "New York, NY",
      joinDate: "2023-01-15",
      salary: "$75,000",
      status: "Active",
    },
    {
      initials: "JS",
      name: "Jane Smith",
      position: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      joinDate: "2022-08-20",
      salary: "$85,000",
      status: "Active",
    },
    {
      initials: "MJ",
      name: "Mike Johnson",
      position: "Sales Representative",
      department: "Sales",
      location: "Chicago, IL",
      joinDate: "2023-03-10",
      salary: "$60,000",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
        Human Resources
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Employees</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">156</h2>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">New Hires</p>
            <h2 className="text-xl sm:text-2xl font-bold text-green-600">12</h2>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <UserPlus className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">On Leave</p>
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-600">8</h2>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Calendar className="h-6 w-6 text-yellow-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Avg Performance</p>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">4.2</h2>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <Award className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="relative grow w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search employees..."
              className="border border-gray-300 rounded-lg pl-9 pr-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {employees.map((emp, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md hover:translate-y-px transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full flex justify-center items-center text-lg font-semibold">
                    {emp.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {emp.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {emp.position}
                    </p>
                  </div>
                </div>
                <p className="text-green-700 bg-green-100 px-3 py-1 text-[11px] sm:text-xs rounded font-medium">
                  {emp.status}
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2 text-sm text-gray-700 mt-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span>{emp.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{emp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Joined {emp.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-500" />
                  <span className="font-semibold text-gray-800">
                    {emp.salary}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                <button className="text-blue-700 hover:underline font-medium">
                  View
                </button>
                <button className="text-green-700 hover:underline font-medium">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
