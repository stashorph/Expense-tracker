import Button from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const transactionData = [
  { id: 1, name: 'Starbucks', category: 'Food', date: 'July 06, 2025', amount: -8.50, icon: 'ST' },
  { id: 2, name: 'Apple Store', category: 'Shopping', date: 'July 05, 2025', amount: -1299, icon: 'AP' },
  { id: 3, name: 'Salary', category: 'Income', date: 'Jul 09, 2025', amount: 3500, icon: '$$' },
  { id: 4, name: 'Google Subscription', category: 'Income', date: 'Jul 04, 2025', amount: -500, icon: 'G' },
  { id: 5, name: 'Groceries', category: 'Income', date: 'Jul 12, 2025', amount: -3500, icon: 'GR' },
  { id: 6, name: 'Mobile Recharge', category: 'Income', date: 'Jul 17, 2025', amount: -900, icon: 'JI' },
  { id: 7, name: 'Spotify', category: 'Income', date: 'Jul 2, 2025', amount: -60, icon: 'SP' },
];

export default function TransactionsList() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 space-y-4">
        {transactionData.map((item) => (
          <div key={item.id} className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold text-muted-foreground">{item.icon}</span>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
            <div className={`ml-2 text-sm font-medium ${item.amount < 0 ? 'text-destructive' : 'text-green-500'}`}>
              {item.amount < 0 ? '-' : '+'}₹{Math.abs(item.amount).toLocaleString('en-US')}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-transparent">
        <Button className="w-full rounded-full bg-white text-gray-900 font-semibold shadow hover:scale-101 px-6 py-2">
          View all transactions 
        </Button>
      </div>
    </div>
  );
}