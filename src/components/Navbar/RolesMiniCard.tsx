'use client';

import Link from 'next/link';
import { navData } from '../../data/navData';

export default function RolesMiniCard() {
  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 w-[500px] max-w-[90vw]">
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            {navData.roles.title}
          </h3>
          <div className="space-y-3">
            {navData.roles.features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 group"
              >
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                  {getRoleIcon(feature.title)}
                </div>
                <span>{feature.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Integration Card */}
        <div className="w-[280px] h-[200px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 flex flex-col justify-between shadow-lg">
          <div className="text-center">
            <h4 className="text-white font-semibold text-xs mb-3 leading-tight">
              Integrate your stack to <span className="text-blue-400 font-bold">MarketingPro</span>
            </h4>
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1 mb-3">
              {getIntegrationLogos().slice(0, 8).map((logo, index) => (
                <div key={index} className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200 shadow-md">
            Check integrations
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function to get role icons
function getRoleIcon(featureTitle: string) {
  const iconMap: { [key: string]: JSX.Element } = {
    'For Sales Development': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    'For RevOps': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    'For Founder': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  };
  
  return iconMap[featureTitle] || (
    <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

// Helper function to get integration logos
function getIntegrationLogos() {
  return ['SF', 'G', 'H', 'Z', 'P', 'S', 'M', 'A', 'C'];
}
