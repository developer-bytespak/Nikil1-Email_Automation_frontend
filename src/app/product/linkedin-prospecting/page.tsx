export default function LinkedInProspectingPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Boost Your Replies  with LinkedIn Outreach 
              <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">2.5x more replies</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Find and engage LinkedIn leads, integrate them into your multichannel campaigns, and let automation do the heavy lifting.            </p>
            
            <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Try now, for free
              </button>
              <p className="text-sm text-gray-500">
                14-day free trial. LinkedIn Basic & Navigator friendly.
              </p>
            </div>
          </div>

          {/* Right Side - LinkedIn Workflow Diagram */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            {/* Connection Request Card */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6 mb-4 animate-slide-in-up" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
                <span className="font-semibold text-gray-800">Connection Request</span>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">JW</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">Jaxon Winslow</span>
                    <span className="text-gray-500 text-sm">· 2nd</span>
                  </div>
                  <p className="text-sm text-gray-600">Turn warm leads into sales | BDR @Fully</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Ignore
                </button>
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Accept
                </button>
              </div>
            </div>

            {/* Decision Point */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 rounded-xl px-4 py-2 flex items-center space-x-2 animate-fade-in" style={{animationDelay: '1.2s'}}>
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">in</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Accepted LinkedIn invite within 2 days</span>
              </div>
            </div>

            {/* Decision Branches */}
            <div className="flex justify-between px-8 mb-4">
              <div className="text-center">
                <div className="text-sm font-medium text-green-600 mb-2 animate-fade-in" style={{animationDelay: '1.4s'}}>Yes</div>
                <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1.6s'}}></div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-red-600 mb-2 animate-fade-in" style={{animationDelay: '1.4s'}}>No</div>
                <div className="w-0.5 h-8 bg-gray-300 mx-auto animate-grow-vertical" style={{animationDelay: '1.6s'}}></div>
              </div>
            </div>

            {/* Left Branch - Yes (Direct Communication) */}
            <div className="flex justify-between">
              <div className="space-y-4 w-48">
                {/* Text Message Card */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-4 animate-slide-in-left" style={{animationDelay: '1.8s'}}>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs">in</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Text Message</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-xs">JW</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Jaxon Winslow</p>
                      <p className="text-xs text-gray-500">6:55 PM</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Hi {`{firstName}`}, I saw you requested access to the LinkedIn playbook under {`{Competitor}`}'s post. (...)
                  </p>
                </div>

                {/* Voice Message Card */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-4 animate-slide-in-left" style={{animationDelay: '2s'}}>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs">in</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Voice Message</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-xs">JW</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Jaxon Winslow</p>
                      <p className="text-xs text-gray-500">2:34 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">▶</span>
                    </div>
                    <span className="text-xs text-gray-500">0:37</span>
                  </div>
                </div>
              </div>

              {/* Right Branch - No (Alternative Engagement) */}
              <div className="space-y-4 w-48">
                {/* Profile Visit Card */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-4 animate-slide-in-right" style={{animationDelay: '1.8s'}}>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs">in</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Profile Visit</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs">JW</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Jaxon Winslow</p>
                        <p className="text-xs text-gray-500">viewed your profile</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-gray-100 rounded-xl p-3 flex items-center space-x-2 animate-slide-in-right" style={{animationDelay: '2s'}}>
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✉</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Email</span>
                </div>

                {/* Call Card */}
                <div className="bg-gray-100 rounded-xl p-3 flex items-center space-x-2 animate-slide-in-right" style={{animationDelay: '2.2s'}}>
                  <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             Engage leads on LinkedIn,
              without lifting a finger
            </h2>
           
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 animate-fade-in-left" style={{animationDelay: '0.8s'}}>
              <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '1s'}}>
              Discover Valuable LinkedIn Leads to Reach Out To
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              Find and add LinkedIn leads to your outreach campaigns, directly from your platform or via the Chrome extension.              </p>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              Enrich your leads with data from top providers, then let AI clean, segment, and optimize them for maximum success.     </p>       </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
            <img 
               src="/images/LP1.png.png" 
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
              Capture Attention with Automated Profile Visits
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Automatically visit leads’ profiles to show genuine interest, build familiarity, and increase the likelihood of connecting later.</p>
              
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/LP2.png.png" 
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
              Send Personalized Messages at Scale              </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Automatically personalize messages for each lead using dynamic fields like name, ICP, or pain points.</p>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Take it a step further with AI-powered personalization, turning LinkedIn bios into engaging icebreakers that capture attention. Need inspiration? Choose from hundreds of proven LinkedIn templates to get started.        </p>
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/LP3.png.png" 
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
      Automate safely without putting your account at risk. 
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      Run LinkedIn actions with built-in smart limits and natural delays. Use engagement-based rules to focus on your most valuable leads.  
      </p>
      {/* <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        Send quick, personalized nudges at scale with built-in warm-up, ensuring your number stays safe and your messages get the attention they deserve.  
      </p> */}
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/LP4.png.png" 
        alt="WhatsApp Follow-Up Visual" 
        className="w-full h-full object-cover rounded-lg"
      />
      </div>
     </div>
      </div>
      {/* Section 5 */}
      <div className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
       <div className="space-y-6 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
      <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
      Text Not Enough? Send Voice Messages Instead!
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      Stand out in crowded inboxes by sending personalized voice notes. Record once, or let the platform clone your voice and personalize each message at scale!      </p>
      
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/LP5.png.png" 
        alt="WhatsApp Follow-Up Visual" 
        className="w-full h-full object-cover rounded-lg"
      />
      </div>
     </div>
      </div>

      {/* Section 6 */}
      <div className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
       <div className="space-y-6 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
      <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
      Streamline LinkedIn Conversations as a Team
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      Manage all your multichannel conversations from a single, shared inbox. Collaborate seamlessly, reply as a team, and handle multiple accounts without switching tabs or logging into different platforms.</p>      
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
      Stay organized with tags, filters, and lead assignments to ensure smooth teamwork.      </p>   
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/LP6.png.png" 
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