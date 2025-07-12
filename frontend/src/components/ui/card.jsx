export default function Card({ title, action, children, className }) {
  return (
    <div className={`rounded-lg p-4 glow-hover lift-up ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-txt-primary">{title}</h3>
        {action}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}