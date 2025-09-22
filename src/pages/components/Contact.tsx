// components/ContactForm.tsx
"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Heading from "./Heading";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault();
  setLoading(true);
try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send: " + result.error);
      }
    } catch (err) {
      alert("❌ Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }

  };

  return (
    <section className="relative pb-4 px-5 lg:px-0" id="contact-section">
      {/* background effect */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-40"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <Heading title=" Contact us to join the podcast  or suggest a topic" subtitle="Get in touch" custom="1" />
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First + Last Name */}
          <div className="grid  grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-2 text-black focus:ring-black placeholder:text-black"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-2 text-black focus:ring-black placeholder:text-black"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-2 text-black focus:ring-black placeholder:text-black"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message us to join or suggest a topic"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-2 text-black focus:ring-black  placeholder:text-black"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition inline-flex items-center gap-2"
          >
            Submit <ChevronRight  className="w-5 h-5 text-yellow-400"/>  
          </button>
        </form>
      </div>
    </section>
  );
}
