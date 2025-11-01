import Layout from "../components/Layout/Layout";
import {
  Users,
  UserPlus,
  Calendar,
  Award,
  User,
  MapPin,
  DollarSign,
} from "lucide-react";
import InfoCard from "../components/Cards/InfoCard";
import StatusBadge from "../components/Cards/StatusBadge";
import SearchFilterBar from "../components/Shared/SearchFilterBar";

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
        <InfoCard
          label="Total Employees"
          value="156"
          icon={<Users className="h-6 w-6" />}
          color="blue"
          textColor="blue"
        />
        <InfoCard
          label="New Hires"
          value="12"
          icon={<UserPlus className="h-6 w-6" />}
          color="green"
          textColor="green"
        />
        <InfoCard
          label="On Leave"
          value="8"
          icon={<Calendar className="h-6 w-6" />}
          color="yellow"
          textColor="yellow"
        />
        <InfoCard
          label="Avg Performance"
          value="4.2"
          icon={<Award className="h-6 w-6" />}
          color="purple"
          textColor="purple"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <SearchFilterBar placeholder="Search employees..." />

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
                <StatusBadge status={emp.status} />
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
