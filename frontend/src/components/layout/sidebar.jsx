import NavItem from './nav_item';
import { 
  LayoutDashboard, 
  BarChart3, 
  FolderKanban,
  ArrowRightLeft,
  ReceiptText,
  CreditCard,
  User
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-sidebar p-4 flex flex-col">

      <div className="flex items-center mb-8 px-2">
        <div className="w-8 h-8 rounded-md mr-3 scale-up"><NavItem href="/profile"><User className="transform scale-275 h-4.5 w-5 text-white"></User></NavItem></div>
        <h1 className="text-xl font-bold text-txt-primary">My Dashboard</h1>
      </div>

      <nav className="flex-1 flex flex-col space-y-6">
        <div>
          <h2 className="px-3 mb-2 text-xs font-semibold tracking-wider uppercase text-txt-secondary">
            OVERVIEW
          </h2>
          <div className="space-y-1">
            <div className="scale-up">
            <NavItem href="/dashboard">
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </NavItem>
            </div>
            <div className="scale-up">
            <NavItem href="/analytics">
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </NavItem>
            </div>
            <div className="scale-up">
            <NavItem href="/projects">
              <FolderKanban className="mr-3 h-5 w-5" />
              Projects
            </NavItem>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="px-3 mb-2 text-xs font-semibold tracking-wider uppercase text-txt-secondary">
            FINANCE
          </h2>
          <div className="space-y-1">
            <div className="scale-up">
            <NavItem href="/transactions">
              <ArrowRightLeft className="mr-3 h-5 w-5" />
              Transactions
            </NavItem>
            </div>
            <div className="scale-up">
            <NavItem href="/invoices">
              <ReceiptText className="mr-3 h-5 w-5" />
              Invoices
            </NavItem>
            </div>
            <div className="scale-up">
            <NavItem href="/payments">
              <CreditCard className="mr-3 h-5 w-5" />
              Payments
            </NavItem>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}