const transactionData = [
  { id: 1, name: 'Starbucks', category: 'Food', date: 'July 06, 2025', amount: -8.50, icon: 'St' },
  { id: 2, name: 'Apple Store', category: 'Shopping', date: 'July 05, 2025', amount: -1299.00, icon: 'Ap' },
  { id: 3, name: 'Salary', category: 'Income', date: 'July 04, 2025', amount: 3500.00, icon: '$$' },
];

export default function TransactionsList() {
  return (
    <div className="space-y-4">
      {transactionData.map((item) => (
        <div key={item.id} className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-lg mr-4">
            {item.icon}
          </div>
          <div className="flex-1">
            <p className="font-medium text-txt-primary">{item.name}</p>
            <p className="text-xs text-txt-secondary">{item.date}</p>
          </div>
          <p className={`font-semibold ${item.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
            {item.amount < 0 ? '-' : '+'}Rs{Math.abs(item.amount)}
          </p>
        </div>
      ))}
    </div>
  );
}
