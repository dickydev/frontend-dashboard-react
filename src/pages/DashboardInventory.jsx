import Layout from "../components/Layout/Layout";
import {
  Package,
  AlertTriangle,
  TrendingUp,
  Boxes,
  Search,
  Filter,
  Plus,
  Box,
} from "lucide-react";
import StatusBadge from "../components/Cards/StatusBadge";

export default function DashboardInventory() {
  const products = [
    {
      name: "Wireless Headphones",
      sku: "WH-001",
      category: "Electronics",
      stock: 156,
      price: "$79.99",
      status: "In Stock",
    },
    {
      name: "Smart Watch",
      sku: "SW-002",
      category: "Wearables",
      stock: 12,
      price: "$199.99",
      status: "Low Stock",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Inventory Management
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Manage your products, track stock levels, and monitor inventory.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm sm:text-base font-medium w-full sm:w-auto">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              1,247
            </h2>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Low Stock Items</p>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-600">
              23
            </h2>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Value</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              $89,432
            </h2>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Categories</p>
            <h2 className="text-xl sm:text-2xl font-bold text-purple-600">
              12
            </h2>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <Boxes className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          <div className="relative grow">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg pl-9 pr-3 py-2 sm:h-10 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
            />
          </div>

          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition w-full sm:w-auto text-sm sm:text-base">
            <Filter size={16} />
            <span className="font-medium">Filter</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm sm:text-base min-w-[700px]">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 px-4 font-medium">Product</th>
                <th className="py-3 px-4 font-medium">SKU</th>
                <th className="py-3 px-4 font-medium">Category</th>
                <th className="py-3 px-4 font-medium">Stock</th>
                <th className="py-3 px-4 font-medium">Price</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4 flex items-center gap-2 sm:gap-3 font-medium text-gray-800">
                    <Box className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />{" "}
                    {p.name}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{p.sku}</td>
                  <td className="py-4 px-4 text-gray-600">{p.category}</td>
                  <td className="py-4 px-4 text-gray-700 font-medium">
                    {p.stock}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-semibold">
                    {p.price}
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="py-4 px-4 text-right space-x-3">
                    <button className="text-blue-600 hover:underline font-medium text-sm sm:text-base">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline font-medium text-sm sm:text-base">
                      Delete
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
