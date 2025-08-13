import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
        cookies: {
            get(name: string) {return cookieStore.get(name)?.value;},
            set(name: string, value: string, options: CookieOptions) {cookieStore.set({ name, value, ...options });},
            remove(name: string, options: CookieOptions) {
            cookieStore.set({ name, value: '', ...options });
            }
        }
        }
    );
    
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    }
    return NextResponse.redirect(new URL('/auth/auth-code-error', request.url));
}
