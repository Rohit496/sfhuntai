'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Check, 
  X, 
  Plus, 
  Minus,
  MessageSquare
} from 'lucide-react'
import { FAQS } from '@/constants'

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const pricingFaqs = FAQS.filter(f => f.category === 'Pricing')

  const plans = [
    {
      name: 'STARTER',
      price: '$10k-$25k',
      description: 'Ideal for small teams launching their first cloud.',
      features: [
        { text: 'Up to 10 users', included: true },
        { text: 'Single Salesforce Cloud', included: true },
        { text: 'Basic custom automation', included: true },
        { text: '30 days post-launch support', included: true },
        { text: 'Standard email support', included: true },
        { text: 'Custom integrations', included: false },
        { text: 'Dedicated Account Manager', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'PROFESSIONAL',
      price: '$25k-$75k',
      description: 'The standard for scaling businesses with complex needs.',
      features: [
        { text: 'Up to 50 users', included: true },
        { text: 'Multiple Salesforce Clouds', included: true },
        { text: 'Complex custom integrations', included: true },
        { text: '90 days post-launch support', included: true },
        { text: 'Priority Slack support', included: true },
        { text: 'Full training program', included: true },
        { text: 'Dedicated Account Manager', included: false },
      ],
      cta: 'Choose Professional',
      popular: true,
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      description: 'Full-scale digital transformation for global enterprises.',
      features: [
        { text: 'Unlimited users', included: true },
        { text: 'All Salesforce Clouds', included: true },
        { text: 'Advanced AI & Agentforce', included: true },
        { text: '1 year dedicated support', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Custom LWC & integrations', included: true },
        { text: 'Dedicated Account Manager', included: true },
      ],
      cta: 'Contact for Quote',
      popular: false,
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">No hidden fees. Just clear, value-driven investment for your Salesforce success.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative bg-white rounded-[3rem] p-10 shadow-xl border-2 transition-all hover:scale-[1.02] flex flex-col ${plan.popular ? 'border-salesforce ring-4 ring-salesforce/10' : 'border-gray-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-salesforce text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-gray-500 tracking-widest uppercase mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-navy mb-4">{plan.price}</div>
                  <p className="text-gray-500 font-medium">{plan.description}</p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}`}>
                      {feature.included ? (
                        <Check className="w-5 h-5 text-teal-accent shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`w-full py-5 rounded-full text-center font-bold transition-all ${plan.popular ? 'bg-salesforce text-white hover:bg-navy shadow-lg shadow-salesforce/20' : 'bg-gray-100 text-navy hover:bg-navy hover:text-white'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Pricing Questions</h2>
            <p className="text-gray-600">Everything you need to know about our project pricing and billing cycles.</p>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                <button 
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-bold text-navy pr-8">{faq.question}</span>
                  {openFaq === idx ? <Minus className="w-6 h-6 text-salesforce shrink-0" /> : <Plus className="w-6 h-6 text-salesforce shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-4 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-navy rounded-[3rem] p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Not sure which package fits your needs?</h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Our advisors are available for a free consultation to map out your specific requirements and provide a custom recommendation.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-salesforce rounded-full font-bold hover:bg-teal-accent transition-all">
              Book a Free Consultation <MessageSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


