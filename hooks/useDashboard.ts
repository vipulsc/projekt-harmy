import { useEffect, useState } from "react";
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
}

export function useDashboardData() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=20");
        const data = await res.json();

        const enhanced = data.users.map(
          (user: Omit<Employee, "department" | "rating">) => ({
            ...user,
            department: getRandomDepartment(),
            rating: getRandomRating(),
          })
        );

        setEmployees(enhanced);
      } catch {
        setError("Failed to fetch employee data");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
}
