import { motion } from 'framer-motion';
import { SectionHeading } from '@/src/components/common/Common';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "For weddings, we recommend booking 12-18 months in advance. For portraits and editorial work, 4-6 weeks is usually sufficient."
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes! We love destination projects. We've shot in over 15 countries and are always excited to explore new locations. Travel fees apply for locations outside of London."
  },
  {
    q: "What is your turnaround time?",
    a: "Portrait sessions are typically delivered within 2 weeks. Wedding collections take 6-8 weeks for full delivery, with a 'sneak peek' provided within 48 hours."
  },
  {
    q: "Do I get the raw files?",
    a: "We do not provide raw files as we believe the editing process is an essential part of our artistic vision. You will receive high-resolution, professionally edited JPEGs."
  }
];

export const FAQ = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading 
          subtitle="Support" 
          title="Frequently Asked Questions" 
          centered 
          className="mb-16"
        />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border border-border/50 rounded-3xl px-8 bg-muted/20 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
