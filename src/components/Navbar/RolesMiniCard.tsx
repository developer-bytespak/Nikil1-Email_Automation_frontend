'use client';

import Link from 'next/link';
import { navData } from '../../data/navData';

export default function RolesMiniCard() {
  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 w-[320px] animate-in fade-in-0 slide-in-from-top-2 duration-300">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        {navData.roles.title}
      </h3>
      <div className="space-y-3">
        {navData.roles.features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="block text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200"
          >
            {feature.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
