"use client";
import EmployeeCard from "@/components/EmployeeCard";
import { useRouter } from "next/navigation";
import { useBookmarkStore } from "@/store/bookmarks";
import BgGradient from "@/components/common/BgGradient";

export default function Bookmark() {
  const { bookmarks } = useBookmarkStore();
  const router = useRouter();

  return (
    <BgGradient>
      <div className="min-h-screen  flex flex-col items-center mt-24 pt-5 px-2 sm:px-6 lg:px-12 mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 mb-2 drop-shadow-lg text-center">
          Your Bookmarked Employees
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mb-8 text-center max-w-xl">
          Easily access and manage your favorite employees. Click on a card to
          view more details.
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10">
          {bookmarks.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 text-lg sm:text-xl py-10 sm:py-20">
              No employees are bookmarked.
            </div>
          ) : (
            bookmarks.map((emp) => (
              <EmployeeCard
                key={emp.id}
                emp={emp}
                onClick={() => router.push(`/employee/${emp.id}`)}
              />
            ))
          )}
        </div>
      </div>
    </BgGradient>
  );
}
