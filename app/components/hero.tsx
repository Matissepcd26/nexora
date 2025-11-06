export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              <span className="text-gradient">Nexora</span>
              <br />
              Complete SaaS Solution
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Manage invoices, quotes, and payments with a modern, full-stack application built with Next.js and PostgreSQL.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 gradient-primary-to-secondary rounded-lg opacity-20 blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-lg p-8">
              <div className="space-y-4">
                <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                <div className="h-4 bg-secondary/20 rounded w-1/2"></div>
                <div className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
