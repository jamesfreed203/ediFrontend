'use client';

import { useState } from 'react';
import Header from '@/app/components/header/header';
import Sidebar from '@/app/components/sidebar/sidebar';

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}