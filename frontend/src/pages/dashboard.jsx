import Card from '../components/ui/card';
import Button from '../components/ui/button';
import { Spendingdonut } from '../components/charts/spending_graph';
import TransactionsList from '../components/dashboard/transaction_list';
import AccountsList from '../components/dashboard/accounts_list';
import UpcomingEvents from '../components/dashboard/upcoming_events';

//placeholder for empty card component
const EmptyCard = ({ title }) => (
  <Card title={title} className="h-full">
    <div className="flex items-center justify-center h-full text-muted-foreground">
    </div>
  </Card>
);

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card title="Accounts" action={<Button>View all</Button>}>
            <AccountsList />
          </Card>
          <Card title="Spending Breakdown">
            <Spendingdonut />
          </Card>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6"> 
          <EmptyCard title="Random Graph/Card" />
          <EmptyCard title="Random Graph/Card" />
        </div>

        <div className="lg:col-span-1">
          <Card 
            title="Recent Transactions" action={<Button>View all</Button>} className="h-full"
          >
            <TransactionsList />
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <UpcomingEvents />
      </div>
    </div>
  );
}