"use client";
import { useState } from "react";
import styles from "@/app/styles/Faq.module.css";

const faqs = [
  { q: "Are my messages end-to-end encrypted?", a: "Yes, all messages sent through A SendText are protected using advanced end-to-end encryption to ensure your privacy." },
  { q: "What is A SendText?", a: "A SendText is a secure and anonymous platform that allows you to send international SMS without revealing your personal number." },
  { q: "How does A SendText ensure privacy?", a: "By using six-digit codes, temporary messaging, and encrypted communication, your identity and data remain safe." },
  { q: "What are the key features of A SendText?", a: "Anonymous texting, temporary messaging, no personal information required, spam-free experience, and strong encryption." },
  { q: "Why should I use A SendText instead of traditional messaging?", a: "Unlike traditional apps, A SendText requires no phone number, email, or signup while ensuring privacy and security." },
  { q: "How can I send a text using A SendText?", a: "Simply generate a six-digit code, enter your message, and send it. The recipient can view it without needing your identity." },
  { q: "Can I receive messages anonymously?", a: "Yes, messages can be received using unique codes instead of exposing personal information." },
  { q: "What happens to my messages after I send them?", a: "Messages are temporary and auto-expire after delivery, ensuring no trace is left behind." },
  { q: "Is A SendText free to use?", a: "Yes, A SendText offers free SMS services worldwide with optional premium features in the future." },
  { q: "How can I avoid spam using A SendText?", a: "Our system blocks spam automatically, ensuring a clutter-free and safe messaging experience." },
  { q: "How is my data protected with A SendText?", a: "Your data is encrypted, never stored permanently, and never shared with third parties." },
  { q: "What are the benefits of temporary messaging?", a: "It keeps conversations short-lived, protects sensitive information, and ensures higher privacy." },
  { q: "What makes A SendText unique compared to other messaging apps?", a: "A SendText combines anonymity, global reach, encryption, and zero personal data requirements." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>FAQs of SendText</h2>
      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggle(index)}
            >
              <span>{item.q}</span>
              <span className={styles.icon}>{openIndex === index ? "−" : "►"}</span>
            </button>
            {openIndex === index && (
              <p className={styles.answer}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
