import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navigation Bar Placeholder */}
        <header className="border-b border-gray-100 py-4">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <span className="text-xl font-medium text-orange-600">Recipe Creator</span>
            {/* Team: Add Nav Links here (Home, Cookbook) */}
          </nav>
        </header>

        {/* Main Content Container [cite: 99, 100, 101] */}
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}