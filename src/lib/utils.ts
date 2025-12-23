import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//<W_Comment>---------{ Join className For Tailwind }----------</W_Comment>
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
