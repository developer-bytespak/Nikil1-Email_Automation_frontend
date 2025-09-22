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
