export default function ColdEmailTemplatesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="w-full flex items-center justify-center py-20 bg-white">
      <div className="text-center px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
            Cold outreach   
          </span>{"  "}
          
          Templates hub
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Get access to the best-performing templates and campaigns, tested across 400M+ emails and thousands of sales pros.

        </p>
      </div>
    </section>

    {/* Templates Library Section */}
    <section className="w-full py-16 bg-bl-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Templates library</h2>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Templates for</option>
                <option>Cold Outreach</option>
                <option>Follow-up</option>
                <option>Re-engagement</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Performance</option>
                <option>High Open Rate</option>
                <option>High Reply Rate</option>
                <option>Best Overall</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Target</option>
                <option>Prospects</option>
                <option>Customers</option>
                <option>Partners</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Intent</option>
                <option>Discovery</option>
                <option>Follow-up</option>
                <option>Closing</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Approach</option>
                <option>Value-first</option>
                <option>Direct</option>
                <option>Social Proof</option>
              </select>
              
              <select className="px-4 py-2 border border-blue-500 rounded-lg bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Template Card 1 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">40% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">20% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Voice message to re-engage prospects</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 431+ downloads</p>
              </div>
            </div>

            {/* Template Card 2 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">73% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">40% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Get replies with a value-first approach</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 560+ downloads</p>
              </div>
            </div>

            {/* Template Card 3 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">61% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">10% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Post Engagement Follow-Up</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 238+ downloads</p>
              </div>
            </div>

            {/* Template Card 4 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">45% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">25% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">LinkedIn Connection Follow-up</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 189+ downloads</p>
              </div>
            </div>

            {/* Template Card 5 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">52% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">18% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Meeting Confirmation Template</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 312+ downloads</p>
              </div>
            </div>

            {/* Template Card 6 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">38% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">15% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Break-up Email Template</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 156+ downloads</p>
              </div>
            </div>

            {/* Template Card 7 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">67% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">32% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Referral Request Template</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 423+ downloads</p>
              </div>
            </div>

            {/* Template Card 8 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">55% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">28% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Event Invitation Template</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 298+ downloads</p>
              </div>
            </div>

            {/* Template Card 9 */}
            <div className="group bg-white rounded-xl p-6 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-600">3. Unkacinis</div>
                  <div className="text-xs text-gray-600">4. W</div>
                  <div className="text-xs text-gray-600">5. Unkechinmamag</div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium">49% Open Rates</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">22% Reply Rates</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-3">Product Demo Follow-up</h3>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Duplicate template
                </button>
                
                <p className="text-xs text-gray-600 mt-2 text-center">± 367+ downloads</p>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">1</button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">2</button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">3</button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">4</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">12</button>
            
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
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
                <li><a href="/login" className="text-gray-400 hover:text-white transition-colors duration-200">Log in</a></li>
                <li><a href="/signup" className="text-gray-400 hover:text-white transition-colors duration-200">Sign up for free</a></li>
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
