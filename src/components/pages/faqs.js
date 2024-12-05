import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../styles/FAQSection.css"; // Make sure to import the CSS styles

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="faqs" className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-900 text-lg">{question}</span>
        <div className="ml-4 flex-shrink-0 text-gray-400 faq-icon">
          {isOpen ? (
            <ChevronUp className="h-6 w-6" />
          ) : (
            <ChevronDown className="h-6 w-6" />
          )}
        </div>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Who is speech impaired person?",
      answer:
        "A speech-impaired person is someone who experiences difficulty in producing spoken language or communicating verbally due to a condition or disorder affecting their speech. The conditions include stuttering/stammering, cleft palate, downsyndrome, cerebral palsy etc.",
    },
    {
      question: "Who can participate in the hackathon?",
      answer:
        "University students with experience in programming language. Participants must register as a team (up to 3 to 5 members). We are looking for analytically sharp and logical thinkers who are ready to create accessible and inclusive technological solutions for speech impaired individuals.",
    },
    {
      question: "What should I bring to the finale if shortlisted?",
      answer:
        "Participants are required to bring their laptops and any other tools or resources they may need for development.",
    },
    {
      question: "Whom should we contact in case of any queries?",
      answer:
        "You can contact at hcidcsug@gmail.com in case you have any queries.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
