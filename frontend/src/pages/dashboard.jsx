import Card from '../components/ui/card';
import Button from '../components/ui/button';
import { Calendar21 } from '../components/dashboard/calendar-21';
import { Spendingdonut } from '../components/charts/spending_graph';
import AccountsList from '../components/dashboard/accounts_list';
import TransactionsList from '../components/dashboard/transaction_list';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card
          title="Accounts"
          action={<Button>View all</Button>}
          className="h-full flex flex-col bg-card border-3"
        >
        <div className="flex-grow">
          <AccountsList />
        </div>
        </Card>
        <Card
          title="Recent Transactions"
          action={<Button>View all</Button>}
          className="bg-card border-3"
        >
          <TransactionsList />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">  
        <div className="w-full h-full rounded-lg p-4 glow-hover lift-up bg-card border-3 ">
        <Calendar21 className="bg-transparent w-full h-full"/>
        </div>
        <Card title="Spending Breakdown" className="bg-card border-3">
          <div className="pt-2 px-4 pb-4">
            <Spendingdonut 
            />
          </div>
        </Card>
      </div>
    </div>
  );
}