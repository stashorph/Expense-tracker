"use client";
import { useState } from 'react';
import NavItem from './nav_item';
import { LayoutGrid, BarChartHorizontal, FolderKanban, ArrowRightLeft, FileText, CreditCard, UserCircle } from 'lucide-react';


export default function Sidebar() {
  const [Expand, setExpand] = useState(false);

  return (
    <aside
      className={`h-screen bg-card text-card-foreground p-4 flex flex-col transition-all duration-300 ease-in-out ${Expand ? 'w-64' : 'w-20'}`}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      >
      <div className="flex items-center gap-4 px-2 mb-2 h-10">
        <UserCircle size={25} className="flex-shrink-0" />
        <span className={`font-bold overflow-hidden whitespace-nowrap transition-opacity duration-300 ${Expand ? 'opacity-100' : 'opacity-0'}`}>
          My Dashboard
        </span>
      </div>

      <nav className="flex-1 flex flex-col space-y-1">
        <h3 className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mt-4 mb-1 overflow-hidden transition-opacity duration-300 ${Expand ? 'opacity-100' : 'opacity-0'}`}>
          OVERVIEW
        </h3>
        <NavItem label="Dashboard" icon={<LayoutGrid size={25} />} href="/dashboard" Expand={Expand} />
        <NavItem label="Analytics" icon={<BarChartHorizontal size={25} />} href="/analytics" Expand={Expand} />
        <NavItem label="Projects" icon={<FolderKanban size={25} />} href="/projects" Expand={Expand} />

        <div className={`border-t border-border mx-3 my-2 transition-all duration-300 ${Expand ? 'opacity-0 max-h-0' : 'opacity-100 max-h-full'}`} aria-hidden="true"/>

        <h3 className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mt-4 mb-1 overflow-hidden transition-opacity duration-300 ${Expand ? 'opacity-100' : 'opacity-0'}`}>
          FINANCE
        </h3>
        <NavItem label="Transactions" icon={<ArrowRightLeft size={25} />} href="/transactions" Expand={Expand} />
        <NavItem label="Invoices" icon={<FileText size={25} />} href="/invoices" Expand={Expand} />
        <NavItem label="Payments" icon={<CreditCard size={25} />} href="/payments" Expand={Expand} />
      </nav>
    </aside>
  );
}
