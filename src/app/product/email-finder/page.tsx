import Link from 'next/link';

export default function EmailFinderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get all your <span className="text-blue-600">verified emails</span> in one place
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Instead of paying for multiple data providers, we give you verified emails from 8 premium sources — all inside a single platform.
            </p>
            <div className="flex justify-center">
              <Link href="/signup">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  Start finding emails
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Cards Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Reach 80% of leads */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Reach 80% of your leads with valid emails
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We help you find 80% of your leads' emails — up to 2x more than the average vendor.
              </p>
              
              {/* Progress Bar Visual */}
              <div className="relative">
                <div className="w-full h-8 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-lg" style={{width: '80%'}}></div>
                </div>
                <div className="absolute -top-2 right-4 bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm">
                  80%
                </div>
              </div>
            </div>

            {/* Card 2: Export from LinkedIn */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Export unlimited emails from LinkedIn
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Quickly export your leads' emails from LinkedIn profiles with our simple Chrome extension.
              </p>
              
              {/* LinkedIn Visual */}
              <div className="flex justify-center items-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-xl">in</span>
                </div>
                <div className="absolute -left-4 -bottom-2 w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="absolute -right-4 -bottom-2 w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Waste Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12
                       transform hover:scale-105 hover:shadow-2xl 
                       transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stop wasting money on unusable emails
              </h2>
              <p className="text-2xl font-semibold text-gray-700 mb-4">
                Pay only for what works.
              </p>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our system ensures you get billed only for verified emails, so every lead delivers real value to your business.
              </p>
            </div>

            {/* Visual Flow Diagram */}
            <div className="relative max-w-4xl mx-auto">
              {/* Cost Indicators */}
              <div className="flex justify-between items-center mb-8">
                <div className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold text-lg">
                  $$$
                </div>
                <div className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-lg">
                  $0
                </div>
              </div>

              {/* Email Lead Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {/* Invalid Emails */}
                <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">EF</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">e.foster@fx.co</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">Invalid</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">AS</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">arjun.sharma@fx.co</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">Invalid</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">TH</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">t.hughes@gocig.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">Invalid</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">HS</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">hannah.s@nexel.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">Invalid</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold text-sm">JE</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Joshua Evans</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">Not found</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold text-sm">CR</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Chloe Reed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">Not found</span>
                  </div>
                </div>
              </div>

              {/* Flow Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 200">
                  <defs>
                    <pattern id="dotted" patternUnits="userSpaceOnUse" width="4" height="4">
                      <circle cx="2" cy="2" r="1" fill="#9CA3AF"/>
                    </pattern>
                  </defs>
                  <path d="M100 100 Q400 50 700 100" stroke="url(#dotted)" strokeWidth="2" fill="none" strokeDasharray="4,4"/>
                </svg>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href="/signup">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Try with 100 free emails
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Email Finder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get access to the most comprehensive and accurate email database from premium sources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Emails</h3>
              <p className="text-gray-600">All emails are verified and updated daily to ensure maximum deliverability</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">8 Premium Sources</h3>
              <p className="text-gray-600">Access verified emails from 8 top data providers in one unified platform</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">Find and export verified emails instantly to start your outreach campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">MarketingPro</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                The all-in-one prospecting platform that helps sales teams find, engage, and convert more qualified leads.
              </p>
              
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="/product/lead-database" className="text-gray-400 hover:text-white transition-colors duration-200">Lead Database</a></li>
                <li><a href="/product/email-finder" className="text-gray-400 hover:text-white transition-colors duration-200">Email Finder</a></li>
                <li><a href="/product/phone-finder" className="text-gray-400 hover:text-white transition-colors duration-200">Phone Finder</a></li>
                <li><a href="/product/linkedin-prospecting" className="text-gray-400 hover:text-white transition-colors duration-200">LinkedIn Prospecting</a></li>
                <li><a href="/product/multichannel-sequences" className="text-gray-400 hover:text-white transition-colors duration-200">Multichannel Sequences</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">GET STARTED</h4>
              <ul className="space-y-2">
                <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Log in</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sign up for free</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 MarketingPro. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a  className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
                <a  className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
                <a  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"  >Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
