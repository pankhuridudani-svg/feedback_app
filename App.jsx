import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Checkbox } from "./components/ui/checkbox";

const feedbackData = {"sections": [{"name": "Communication skills", "criteria": [{"why": "You responded with repeated \"Yes, sir\" without offering substantive information, which comes across as deference rather than confidence. You also used filler and redundant affirmations instead of direct answers, for example, when the doctor asked about resistance patterns you replied only \"Yes, sir\" instead of providing a clear answer. There was no assertive phrasing such as “Studies show…” to convey credibility. Your tone lacked clarity and assertiveness, which undermines your authority.", "name": "Did you display confidence?", "what": "Use clear, assertive statements rather than repeating \"Yes, sir.\" For example, say “Studies show our cefuroxime pellet formulation reduces resistance rates by 25%.” Eliminate filler phrases and directly address questions with data. Practice concise responses like, “Our 200 mg tablet delivers 2.5 µm particles for fast dissolution, improving lung penetration.”", "completed": false}]}]};

export default function App() {
  const [data] = useState(feedbackData);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Summary</h1>
      <Accordion type="multiple">
        {data.sections.map((section, idx) => (
          <AccordionItem key={idx} value={section.name}>
            <AccordionTrigger>{section.name}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.criteria.map((crit, i) => (
                  <Card key={i} className="border border-gray-300">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">{crit.name}</h2>
                        <Checkbox checked={crit.completed} />
                      </div>
                      <p className="text-gray-600 text-sm"><strong>Why:</strong> {crit.why}</p>
                      <p className="text-gray-800"><strong>What to improve:</strong> {crit.what}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
