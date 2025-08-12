import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to dashboard
    router.push('/dashboard');
  }, [router]);

  // Need to render a simple loading indicator here
  return (
    <div className="flex h-screen items-center justify-center bg-bg">
      <p className="text-txt-secondary">Redirecting to your dashboard...</p>
    </div>
  );
}