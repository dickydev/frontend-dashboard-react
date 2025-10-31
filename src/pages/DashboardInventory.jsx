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
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Inventory Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your products, track stock levels, and monitor inventory.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm font-medium">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-2xl font-bold text-gray-800">1,247</h2>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Low Stock Items</p>
            <h2 className="text-2xl font-bold text-orange-600">23</h2>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-orange-500" />
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Value</p>
            <h2 className="text-2xl font-bold text-gray-800">$89,432</h2>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Categories</p>
            <h2 className="text-2xl font-bold text-purple-600">12</h2>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <Boxes className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative grow">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg pl-9 pr-3 h-10 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition shrink-0">
            <Filter size={16} />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 px-4 font-medium">Product</th>
                <th className="py-3 px-4 font-medium">SKU</th>
                <th className="py-3 px-4 font-medium">Category</th>
                <th className="py-3 px-4 font-medium">Stock</th>
                <th className="py-3 px-4 font-medium">Price</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4 flex items-center gap-3 font-medium text-gray-800">
                    <Box className="h-5 w-5 text-gray-400" /> {p.name}
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
                    <span
                      className={`px-3 py-1 rounded text-xs font-medium ${
                        p.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 space-x-3">
                    <button className="text-blue-600 hover:underline font-medium">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline font-medium">
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
