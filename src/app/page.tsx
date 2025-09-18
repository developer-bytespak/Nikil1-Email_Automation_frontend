import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            The <span className="text-blue-600">prospecting tool</span><br />
            to automate multichannel<br />
            outreach & actually <span className="text-blue-600">get replies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Find leads with valid contact info and reach them across email, LinkedIn, WhatsApp, or calls — personalized, and out of spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start a 14-day free trial →
              </button>
            </Link>
            <Link href="/demo">
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200">
                Get a demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale your outreach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From finding qualified leads to delivering personalized messages that actually get responses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Qualified Leads</h3>
              <p className="text-gray-600">Access 450M+ verified contacts with email finder and phone number tools</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automate Sequences</h3>
              <p className="text-gray-600">Run personalized multichannel campaigns across email, LinkedIn, and phone</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Land in Inboxes</h3>
              <p className="text-gray-600">Advanced deliverability tools to ensure your messages reach the inbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of sales teams already using MarketingPro to scale their outreach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start free trial
              </button>
            </Link>
            <Link href="/pricing">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View pricing
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
