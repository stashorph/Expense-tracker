"use client";

import Sidebar from "@/components/layout/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
