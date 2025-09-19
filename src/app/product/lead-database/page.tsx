import Link from 'next/link';

export default function LeadDatabasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find new buyers & their <span className="text-blue-600">verified info</span> in 450M+ contacts database
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Search across 63M+ companies, find decision-makers fast, and reach out in seconds.
            </p>
            <div className="flex justify-center">
              <Link href="/signup">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  Get verified prospects
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

      {/* Database Interface Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Interactive Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our intuitive database interface with powerful filtering capabilities. 
              <span className="text-blue-600 font-semibold"> Click around</span> to explore the features that make lead generation effortless.
            </p>
          </div>
          
          <div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-7xl mx-auto relative overflow-hidden
                       transform hover:scale-105 hover:shadow-2xl 
                       transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Create Campaign Button */}
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Create new campaign
                  </button>
                  
                  {/* Search Bar */}
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search for anything" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="absolute right-3 top-3 text-xs text-gray-400">⌘K</span>
                  </div>
                  
                  {/* Navigation Menu */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Engage</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Dashboard</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span className="text-sm">Campaigns</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Inbox</span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">Tasks</span>
                        </div>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">21</span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-sm">Calls</span>
                        </div>
                        <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                      </div>
                    </div>
                    
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3 mt-6">Find & Manage</div>
                    <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <span className="text-sm font-medium">People database</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Filter Panel */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Filters</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search filters..." 
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                      </svg>
                      General
                    </div>
                    
                    <div className="space-y-1 ml-6">
                      {[
                        { icon: "📢", text: "Not already in a campaign" },
                        { icon: "📄", text: "Current job title" },
                        { icon: "📍", text: "Country" },
                        { icon: "📍", text: "Region" },
                        { icon: "🔍", text: "Keyword in profile" },
                        { icon: "🏢", text: "Department" },
                        { icon: "👤", text: "Current position tenure" },
                        { icon: "👤", text: "Seniority" },
                        { icon: "📅", text: "Years of experience" },
                        { icon: "👥", text: "Number of connections" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.icon}</span>
                            <span className="text-sm text-gray-600">{item.text}</span>
                          </div>
                          <button className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-blue-700">+</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-dashed border-blue-200 rounded-2xl p-8 text-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-200"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">People Database</h3>
                    
                    <div className="flex justify-center gap-4 mb-8">
                      <div className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        <span className="font-semibold">People</span>
                      </div>
                      <div className="flex items-center gap-3 px-6 py-3 bg-white text-gray-500 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-200 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        <span className="font-medium">Companies</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                      <div className="flex items-center justify-center gap-3 text-gray-700 mb-4">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="font-medium">To begin, apply a filter to the database</span>
                      </div>
                      <p className="text-sm text-gray-500">Or pick a saved search to get started</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 text-blue-600 hover:text-blue-700 cursor-pointer group">
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z"/>
                      </svg>
                      <span className="font-semibold group-hover:underline">Learn how to get started</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Build lead lists, find verified contacts, &<br />
            <span className="bg-gradient-to-r from-yellow-300 to-green-400 text-gray-900 px-3 py-1 rounded-lg inline-block mt-2">
              connect with your ICP
            </span> in a few clicks
          </h2>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Craft a list of your ICP companies
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
              Access a 63M+ database of high-value accounts and filter your ideal match by tech stack, funding, revenue, etc.
              </p>
            </div>

            {/* Step 2 */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Get relevant contacts and their verified info
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
              Use advanced filters to find decision-makers at target companies, including their verified emails & numbers              </p>
            </div>

            {/* Step 3 */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Reach out to ideal buyers in seconds!
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
              Send your new leads to multichannel sequences that run on autopilot, without sacrificing personalization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multichannel Campaigns Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12
                       transform hover:scale-105 hover:shadow-2xl 
                       transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '1.0s' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Send<br />
                  multichannel<br />
                  campaigns<br />
                  at scale
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Add multiple contacts to a<br />
                  hyper-personalized campaign<br />
                  that works on autopilot<br />
                  in 1 click.
                </p>
              </div>

              {/* Right Content - Multichannel Campaigns Visual */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg max-w-sm w-full">
                  {/* Three-step process cards */}
                  <div className="space-y-4">
                    {/* Step 1: LinkedIn Channel */}
                    <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                        </div>
                      </div>
                      <span className="text-gray-800 font-medium">LinkeJllannel</span>
                    </div>

                    {/* Step 2: Get contact details */}
                    <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center relative">
                          <div className="w-4 h-4 border border-gray-300 rounded"></div>
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-sm"></div>
                        </div>
                      </div>
                      <span className="text-gray-800 font-medium">Get contact details</span>
                    </div>

                    {/* Step 3: Reach out */}
                    <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium">Reach out</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Enrichment Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12
                       transform hover:scale-105 hover:shadow-2xl 
                       transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Scrape <span className="bg-blue-100 px-2 py-1 rounded">verified emails</span> & <span className="bg-blue-100 px-2 py-1 rounded">phone numbers</span> in 1-click
                </h2>
                <div className="space-y-4 text-lg text-gray-600 mb-8">
                  <p>
                    Get the most accurate email addresses & phone numbers from the market's top providers, in 1 spot.
                  </p>
                  <p>
                    It takes 1 click to enrich your leads' with verified information from the market's top providers.
                  </p>
                </div>
              </div>

              {/* Right Content - Lead List Card */}
              <div className="bg-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-gray-900">People 1 276 443</h3>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Filters</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Table Headers */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span className="text-sm font-medium text-gray-600">First name, Name</span>
                  <span className="text-sm font-medium text-gray-600 ml-auto">Email</span>
                </div>
              </div>

              {/* Contact Rows */}
              <div className="divide-y divide-gray-200">
                {/* Contact 1 */}
                <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">BH</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Becc Holland</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">becc@flipthescript.com</span>
                    </div>
                  </div>
                </div>

                {/* Contact 2 */}
                <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-green-600">FM</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Floyd Miles</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">floydmiles@airbnb.com</span>
                    </div>
                  </div>
                </div>

                {/* Contact 3 */}
                <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">JB</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Jerome Bell</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">jerome@example.com</span>
                    </div>
                  </div>
                </div>
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
              Why Choose Our Lead Database?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get access to the most comprehensive and accurate B2B contact database
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Contacts</h3>
              <p className="text-gray-600">All contacts are verified and updated daily to ensure maximum deliverability</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Filters</h3>
              <p className="text-gray-600">Filter by industry, company size, job title, location, and more to find your ideal prospects</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Access</h3>
              <p className="text-gray-600">Export contacts instantly and start your outreach campaigns within minutes</p>
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
