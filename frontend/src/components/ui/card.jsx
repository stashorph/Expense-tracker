export default function Card({ title, action, children }) {
  return (
    <div className="bg-sidebar border border-card-stroke rounded-lg p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-txt-primary">{title}</h3>
        {action}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}