'use client';

import { useState } from 'react';
import Link from 'next/link';
// import {
//   FaTachometerAlt,
//   FaEnvelope,
//   FaBroadcastTower,
//   FaHandshake,
//   FaCertificate,
//   FaPlug,
//   FaUsers,
//   FaClipboardList,
// } from 'react-icons/fa';
import {
  FaChartLine,
  FaMessage,
  FaTowerBroadcast,
  FaHandshake,
  FaCertificate,
  FaPlug,
  FaUsersGear,
  FaFileLines,
} from 'react-icons/fa6';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar({ collapsed, setCollapsed }) {
  // const [collapsed, setCollapsed] = useState(false);
  const topMenu = [
    {
      name: 'Dashboard',
      href: '/as2/dashboard',
      icon: <FaChartLine />,
    },
    {
      name: 'Messages',
      href: '/as2/messages/inbox',
      icon: <FaMessage />,
    },
    {
      name: 'Stations',
      href: '/as2/stations',
      icon: <FaTowerBroadcast />,
    },
    {
      name: 'Partners',
      href: '/as2/partners',
      icon: <FaHandshake />,
    },
  ];

  const bottomMenu = [
    {
      name: 'Certificates',
      href: '/certificates',
      icon: <FaCertificate />,
    },
    {
      name: 'Integrations',
      href: '/integrations/s3',
      icon: <FaPlug />,
    },
    {
      name: 'User Management',
      href: '/user',
      icon: <FaUsersGear />,
    },
    {
      name: 'Audit Logs',
      href: '/audit',
      icon: <FaFileLines />,
    },
  ];

  return (
    <aside className={`relative min-h-screen bg-white border-r transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-5 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black shadow-md hover:bg-gray-800 border-none"
      >
        {collapsed ? (
          <ChevronRight size={20} color="white" />
        ) : (
          <ChevronLeft size={20} color="white" />
        )}
      </button>

      <div className="p-4">
        {/* Top Menu */}
        <nav className="space-y-2">
          {topMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition ${
                collapsed ? 'justify-center' : 'gap-3'
              }`}
            >
              <span className="text-lg">{item.icon}</span>

              {!collapsed && (
                <span className="whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="my-5 border-t" />

        {/* Bottom Menu */}
        <nav className="space-y-2">
          {bottomMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition ${
                collapsed ? 'justify-center' : 'gap-3'
              }`}
            >
              <span className="text-lg">{item.icon}</span>

              {!collapsed && (
                <span className="whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}