interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  variant?: "white" | "alt"
  className?: string
  id?: string
}

export function Section({
  children,
  title,
  subtitle,
  variant = "white",
  className = "",
  id,
}: SectionProps) {
  const bgClass = variant === "alt" ? "bg-[#f5f5f7]" : "bg-white"

  return (
    <section id={id} className={`${bgClass} py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 text-center md:mb-12">
            {title && (
              <h2 className="text-2xl font-bold text-[#1a1a1a] md:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-[#6b7280]">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
