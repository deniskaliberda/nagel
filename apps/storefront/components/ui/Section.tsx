import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionBackground = "white" | "alt";

interface SectionProps {
  title?: string;
  subtitle?: string;
  background?: SectionBackground;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  alt: "bg-bg-alt",
};

export function Section({
  title,
  subtitle,
  background = "white",
  className,
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        backgroundStyles[background],
        className
      )}
    >
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 sm:mb-12 text-center">
            {title && (
              <h2 className="text-2xl font-semibold text-primary sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base text-text-muted sm:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
