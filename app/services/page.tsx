import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Clock,
  Zap,
  Tag
} from 'lucide-react'
import { SERVICES } from '@/constants'

export const metadata: Metadata = {
  title: 'Salesforce Services | Expert Implementation & AI Solutions',
  description: 'Full spectrum of Salesforce services: Implementation, Custom Development, Integration, Data Migration, AI & Agentforce, and Managed Services. Expert consulting for your CRM success.',
  keywords: ['Salesforce Services', 'Salesforce Implementation', 'Custom Development', 'Salesforce Integration', 'Data Migration', 'AI Solutions', 'Agentforce'],
  openGraph: {
    title: 'Salesforce Services | Expert Implementation & AI Solutions',
    description: 'Full spectrum of Salesforce services designed to scale with your business and maximize your investment.',
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-navy pt-24 pb-20 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66 3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-71c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-8 40c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0-56c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-8 88c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm20-40c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm40-60c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm40 20c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-40 40c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8">Expert Salesforce Solutions</h1>
            <p className="text-xl text-gray-300 font-light">We offer a full spectrum of Salesforce services designed to scale with your business and maximize your investment.</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => {
              const bgGradients: Record<string, string> = {
                'implementation': 'from-blue-600 to-indigo-800',
                'development': 'from-navy to-blue-900',
                'integration': 'from-teal-accent to-blue-600',
                'migration': 'from-indigo-500 to-purple-700',
                'ai-solutions': 'from-salesforce via-teal-accent to-blue-500',
                'managed-services': 'from-navy via-salesforce to-indigo-900'
              };

              return (
                <div key={service.id} className={`flex flex-col lg:flex-row items-start gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Representation */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-salesforce rounded-[3rem] transform rotate-3 group-hover:rotate-1 transition-transform opacity-10"></div>
                      <div className={`relative aspect-video bg-gradient-to-br ${bgGradients[service.id]} rounded-[3rem] flex items-center justify-center shadow-2xl overflow-hidden`}>
                         <div className="absolute inset-0 opacity-10 mix-blend-overlay scale-150 rotate-12" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
                         <div className="text-center relative z-10 p-8">
                            <div className="w-28 h-28 bg-white/20 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                              {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white tracking-tight">{service.title} Excellence</h4>
                            <p className="text-white/60 text-sm mt-2 uppercase tracking-widest font-bold">TroopAi Core Competency</p>
                         </div>
                      </div>
                    </div>
                    
                    {/* Quick Info Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
                      <div className="p-5 bg-white rounded-3xl flex items-center gap-3 border border-gray-100 shadow-sm transform hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          <Clock size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Timeline</p>
                          <p className="text-sm font-bold text-navy truncate">{service.timeline.split(' ')[0]}</p>
                        </div>
                      </div>
                      <div className="p-5 bg-white rounded-3xl flex items-center gap-3 border border-gray-100 shadow-sm transform hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                          <Tag size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Starting</p>
                          <p className="text-sm font-bold text-navy">{service.pricing.includes('$') ? service.pricing.split(' ')[2] : 'Custom'}</p>
                        </div>
                      </div>
                      <div className="p-5 bg-white rounded-3xl flex items-center gap-3 col-span-2 sm:col-span-1 border border-gray-100 shadow-sm transform hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                          <Zap size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Expertise</p>
                          <p className="text-sm font-bold text-navy">Certified</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-block p-4 rounded-2xl bg-salesforce/10 text-salesforce shadow-inner">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight">{service.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">{service.fullDescription}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-salesforce" /> 
                          Our Strategic Roadmap
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                              <span className="w-8 h-8 rounded-full bg-navy text-white text-[10px] flex items-center justify-center font-bold group-hover:bg-salesforce transition-colors">{i+1}</span>
                              <span className="text-sm font-semibold text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-salesforce" /> 
                          Service Value
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 p-1">
                              <div className="mt-1 p-1 bg-teal-50 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                              </div>
                              <span className="text-gray-600 font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-salesforce text-white rounded-full font-bold hover:bg-navy transition-all shadow-xl shadow-salesforce/20 transform hover:-translate-y-1">
                        Request a Quote <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link href="/pricing" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-navy border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all">
                        View Pricing Plans
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="url(#grid-footer)" />
            <defs>
              <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready for a Technical Audit?</h2>
            <p className="text-xl text-white/70 font-light">Our lead architects are ready to evaluate your current instance and identify optimization opportunities.</p>
            <Link href="/contact" className="inline-flex px-12 py-5 bg-salesforce text-white rounded-full text-lg font-bold hover:bg-white hover:text-navy transition-all shadow-2xl shadow-salesforce/20">
              Schedule Free Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


