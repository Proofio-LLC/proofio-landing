"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send, MessageSquare, User, Mail, HelpCircle } from "lucide-react";

export default function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketReference, setTicketReference] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit support ticket");
      }

      const referenceNumber =
        result.ticketNumber ||
        (result.ticketId ? result.ticketId.substring(0, 8).toUpperCase() : "N/A");
      setTicketReference(referenceNumber);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting support ticket:", error);
      alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200">
      <div className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-base-content mb-4">Ticket created!</h2>
              <div className="bg-base-200 rounded-2xl p-6 mb-8 max-w-sm mx-auto border border-base-300">
                <p className="text-sm text-base-content/50 uppercase tracking-widest font-bold mb-1">Your Reference Number</p>
                <p className="text-3xl font-mono font-bold text-primary">{ticketReference}</p>
              </div>
              <p className="text-lg text-base-content/60 mb-10 max-w-md mx-auto">
                Thank you for your message. Our support team will get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setTicketReference("");
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="btn btn-primary rounded-xl px-12 h-14 text-lg font-bold shadow-xl shadow-primary/20"
              >
                Create another ticket
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="mb-8">
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Support Ticket</span>
                <h2 className="text-3xl font-bold text-base-content mt-2">How can we help?</h2>
                <p className="text-base-content/50">Fill out the form and we&apos;ll get in touch with you.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" /> Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" /> Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="input input-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-primary" /> Subject
                  </span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="select select-bordered w-full h-14 rounded-xl focus:border-primary focus:outline-none transition-all"
                  required
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing & Plan</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" /> Message
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your request in as much detail as possible..."
                  className="textarea textarea-bordered w-full min-h-[150px] rounded-xl focus:border-primary focus:outline-none transition-all py-4"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full h-14 rounded-xl gap-3 shadow-xl shadow-primary/30 disabled:opacity-50 text-lg font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Ticket
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
