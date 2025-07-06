import Card from '../components/ui/card';
import Button from '../components/ui/Button';
import AccountsList from '../components/dashboard/accounts_list';
import TransactionsList from '../components/dashboard/transaction_list';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-txt-primary mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Accounts Card */}
        <div className="lg:col-span-1">
          <Card
            title="Accounts"
            action={<Button>View all</Button>}
          >
            <AccountsList />
          </Card>
        </div>

        {/* Recent Transactions Card */}
        <div className="lg:col-span-2">
          <Card
            title="Recent Transactions"
            action={<Button>View all</Button>}
          >
            <TransactionsList />
          </Card>
        </div>
      </div>
    </div>
  );
}