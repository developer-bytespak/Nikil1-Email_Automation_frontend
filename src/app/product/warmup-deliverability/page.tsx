export default function WarmupDeliverabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-8 w-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700 mb-6">
      Forget about the  
       <span className="text-blue-600"> spam folder!  </span>
        get your cold emails delivered
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
    Protect deliverability with automated warm-up, sending through a trusted network that boosts your domain’s credibility.    </p>        

    {/* CTA Button */}
    <div className="flex flex-col items-center space-y-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3 group">
        <span>Sign-up for free</span>
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
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Less than a 50% open rate?<br />
            Your emails <span className="bg-gradient-to-r from-yellow-300 to-green-400 text-black px-2 py-1 rounded">go to spam</span><br />
            without you knowing.
          </h2>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                See the difference deliverability makes
              </h2>
              <p className="text-lg text-gray-600">
                Same campaign, same leads, different deliverability scores
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-lg font-semibold text-gray-700"></th>
                    <th className="text-center py-4 px-6 text-lg font-semibold text-gray-700">Company A</th>
                    <th className="text-center py-4 px-6 text-lg font-semibold text-gray-700">Company B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-medium">Deal size</td>
                    <td className="py-4 px-6 text-center text-gray-600">$5,000</td>
                    <td className="py-4 px-6 text-center text-gray-600">$5,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-medium">Leads</td>
                    <td className="py-4 px-6 text-center text-gray-600">200</td>
                    <td className="py-4 px-6 text-center text-gray-600">200</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-medium">Open rate</td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        40% (80 leads)
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        80% (160 leads)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-medium">Meetings booked</td>
                    <td className="py-4 px-6 text-center text-gray-600">10% (8 leads)</td>
                    <td className="py-4 px-6 text-center text-gray-600">10% (16 leads)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-medium">Deals closed</td>
                    <td className="py-4 px-6 text-center text-gray-600">40% (3 leads)</td>
                    <td className="py-4 px-6 text-center text-gray-600">40% (6 leads)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700 font-medium">Revenue</td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        $15,000
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        $30,000
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 font-medium">Deliverability score</td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        45 (out of 100)
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        99 (out of 100)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                <span className="font-semibold text-red-600">Company A</span> without warmup vs 
                <span className="font-semibold text-green-600"> Company B</span> with automated warmup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warmup Process Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b bg-blue-600 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  <span className="text-blue-600">Warm up</span> your email address.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our warm-up helps you stay out of spam by sending emails in a human way to a highly qualified network of 10,000 users, increasing your email domain's credibility.
                </p>
              </div>

              {/* Right Content - Network Visualization */}
              <div className="relative">
                <div className="bg-blue-50 rounded-2xl p-8 relative">
                  {/* Central Card */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <span className="text-xl font-bold text-blue-800">MarketingPro</span>
                      </div>
                    </div>
                  </div>

                  {/* Email Cards and Connections */}
                  <div className="grid grid-cols-4 gap-4 relative">
                    {/* Top Row */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="bg-orange-100 rounded-lg p-3 shadow-sm border border-orange-200">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full">
                      {/* Lines from center to each email card */}
                      <line x1="50%" y1="50%" x2="12.5%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="37.5%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="62.5%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="87.5%" y2="25%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="12.5%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="37.5%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="62.5%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="50%" y1="50%" x2="87.5%" y2="75%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Deliverability Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b bg-blue-600 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  <span className="text-green-500">Boost</span> your deliverability
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  After the warm-up phase, we will monitor your deliverability score, sending volume, and protect you from anything that could trigger spam filters.
                </p>
              </div>

              {/* Right Content - Deliverability Dashboard */}
              <div className="bg-green-50 rounded-2xl p-8">
                {/* Deliverability Score */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-orange-100 rounded-xl px-6 py-4 mb-4">
                    <div className="text-4xl font-bold text-blue-800">62</div>
                    <div className="text-sm text-gray-600 flex items-center justify-center">
                      <span>Score</span>
                      <svg className="w-4 h-4 text-green-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Deliverability Gauge */}
                <div className="mb-8">
                  <div className="relative w-48 h-24 mx-auto">
                    {/* Gauge Background */}
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                      {/* Red Zone */}
                      <path d="M 20 80 A 60 60 0 0 1 80 80" stroke="#ef4444" strokeWidth="20" fill="none" />
                      {/* Orange Zone */}
                      <path d="M 80 80 A 60 60 0 0 1 140 80" stroke="#f97316" strokeWidth="20" fill="none" />
                      {/* Green Zone */}
                      <path d="M 140 80 A 60 60 0 0 1 180 80" stroke="#22c55e" strokeWidth="20" fill="none" />
                      {/* Needle */}
                      <line x1="100" y1="100" x2="130" y2="70" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
                      {/* Center dot */}
                      <circle cx="100" cy="100" r="4" fill="#1e40af" />
                    </svg>
                  </div>
                </div>

                {/* Status Card */}
                <div className="bg-orange-100 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-orange-800 font-semibold">Your deliverability status</h3>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm font-medium">MarketingPro tips</p>
                      <p className="text-gray-600 text-xs mt-1">
                        You just started warmup. Let's wait a bit before we can trust this score.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitor Spam Risk Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b bg-blue-600 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Monitor your spam</span> risk at all times
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get notification alerts for your deliverability score, spot any spam risks, and check the behind-the-scenes work we do for you while you're busy reaching out to your leads.
                </p>
              </div>

              {/* Right Content - Dashboard */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                      Send limit
                    </button>
                  </div>

                  {/* Graph Title */}
                  <h3 className="text-gray-700 font-medium mb-4">Where are your cold emails landing?</h3>

                  {/* Chart */}
                  <div className="mb-6">
                    <div className="h-48 flex items-end space-x-2">
                      {/* Bar 1 - 02/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-2"></div>
                          <div className="bg-red-400 h-8"></div>
                          <div className="bg-green-400 h-22"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">02/03</span>
                      </div>

                      {/* Bar 2 - 03/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-4"></div>
                          <div className="bg-red-400 h-12"></div>
                          <div className="bg-green-400 h-16"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">03/03</span>
                      </div>

                      {/* Bar 3 - 04/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-2"></div>
                          <div className="bg-red-400 h-10"></div>
                          <div className="bg-green-400 h-20"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">04/03</span>
                      </div>

                      {/* Bar 4 - 05/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-1"></div>
                          <div className="bg-red-400 h-6"></div>
                          <div className="bg-green-400 h-25"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">05/03</span>
                      </div>

                      {/* Bar 5 - 06/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-2"></div>
                          <div className="bg-red-400 h-8"></div>
                          <div className="bg-green-400 h-22"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">06/03</span>
                      </div>

                      {/* Bar 6 - 07/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-1"></div>
                          <div className="bg-red-400 h-4"></div>
                          <div className="bg-green-400 h-27"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">07/03</span>
                      </div>

                      {/* Bar 7 - 08/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-3"></div>
                          <div className="bg-red-400 h-14"></div>
                          <div className="bg-green-400 h-15"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">08/03</span>
                      </div>

                      {/* Bar 8 - 09/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-2"></div>
                          <div className="bg-red-400 h-12"></div>
                          <div className="bg-green-400 h-18"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">09/03</span>
                      </div>

                      {/* Bar 9 - 10/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-1"></div>
                          <div className="bg-red-400 h-6"></div>
                          <div className="bg-green-400 h-25"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">10/03</span>
                      </div>

                      {/* Bar 10 - 11/03 */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-32 flex flex-col">
                          <div className="bg-gray-200 h-2"></div>
                          <div className="bg-red-400 h-10"></div>
                          <div className="bg-green-400 h-20"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2">11/03</span>
                      </div>
                    </div>

                    {/* Y-axis labels */}
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>0</span>
                      <span>10</span>
                      <span>20</span>
                      <span>30</span>
                      <span>40</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Spams</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Inbox</span>
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
                <li><a href="/login" className="text-gray-400 hover:text-white transition-colors duration-200">Log in</a></li>
                <li><a href="/signup" className="text-gray-400 hover:text-white transition-colors duration-200">Sign up for free</a></li>
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