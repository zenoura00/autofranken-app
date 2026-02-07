export type NavItem = {
  label: string
  href: string
}

// Single source of truth for navigation.
// Used for BOTH desktop and mobile menus to guarantee they stay identical.
export const navItems: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/faelle" },
  { label: "Städte", href: "/staedte" },
  { label: "Anfrage", href: "/#form" },
]
