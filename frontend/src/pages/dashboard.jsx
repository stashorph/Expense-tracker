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
        >
          <AccountsList />
        </Card>
        <Card
          title="Recent Transactions"
          action={<Button>View all</Button>}
        >
          <TransactionsList />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">  
        <Calendar21 />
        
        <Card title="Spending Breakdown">
          <div className="pt-2">
            <Spendingdonut />
          </div>
        </Card>
      </div>
    </div>
  );
}
