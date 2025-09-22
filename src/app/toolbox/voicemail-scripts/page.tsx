export default function VoicemailScriptsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="w-full flex items-center justify-center py-20 bg-white">
      <div className="text-center px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
            Voicemail
          </span>{" "}
          cheat sheet
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Always have the right words when leads don’t answer.<br></br>
           Leave voicemails that spark interest and drive callbacks—instead of being ignored.


        </p>
      </div>
    </section>

    {/* Voicemail Templates Section */}
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Voicemail templates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the right voicemail for your use case before every cold call session. Search, select, and send voicemails that actually get callbacks.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Find a voicemail template"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <div className="relative">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-10 text-gray-900">
                <option value="all">All</option>
                <option value="referral">Referral Voicemail</option>
                <option value="returning">Returning a Call</option>
                <option value="events">Events and Trade Shows</option>
                <option value="partner">Partner Acquisition</option>
                <option value="inbound">Inbound Voicemail</option>
                <option value="cold">Cold Outreach</option>
                <option value="no-show">No-show Prospect</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Template 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Returning a call (vague)</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              [Morning/afternoon/evening] [Prospect's name], this is [Your name] from [Company name]. I'm returning your call about [Reason for call]. Please give me a call back at [Your phone number] when you have a moment. Thanks!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                12% Call back rate
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Used by Sales Teams
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View the full script
            </button>
          </div>

          {/* Template 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Events and trade shows (met you)</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Hi [Prospect's name], this is [Your name] from [Company name]. We met at [Event name] and you mentioned [Specific topic discussed]. I wanted to follow up on [Next steps]...
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                18% Call back rate
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Used by Sales Teams
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View the full script
            </button>
          </div>

          {/* Template 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Returning a call (detailed)</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              [Morning/afternoon/evening] [Prospect's name], this is [Your name] from [Company name]. I'm calling about [Specific reason] that we discussed on [Date/time]. I have [Specific information] ready for you...
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                7% Call back rate
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Used by Sales Teams
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View the full script
            </button>
          </div>

          {/* Template 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Events and trade shows (met...)</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Hi [Prospect's name], this is [Your name] from [Company name]. We connected at [Event name] and I wanted to share [Specific value proposition] that could help with [Their challenge]...
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                12% Call back rate
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Used by Sales Teams
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View the full script
            </button>
          </div>

          {/* Template 5 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Basic voicemail</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Hi [Prospect's name], this is [Your name] from [Company name]. I'm calling to discuss [Brief value proposition] that could benefit [Their company/role]. Please call me back at [Your phone number]...
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                4% Call back rate
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Used by Sales Teams
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View the full script
            </button>
          </div>

          {/* Template 6 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Partner acquisition</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Hi [Prospect's name], this is [Your name] from [Company name]. I'm reaching out about a potential partnership opportunity that could [Specific benefit]. I'd love to discuss how we can [Mutual value]...
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                25% Call back rate
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Used by Sales Teams
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              View the full script
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg shadow-sm font-medium">1</span>
            <span className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">2</span>
            <span className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">3</span>
            <span className="px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer">4</span>
            <button className="ml-4 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
              <span>Next</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
