import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Employee } from "@/store/employees";

type BookmarkStore = {
  bookmarks: Employee[];
  addBookmark: (emp: Employee) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
};

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarks: [],

      addBookmark: (emp) =>
        set((state) => ({
          bookmarks: [...state.bookmarks, emp],
        })),

      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((e) => e.id !== id),
        })),

      isBookmarked: (id) => get().bookmarks.some((e) => e.id === id),
    }),
    {
      name: "bookmarks-storage",
    }
  )
);
