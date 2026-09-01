import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  icon?: ReactNode;
  children: ReactNode;
  tone?: "sand" | "white";
}

export default function Section({ id, title, intro, icon, children, tone = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-fade-in scroll-mt-16 px-4 py-10 ${tone === "sand" ? "bg-sand-100" : "bg-white"}`}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 flex items-center gap-2">
          {icon && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
              {icon}
            </span>
          )}
          <h2 className="font-heading text-2xl font-bold text-ink">{title}</h2>
        </div>
        {intro && <p className="mb-6 text-ink/70">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
