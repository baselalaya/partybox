import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/types";

type FAQAccordionProps = {
  faqs: FAQ[];
  className?: string;
};

export default function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <Accordion type="single" collapsible className={className}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 py-2 last:border-b-0">
          <AccordionTrigger className="text-left text-sm md:text-base font-medium text-slate-900 hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pt-2 text-sm text-slate-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
