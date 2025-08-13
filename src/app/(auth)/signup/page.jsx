'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, User } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName,
            }
        },
        
    });

    if (error) {
        setError(error.message);
    } else {
        // By default, supabase sends a confirmation email.
        setMessage('Registration successful! Please check your email to confirm your account.');
    }
    };

    const handleSocialLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
        setError(error.message);
    }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-background p-4">
            <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Create an Account</h1>
                <p className="mt-2 text-muted-foreground">Join us to start tracking your finances.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-2xl">
                {error && (
                <div className="mb-6 rounded-md border-destructive/50 bg-destructive/10 p-3 text-center text-sm text-destructive">
                    {error}
                </div>
                )}
                {message && (
                <div className="mb-6 rounded-md border-primary/50 bg-primary/10 p-3 text-center text-sm text-primary">
                    {message}
                </div>
                )}

                <form onSubmit={handleSignUp} className="space-y-6">
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">First Name</label>
                    <div className="relative mt-2">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                        id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                        className="block w-full rounded-md border-border bg-input py-2.5 pl-10 text-foreground transition-colors focus:ring-2 focus:ring-ring sm:text-sm"
                        placeholder="John"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">Last Name</label>
                    <div className="relative mt-2">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                        id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                        className="block w-full rounded-md border-border bg-input py-2.5 pl-10 text-foreground transition-colors focus:ring-2 focus:ring-ring sm:text-sm"
                        placeholder="Doe"
                        />
                    </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                    <div className="relative mt-2">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                        id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                        className="block w-full rounded-md border-border bg-input py-2.5 pl-10 text-foreground transition-colors focus:ring-2 focus:ring-ring sm:text-sm"
                        placeholder="you@example.com"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="text-sm font-medium text-muted-foreground">Password</label>
                    <div className="relative mt-2">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                        id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                        className="block w-full rounded-md border-border bg-input py-2.5 pl-10 text-foreground transition-colors focus:ring-2 focus:ring-ring sm:text-sm"
                        placeholder="********"
                    />
                    </div>
                </div>

                <button type="submit" className="w-full rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    Sign Up
                </button>
                </form>


                <div className="relative my-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center text-sm"><span className="bg-card px-2 text-muted-foreground backdrop-blur-sm">Or continue with</span></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <button onClick={() => handleSocialLogin('google')} className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-secondary px-3 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-accent">
                    <FcGoogle /> Google
                </button>
                <button onClick={() => handleSocialLogin('github')} className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-secondary px-3 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-accent">
                    <FaGithub /> GitHub
                </button>
                </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Already a member?{' '}
                <Link href="/login" className="font-semibold leading-6 text-primary hover:text-primary/90">
                Sign in now
                </Link>
            </p>
            </div>
        </main>
    );
}