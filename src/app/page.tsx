import Link from 'next/link';
import ScrollAnimation from '../components/ScrollAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section with Workflow */}
      <section className="pt-20 lg:pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content Card */}
          <ScrollAnimation animation="scaleIn" delay={200}>
            <div className="bg-gray-200 border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-xl mb-8">
              <ScrollAnimation animation="fadeInUp" delay={400}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  The <span className="text-blue-600">prospecting tool</span><br /> to automate <span className="text-blue-600">multichannel</span> <br /> outreach that <span className="text-blue-600">get replies</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={600}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Find leads with verified contact details and connect through email, LinkedIn, WhatsApp, or calls—personalized and always inbox-ready.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="bounceIn" delay={800}>
                <Link href="/signup">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 mb-8 hover:scale-105 transform transition-all duration-200">
                    Start a 14-day free trial →
                  </button>
                </Link>
              </ScrollAnimation>
              {/* Ratings Section */}
              <ScrollAnimation animation="fadeInUp" delay={1000}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <ScrollAnimation animation="fadeInLeft" delay={1200}>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center animate-glow">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">4.6 / 5</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 animate-bounce-slow" style={{animationDelay: `${i * 0.1}s`}} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInRight" delay={1400}>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center animate-glow">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">4.5 / 5</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 animate-bounce-slow" style={{animationDelay: `${i * 0.1}s`}} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          {/* Workflow Diagram Card - Overlapping */}
          <ScrollAnimation animation="slideInUp" delay={1600}>
            <div className="relative -mt-14">
              {/* Dotted Background Pattern */}
              <div className="absolute inset-0 opacity-20 animate-pulse-slow" style={{
                backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
              <div className="relative bg-gray-200 border border-gray-200 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Workflow Diagram Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="/images/Home1.png.png" 
                    alt="Marketing Workflow Diagram" 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInDown" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center 
                   leading-tight tracking-tight drop-shadow-lg">
                 Find, enrich, & reach qualified leads .<br /> from one platform
              </h2>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {/* Card 1 */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <ScrollAnimation animation="fadeInLeft" delay={600}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                        Find ready-to-buy prospects with verified contact details
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Use a verified lead database with smart filters to spot companies and people that match your ICP.    
                      </p>
                      <br />
                      <p className="text-lg text-gray-600 leading-relaxed">
                        With one click, built-in waterfall enrichment pulls their verified emails and phone numbers from the market's top providers.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInRight" delay={800}>
                    <div className="flex justify-center">
                      <img 
                        src="/images/H2.png.png" 
                        alt="LinkedIn Integration" 
                        className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 2 */}
            <ScrollAnimation animation="fadeInUp" delay={1000}>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <ScrollAnimation animation="fadeInLeft" delay={1200}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                        Personalize at scale with AI—without losing the human touch.
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        AI gathers details from LinkedIn, websites, and more, so you don't have to. Dynamic variables adapt your text, images, and landing pages to each lead automatically.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInRight" delay={1400}>
                    <div className="flex justify-center">
                      <img 
                        src="/images/H3.png.png" 
                        alt="LinkedIn Integration" 
                        className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 3 */}
            <ScrollAnimation animation="fadeInUp" delay={1600}>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <ScrollAnimation animation="fadeInLeft" delay={1800}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                        Run sequences across multiple channels, all from one place.
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Automate email follow-ups, LinkedIn actions, WhatsApp messages, and calls in a single sequence. Track every interaction in one inbox thread and engage without switching tools.             
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInRight" delay={2000}>
                    <div className="flex justify-center">
                      <img 
                        src="/images/H4.png.png" 
                        alt="LinkedIn Integration" 
                        className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 4 */}
            <ScrollAnimation animation="fadeInUp" delay={2200}>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <ScrollAnimation animation="fadeInLeft" delay={2400}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-all duration-300">
                        Stay out of the spam folder for good.
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Access a built-in deliverability booster that automates warm-up emails and provides actionable tips—so your outreach always lands where it should.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInRight" delay={2600}>
                    <div className="flex justify-center">
                      <img 
                        src="/images/H5.png.png" 
                        alt="LinkedIn Integration" 
                        className="w-full h-auto rounded-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInDown" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fits your workflow, not the other way around
              </h2>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Panel - Integration */}
            <ScrollAnimation animation="fadeInLeft" delay={400}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative mb-8">
                  {/* Central Platform Icon */}
                  <ScrollAnimation animation="bounceIn" delay={600}>
                    <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg animate-glow">
                      <span className="text-white text-2xl font-bold">M</span>
                    </div>
                  </ScrollAnimation>
                
                  {/* Integration Icons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-80">
                      {/* Top Row */}
                      <ScrollAnimation animation="fadeInDown" delay={800}>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-float">
                            <span className="text-white text-sm font-bold">M</span>
                          </div>
                        </div>
                      </ScrollAnimation>
                      
                      {/* Left Column */}
                      <ScrollAnimation animation="fadeInLeft" delay={1000}>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-float" style={{animationDelay: '0.5s'}}>
                            <span className="text-white text-sm font-bold">P</span>
                          </div>
                          <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4 animate-float" style={{animationDelay: '1s'}}>
                            <span className="text-white text-sm font-bold">Z</span>
                          </div>
                          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
                            <span className="text-white text-sm font-bold">P</span>
                          </div>
                        </div>
                      </ScrollAnimation>
                      
                      {/* Right Column */}
                      <ScrollAnimation animation="fadeInRight" delay={1200}>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 animate-float" style={{animationDelay: '0.7s'}}>
                            <span className="text-white text-sm font-bold">S</span>
                          </div>
                          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4 animate-float" style={{animationDelay: '1.2s'}}>
                            <span className="text-white text-sm font-bold">H</span>
                          </div>
                          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.7s'}}>
                            <span className="text-white text-sm font-bold">A</span>
                          </div>
                        </div>
                      </ScrollAnimation>
                      
                      {/* Bottom Row */}
                      <ScrollAnimation animation="fadeInUp" delay={1400}>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                            <span className="text-white text-sm font-bold">S</span>
                          </div>
                        </div>
                      </ScrollAnimation>
            
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
                      <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
                      <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
                      <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
                </svg>
                  </div>
                </div>
              </div>
              
                <ScrollAnimation animation="fadeInUp" delay={1600}>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Plug into any tool you use...
                  </h3>
                  <p className="text-gray-600">
                    Connect with 100+ popular apps and platforms
                  </p>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
            
            {/* Right Panel - CRM Interface */}
            <ScrollAnimation animation="fadeInRight" delay={600}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="space-y-6">
                  {/* CRM Header */}
                  <ScrollAnimation animation="fadeInDown" delay={800}>
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center animate-glow">
                          <span className="text-white text-sm font-bold">M</span>
                        </div>
                        <span className="font-semibold text-gray-800">MarketingPro</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse-slow"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Contact Profile */}
                  <ScrollAnimation animation="fadeInLeft" delay={1000}>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-glow">
                          <span className="text-white font-semibold">SW</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Sarah White</h4>
                          <p className="text-sm text-gray-600">Operations Manager • Veltrix</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>📧 swhite@veltrix.com</p>
                        <p>📞 (555) 246-8135</p>
                        <p>👤 Account Owner: Iker Gonzalez</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Task Window */}
                  <ScrollAnimation animation="fadeInRight" delay={1200}>
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-semibold text-gray-800">LinkedIn message task</h5>
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded animate-pulse-slow">High</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Due Today, 6:32 PM • in SaaS operations</p>
                      <div className="bg-gray-50 rounded p-3 mb-3">
                        <p className="text-sm text-gray-700">
                          Hey Sarah! Loved your latest post, it got me thinking about how we could simplify our tools stack. Curious how your team approached it. What tools are you using to keep outbound more centralized?
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition-colors hover:scale-105 transform">
                          Mark as done
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors hover:scale-105 transform animate-glow">
                          Send & mark as done
                        </button>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                
                <ScrollAnimation animation="fadeInUp" delay={1400}>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">
                    and run it straight from your CRM.
                  </h3>
                  <p className="text-gray-600">
                    Seamlessly integrated workflow management
                  </p>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      

      {/* CTA Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">MarketingPro</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  The all-in-one prospecting platform that helps sales teams find, engage, and convert more qualified leads.
                </p>
              </div>
            </ScrollAnimation>

            {/* Product Links */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="/product/lead-database" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Lead Database</a></li>
                  <li><a href="/product/email-finder" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Email Finder</a></li>
                  <li><a href="/product/phone-finder" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Phone Finder</a></li>
                  <li><a href="/product/linkedin-prospecting" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">LinkedIn Prospecting</a></li>
                  <li><a href="/product/multichannel-sequences" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Multichannel Sequences</a></li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Company Links */}
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div>
                <h4 className="text-lg font-semibold mb-4">GET STARTED</h4>
                <ul className="space-y-2">
                  <li><a href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Pricing</a></li>
                  <li><a href="/login" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Log in</a></li>
                  <li><a href="/signup" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105 transform inline-block">Sign up for free</a></li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2025 MarketingPro. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:scale-105 transform inline-block">Privacy Policy</a>
                  <a className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:scale-105 transform inline-block">Terms of Service</a>
                  <a className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:scale-105 transform inline-block">Cookie Policy</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}
