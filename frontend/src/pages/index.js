import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This component will act as a temporary loading/redirect page.
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to the dashboard page.
    router.push('/dashboard');
  }, [router]);

  // You can render a simple loading indicator here if you want.
  return (
    <div className="flex h-screen items-center justify-center bg-bg">
      <p className="text-txt-secondary">Redirecting to your dashboard...</p>
    </div>
  );
}