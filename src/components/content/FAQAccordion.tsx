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
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-semibold text-slate-800 hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
