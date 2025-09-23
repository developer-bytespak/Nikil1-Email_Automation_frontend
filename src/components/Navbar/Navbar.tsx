'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductMegaCard from './ProductMegaCard';
import RolesMiniCard from './RolesMiniCard';
import ToolboxMegaCard from './ToolboxMegaCard';

export default function Navbar() {
  const [hoverState, setHoverState] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MarketingPro</span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <div
              className="relative"
              onMouseEnter={() => setHoverState('product')}
              onMouseLeave={() => setHoverState(null)}
            >
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                Product
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {hoverState === 'product' && (
                <div className="navbar-dropdown dropdown-enter">
                  <ProductMegaCard />
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setHoverState('roles')}
              onMouseLeave={() => setHoverState(null)}
            >
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                Roles
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {hoverState === 'roles' && (
                <div className="navbar-dropdown dropdown-enter">
                  <RolesMiniCard />
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Pricing
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setHoverState('toolbox')}
              onMouseLeave={() => setHoverState(null)}
            >
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                Toolbox
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {hoverState === 'toolbox' && (
                <div className="navbar-dropdown dropdown-enter">
                  <ToolboxMegaCard />
                </div>
              )}
            </div>
          </div>

          {/* Right Side Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Get a demo
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Sign up for free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
