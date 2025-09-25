'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ProductMegaCard from './ProductMegaCard';
import RolesMiniCard from './RolesMiniCard';
import ToolboxMegaCard from './ToolboxMegaCard';

export default function Navbar() {
  const [hoverState, setHoverState] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mobile navbar scroll behavior when dropdowns are open
  useEffect(() => {
    const navbar = document.querySelector('nav');
    const isMobile = window.innerWidth <= 768;
    const hasScrollableDropdown = hoverState === 'product' || hoverState === 'toolbox';
    
    if (isMobile && hasScrollableDropdown) {
      // Enable scroll on navbar for mobile only
      if (navbar) {
        navbar.classList.add('mobile-navbar-scrollable');
        navbar.style.overflowY = 'auto';
        navbar.style.maxHeight = '100vh';
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.zIndex = '1000';
      }
      
      document.body.classList.add('dropdown-open');
      document.body.style.overflow = 'hidden';
    } else {
      // Reset navbar behavior
      if (navbar) {
        navbar.classList.remove('mobile-navbar-scrollable');
        navbar.style.overflowY = 'visible';
        navbar.style.maxHeight = 'none';
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
        navbar.style.left = 'auto';
        navbar.style.right = 'auto';
        navbar.style.zIndex = '50';
      }
      document.body.classList.remove('dropdown-open');
      document.body.style.overflow = 'auto';
    }

    return () => {
      if (navbar) {
        navbar.classList.remove('mobile-navbar-scrollable');
        navbar.style.overflowY = 'visible';
        navbar.style.maxHeight = 'none';
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
        navbar.style.left = 'auto';
        navbar.style.right = 'auto';
        navbar.style.zIndex = '50';
      }
      document.body.classList.remove('dropdown-open');
      document.body.style.overflow = 'auto';
    };
  }, [hoverState]);

  const closeDropdown = () => {
    setHoverState(null);
  };

  const closeDropdownAndMobileMenu = () => {
    setHoverState(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = (dropdownType: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoverState(dropdownType);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverState(null);
    }, 150); // Small delay to prevent flicker
  };

  const handleClick = (dropdownType: string) => {
    // Clear any pending hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Toggle the dropdown
    if (hoverState === dropdownType) {
      closeDropdown();
    } else {
      setHoverState(dropdownType);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full" style={{ position: 'sticky' }}>
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

          {/* Center Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                onClick={() => handleClick('product')}
              >
                Product
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoverState === 'product' ? 'rotate-180' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {hoverState === 'product' && (
                <div 
                  className="navbar-dropdown dropdown-enter"
                  onMouseEnter={() => handleMouseEnter('product')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ProductMegaCard closeDropdown={closeDropdown} />
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('roles')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                onClick={() => handleClick('roles')}
              >
                Roles
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoverState === 'roles' ? 'rotate-180' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {hoverState === 'roles' && (
                <div 
                  className="navbar-dropdown dropdown-enter"
                  onMouseEnter={() => handleMouseEnter('roles')}
                  onMouseLeave={handleMouseLeave}
                >
                  <RolesMiniCard closeDropdown={closeDropdown} />
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
              onMouseEnter={() => handleMouseEnter('toolbox')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                onClick={() => handleClick('toolbox')}
              >
                Toolbox
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoverState === 'toolbox' ? 'rotate-180' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {hoverState === 'toolbox' && (
                <div 
                  className="navbar-dropdown dropdown-enter"
                  onMouseEnter={() => handleMouseEnter('toolbox')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ToolboxMegaCard closeDropdown={closeDropdown} />
                </div>
              )}
            </div>
          </div>

          {/* Right Side Action Buttons - Desktop */}
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
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-white shadow-lg">
            {/* Mobile Navigation Links */}
            <div className="py-2">
              {/* Product Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full text-left flex items-center justify-between py-4 px-6 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => handleClick('product')}
                >
                  <span className="text-base font-medium">Product</span>
                  <svg 
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${hoverState === 'product' ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {hoverState === 'product' && (
                  <div className="px-6 pb-4">
                    <ProductMegaCard closeDropdown={closeDropdownAndMobileMenu} />
                  </div>
                )}
              </div>

              {/* Roles Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full text-left flex items-center justify-between py-4 px-6 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => handleClick('roles')}
                >
                  <span className="text-base font-medium">Roles</span>
                  <svg 
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${hoverState === 'roles' ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {hoverState === 'roles' && (
                  <div className="px-6 pb-4">
                    <RolesMiniCard closeDropdown={closeDropdownAndMobileMenu} />
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <div className="border-b border-gray-200">
                <Link
                  href="/pricing"
                  className="block py-4 px-6 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  <span className="text-base font-medium">Pricing</span>
                </Link>
              </div>

              {/* Toolbox Dropdown */}
              <div className="border-b border-gray-200">
                <button 
                  className="w-full text-left flex items-center justify-between py-4 px-6 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => handleClick('toolbox')}
                >
                  <span className="text-base font-medium">Toolbox</span>
                  <svg 
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${hoverState === 'toolbox' ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {hoverState === 'toolbox' && (
                  <div className="px-6 pb-4">
                    <ToolboxMegaCard closeDropdown={closeDropdownAndMobileMenu} />
                  </div>
                )}
              </div>

              {/* Log in Link */}
              <div className="border-b border-gray-200">
                <Link
                  href="/login"
                  className="block py-4 px-6 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  <span className="text-base font-medium">Log in</span>
                </Link>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="px-6 py-4 space-y-3">
              <Link
                href="#"
                className="block w-full text-center text-gray-700 hover:text-blue-600 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg border border-gray-300 hover:bg-gray-50"
                onClick={closeMobileMenu}
              >
                Get a demo
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
