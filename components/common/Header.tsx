'use client';

import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <Mountain className="h-6 w-6" />
          <span>WBS Manager</span>
        </Link>
        <div className="flex-1"></div>
      </div>
    </header>
  );
}