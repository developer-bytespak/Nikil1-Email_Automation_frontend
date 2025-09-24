import Link from 'next/link';

export default function PhoneFinderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get real numbers, reach leads directly, & <span className="bg-blue-100 px-2 py-1 rounded">convert 3x faster</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our waterfall enrichment gets you accurate phone numbers from the market&apos;s top providers, in 1 spot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/signup">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Start with 25 free numbers
                  </button>
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                Zero commitment. Free &quot;not found&quot; lookups. Keep unused credits.
              </p>
            </div>

            {/* Right Content - Waterfall Enrichment Visual */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-8 shadow-lg max-w-md w-full">
                {/* Initial Contact Card */}
                <div className="bg-white rounded-xl p-4 mb-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">WS</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Wyatt Sterling</div>
                        <div className="text-sm text-gray-600">Account Executive</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Phone unknown</div>
                </div>

                {/* Waterfall Enrichment Steps */}
                <div className="space-y-4 mb-6">
                  {/* Attempt 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1"></div>
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium">
                      Phone number not found
                    </span>
                  </div>

                  {/* Attempt 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1"></div>
                    </div>
                    <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium">
                      Phone number not found
                    </span>
                  </div>

                  {/* Attempt 3 - Success */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">CO</span>
                    </div>
                    <div className="flex-1 h-px bg-gray-300 relative">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1"></div>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                      Phone number found
                    </span>
                  </div>
                </div>

                {/* Final Contact Card */}
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">WS</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Wyatt Sterling</div>
                        <div className="text-sm text-gray-600">Account Executive</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">(+1) 512-237-8194</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterfall Enrichment Infographic */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12
                       transform hover:scale-105 hover:shadow-2xl 
                       transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More phone numbers. <span className="text-blue-600">Same great quality.</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We run enrichment across the best phone databases until we find the most accurate match. That means higher coverage, better quality, and lower costs for you.
              </p>
            </div>

            {/* Visual Flow Diagram */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Left Column - Search Premium Databases */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">SEARCH PREMIUM DATABASES</h3>
                  
                  <div className="space-y-6">
                    {/* Database 1 - Failed */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-2 border-red-500 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                      </div>
                      <div className="w-24 h-px bg-gray-300 relative mb-3">
                        <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1"></div>
                      </div>
                      <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                        Phone number not found
                      </span>
                    </div>

                    <div className="text-sm text-gray-500 font-medium">Then try</div>

                    {/* Database 2 - Failed */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                          <span className="text-white font-bold text-xs">C</span>
                        </div>
                      </div>
                      <div className="w-24 h-px bg-gray-300 relative mb-3">
                        <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1"></div>
                      </div>
                      <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                        Phone number not found
                      </span>
                    </div>

                    <div className="text-sm text-gray-500 font-medium">Then try</div>

                    {/* Database 3 - Success */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="w-24 h-px bg-gray-300 relative mb-3">
                        <div className="absolute right-0 top-0 w-2 h-2 bg-gray-300 rounded-full -translate-y-1"></div>
                      </div>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                        Phone number found
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Pay Only 1 Tool */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">PAY ONLY 1 TOOL</h3>
                  
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">E</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-600">
                    <div className="w-32 h-px bg-gray-300 mx-auto mb-2"></div>
                    <div className="w-32 h-px bg-gray-300 mx-auto"></div>
                  </div>
                </div>

                {/* Right Column - Get Accurate Numbers */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">GET ACCURATE NUMBERS</h3>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-pink-600 font-semibold text-lg">TL</span>
                      </div>
        <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">Tessa Lockwood</div>
                        <div className="text-gray-600 text-sm mb-3">Field Marketing Manager</div>
                        <div className="text-blue-600 font-semibold">(+1) 206-579-4821</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Extension Card */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12
                       transform hover:scale-105 hover:shadow-2xl 
                       transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grab phone numbers directly from LinkedIn
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Use our Chrome extension to extract leads&apos; numbers directly from their profiles or bulk searches. Send them to campaigns or contact lists instantly, from free LinkedIn or Navigator accounts.
              </p>
            </div>

            {/* LinkedIn Profile & Extension Visual */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* LinkedIn Profile Card */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {/* LinkedIn Header */}
                  <div className="bg-blue-50 px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">MA</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Marlowe Ashford</div>
                        <div className="text-sm text-gray-600">1st</div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="font-semibold text-gray-900 text-lg">Chief Executive Officer @Viralize</div>
                      <div className="text-gray-600 text-sm">Washington, D.C., United States</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="text-sm text-blue-600 hover:underline cursor-pointer">Contact info</div>
                      <div className="text-sm text-blue-600 hover:underline cursor-pointer">Join 50K newsletter readers</div>
                      <div className="text-sm text-blue-600 hover:underline cursor-pointer">500+ connections</div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">Kevin Moënne-Loccoz</span> is a mutual connection
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        + Follow
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                        Message
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                        More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chrome Extension Popup */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-6 relative z-10 transform lg:translate-x-[-20px] lg:translate-y-4">
                  {/* Extension Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">MA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Marlowe Ashford</div>
                    </div>
                  </div>

                  {/* Data from company */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-500 mb-2">Data from company</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Chief Executive Officer @Viralize</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Email: marlowe.a@viralize.co</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-500 mb-2">Phone</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <span className="text-sm text-gray-600">No phone number</span>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 cursor-pointer">
                        FIND PHONE
                      </button>
                    </div>
                  </div>

                  {/* Campaigns */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-500 mb-2">CAMPAIGNS</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center">
                          <svg className="w-2 h-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        Worldwide CEOs
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
                          <svg className="w-2 h-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        Daniel&apos;s campaign
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-400 rounded"></div>
                        </div>
                        Worldwide SaaS executives
                      </div>
                    </div>
                  </div>

                  {/* Contact List */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-500 mb-2">CONTACT LIST</div>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block">
                      US - SaaS CEOs
                    </div>
                  </div>

                  {/* Bottom Button */}
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Manage contact
                  </button>
                </div>
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
              Why Choose Our Phone Finder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get access to the most comprehensive and accurate phone number database
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Numbers</h3>
              <p className="text-gray-600">All phone numbers are verified and updated daily to ensure maximum reachability</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Waterfall Enrichment</h3>
              <p className="text-gray-600">Try multiple providers automatically until we find the right number for your lead</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Reach</h3>
              <p className="text-gray-600">Call your leads directly and convert 3x faster with verified phone numbers</p>
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