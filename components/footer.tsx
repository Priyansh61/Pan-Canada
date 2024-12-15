import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Pan Canada Group"
              width={200}
              height={40}
              className="mb-6"
            />
            <p className="text-gray-300 text-sm">
              Pan Canada Group is a multinational management and holding firm with operations in America, Europe, and Asia. Its primary holdings are major insurance, retirement, wealth management, and investment companies, as well as a portfolio of alternative asset investing platforms.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Services', href: '/services' },
                { label: 'Teams', href: '/teams' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">IMPORTANT LINKS</h3>
            <ul className="space-y-3">
              {['Construction', 'Hotel', 'Textile', 'Automobiles', 'Farming'].map((item) => (
                <li key={item}>
                  <Link href={`/services`} className="text-gray-300 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">CONTACT US</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">Address:</strong><br />
                345 Nantucket Blvd,<br />
                Scarborough, ON M1P 2P2,<br />
                Canada
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                info@pancanadagroup.ca<br />
                hr@pancanadagroup.ca
              </p>
              <p>
                <strong className="text-white">Phone:</strong><br />
                +1 (437) 432‑7091
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2024 Pan Canada Group</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

