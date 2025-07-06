import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavItem({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link 
      href={href}
      className={`
        flex items-center px-3 py-2 text-sm font-medium rounded-md
        transition-colors duration-200
        ${isActive
          ? 'bg-accent text-txt-primary'
          : 'text-txt-secondary hover:bg-accent/50 hover:text-txt-primary'
        }
      `}
    >
      {children}
    </Link>
  );
}