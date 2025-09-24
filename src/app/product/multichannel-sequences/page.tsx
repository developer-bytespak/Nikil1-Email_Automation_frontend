export default function MultichannelSequencesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Email, LinkedIn, or phone?{' '}
              <span className="text-blue-600 animate-pulse">Meet your leads</span>{' '}
              <span className="text-blue-600 animate-pulse" style={{animationDelay: '0.5s'}}>wherever they are.</span>{' '}
              From 1 dashboard.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Whether it's email, LinkedIn, or phone, reach your prospects wherever they are, all from one intuitive dashboard  </p>
            
            <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start for free
              </button>
              <p className="text-sm text-gray-500">
                14-day free trial. No credit card required.
              </p>
            </div>
          </div>

          {/* Right Side - UI Mockups */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {/* Background Workflow Diagram */}
            <div className="relative bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-200 animate-pulse-slow">
              <div className="space-y-6">
                {/* Top Node */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-xl px-6 py-4 shadow-lg border-2 border-gray-200 flex items-center space-x-3 animate-bounce-slow">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-lg">?</span>
                    </div>
                    <span className="font-semibold text-gray-800">Lead has a phone number</span>
                  </div>
                </div>

                {/* Decision Branches */}
                <div className="flex justify-between px-8">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2 animate-fade-in" style={{animationDelay: '1s'}}>Yes</div>
                    <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1.2s'}}></div>
                    <div className="bg-red-100 rounded-xl px-4 py-3 shadow-lg border-2 border-red-200 flex items-center space-x-2 animate-slide-in-left" style={{animationDelay: '1.4s'}}>
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs">📞</span>
                      </div>
                      <span className="font-semibold text-gray-800">Call</span>
                    </div>
                    <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1.6s'}}></div>
                    <div className="bg-green-100 rounded-xl px-4 py-3 shadow-lg border-2 border-green-200 flex items-center space-x-2 animate-slide-in-left" style={{animationDelay: '1.8s'}}>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs">💬</span>
                      </div>
                      <span className="font-semibold text-gray-800">WhatsApp message</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2 animate-fade-in" style={{animationDelay: '1s'}}>No</div>
                    <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1.2s'}}></div>
                    <div className="bg-green-100 rounded-xl px-4 py-3 shadow-lg border-2 border-green-200 flex items-center space-x-2 animate-slide-in-right" style={{animationDelay: '1.4s'}}>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs">✉️</span>
                      </div>
                      <span className="font-semibold text-gray-800">Email</span>
                    </div>
                    <div className="flex space-x-4 mt-4">
                      <div className="bg-blue-100 rounded-xl px-4 py-3 shadow-lg border-2 border-blue-200 flex items-center space-x-2 animate-slide-in-right" style={{animationDelay: '1.6s'}}>
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-white text-xs">in</span>
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">LinkedIn profile visit</span>
                      </div>
                      <div className="bg-blue-100 rounded-xl px-4 py-3 shadow-lg border-2 border-blue-200 flex items-center space-x-2 animate-slide-in-right" style={{animationDelay: '1.8s'}}>
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-white text-xs">🎤</span>
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">LinkedIn voice message</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Messaging Interface */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 w-80 p-6 animate-slide-in-up" style={{animationDelay: '2s'}}>
              {/* Channels Header */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">CHANNELS</h3>
                <div className="space-y-2">
                  {['Email', 'LinkedIn', 'WhatsApp', 'Call'].map((channel, index) => (
                    <div key={channel} className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:scale-105 ${index === 0 ? 'bg-blue-50 border border-blue-200' : ''}`}>
                      <span className="text-sm font-medium text-gray-700">{channel}</span>
                      {index === 0 && <span className="text-blue-600 animate-pulse">✓</span>}
                      {index === 1 && <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat History */}
              <div className="space-y-3 mb-4">
                <div className="bg-gray-100 rounded-lg p-3 animate-fade-in" style={{animationDelay: '2.2s'}}>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-medium text-gray-600">lemlist AI</span>
                    <span className="text-xs text-gray-500">12:35</span>
                  </div>
                  <p className="text-sm text-gray-700">We're always interested in tools that could you elaborate on your product?</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 animate-fade-in" style={{animationDelay: '2.4s'}}>
                  <p className="text-sm text-gray-700">is the cost of your software?</p>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Add your message..." 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 hover:scale-105">
                  <span>Send now</span>
                  <span className="animate-bounce">✈️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Tired of Waiting for Replies?
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Show up on channels leads actually use.

            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 animate-fade-in-left" style={{animationDelay: '0.8s'}}>
              <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '1s'}}>
                Kickstart Conversations and Automate Follow-Ups
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                Use the Email Finder to discover a large portion of your leads' contact information, and then automate tailored follow-ups based on their engagement.              </p>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                Automatically tailor your email copy, graphics, and even landing pages  all on autopilot. Personalize at scale, making every interaction feel one-on-one and easy to respond to.              </p>
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
            <img 
               src="/images/MS1.png.png" 
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
              Email Not Enough? Connect with Leads on LinkedIn Automatically
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Effortlessly send LinkedIn connection requests, visit profiles, and send text or voice messages all on autopilot, without leaving your multichannel campaign.              </p>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Leverage the Chrome extension to instantly find, enrich, and export leads into your campaigns, all in just seconds!              </p>
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/MS2.png.png" 
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
              Accelerate Your Pipeline and Call Warm Leads Directly              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Find accurate phone numbers with the Phone Finder, call engaged leads, and convert them into clients faster.              </p>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Set call reminders and dial directly from your platform using native calling, Aircall, or Ringover. Every conversation is tracked, summarized, and shareable to ensure maximum impact.              </p>
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/MS3.png.png" 
               alt="WhatsApp Follow-Up Visual" 
               className="w-full h-full object-cover rounded-lg"
              />            
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
    <div className="space-y-6 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
      <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        Convert Silent Leads into Clients with WhatsApp Follow-Ups  
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        Incorporate WhatsApp steps into your outreach sequence to confirm meetings, follow up after demos, re-engage cold leads, and more.  
      </p>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        Send quick, personalized nudges at scale with built-in warm-up, ensuring your number stays safe and your messages get the attention they deserve.  
      </p>
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/MS4.png.png" 
        alt="WhatsApp Follow-Up Visual" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

      </div>
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