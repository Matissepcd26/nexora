export function Stats() {
  const stats = [
    { label: "Active Users", value: "2,543" },
    { label: "Invoices Processed", value: "18,294" },
    { label: "Total Revenue Tracked", value: "$2.4M" },
    { label: "Uptime SLA", value: "99.9%" },
  ]

  return (
    <section id="stats" className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
