import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MySaaS to start your next web project.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Contact us</h1>
      <ContactForm />
    </section>
  );
}

