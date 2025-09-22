export default function UnifiedInboxPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 w-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700 mb-6">
            Centralize multichannel conversations in the <span className="text-blue-600">Unified Inbox</span><br />
            
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Bring together calls, emails, and LinkedIn messages—so every lead interaction is right where you need it.          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3 group">
              <span>Get leads' interactions in 1 chat</span>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300">
                <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            
            {/* Disclaimer */}
            <p className="text-sm text-gray-500">
              14 days free. No card required. Available in all plans.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[28px] shadow-2xl p-6 sm:p-10 md:p-14">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug mb-10">
              <span>Without a </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg">clear overview</span>
              <span> of all interactions with your lead, you…</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">can’t understand conversation status to define an informed next step</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">aren’t aligned with your teammates’ actions, resulting in missed opportunities</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center">
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">can’t act quickly across channels or without switching multiple pricey tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized Inbox Solution Section */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Cut the clutter with{' '}
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-lg">
                centralized inbox
              </span>{' '}
              & put efforts where they matter the most
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Manage all leads' conversations from{' '}
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg">
                    1 convenient spot
                  </span>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Centralize every interaction with a lead, regardless of the channel or sender, into a single chat.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Quickly filter and search through conversations, ensuring lead history is accessible whenever you need it.
                  </p>
                </div>
              </div>

              {/* Right Column - Inbox Interface Mockup */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
                <div className="grid grid-cols-2 gap-4 h-96">
                  {/* Left Panel - Conversation List */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-800">My conversations</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 mb-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Search conversations" className="text-sm text-gray-500 bg-transparent border-none outline-none w-full" />
                      </div>
                      
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                        <input type="checkbox" className="rounded" />
                        <span>0 contact selected</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Today</div>
                        
                        {/* Conversation Items */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-blue-600">JC</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900 truncate">Jane Cooper</p>
                                <span className="text-xs text-gray-500">12:00 AM</span>
                              </div>
                              <p className="text-xs text-gray-500">1 call task</p>
                            </div>
                            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          
                          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-green-600">AH</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900 truncate">Alexandre Henrio</p>
                                <span className="text-xs text-gray-500">11:00 AM</span>
                              </div>
                              <p className="text-xs text-gray-500">3 manual tasks</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-purple-600">CH</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900 truncate">Courtney Henry</p>
                                <span className="text-xs text-gray-500">10:00 AM</span>
                              </div>
                              <p className="text-xs text-gray-500">2 tasks</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-4">Yesterday</div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-orange-600">AF</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900 truncate">Albert Flores</p>
                                <span className="text-xs text-gray-500">09:00 AM</span>
                              </div>
                              <p className="text-xs text-gray-500">1 task</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Chat View */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="h-full flex flex-col">
                      {/* Chat Header */}
                      <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">JC</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Jane Cooper</p>
                          <p className="text-xs text-gray-500">Online</p>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="flex-1 space-y-3 py-3 overflow-y-auto">
                        <div className="flex justify-end">
                          <div className="bg-blue-100 rounded-lg p-2 max-w-xs">
                            <div className="flex items-center space-x-2 text-xs text-blue-600">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>Email sent</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 text-center">Email opened</div>

                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-lg p-2 max-w-xs">
                            <div className="flex items-center space-x-2 text-xs text-gray-600">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>Email received</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 rounded-lg p-2 max-w-xs">
                          <div className="flex items-center space-x-2 text-xs text-red-600">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span>Marked as Interested by lemlist's AI</span>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div className="bg-blue-50 rounded-lg p-2 max-w-xs">
                            <div className="flex items-center space-x-2 text-xs text-blue-600">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              <span>LinkedIn interaction</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div className="bg-green-50 rounded-lg p-2 max-w-xs">
                            <div className="flex items-center space-x-2 text-xs text-green-600">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span>Call made</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Input */}
                      <div className="border-t border-gray-100 pt-3">
                        <div className="flex items-center space-x-2">
                          <input 
                            type="text" 
                            placeholder="Write your message..." 
                            className="flex-1 text-sm text-gray-500 bg-transparent border-none outline-none"
                          />
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action Section */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Take{' '}
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg">
                    immediate action
                  </span>{' '}
                  on any channel, in just 1 click
                </h2>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Engage with leads on multiple channels within a click, directly from their conversation thread.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Seamlessly switch between email, LinkedIn, WhatsApp, and calls - without building complex flows or manually switching platforms.
                  </p>
                </div>
              </div>

              {/* Right Column - Interface Mockup */}
              <div className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
                {/* Email Status Card */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4 flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-blue-800">Email opened</span>
                </div>

                {/* Profile and Message */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="h-2 bg-gray-200 rounded w-32"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* AI Status */}
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-red-800">Marked as Interested by lemlist's AI</span>
                  </div>
                </div>

                {/* Channels Dropdown */}
                <div className="relative mb-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <span className="text-sm font-semibold text-gray-700">CHANNELS</span>
                    </div>
                    <div className="py-2">
                      <div className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 group">
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Email</span>
                        <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                      </div>
                      <div className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Call</span>
                      </div>
                      <div className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cursor pointing to Email */}
                  <div className="absolute -right-2 top-16 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Write your message..." 
                    className="flex-1 text-sm text-gray-500 bg-transparent border-none outline-none"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="text-sm font-medium">Send now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Manage Replies Section */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Easily manage replies from
                  <span className="block mt-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg">any sending</span>{' '}
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg">email address</span>
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">Have all conversations with a lead, from multiple accounts, displayed in a single thread.</p>
                <p className="text-lg text-gray-600 leading-relaxed">Easily see which email received the reply and respond directly from the correct account, without switching inboxes.</p>
              </div>

              {/* Right Column - Email dropdown mockup */}
              <div>
                <div className="bg-orange-50 rounded-2xl p-6 shadow-inner border border-orange-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-700">Email</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* From */}
                    <div>
                      <label className="text-xs text-gray-500">From:</label>
                      <div className="mt-1 relative">
                        <div className="flex items-center justify-between bg-white border rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <span>Matthieu Jungfer (matthieu@lempire.co)</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                        </div>
                        {/* Dropdown */}
                        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg border shadow-xl overflow-hidden">
                          <div className="px-4 py-2 text-xs text-gray-500 bg-gray-50">MATTHIEU JUNGFER</div>
                          <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm">Matthieu Jungfer (matthieu@lemlist.io)</div>
                          <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm">Matthieu Jungfer (matthieu@getlemlist.com)</div>
                          <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm flex items-center justify-between">
                            <span>Matthieu Jungfer (matthieu@lemlist.co)</span>
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"><svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a1 1 0 01.894.553l6 12A1 1 0 0116 17H4a1 1 0 01-.894-1.447l6-12A1 1 0 0110 3z"/></svg></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* To */}
                    <div>
                      <label className="text-xs text-gray-500">To:</label>
                      <div className="mt-1 h-8 bg-white border rounded-lg"></div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-xs text-gray-500">Subject:</label>
                      <div className="mt-1 h-8 bg-white border rounded-lg"></div>
                    </div>

                    {/* Body */}
                    <div>
                      <label className="text-xs text-gray-500">Your email</label>
                      <div className="mt-1 h-20 bg-white border rounded-lg"></div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-4 flex items-center space-x-2">
                    <button className="text-xs bg-white border rounded-lg px-3 py-1 shadow-sm">Add {`{custom variable}`}</button>
                    <button className="text-xs bg-white border rounded-lg px-3 py-1 shadow-sm">Ask AI</button>
                    <div className="flex-1"></div>
                    <div className="w-20 h-2 bg-gray-200 rounded"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Centralize an entire{' '}
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg">
                    multichannel outreach
                  </span>{' '}
                  like never before
                </h2>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Handle lead sourcing, outreach, and follow-up from a streamlined hub.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From qualification to closing, Unified inbox helps you manage every step of the outbound process in one platform.
                  </p>
                </div>
              </div>

              {/* Right Column - Comparison Flowcharts */}
              <div className="grid grid-cols-2 gap-8">
                {/* Old Way */}
                <div className="space-y-4">
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-center font-semibold">
                    Old way
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">TOOL 1</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">TOOL 2</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">TOOL 3</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">TOOL 4</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">TOOL 5</span>
                    </div>
                  </div>
                </div>

                {/* New Way */}
                <div className="space-y-4">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-semibold">
                    New way
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">E</span>
                      </div>
                    </div>
                    <div className="text-center text-sm font-semibold text-gray-700 mb-4">1 TOOL</div>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center">
                        <span className="text-sm font-medium text-gray-700">Find verified contacts</span>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center">
                        <span className="text-sm font-medium text-gray-700">Outreach at scale</span>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 text-center">
                        <span className="text-sm font-medium text-gray-700">Manage multichannel conversations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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