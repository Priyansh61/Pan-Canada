export function ContactInfo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="w-12 h-1 bg-[#0088CC] mb-8" />
          <h1 className="text-4xl font-normal leading-tight mb-6">
            If You Have Any Query, Please Contact Us
          </h1>
          <p className="text-gray-600">
            To expand the mentoring movement, we are actively trying to collaborate with organizations everywhere. By working together, we can expand the sector's capacity and help every young person realize their full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-semibold mb-4">Business inquiries / Contact</h2>
            <a href="mailto:info@pancanadagroup.ca" className="text-[#0088CC] hover:text-[#0077B3] block">
              info@pancanadagroup.ca
            </a>
            <a href="mailto:hr@pancanadagroup.ca" className="text-[#0088CC] hover:text-[#0077B3] block">
              hr@pancanadagroup.ca
            </a>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Address</h2>
            <p className="text-gray-600">
              345 Nantucket Blvd.<br />
              Scarborough, ON M1P 2P2<br />
              Canada
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">+1 5142 285 339</p>
          </div>
        </div>
      </div>
    </section>
  )
}