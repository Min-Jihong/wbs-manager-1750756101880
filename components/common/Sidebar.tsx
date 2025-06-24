'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderKanban, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: '대시보드', href: '/', icon: Home },
    { name: '새 프로젝트', href: '/projects/new', icon: PlusCircle }
  ];

  return (
    <aside className="hidden md:block w-64 border-r bg-card p-4">
      <ScrollArea className="h-[calc(100vh-80px)] pr-4">
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === item.href
                  ? 'bg-muted hover:bg-muted'
                  : 'hover:bg-transparent hover:underline',
                'justify-start'
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          ))}
          <Link
            href="/projects/dummy-project-id"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              pathname.startsWith('/projects/') && pathname !== '/projects/new'
                ? 'bg-muted hover:bg-muted'
                : 'hover:bg-transparent hover:underline',
              'justify-start'
            )}
          >
            <FolderKanban className="mr-2 h-4 w-4" />
            프로젝트 상세 (예시)
          </Link>
        </nav>
      </ScrollArea>
    </aside>
  );
}