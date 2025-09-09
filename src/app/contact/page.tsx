import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MySaaS to start your next web project.",
};
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    const data = await res.json();
    setStatus(data?.message ?? (res.ok ? "Sent" : "Error"));
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Contact us</h1>
      <form
        action={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" className="w-full rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" name="email" className="w-full rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" required />
        </div>
        <button type="submit" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Send</button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </section>
  );
}

