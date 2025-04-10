"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavBar() {
  const pathname = usePathname()

  const navItems = [
    { name: "All Topics", path: "/" },
    { name: "Design", path: "/design" },
    { name: "Coding", path: "/coding" },
  ]

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Topic Library
          </Link>

          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.path ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
