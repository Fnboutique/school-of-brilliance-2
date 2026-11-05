export default function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 text-sm font-semibold text-gold ${center ? "justify-center" : ""}`}>
          <span aria-hidden className="h-px w-8 bg-gold" />
          {eyebrow}
          {center && <span aria-hidden className="h-px w-8 bg-gold" />}
        </p>
      )}
      <h2 className={`text-3xl font-semibold sm:text-4xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-navy/65"}`}>{sub}</p>}
    </div>
  );
}
