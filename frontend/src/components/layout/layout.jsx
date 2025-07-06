import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-bg font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
