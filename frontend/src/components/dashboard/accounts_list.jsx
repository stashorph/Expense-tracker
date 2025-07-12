const accountData = [
  { id: 1, name: 'Savings', balance: 12403.50, icon: 'S' },
  { id: 2, name: 'Current', balance: 2115.77, icon: 'C' },
  { id: 3, name: 'Fixed Deposit', balance: 15000.00, icon: 'FD'}
];

export default function AccountsList() {
  return (
    <div className="space-y-4">
      {accountData.map((account) => (
        <div key={account.id} className="flex items-center mt-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-sm mr-4">
            {account.icon}
          </div>
          <div className="flex-1">
            <p className="font-medium text-txt-primary">{account.name}</p>
          </div>
          <p className="font-semibold text-txt-primary">₹{account.balance.toLocaleString('en-US')}</p>
        </div>
      ))}
    </div>
  );
}
