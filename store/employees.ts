import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StateCreator } from "zustand";
import { getRandomDepartment, getRandomRating } from "@/lib/utils";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  image: string;
  age: number;
  department: string;
  rating: number;
  bio?: string;
  profileUrl?: string;
}

type EmployeeStore = {
  employees: Employee[];
  loading: boolean;
  error: string;
  fetchEmployees: () => Promise<void>;
  getEmployeeById: (id: number | string) => Employee | undefined;
  addEmployee: (emp: Partial<Employee>) => void;
};

const employeeStoreCreator: StateCreator<EmployeeStore> = (set, get) => ({
  employees: [],
  loading: false,
  error: "",
  fetchEmployees: async () => {
    set({ loading: true, error: "" });
    try {
      const res = await fetch("https://dummyjson.com/users?limit=20");
      const data = await res.json();
      const enhanced = data.users.map((user: any) => ({
        ...user,
        department: getRandomDepartment(),
        rating:
          typeof user.rating === "number"
            ? Math.max(1, Math.min(5, Math.round(user.rating * 10) / 10))
            : getRandomRating(),
        image: user.image || "/image.png",
      }));
      set({ employees: enhanced, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch employee data", loading: false });
    }
  },
  getEmployeeById: (id) =>
    get().employees.find((e) => String(e.id) === String(id)),
  addEmployee: (emp) => {
    const employees = get().employees;
    const newId =
      employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1;
    set({
      employees: [
        ...employees,
        {
          id: newId,
          firstName: emp.firstName || "",
          lastName: emp.lastName || "",
          email: emp.email || "",
          department: emp.department || getRandomDepartment(),
          gender: emp.gender || "other",
          image: emp.image || "/image.png",
          age: emp.age || 25,
          rating: emp.rating || getRandomRating(),
          bio: emp.bio || "",
          profileUrl: emp.profileUrl || "",
        },
      ],
    });
  },
});

export const useEmployeeStore = create<EmployeeStore>()(
  persist(employeeStoreCreator, {
    name: "employee-store",
    partialize: (state) => ({ employees: state.employees }),
  })
);
