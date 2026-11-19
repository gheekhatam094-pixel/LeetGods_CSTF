import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-600">
        <header className="border-b border-stone-200 px-6 py-5">
          <div className="max-w-2xl mx-auto">
            <Link href="/" className="text-xl font-semibold text-stone-800">
              Daily Blog
            </Link>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
