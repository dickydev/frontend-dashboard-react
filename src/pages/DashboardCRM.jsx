import Layout from "../components/Layout/Layout";
import {
  Users,
  UserCheck,
  Plus,
  TrendingUp,
  Search,
  Filter,
  Mail,
  Phone,
  Building,
} from "lucide-react";
import StatusBadge from "../components/Cards/StatusBadge";
import Button from "../components/Forms/Button";

export default function DashboardCRM() {
  const customers = [
    {
      initials: "A",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 (555) 123-4567",
      company: "Tech Solutions Inc.",
      value: "$12,450",
      status: "Active",
      lastContact: "2 days ago",
    },
    {
      initials: "B",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "+1 (555) 234-5678",
      company: "Digital Marketing Co.",
      value: "$8,320",
      status: "Active",
      lastContact: "1 week ago",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Customer Relationship Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage customer relationships and track interactions.
          </p>
        </div>

        <Button
          label="Add Customer"
          icon={<Plus size={16} />}
          color="blue"
          size="md"
          onClick={() => console.log("Add Customer clicked")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Customers</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              1,247
            </h2>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Active Customers</p>
            <h2 className="text-xl sm:text-2xl font-bold text-green-600">
              892
            </h2>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <UserCheck className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">New This Month</p>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">45</h2>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <Plus className="h-6 w-6 text-blue-500" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Customer Value</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              $187,450
            </h2>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="h-6 w-6 text-green-600" />
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
              placeholder="Search customers..."
              className="border border-gray-300 rounded-lg pl-9 pr-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <Button
            label="Filter"
            icon={<Filter size={16} />}
            outline
            color="gray"
            onClick={() => console.log("Filter clicked")}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm min-w-[700px]">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 px-4 font-medium">Customer</th>
                <th className="py-3 px-4 font-medium">Contact</th>
                <th className="py-3 px-4 font-medium">Company</th>
                <th className="py-3 px-4 font-medium">Value</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Last Contact</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4 flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-semibold">
                      {c.initials}
                    </div>
                    <span className="font-medium text-gray-800 text-sm sm:text-base">
                      {c.name}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{c.email}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{c.phone}</span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-gray-700 flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-400" />
                    {c.company}
                  </td>

                  <td className="py-4 px-4 font-semibold text-gray-800">
                    {c.value}
                  </td>

                  <td className="py-4 px-4">
                    <StatusBadge status={c.status} />
                  </td>

                  <td className="py-4 px-4 text-gray-500 text-sm">
                    {c.lastContact}
                  </td>

                  <td className="py-4 px-4 text-sm space-x-3">
                    <button className="text-blue-600 hover:underline font-medium">
                      Contact
                    </button>
                    <button className="text-green-700 hover:underline font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
