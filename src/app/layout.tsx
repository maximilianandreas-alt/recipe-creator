// src/app/layout.tsx example
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-700 antialiased">
        <nav className="border-b border-gray-100 py-4">
          {/* Add your Navigation component here */}
        </nav>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}