export default function AISalesPromptPage() {

  const prompts = [
    {
      category: "BEHAVIOR SIGNALS",
      title: "Perplexity - What people are complaining about a company",
      description: "By addressing common complaints directly, you demonstrate active listen...",
      stats: "723+",
    },
    {
      category: "BEHAVIOR SIGNALS",
      title: "Perplexity - What is the most recent feature added",
      description: "What is the most recent feature added by a company",
      stats: "214+",
    },
    {
      category: "BEHAVIOR SIGNALS",
      title: "Perplexity - which VCs backed a company",
      description: "Find which VCs have backed a company",
      stats: "126+",
    },
    {
      category: "BEHAVIOR SIGNALS",
      title: "Recent market reports published",
      description: "Create catchy messages using new market report insights.",
      stats: "1401+",
    },
    {
      category: "SOCIAL PROOF",
      title: "Participation or hosting of industry roundtables or investor meetups",
      description: "Create brief messages about attending or hosting recent industry events.",
      stats: "848+",
    },
    {
      category: "TECH STACK",
      title: "Tools used for investment analysis",
      description: "Ask questions about new tools for investment analysis.",
      stats: "1335+",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="w-full flex items-center justify-center py-20 bg-white">
      <div className="text-center px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
            AI prompts
          </span>{" "}
          library
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Want better results? Enrich your data, target the right audience, and personalize every message—without slowing down.


        </p>
      </div>
    </section>
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Prompts library
          </h1>
          <p className="text-gray-600 mt-2">
            Need better replies? Browse, search, and copy high-performing
            prompts that convert. No guesswork, just proven copy that works.
          </p>
        </div>

        {/* Filters/Search */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <select className="w-full md:w-40 border rounded-lg px-3 py-2 text-gray-900 bg-white">
            <option value="">Prompt for:</option>
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
            <option value="cold-call">Cold Call</option>
            <option value="voicemail">Voicemail</option>
            <option value="follow-up">Follow-up</option>
          </select>
          <select className="w-full md:w-40 border rounded-lg px-3 py-2 text-gray-900 bg-white">
            <option value="">ICP</option>
            <option value="startups">Startups</option>
            <option value="enterprise">Enterprise</option>
            <option value="smb">SMB</option>
            <option value="mid-market">Mid-Market</option>
            <option value="non-profit">Non-Profit</option>
            <option value="government">Government</option>
          </select>
          <select className="w-full md:w-40 border rounded-lg px-3 py-2 text-gray-900 bg-white">
            <option value="">Industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="real-estate">Real Estate</option>
            <option value="consulting">Consulting</option>
            <option value="saas">SaaS</option>
            <option value="ecommerce">E-commerce</option>
          </select>
          <input
            type="text"
            placeholder="Find a prompt based on your topic"
            className="flex-1 border rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((prompt, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
            >
              <div>
                <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
                  {prompt.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mt-2 mb-2">
                  {prompt.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {prompt.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <button className="px-4 py-2  text-gray-700 text-sm border rounded-lg hover:bg-gray-50 transition">
                  Test this prompt
                </button>
                <span className="text-gray-500 text-sm">{prompt.stats}</span>
              </div>
            </div>
          ))}
        </div>
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
