import Link from 'next/link';

export default function SalesDevelopmentPage() {
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
                  For Sales Reps who want to <span className="text-blue-600 animate-pulse">book more qualified meetings, faster.</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  The prospecting tool finds better leads, launch sequences across email, LinkedIn, WhatsApp, and phone, and personalize like you know them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <Link href="/signup">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-700">
                      Start Free Trial
                    </button>
                  </Link>
                  <Link href="/pricing">
                    <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105">
                      View Pricing
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side - UI Mockup */}
              <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full border border-gray-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  {/* Chat Interface */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-semibold text-sm">SM</span>
                        </div>
                        <span className="font-semibold text-gray-900">Stends Morris</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-start animate-fade-in-left" style={{animationDelay: '1s'}}>
                        <div className="bg-blue-100 rounded-2xl px-4 py-3 max-w-xs transform hover:scale-105 transition-all duration-300">
                          <div className="text-xs text-blue-600 font-medium mb-1">Product Demo</div>
                          <p className="text-sm text-gray-800">
                            Hi Daniel. I&apos;d be happy to organize a product walkthrough for you. Does this Wednesday at 10 AM work for you?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end animate-fade-in-right" style={{animationDelay: '1.2s'}}>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs transform hover:scale-105 transition-all duration-300">
                          <p className="text-sm text-gray-800">Yes.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lead List */}
                  <div>
                    <div className="relative mb-4">
                      <input 
                        type="text" 
                        placeholder="Lead" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    {/* Table Headers */}
                    <div className="grid grid-cols-12 gap-4 mb-3 px-3 py-2 bg-gray-50 rounded-lg">
                      <div className="col-span-5 text-xs font-medium text-gray-500">Lead</div>
                      <div className="col-span-3 text-xs font-medium text-gray-500">Score</div>
                      <div className="col-span-4 text-xs font-medium text-gray-500">Last contact event</div>
                    </div>

                    <div className="space-y-1">
                      {/* Lead 1 */}
                      <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg transform hover:scale-105 hover:bg-blue-50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                        <div className="col-span-5 flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                            <span className="text-blue-600 font-semibold text-xs">AB</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Annette Bl-clack</span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-orange-500 font-semibold text-sm animate-pulse">96</span>
                        </div>
                        <div className="col-span-4 flex items-center gap-1">
                          <svg className="w-4 h-4 text-green-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-xs text-gray-600">Meeting booked</span>
                        </div>
                      </div>

                      {/* Lead 2 */}
                      <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                        <div className="col-span-5 flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-semibold text-xs">JJ</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Jacob Jones</span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-orange-500 font-semibold text-sm">91</span>
                        </div>
                        <div className="col-span-4 flex items-center gap-1">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-xs text-gray-600">Meeting checked</span>
                        </div>
                      </div>

                      {/* Lead 3 */}
                      <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                        <div className="col-span-5 flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-semibold text-xs">KM</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Kathryn Murphy</span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-orange-500 font-semibold text-sm">89</span>
                        </div>
                        <div className="col-span-4 flex items-center gap-1">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-xs text-gray-600">Email clicked</span>
                        </div>
                      </div>

                      {/* Lead 4 */}
                      <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                        <div className="col-span-5 flex items-center gap-3">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-pink-600 font-semibold text-xs">CH</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Courtney Henry</span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-orange-500 font-semibold text-sm">88</span>
                        </div>
                        <div className="col-span-4 flex items-center gap-1">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-xs text-gray-600">Email opened</span>
                        </div>
                      </div>

                      {/* Lead 5 */}
                      <div className="grid grid-cols-12 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                        <div className="col-span-5 flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 font-semibold text-xs">MP</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Marvin Payne</span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-orange-500 font-semibold text-sm">60</span>
                        </div>
                        <div className="col-span-4 flex items-center gap-1">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="text-xs text-gray-600">Email replied</span>
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

      {/* Prospecting Tools Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center 
               leading-tight tracking-tight drop-shadow-lg">
              Prospecting tools built for the people <br /> doing the work
          </h2>

          </div>

          <div className="space-y-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Find qualified leads with verified contact info
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Supercharge your prospecting with our LinkedIn extension. Instantly get accurate emails and phone numbers, enriched by multiple top data providers — all without leaving LinkedIn Sales Navigator.                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/sd1.png.png" 
                    alt="LinkedIn Integration" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '1s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Follow-up, across email, LinkedIn, WhatsApp, and phone
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Automate multichannel sequences, task reminders, and trigger outreach based on engagement or intent — so you reach out when it counts.                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/sd2.png.png" 
                    alt="LinkedIn Integration" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '1.6s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  peaks directly to the client’s desired outcome deep personalization without effort.
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  explains the how AI, insights, seconds and emphasizes the impact personalized, 1:1 at scale.                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/sd3.png.png" 
                    alt="LinkedIn Integration" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{animationDelay: '2s'}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="animate-fade-in-left" style={{animationDelay: '2.2s'}}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                  Clients see the main value instantly “Run from CRM”, which makes the feature clear and attractive.
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  Instead of listing features, it explains the experience step by step launch, personalize, sync making it easy to imagine using.no bullet list, more storytelling easier for a client to read.                  </p>
                </div>
                <div className="flex justify-center animate-fade-in-right" style={{animationDelay: '0.6s'}}>
                  <img 
                    src="/images/sd4.png.png" 
                    alt="LinkedIn Integration" 
                    className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steal What Works Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Resources
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Steal what works.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real templates with real data from real people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Best converting cold email templates */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mb-6">
                <img 
                  src="/images/sd5.png.png" 
                  alt="Cold Email Templates" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Best converting cold email templates
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access the best-converting cold email templates and multi-channel outreach campaigns from 400+ million emails.
              </p>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get access now
              </button>
            </div>

            {/* Card 2 - AI prompts to personalize at scale */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="mb-6">
                <img 
                  src="/images/sd6.png.png" 
                  alt="AI Prompts" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI prompts to personalize at scale
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enhance leads&apos; data, segment target audience, and hyper-personalize outreach at scale.
              </p>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get access now
              </button>
            </div>

            {/* Card 3 - Playbooks of top-performing sales */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 
                         transform hover:scale-105 hover:shadow-2xl 
                         transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="mb-6">
                <img 
                  src="/images/sd7.png.png" 
                  alt="Sales Playbooks" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Playbooks of top-performing sales
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Follow proven tactics of top-performing sales teams to scale outbound and keep the pipeline moving.
              </p>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get access now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link href="/product/lead-database" className="text-gray-400 hover:text-white transition-colors duration-200">Lead Database</Link></li>
                <li><Link href="/product/email-finder" className="text-gray-400 hover:text-white transition-colors duration-200">Email Finder</Link></li>
                <li><Link href="/product/phone-finder" className="text-gray-400 hover:text-white transition-colors duration-200">Phone Finder</Link></li>
                <li><Link href="/product/linkedin-prospecting" className="text-gray-400 hover:text-white transition-colors duration-200">LinkedIn Prospecting</Link></li>
                <li><Link href="/product/multichannel-sequences" className="text-gray-400 hover:text-white transition-colors duration-200">Multichannel Sequences</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">GET STARTED</h4>
              <ul className="space-y-2">
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><Link href="/login" className="text-gray-400 hover:text-white transition-colors duration-200">Log in</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white transition-colors duration-200">Sign up for free</Link></li>
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