import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/common/Header";
import { Sidebar } from "@/components/common/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WBS Manager",
  description: "WBS(Work Breakdown Structure)를 효율적으로 생성하고 관리할 수 있는 웹 애플리케이션입니다."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6 lg:p-8 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}