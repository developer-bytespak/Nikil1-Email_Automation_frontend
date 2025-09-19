import Link from 'next/link';

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Card Section */}
      <section className="pt-20 lg:pt-24 py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-[1.02] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  For <span className="text-blue-600 animate-pulse" >Solo founder?</span> We’ve got your back. <span className="text-blue-600 animate-pulse">generate revenue on</span> their own
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Find the right prospects, personalize like a pro, and manage conversations across every channel — email, LinkedIn, WhatsApp, and phone — without ever leaving one platform.                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <Link href="#">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-700">
                      Start free for 14 days
                    </button>
                  </Link>
                  <Link href="#">
                    <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="#"/>
                      </svg>
                      Watch 2-min demo
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side - UI Mockup */}
              <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="relative">
                  {/* Lead Management Card */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full border border-gray-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl relative z-10">
                    {/* Lead Management Interface */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">Lead Management</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-500">Live</span>
                        </div>
                      </div>
                      
                      {/* Table Headers */}
                      <div className="grid grid-cols-12 gap-4 mb-3 px-3 py-2 bg-gray-50 rounded-lg">
                        <div className="col-span-5 text-xs font-medium text-gray-500">Lead</div>
                        <div className="col-span-3 text-xs font-medium text-gray-500">Score</div>
                        <div className="col-span-4 text-xs font-medium text-gray-500">Last contact intent</div>
                      </div>

                      <div className="space-y-1">
                        {/* Lead 1 */}
                        <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg transform hover:scale-105 hover:bg-blue-50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1s'}}>
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                              <span className="text-blue-600 font-semibold text-xs">AH</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Amanda Hubert</span>
                          </div>
                          <div className="col-span-3">
                            <span className="text-orange-500 font-semibold text-sm animate-pulse">92</span>
                          </div>
                          <div className="col-span-4 flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs text-gray-600">Meeting booked 1 day ago</span>
                          </div>
                        </div>

                        {/* Lead 2 */}
                        <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-semibold text-xs">AA</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Aisha Ahmed</span>
                          </div>
                          <div className="col-span-3">
                            <span className="text-orange-500 font-semibold text-sm">91</span>
                          </div>
                          <div className="col-span-4 flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs text-gray-600">Email clicked 1 day ago</span>
                          </div>
                        </div>

                        {/* Lead 3 */}
                        <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-semibold text-xs">DR</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Dianne Russell</span>
                          </div>
                          <div className="col-span-3">
                            <span className="text-orange-500 font-semibold text-sm">88</span>
                          </div>
                          <div className="col-span-4 flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs text-gray-600">Meeting booked 2 days ago</span>
                          </div>
                        </div>

                        {/* Lead 4 */}
                        <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                              <span className="text-pink-600 font-semibold text-xs">BC</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Bessie Cooper</span>
                          </div>
                          <div className="col-span-3">
                            <span className="text-orange-500 font-semibold text-sm">86</span>
                          </div>
                          <div className="col-span-4 flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs text-gray-600">Email opened 2 days ago</span>
                          </div>
                        </div>

                        {/* Lead 5 */}
                        <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 font-semibold text-xs">JB</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Jerome Bell</span>
                          </div>
                          <div className="col-span-3">
                            <span className="text-orange-500 font-semibold text-sm">84</span>
                          </div>
                          <div className="col-span-4 flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-xs text-gray-600">Email replied 2 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Growth Chart Card */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6 w-80 border border-gray-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Growth</h3>
                      <div className="text-2xl font-bold text-green-600">+127%</div>
                      <div className="text-sm text-gray-500">vs last month</div>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="relative h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <svg className="w-full h-full" viewBox="0 0 200 100">
                        {/* Chart line */}
                        <path 
                          d="M10,80 Q50,60 100,40 T190,20" 
                          stroke="#3B82F6" 
                          strokeWidth="3" 
                          fill="none"
                          className="animate-draw-line"
                        />
                        {/* Chart area fill */}
                        <path 
                          d="M10,80 Q50,60 100,40 T190,20 L190,100 L10,100 Z" 
                          fill="url(#gradient)" 
                          opacity="0.3"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
                          </linearGradient>
                        </defs>
                        
                        {/* Chart icons */}
                        <circle cx="20" cy="75" r="4" fill="#3B82F6" className="animate-pulse"/>
                        <circle cx="100" cy="45" r="4" fill="#3B82F6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <circle cx="180" cy="25" r="4" fill="#3B82F6" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </svg>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-sm text-gray-600">Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Tools Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center 
                 leading-tight tracking-tight drop-shadow-lg">
                Everything you need to <br /> scale your solo business
            </h2>
          </div>

          <div className="space-y-8">
            {/* Card 1 - Lead Generation */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Create your perfect lead list with verified contacts
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Find reliable emails and phone numbers from a single platform that aggregates data from the industry’s top providers. Start with 100 free verified emails every month, and upgrade only when you need more.

                  No network? No worries. Define your ideal customer profile (ICP) and instantly access our database of 450M+ B2B professionals worldwide.                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/founder4.png.png" 
                    alt="Lead Generation Dashboard" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Multichannel Outreach */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '1s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Launch multichannel outreach in minutes
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Connect with prospects across email, LinkedIn, WhatsApp, and phone  all within a single campaign. Automate smart follow-ups that keep you top-of-mind while still feeling personal and human.
                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/founder3.png.png" 
                    alt="Multichannel Outreach" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - AI Personalization */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '1.6s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Personalize outreach without the heavy lifting

                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Our AI helps you create messages that sound authentic and true to your voice. Add tailored intros, company insights, or even custom LinkedIn voice notes at scale — all in just a few clicks.                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/founder2.png.png" 
                    alt="AI Personalization" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 - Revenue Analytics */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '2s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '2.2s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Make sure your emails always land in the inbox
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Email deliverability is one of the biggest challenges in outbound sales. If your messages end up in spam, you lose opportunities before they even start. That’s why our deliverability tool automatically works behind the scenes to protect and strengthen your sender reputation.                </p></div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/founder1.png.png" 
                    alt="Revenue Analytics" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steal What Works Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Resources
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to succeed as a solo founder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven templates, strategies, and tools from successful solo entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Cold Email Templates */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up
                         flex flex-col h-full"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                High-converting cold email templates
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Access proven email templates that have generated millions in revenue for solo founders. Copy, customize, and start closing deals today.
              </p>
              <div className="mt-auto">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Get templates now
                </button>
              </div>
            </div>

            {/* Card 2 - Founder Playbooks */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up
                         flex flex-col h-full"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solo founder playbooks
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Step-by-step guides from successful solo founders who've built and scaled their businesses from zero to millions in revenue.
              </p>
              <div className="mt-auto">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Access playbooks
                </button>
              </div>
            </div>

            {/* Card 3 - AI Prompts */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up
                         flex flex-col h-full"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI prompts for founders
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Powerful AI prompts to personalize outreach, analyze prospects, and automate repetitive tasks so you can focus on growing your business.
              </p>
              <div className="mt-auto">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Get AI prompts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

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
