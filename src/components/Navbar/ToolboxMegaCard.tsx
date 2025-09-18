'use client';

import Link from 'next/link';
import { navData } from '../../data/navData';

export default function ToolboxMegaCard() {
  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-8 w-[800px] animate-in fade-in-0 slide-in-from-top-2 duration-300">
      <div className="grid grid-cols-3 gap-8">
        {navData.toolbox.columns.map((column, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              {column.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {column.subtext}
            </p>
            <div className="space-y-3">
              {column.features.map((feature, featureIndex) => (
                <Link
                  key={featureIndex}
                  href={feature.href}
                  className="block text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200"
                >
                  {feature.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
