export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-txt-secondary hover:text-txt-primary transition-colors duration-200"
    >
      {children}
    </button>
  );
}
