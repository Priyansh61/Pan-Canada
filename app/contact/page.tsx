import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  )
}

