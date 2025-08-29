'use client';

import Card from '@/components/ui/card';
import BarGraph from '@/components/charts/bar_chart';
import BubbleChart from '@/components/charts/circle_packing';
import { Spendingdonut } from '@/components/charts/monthly_donut';
import TransactionsList from '@/components/dashboard/transaction_list';
import AccountsList from '@/components/dashboard/accounts_list';
import UpcomingEvents from '@/components/dashboard/upcoming_events';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { supabase } from '@/lib/supabase';
import LogoutButton from '@/components/ui/logout_button';
import BudgetProgressCard from '@/components/dashboard/income_progress';

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
  }, []);

  if (loading) { 
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-foreground">Loading dashboard...</p>
      </div>
    ); 
}
  if (user) { const firstName = user.user_metadata?.first_name || 'User';
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
            <Card title="Spending Breakdown" className="h-[317px]">
              <Spendingdonut user={user} />
            </Card>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-1">
            <Card title="This Month's Cash Flow">
              <BubbleChart/>
            </Card>
            <Card title="Spending by Category">
              <BarGraph />
            </Card>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex-grow">
              <Card title="Recent Transactions" className="h-[441px] flex flex-col">
                <TransactionsList user={user} />
              </Card>
            </div>
            <div>
              <Card title="Monthly Budget">
                <BudgetProgressCard />
              </Card>
            </div>
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
