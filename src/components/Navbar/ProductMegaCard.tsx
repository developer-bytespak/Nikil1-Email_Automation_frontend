'use client';

import Link from 'next/link';
import { navData } from '../../data/navData';

interface ProductMegaCardProps {
  closeDropdown: () => void;
}

export default function ProductMegaCard({ closeDropdown }: ProductMegaCardProps) {

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 md:p-6 w-full max-w-[90vw] md:w-[1000px] md:max-w-[80vw] min-h-fit h-auto md:max-h-none relative max-h-[70vh] overflow-y-auto md:overflow-visible scroll-smooth">
      <div className="flex flex-col lg:flex-row gap-3 md:gap-8">
        {/* Main Content - Responsive Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0">
          {navData.product.columns.map((column, index) => (
            <div key={index} className="space-y-4 md:space-y-4">
              <h3 className="text-sm md:text-sm font-bold text-gray-900 uppercase tracking-wide">
                {column.title}
              </h3>
              <p className="text-sm md:text-sm text-gray-600 leading-relaxed">
                {column.subtext}
              </p>
              <div className="space-y-3 md:space-y-3">
                {column.features.map((feature, featureIndex) => (
                  <Link
                    key={featureIndex}
                    href={feature.href}
                    onClick={closeDropdown}
                    className="flex items-center space-x-3 md:space-x-3 text-sm md:text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 md:px-3 py-3 rounded-md transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 md:w-6 md:h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200 flex-shrink-0">
                      {getFeatureIcon(feature.title)}
                    </div>
                    <span className="truncate">{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Card - Responsive */}
        <div className="w-full lg:w-[320px] h-auto lg:h-[240px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-6 flex flex-col justify-between shadow-lg text-center">
          <h3 className="text-white font-semibold text-sm md:text-sm leading-snug mb-4 lg:mb-0">
            Integrate your stack to <span className="text-blue-400 font-bold">MarketingPro</span> & run entire pipeline in 1 spot
          </h3>

          {/* Center logo with orbit effect */}
          <div className="flex-1 flex items-center justify-center relative my-4 lg:my-0">
            {/* Main logo */}
            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-lg flex items-center justify-center shadow-md z-10">
              <span className="text-white font-bold text-sm md:text-lg">M</span>
            </div>

            {/* Orbit circles (background effect) */}
            <div className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full border border-gray-700 opacity-40 animate-pulse"></div>
            <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-gray-700 opacity-20"></div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-3 rounded-lg text-sm md:text-sm font-medium transition-colors duration-200 shadow-md">
            Check MarketingPro integrations
          </button>
        </div>
      </div>
      
    </div>
  );
}

// Helper function to get feature icons
function getFeatureIcon(featureTitle: string) {
  const iconMap: { [key: string]: React.ReactNode } = {
    '450M+ lead database': (
      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    'Email finder & verifier': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'Phone number finder': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    'Multichannel sequences': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    'LinkedIn prospecting': (
      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    'In-app calling': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    'AI-powered personalization': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    'Unified inbox': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'Inbox rotation': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    'Warm-up & deliverability booster': (
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
