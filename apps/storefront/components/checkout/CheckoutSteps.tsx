"use client"

interface Step {
  label: string
  description?: string
}

const CHECKOUT_STEPS: Step[] = [
  { label: "Adresse", description: "Liefer- und Rechnungsadresse" },
  { label: "Versand", description: "Versandart wählen" },
  { label: "Zahlung", description: "Zahlungsart wählen" },
  { label: "Bestätigung", description: "Bestellung prüfen" },
]

interface CheckoutStepsProps {
  currentStep: number
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <nav aria-label="Checkout-Fortschritt" className="mb-8">
      <ol className="flex items-center justify-between">
        {CHECKOUT_STEPS.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          const isUpcoming = index > currentStep

          return (
            <li key={step.label} className="relative flex flex-1 flex-col items-center">
              {/* Connector line */}
              {index > 0 && (
                <div
                  className={`absolute left-0 right-1/2 top-4 h-0.5 -translate-y-1/2 ${
                    isCompleted ? "bg-[#0f9d58]" : "bg-[#e5e7eb]"
                  }`}
                />
              )}
              {index < CHECKOUT_STEPS.length - 1 && (
                <div
                  className={`absolute left-1/2 right-0 top-4 h-0.5 -translate-y-1/2 ${
                    isCompleted ? "bg-[#0f9d58]" : "bg-[#e5e7eb]"
                  }`}
                />
              )}

              {/* Step circle */}
              <div
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  isCompleted
                    ? "bg-[#0f9d58] text-white"
                    : isCurrent
                      ? "border-2 border-[#e94560] bg-white text-[#e94560]"
                      : "border-2 border-[#e5e7eb] bg-white text-[#6b7280]"
                }`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {isCompleted ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-xs font-medium sm:text-sm ${
                  isUpcoming ? "text-[#6b7280]" : "text-[#1a1a1a]"
                }`}
              >
                {step.label}
              </span>
              {step.description && (
                <span className="mt-0.5 hidden text-xs text-[#6b7280] md:block">
                  {step.description}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
