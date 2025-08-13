import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // A function to get a cookie
        get(name: string) {
          return request.cookies.get(name)?.value;
        },

        // A function to set/remove a cookie
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({name, value,...options});

          response = NextResponse.next({
            request: {
              headers: request.headers
            }
          });

          response.cookies.set({name, value, ...options});
        },


        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options});
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({name, value: '', ...options});
        }
      }
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // If user is not signed in and tries to access a protected route, redirect to login page.
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If user is signed in and tries to access an auth page, redirect to dashboard.
  if (user && (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup'))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

// Define which routes the middleware should run on
export const config = {
  matcher: [
    //Modify this pattern to include more paths.
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
