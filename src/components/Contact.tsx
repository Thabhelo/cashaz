import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: "Cashaz Team",
          from_email: form.email,
          to_email: "hello@cashaz.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      );

      toast.success("Thank you! We will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '900', 
            color: '#2d1b69', 
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            textAlign: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            Partner with <span style={{ color: '#8b5cf6' }}>Cashaz</span>
          </h1>
          <p style={{ 
            marginTop: '1rem', 
            maxWidth: '800px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            fontSize: '1.25rem', 
            color: '#64748b',
            lineHeight: '1.8'
          }}>
            Ready to transform African SME finance? Let's discuss partnerships, investment opportunities, 
            and collaboration on this revolutionary vision.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '700', 
              color: '#2d1b69', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Get in Touch
            </h2>
            <div>
              <div className="contact-info-item">
                <Mail className="contact-info-icon" />
                <span style={{ color: '#64748b' }}>hello@cashaz.com</span>
              </div>
              <div className="contact-info-item">
                <Phone className="contact-info-icon" />
                <span style={{ color: '#64748b' }}>+1 (256) 375-4207</span>
              </div>
              <div className="contact-info-item">
                <MapPin className="contact-info-icon" />
                <span style={{ color: '#64748b' }}>
                  Building the future across 54 African countries
                </span>
              </div>
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 style={{ 
              fontSize: '1.75rem', 
              fontWeight: '700', 
              color: '#2d1b69', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Send us a message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-field">
                <label
                  htmlFor="name"
                  className="contact-form-label"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>
              <div className="contact-form-field">
                <label
                  htmlFor="email"
                  className="contact-form-label"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label
                  htmlFor="message"
                  className="contact-form-label"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in Cashaz, potential partnership opportunities, or any questions you have..."
                  className="contact-form-textarea"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="contact-submit-btn"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Back to Home */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '1rem 2rem',
              color: '#8b5cf6',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              borderRadius: '0.5rem',
              border: '2px solid #8b5cf6',
              fontSize: '1.05rem'
            }}
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
} 