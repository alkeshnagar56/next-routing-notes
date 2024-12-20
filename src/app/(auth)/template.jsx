"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];

export default function authlayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="input"/>
    </div>
    <div>
      {navlinks.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <div>
          <Link
            href={item.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {item.name}
          </Link>
          </div>
        );
      })}
      </div>
      {children}
    </>
  );
}
