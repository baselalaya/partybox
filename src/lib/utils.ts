import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value: number | string): string {
  if (typeof value === "number") {
    return value.toLocaleString("en-US")
  }

  const trimmed = value.trim()
  const match = trimmed.match(/(\d[\d,]*)/)
  if (!match) return trimmed

  const numeric = parseInt(match[1].replace(/,/g, ""), 10)
  const formattedNumeric = Number.isNaN(numeric)
    ? match[1]
    : numeric.toLocaleString("en-US")

  return trimmed.replace(match[1], formattedNumeric)
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}
