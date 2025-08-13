import Card from '../components/ui/card';
import { Spendingdonut } from '../components/charts/monthly_donut';
import TransactionsList from '../components/dashboard/transaction_list';
import AccountsList from '../components/dashboard/accounts_list';
import UpcomingEvents from '../components/dashboard/upcoming_events';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import LogoutButton from '../components/ui/logout_button';

//placeholder for empty card component
const EmptyCard = ({ title }) => (
  <Card title={title} className="h-full">
    <div className="flex items-center justify-center h-full text-muted-foreground">
    </div>
  </Card>
);

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
      setLoading(false);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/login');
      } else if (session) {
        setUser(session.user);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-foreground">Loading dashboard...</p>
      </div>
    );
  }

  if (user) {
    const firstName = user.user_metadata?.first_name || 'User';
    return (
      <div className="flex flex-col gap-8 p-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back, {firstName}</h1>
            <p className="text-muted-foreground">Here's your financial overview.</p>
          </div>
          <LogoutButton />
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Card title="Accounts">
              <AccountsList user={user} />
            </Card>
            <Card title="Spending Breakdown">
              <Spendingdonut user={user} />
            </Card>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-1">
            <EmptyCard title="Random Graph/Card" />
            <EmptyCard title="Random Graph/Card" />
          </div>

          <div className="lg:col-span-1">
            <Card title="Recent Transactions" className="flex h-full flex-col">
              <TransactionsList user={user} />
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <UpcomingEvents user={user} />
        </div>
      </div>
    );
  }

  return null;
}
