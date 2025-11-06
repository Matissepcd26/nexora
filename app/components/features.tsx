export function Features() {
  const features = [
    {
      title: "Invoice Management",
      description: "Create, send, and track invoices with ease"
    },
    {
      title: "Quote Builder",
      description: "Generate professional quotes in minutes"
    },
    {
      title: "Payment Tracking",
      description: "Monitor payments and send automated reminders"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights into your business metrics"
    },
    {
      title: "Client Portal",
      description: "Let clients view and manage their documents"
    },
    {
      title: "API Access",
      description: "Integrate Nexora with your existing tools"
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
