export default function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium text-txt-secondary hover:text-txt-primary transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}