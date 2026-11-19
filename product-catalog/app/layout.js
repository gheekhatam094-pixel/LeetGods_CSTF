import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-700">
        <header className="bg-white border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-emerald-700">ShopEasy Catalog</h1>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
