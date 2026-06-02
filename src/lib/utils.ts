// Merge class names safely (no external deps required)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Smooth scroll to a section by id
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Format number as South African Rand
export function formatRand(amount: number): string {
  return `R${amount.toLocaleString("en-ZA")}`;
}
