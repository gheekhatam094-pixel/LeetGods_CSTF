import "./globals.css";

export const metadata = {
  title: "Student Profile Directory",
  description: "A simple student directory built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold text-center">
            Student Profile Directory
          </h1>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
