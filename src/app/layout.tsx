import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider, ErrorBoundary, LoadingSpinner } from "@/components/common";
import { SearchLayout } from "@/components/search";
import { SearchProvider } from "@/contexts/SearchContext";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thmanyah Frontend Assessment",
  description: "Thmanyah Frontend Assessment for the role of senior software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <QueryProvider>
            <Suspense fallback={<LoadingSpinner message="Loading search..." />}>
              <SearchProvider>
                <SearchLayout>
                  {children}
                </SearchLayout>
              </SearchProvider>
            </Suspense>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
