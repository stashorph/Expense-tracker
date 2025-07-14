import Link from 'next/link';

export default function NavItem({ icon, label, href, Expand }) {
  return (
    <Link
      href={href || '#'}
      className="flex items-center p-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
    >
      {icon}
      
      <span
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${Expand ? 'w-full ml-4 opacity-100' : 'w-0 ml-0 opacity-0'}`}
      >
        {label}
      </span>
    </Link>
  );
}