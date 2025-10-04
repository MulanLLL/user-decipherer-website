import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="User Decipherer"
                width={220}
                height={220}
                className="rounded-xl"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-10">
              <a href="#insights" className="text-gray-700 hover:text-slate-900 transition-all duration-300 font-medium">Insights</a>
              <a href="#services" className="text-gray-700 hover:text-slate-900 transition-all duration-300 font-medium">Services</a>
              <a href="#process" className="text-gray-700 hover:text-slate-900 transition-all duration-300 font-medium">Process</a>
              <a href="https://calendly.com/rita-userdecipherer/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-3 rounded-full hover:from-slate-800 hover:to-slate-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Book a Call
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
            Stop guessing.
            <br />
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Start building for users.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            User Decipherer helps startups stop guessing and start building with confidence.
            Get high-quality user research that&apos;s accessible, fast, and actionable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://calendly.com/rita-userdecipherer/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-10 py-5 rounded-full text-lg font-semibold hover:from-slate-800 hover:to-slate-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Book Free Consultation
            </a>
            <a href="#insights" className="border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-full text-lg font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
              See Our Insights
            </a>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              The Insights We Deliver
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
              Four types of research insights to power your product decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Idea Validation</h3>
              <p className="text-slate-600 leading-relaxed">
                Test assumptions with real users before building. Validate your product concept early.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">User Discovery</h3>
              <p className="text-slate-600 leading-relaxed">
                Uncover target audience needs, pain points, and behaviors to guide your product strategy.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Product Feedback</h3>
              <p className="text-slate-600 leading-relaxed">
                Gather in-depth insights on early prototypes, MVPs, or new features before launch.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Go-to-Market Insights</h3>
              <p className="text-slate-600 leading-relaxed">
                Identify messaging and positioning that resonates with your target users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              How We Work With You
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
              Three ways to get the user insights you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Packaged Services</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ready-to-go research solutions with fixed pricing and fast turnaround. Perfect for specific research needs.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Idea validation studies</li>
                <li>• User interview packages</li>
                <li>• Usability testing</li>
                <li>• Market research</li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Training for Founders</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Learn to conduct your own user research with our DIY workshops and templates.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Research methodology training</li>
                <li>• Interview frameworks</li>
                <li>• Analysis templates</li>
                <li>• Ongoing support</li>
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI-Assisted Tools</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Proprietary insight analysis tools that make research faster and more scalable.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Automated insight analysis</li>
                <li>• Pattern recognition</li>
                <li>• Scalable research processing</li>
                <li>• Real-time insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Our Research Process
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
              Three simple steps to get actionable user insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Discover</h3>
              <p className="text-slate-600 leading-relaxed">
                We understand your challenge, target users, and research goals to design the perfect study.
              </p>
            </div>

            <div className="group text-center bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Research</h3>
              <p className="text-slate-600 leading-relaxed">
                Execute targeted user research using enterprise-level methods adapted for startup speed.
              </p>
            </div>

            <div className="group text-center bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Deliver</h3>
              <p className="text-slate-600 leading-relaxed">
                Get clear, actionable insights that guide your product decisions—not academic reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT - Uncomment when you have case studies */}
      {/*
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Trusted by Founders
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
              See how we've helped startups make confident product decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                "User Decipherer helped us validate our AI tool concept before we built anything.
                Saved us months of development time and gave us confidence in our direction."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">AI Startup Founder</div>
                  <div className="text-sm text-slate-500">Pre-seed stage</div>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                "The onboarding flow research revealed exactly why our conversions were stalling.
                Clear, actionable insights that we implemented immediately."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">ST</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">SaaS Team Lead</div>
                  <div className="text-sm text-slate-500">Growth stage</div>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                "Understanding why our marketplace conversion stalled was crucial.
                The user insights completely changed our product roadmap."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MP</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Marketplace Founder</div>
                  <div className="text-sm text-slate-500">Series A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Book a Call Section */}
      <section id="book-call" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Stop Guessing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free 30-minute consultation to discuss your user research needs.
            No commitment required—just actionable advice for your startup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/rita-userdecipherer/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a
              href="mailto:rita@userdecipherer.com"
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us: rita@userdecipherer.com
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Usually respond within 24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.svg"
                  alt="User Decipherer"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Stop guessing. Start building for users.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Packaged Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Founder Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Tools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Insights</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Idea Validation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Discovery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Feedback</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GTM Insights</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:hello@userdecipherer.com" className="hover:text-white transition-colors">hello@userdecipherer.com</a></li>
                <li><a href="#book-call" className="hover:text-white transition-colors">Book a Call</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 User Decipherer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
