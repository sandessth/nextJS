import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-4 justify-end mt-2 bg-blue-600 p-2 text-white">
          <div className="rounded-lg hover:bg-blue-700 px-2 hover:shadow-xl">
            Home
          </div>
          <div className="rounded-lg hover:bg-blue-700 px-2 hover:shadow-xl">
            Contact
          </div>
          <div className="rounded-lg hover:bg-blue-700 px-2 hover:shadow-xl">
            Blog
          </div>
        </div>
        <main className="h-screen">{children}</main>
      </body>
    </html>
  );
}
