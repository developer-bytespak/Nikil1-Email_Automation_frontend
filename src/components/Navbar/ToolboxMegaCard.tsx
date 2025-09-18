'use client';

import Link from 'next/link';
import { navData } from '../../data/navData';

export default function ToolboxMegaCard() {
  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-8 w-[900px] max-w-[90vw] animate-in fade-in-0 slide-in-from-top-2 duration-300">
      <div className="flex gap-8">
        {/* Main Content - 2 Columns */}
        <div className="flex-1 grid grid-cols-2 gap-8">
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
                    className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                      {getToolboxIcon(feature.title)}
                    </div>
                    <span>{feature.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Card */}
        <div className="w-[320px] h-[240px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div className="text-center">
            <h3 className="text-white font-semibold text-sm mb-4 leading-tight">
              Integrate your stack to <span className="text-blue-400 font-bold">MarketingPro</span> & run entire pipeline in 1 spot
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {getIntegrationLogos().slice(0, 8).map((logo, index) => (
                <div key={index} className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md">
            Check MarketingPro integrations
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function to get toolbox icons
function getToolboxIcon(featureTitle: string) {
  const iconMap: { [key: string]: JSX.Element } = {
    'AI personalization': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    'Handle any cold calls': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    '11 steps to stop landing': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    'Cold email templates': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'AI sales prompt': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    'Voicemail scripts': (
      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
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
