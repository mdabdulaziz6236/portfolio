import { Accordion } from "@heroui/react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/config/content";
import { ChevronDownIcon } from "@/components/icons";

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          description="Everything people usually ask before we start working together."
          eyebrow="FAQ"
          title="Good questions, answered"
        />

        <Reveal>
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.question}>
                <Accordion.Heading>
                  <Accordion.Trigger className="text-left font-medium">
                    {faq.question}
                    <Accordion.Indicator>
                      <ChevronDownIcon size={18} />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
