import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col md:flex-row bg-bg-light text-text-primary">
        <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <Sidebar />
        </aside>
        <div className="flex flex-col flex-1 md:pl-64">
          <main className="flex-1">{children}</main>
          <footer className="md:hidden sticky bottom-0 z-50">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
