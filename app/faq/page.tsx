import type { Metadata } from 'next'
import { FAQS, COMPANY_CONFIG } from '@/constants'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | SalesforceTroopAi',
  description: 'Get answers to common questions about Salesforce implementation, Agentforce, pricing, and support. 32 essential strategic and technical questions answered.',
  keywords: ['Salesforce FAQ', 'Salesforce questions', 'Agentforce FAQ', 'Salesforce pricing FAQ', 'Salesforce support'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | SalesforceTroopAi',
    description: 'Get answers to common questions about Salesforce implementation, Agentforce, pricing, and support.',
    url: `${COMPANY_CONFIG.site.url}/faq`,
  },
}

// Generate FAQPage structured data for SEO
function generateFAQStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export default function FAQPage() {
  const structuredData = generateFAQStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQClient faqs={FAQS} />
    </>
  )
}
