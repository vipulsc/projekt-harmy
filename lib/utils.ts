import { departments } from "./constants";

export const getRandomDepartment = () =>
  departments[Math.floor(Math.random() * departments.length)];

export const getRandomRating = () => Math.floor(Math.random() * 5) + 1;
