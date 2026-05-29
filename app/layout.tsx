import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crosshoc",
  description: "Discover and lease games on Crosshoc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="min-w-0 flex-1">
            <div className="p-4 md:p-6">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}