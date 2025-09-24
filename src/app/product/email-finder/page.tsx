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
                We help you find 80% of your leads&apos; emails — up to 2x more than the average vendor.
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
                Quickly export your leads&apos; emails from LinkedIn profiles with our simple Chrome extension.
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                <li><Link href="/product/lead-database" className="text-gray-400 hover:text-white transition-colors duration-200">Lead Database</Link></li>
                <li><Link href="/product/email-finder" className="text-gray-400 hover:text-white transition-colors duration-200">Email Finder</Link></li>
                <li><Link href="/product/phone-finder" className="text-gray-400 hover:text-white transition-colors duration-200">Phone Finder</Link></li>
                <li><Link href="/product/linkedin-prospecting" className="text-gray-400 hover:text-white transition-colors duration-200">LinkedIn Prospecting</Link></li>
                <li><Link href="/product/multichannel-sequences" className="text-gray-400 hover:text-white transition-colors duration-200">Multichannel Sequences</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">GET STARTED</h4>
              <ul className="space-y-2">
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><Link href="/login" className="text-gray-400 hover:text-white transition-colors duration-200">Log in</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white transition-colors duration-200">Sign up for free</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacts</h4>
              <div className="space-y-3 mb-6">
                {/* Phone */}
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">833-323-0371 (Toll Free)</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">info@bytesplatform.com</span>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">Bytes Platform LLC, 2809 Joshua Street, Denton, Texas, United States</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
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
