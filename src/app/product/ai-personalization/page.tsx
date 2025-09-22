export default function AIPersonalizationPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8 self-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Engage with leads</span>
              <span className="block">in a{' '}
                <span className="bg-blue-100 px-3 py-2 rounded-lg relative">
                  personal way
                  <div className="absolute inset-0 bg-blue-100 rounded-lg animate-pulse opacity-50"></div>
                </span>, at scale
              </span>
              <span className="block">
                <span className="bg-blue-100 px-3 py-2 rounded-lg relative">
                  machine speed
                  <div className="absolute inset-0 bg-blue-100 rounded-lg animate-pulse opacity-50"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
            Need support finding, reaching, and converting prospects? AI acts like your top-performing sales rep—only faster.
            </p>
            
            <div className="space-y-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1">
                Start for free
              </button>
              <p className="text-sm text-gray-500">
                14-day free trial. No credit card required.
              </p>
            </div>
          </div>

          {/* Right Side - AI Workflow Diagram */}
          <div className="relative lg:mt-0 mt-6">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-8">
                {/* Initial Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-800 text-lg">Email</span>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center animate-spin">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-bold">L</span>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Hey Leonard, bet you're thinking about one thing... How to get{' '}
                    <span className="bg-pink-100 px-2 py-1 rounded-md font-medium">ICP</span> fired up about{' '}
                    <span className="bg-pink-100 px-2 py-1 rounded-md font-medium">CompanyMission</span>.
                  </p>
                </div>

                {/* Action Box 1 */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl px-6 py-3 shadow-lg flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="font-semibold">Ask  AI to generate new data</span>
                  </div>
                </div>

                {/* Animated Dotted Line */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full animate-pulse"></div>
                </div>

                {/* Prompt Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Prompt Card */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-sm font-bold text-gray-700 mb-3 bg-white px-3 py-1 rounded-full inline-block">Prompt</div>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Find the top 2 ICPs this person targets based on{' '}
                      <span className="bg-gray-200 px-2 py-1 rounded-md font-mono text-xs">CompanyDomain</span>
                    </p>
                    <div className="text-xs text-gray-600 bg-white px-3 py-2 rounded-lg">
                      Display as variable: <span className="bg-blue-100 px-2 py-1 rounded-md font-mono">ICP</span>
                    </div>
                  </div>

                  {/* Right Prompt Card */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-sm font-bold text-gray-700 mb-3 bg-white px-3 py-1 rounded-full inline-block">Prompt</div>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Summarize how the <span className="bg-gray-200 px-2 py-1 rounded-md font-mono text-xs">Company</span> helps its customers based on{' '}
                      <span className="bg-gray-200 px-2 py-1 rounded-md font-mono text-xs">CompanyDescription</span>
                    </p>
                    <div className="text-xs text-gray-600 bg-white px-3 py-2 rounded-lg">
                      Display as variable: <span className="bg-blue-100 px-2 py-1 rounded-md font-mono">CompanyMission</span>
                    </div>
                  </div>
                </div>

                {/* Action Box 2 */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl px-6 py-3 shadow-lg flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="font-semibold">Use insights to personalize at scale</span>
                  </div>
                </div>

                {/* Animated Dotted Line */}
                <div className="flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-green-300 to-blue-300 rounded-full animate-pulse"></div>
                </div>

                {/* Final Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-800 text-lg">Email</span>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center animate-spin">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-bold">L</span>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Hi Leonard, bet you're thinking about one thing... How to get{' '}
                    <span className="bg-pink-100 px-2 py-1 rounded-md font-medium">Paid Acquisition and Growth Managers</span> fired up about{' '}
                    <span className="bg-pink-100 px-2 py-1 rounded-md font-medium">launching engaging ads that actually convert</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human vs AI Email Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
            Which cold email is written by a human?
          </h2>

          {/* Blue gradient board with two cards */}
          <div className="rounded-3xl bg-gradient-to-b from-blue-500 to-blue-600 p-6 sm:p-8 shadow-2xl">
            <div className="rounded-2xl bg-blue-700/20 p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-end">
                {/* Left email card */}
                <div className="transform -rotate-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">Email</span>
                      </div>
                      <div className="flex -space-x-1">
                        <span className="w-6 h-6 rounded-full bg-gray-200 inline-flex items-center justify-center text-[10px] text-gray-600 font-bold">L</span>
                      </div>
                    </div>
                    <div className="text-[13px] leading-6 text-gray-700 space-y-3">
                      <p>Hi Esteban,</p>
                      <p>Saw that you focus on <span className="bg-yellow-100">helping businesses get closer to their customers</span> (digitally)—like how you’re doing it!</p>
                      <p>Would you be open to seeing the email campaigns they use to book 25+ meetings per month?</p>
                      <p>Best,<br/>Tal from marktingPro</p>
                    </div>
                  </div>
                </div>

                {/* Right email card */}
                <div className="transform rotate-2">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">Email</span>
                      </div>
                      <div className="flex -space-x-1">
                        <span className="w-6 h-6 rounded-full bg-gray-200 inline-flex items-center justify-center text-[10px] text-gray-600 font-bold">L</span>
                      </div>
                    </div>
                    <div className="text-[13px] leading-6 text-gray-700 space-y-3">
                      <p>Hi Esteban,</p>
                      <p>One of our clients works for a <span className="bg-yellow-100">digital marketing tool</span>, too, and faced a drop in replies…</p>
                      <ul className="list-decimal pl-5 space-y-1">
                        <li>Sending &gt;30 emails per day.</li>
                        <li>Using &gt;100 words.</li>
                        <li>Talking about themselves.</li>
                      </ul>
                      <p>Would you like to get campaigns they use to book 25–40 meetings monthly?</p>
                      <p>Best,<br/>Tal from marketingPro</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Choice options */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                {/* Option A */}
                <div className="relative">
                  <input id="choice-left" name="human-choice" type="radio" className="peer sr-only" />
                  <label htmlFor="choice-left" className="block cursor-pointer rounded-2xl bg-white px-6 py-4 shadow-md ring-1 ring-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 peer-checked:ring-blue-500 peer-checked:shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 peer-hover:scale-110">
                        <span className="h-3 w-3 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 peer-checked:opacity-100"></span>
                      </span>
                      <span className="font-semibold text-gray-900">This one</span>
                    </div>
                  </label>
                </div>

                {/* Option B */}
                <div className="relative">
                  <input id="choice-right" name="human-choice" type="radio" className="peer sr-only" />
                  <label htmlFor="choice-right" className="block cursor-pointer rounded-2xl bg-white px-6 py-4 shadow-md ring-1 ring-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 peer-checked:ring-blue-500 peer-checked:shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 peer-hover:scale-110">
                        <span className="h-3 w-3 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 peer-checked:opacity-100"></span>
                      </span>
                      <span className="font-semibold text-gray-900">This one, for sure</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1 */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Let AI take the lead connect with the right people, at the right moment, with the perfect message.
            </h2>
           
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-2xl shadow-lg p-8">
            <div className="space-y-6 animate-fade-in-left" style={{animationDelay: '0.8s'}}>
              <h4 className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{animationDelay: '1s'}}>
              Easily segment leads for precise targeting.
              </h4>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              AI extracts insights like company size, seniority, job openings, and fundraising, helping you connect with the most relevant prospects and accelerate results.     </p>       </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
            <img 
               src="/images/AIP1.png.png" 
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
              Use clean data for natural, human-like messages. </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              With automatic data cleaning—names, dates, titles, and more—you’ll avoid robotic outreach and keep conversations authentic..</p>              
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/AIP2.png.png" 
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
              Craft optimized sequences in one click.           </h4>
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Just share your outreach details, and AI will build multichannel sequences from scratch—timed perfectly and tailored with the right messages.</p>
              
            </div>
            <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-right hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
            <img 
               src="/images/AIP3.png.png" 
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
      Make outreach personal with the right details.

      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      Leads expect you to understand them and their business. AI gathers insights like competitor data and pain points from LinkedIn profiles, websites, and more—so you can personalize every message at scale, without the research grind.     </p>
      
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/AIP4.png.png" 
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
      Fine-tune every message for maximum impact.
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
      You don’t need to be a copywriter—AI adjusts tone, length, and delivery so every word helps convert.       </p>
      
    </div>
    <div className="bg-white-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] animate-fade-in-left hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
      <img 
        src="/images/AIP5.png.png" 
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