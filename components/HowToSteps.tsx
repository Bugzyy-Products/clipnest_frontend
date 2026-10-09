import { HOW_TO_STEPS } from "@/lib/content";

export function HowToSteps({ heading }: { heading: string }) {
  return (
    <section className="section" aria-labelledby="howto-heading">
      <h2 id="howto-heading">{heading}</h2>
      <ol className="steps">
        {HOW_TO_STEPS.map((s) => (
          <li key={s.name} className="card">
            <strong>{s.name}</strong>
            <p className="muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
