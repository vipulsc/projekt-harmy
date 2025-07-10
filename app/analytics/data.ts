// Mock data
import type { ChartData, TooltipItem } from "chart.js";

export const mockData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Engineering",
      data: [4.2, 4.3, 4.1, 4.4, 4.5, 4.6],
      borderColor: "#10b981",
      backgroundColor: "rgba(16,185,129,0.15)",
      pointBackgroundColor: "#10b981",
      pointBorderColor: "#fff",
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Marketing",
      data: [3.8, 3.9, 4.0, 4.1, 4.0, 4.2],
      borderColor: "#6366f1",
      backgroundColor: "rgba(99,102,241,0.15)",
      pointBackgroundColor: "#6366f1",
      pointBorderColor: "#fff",
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
    },
    {
      label: "Sales",
      data: [4.0, 4.1, 4.2, 4.3, 4.2, 4.4],
      borderColor: "#f59e42",
      backgroundColor: "rgba(245,158,66,0.15)",
      pointBackgroundColor: "#f59e42",
      pointBorderColor: "#fff",
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(16,185,129,0.9)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#fff",
      borderWidth: 1,
      padding: 12,
      caretSize: 8,
      callbacks: {
        label: function (context: TooltipItem<"line">) {
          return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}`;
        },
      },
    },
  },
  scales: {
    y: {
      min: 3.5,
      max: 5,
      title: { display: true, text: "Average Rating" },
      grid: { color: "#e0f2f1" },
      ticks: { color: "#065f46", font: { weight: "bold" as const } },
    },
    x: {
      title: { display: true, text: "Month" },
      grid: { color: "#e0f2f1" },
      ticks: { color: "#065f46", font: { weight: "bold" as const } },
    },
  },
};

export const departmentStats = [
  {
    name: "Engineering",
    color: "bg-emerald-200 text-emerald-800 border-emerald-400",
    avg: 4.52,
    trend: "+0.4",
  },
  {
    name: "Marketing",
    color: "bg-indigo-200 text-indigo-800 border-indigo-400",
    avg: 4.0,
    trend: "+0.2",
  },
  {
    name: "Sales",
    color: "bg-orange-200 text-orange-800 border-orange-400",
    avg: 4.2,
    trend: "+0.3",
  },
];

export const kpis = [
  { label: "Total Employees", value: 48 },
  { label: "Departments", value: 5 },
  { label: "Avg. Rating", value: 4.23 },
  { label: "Bookmarked Employees", value: 17 },
];

export const departmentDistData: ChartData<"doughnut"> = {
  labels: ["Engineering", "Marketing", "Sales", "HR", "Design"],
  datasets: [
    {
      label: "Employees",
      data: [18, 8, 10, 7, 5],
      backgroundColor: ["#10b981", "#6366f1", "#f59e42", "#ec4899", "#818cf8"],
      borderColor: ["#059669", "#4f46e5", "#ea580c", "#db2777", "#3730a3"],
      borderWidth: 2,
    },
  ],
};

export const departmentDistOptions = {
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: { color: "#065f46", font: { weight: "bold" as const } },
    },
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<"doughnut">) {
          return `${context.label}: ${context.parsed} employees`;
        },
      },
    },
  },
};

export const topEmployees = [
  {
    name: "Alice Johnson",
    department: "Engineering",
    rating: 4.9,
    bookmarks: 12,
  },
  { name: "Bob Smith", department: "Sales", rating: 4.8, bookmarks: 10 },
  { name: "Carol Lee", department: "Marketing", rating: 4.7, bookmarks: 8 },
  { name: "David Kim", department: "HR", rating: 4.6, bookmarks: 7 },
  { name: "Eva Brown", department: "Design", rating: 4.5, bookmarks: 6 },
];
