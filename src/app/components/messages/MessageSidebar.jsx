'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import {
  FaInbox,
  FaPaperPlane,
  FaHourglassHalf,
  FaQuestionCircle,
  FaTimesCircle,
  FaArrowCircleLeft,
  FaPen
} from 'react-icons/fa';

export default function MessageSidebar() {
  const { protocol } = useParams();
  const pathname = usePathname();

  const items = [
    {
      label: 'Inbox',
      icon: <FaInbox />,
      href: `/${protocol}/messages/inbox`,
    },
    {
      label: 'Sent',
      icon: <FaPaperPlane />,
      href: `/${protocol}/messages/sent`,
    },
    {
      label: 'Queued',
      icon: <FaHourglassHalf />,
      href: `/${protocol}/messages/queued`,
    },
    {
      label: 'Incomplete',
      icon: <FaQuestionCircle />,
      href: `/${protocol}/messages/incomplete`,
    },
    {
      label: 'Failed',
      icon: <FaTimesCircle />,
      href: `/${protocol}/messages/failed`,
    },
    {
      label: 'Failed Inbound',
      icon: <FaArrowCircleLeft />,
      href: `/${protocol}/messages/failed-inbound`,
    },
  ];

  return (
    <div className="w-64">
      <Link
        href={`/${protocol}/messages/create`}
        className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white"
      >
        <FaPen />
        Compose
      </Link>

      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between rounded-lg px-4 py-3 text-gray-500 ${
              pathname === item.href
                ? 'bg-blue-50 text-blue-600'
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>

            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
              0
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}