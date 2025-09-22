export default function InAppCallingPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="text-blue-600">Tired of Cold Calling?</span>{' '}
              Phone with Other Channels for{' '}
              <span className="text-blue-600">3x the Success</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Reach out to leads through inboxes, follow up with warm calls, and close deals faster all from one platform.            </p>
            
            <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Try for free
              </button>
              <p className="text-sm text-gray-500">
                14-day free trial. No credit card required.
              </p>
            </div>
          </div>

          {/* Right Side - Workflow Diagram and Dialer Interface */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {/* Background Workflow Diagram */}
            <div className="relative bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-200 animate-pulse-slow">
              <div className="space-y-6">
                {/* Email Node */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-gray-200 flex items-center space-x-3 animate-bounce-slow">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-lg">✉️</span>
                    </div>
                    <span className="font-semibold text-gray-800">Email</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1s'}}></div>

                {/* Decision Node */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-gray-200 flex items-center space-x-3 animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-lg">?</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs">RH</span>
                      </div>
                      <span className="font-semibold text-gray-800">Opened email within 2 days</span>
                    </div>
                  </div>
                </div>

                {/* Decision Branches */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-600 mb-2 animate-fade-in" style={{animationDelay: '1.4s'}}>Yes</div>
                    <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1.6s'}}></div>
                  </div>
                </div>

                {/* Call Node */}
                <div className="flex justify-center">
                  <div className="bg-red-100 rounded-xl px-6 py-4 shadow-lg border-2 border-red-200 flex items-center space-x-3 animate-slide-in-up" style={{animationDelay: '1.8s'}}>
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <span className="font-semibold text-gray-800">Call</span>
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center ml-2">
                      <span className="text-gray-600 text-xs">👆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Dialer Interface */}
            <div className="absolute -bottom-6 -right-6 bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-700 w-80 p-6 animate-slide-in-up" style={{animationDelay: '2s'}}>
              {/* Dialer Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Dialer</h3>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl p-4 mb-6 animate-fade-in" style={{animationDelay: '2.2s'}}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">RH</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Robert Hudson</h4>
                    <p className="text-sm text-gray-600">Sales Director</p>
                    <p className="text-sm text-gray-600">Novyte Solutions</p>
                  </div>
                </div>
                
                {/* Call Timer */}
                <div className="text-center">
                  <div className="text-2xl font-mono text-gray-900 animate-pulse">00:11</div>
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '2.4s'}}>
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-white text-lg">🎤</span>
                </button>
                <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="text-white text-lg">📞</span>
                </button>
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-white text-lg">🔢</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Talking to leads by phone makes you 3x more likely to close a deal.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Cut through inbox noise</h3>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Build trust with voice</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Make lasting impressions</h3>
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Skip the response wait</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Refine pitch in real time</h3>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Book meetings instantly</h3>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Reach decision-makers directly</h3>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Handle objections on the spot</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Shorten sales cycle</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Want your sales calls to hit different?
            Make sure they’ve seen you elsewhere first
            </h2>
           
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 animate-fade-in-left" style={{animationDelay: '0.8s'}}>
              <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '1s'}}>
              Get verified business numbers that actually connect
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              Our waterfall enrichment process pulls reliable phone numbers from the industry’s top data sources no extra tools or subscriptions needed.             </p>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              Every month, you’ll receive a set of free numbers from trusted networks and databases. Need more? Just pay as you go, and only for the successful finds.     </p>       </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
            <img 
               src="/images/AC1.png.png" 
               alt="WhatsApp Follow-Up Visual" 
               className="w-full h-full object-cover rounded-lg"
              />             
               </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
              <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Seamlessly layer calls into your email and LinkedIn outreach.
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Transform text-based touchpoints into real conversations with call steps. Use engagement-triggered reminders to reach out when leads already recognize your name.</p>              
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/AC2.png.png" 
               alt="WhatsApp Follow-Up Visual" 
               className="w-full h-full object-cover rounded-lg"
              />            
              </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 animate-fade-in-left" style={{animationDelay: '0.2s'}}>
              <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Call leads at the right moment with the built-in dialer.            </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Make instant calls directly from profiles or engagement-triggered tasks—no extra tools required. Enter focus mode, dial through the native VoIP system, and access all the context you need for top performance.</p>
              
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/AC3.png.png" 
               alt="WhatsApp Follow-Up Visual" 
               className="w-full h-full object-cover rounded-lg"
              />            
            </div>
          </div>
        </div>
        <div className="mb-24">
        <div className="mb-24">
 
       </div>

       </div>



        {/* Section 4 */}
        <div className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
       <div className="space-y-6 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
      <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
      Turn every call into insights that drive action.
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      Recordings are automatically transcribed and AI-summarized, so you can review, share, and sync updates across your CRM whether HubSpot, Salesforce, or Pipedrive without missing a single detail.      </p>
      
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/AC4.png.png" 
        alt="WhatsApp Follow-Up Visual" 
        className="w-full h-full object-cover rounded-lg"
      />
      </div>
     </div>
      </div>
      {/* Section 5 */}
      <div className="mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
    {/* Left Section */}
    <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
      <h4
        className="text-2xl font-bold text-gray-900 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        Track your team’s calling activity and optimize performance.
      </h4>
      <p
        className="text-lg text-gray-600 leading-relaxed animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        Monitor call volumes, durations, peak times, and engagement insights to drive better
        results. Apply filters by date, lead, company, caller, or status to boost your
        call-to-meeting ratio.
      </p>
    </div>

    {/* Right Section */}
    <div className="bg-gray-50 rounded-2xl flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
      <img
        src="/images/AC5.png.png"
        alt="WhatsApp Follow-Up Visual"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
       </div>


     


      </div>
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