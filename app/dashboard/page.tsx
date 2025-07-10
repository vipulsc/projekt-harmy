"use client";
import EmployeeCard from "@/components/EmployeeCard";
import { useState, useEffect } from "react";
import { Plus, Search, Filter, ArrowDownAZ, ArrowUpAZ, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEmployeeStore } from "@/store/employees";
import BgGradient2 from "@/components/common/BgGradient2";

export default function Dashboard() {
  const { employees, loading, error, addEmployee, fetchEmployees } =
    useEmployeeStore();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "Engineering",
    gender: "male",
    image: "",
  });
  const router = useRouter();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Stats
  const stats = [
    { label: "Total Employees", value: employees.length },
    {
      label: "Departments",
      value: new Set(employees.map((e) => e.department)).size,
    },
    {
      label: "Avg. Rating",
      value: (
        employees.reduce((a, e) => a + e.rating, 0) / (employees.length || 1)
      ).toFixed(1),
    },
  ];

  // Departments
  const departments = [...new Set(employees.map((e) => e.department))];

  // Filter + sort
  const filteredEmployees = employees
    .filter((emp) => {
      const matchesSearch =
        emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
        emp.department.toLowerCase().includes(search.toLowerCase());
      const matchesDepartment =
        !departmentFilter || emp.department === departmentFilter;
      return matchesSearch && matchesDepartment;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") {
        comparison = a.firstName.localeCompare(b.firstName);
      } else if (sortBy === "department") {
        comparison = a.department.localeCompare(b.department);
      } else if (sortBy === "rating") {
        comparison = b.rating - a.rating;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    addEmployee(newEmployee);
    setShowAddModal(false);
    setNewEmployee({
      firstName: "",
      lastName: "",
      email: "",
      department: "Engineering",
      gender: "male",
      image: "",
    });
  };

  return (
    <div className="relative min-h-screen">
      <BgGradient2 />
      <div className="min-h-screen px-4 py-6 mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
                Employee Dashboard
              </h1>
              <p className="text-lg text-gray-600">
                Manage your team and track performance
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 w-full lg:w-auto justify-center"
            >
              <Plus className="w-5 h-5" />
              Add Employee
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm text-center"
              >
                <div className="text-2xl font-bold text-blue-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm flex-1">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 lg:flex-none"
              >
                <option value="">All Departments</option>
                {departments.map((dep) => (
                  <option key={dep} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>

              <button
                onClick={() =>
                  setSortBy(
                    sortBy === "name"
                      ? "rating"
                      : sortBy === "rating"
                      ? "department"
                      : "name"
                  )
                }
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition"
              >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                </span>
              </button>

              <button
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition"
              >
                {sortOrder === "asc" ? (
                  <ArrowDownAZ className="w-4 h-4" />
                ) : (
                  <ArrowUpAZ className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-8 text-gray-500">
              Loading employees...
            </div>
          )}
          {error && (
            <div className="text-center py-8 text-red-500">{error}</div>
          )}

          {/* Employee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEmployees.map((emp) => (
              <EmployeeCard
                key={emp.id}
                emp={emp}
                onClick={() => router.push(`/employee/${emp.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowAddModal(false)}
            />

            <div className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
              {/* Modal Top */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                  Add Employee
                </h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto max-h-[calc(85vh-120px)] sm:max-h-[calc(90vh-140px)]">
                <form onSubmit={handleAddEmployee} className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newEmployee.firstName}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newEmployee.lastName}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            lastName: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={newEmployee.email}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Image URL{" "}
                      <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={newEmployee.image}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          image: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <select
                        value={newEmployee.department}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            department: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Engineering">Engineering</option>
                        <option value="HR">HR</option>
                        <option value="Design">Design</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        value={newEmployee.gender}
                        onChange={(e) =>
                          setNewEmployee({
                            ...newEmployee,
                            gender: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>

              {/* Modal Bottom */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleAddEmployee}
                    className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg font-medium transition"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
