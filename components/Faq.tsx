import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export function Faq({ faqs, heading = "Frequently asked questions" }: { faqs: { q: string; a: string }[]; heading?: string }) {
  return (
    <section className="section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">{heading}</h2>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
