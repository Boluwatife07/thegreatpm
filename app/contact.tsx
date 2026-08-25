import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    const [status, setStatus] = useState('');
const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

 const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs.sendForm(
    'service_pcrrosa',
    'template_agwdtre', // Your owner template ID on EmailJS
    formRef.current,
    'NBVntarI31Pkm94pd'
  ) 
  .then(() => {
    // 2) Then send a confirmation email TO THE USER with their name/email using send()
    return emailjs.send(
      'service_pcrrosa',
      'template_1n7lp6i', // <-- Create this template in EmailJS for auto-reply
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'NBVntarI31Pkm94pd'
    );
  })
  .then(() => {
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  })
  .catch((error) => {
    console.error('FAILED...', error);
    setStatus('Oops! Something went wrong. Please try again later.');
  });
};

  return (
    <section id="contact" className="bg-ink-soft px-5 md:px-20 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-paper mb-4 text-center">
          Let&rsquo;s Talk
        </h2>
        <p className="text-muted text-center mb-10">
          Got a delivery mess that needs untangling, or just want to say hi? Drop me a
          message below.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-panel border border-panel-line rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-paper-dim">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-ink-soft border text-paper border-panel-line rounded-md focus:ring-amber focus:border-amber outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-paper-dim">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-paper px-4 py-2 bg-ink-soft border border-panel-line rounded-md focus:ring-amber focus:border-amber outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-paper-dim">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-ink-soft border border-panel-line rounded-md focus:ring-amber text-paper focus:border-amber outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-paper-dim">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 bg-ink-soft border border-panel-line rounded-md focus:ring-amber text-paper focus:border-amber outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-amber text-ink font-semibold px-6 py-3 rounded-md hover:bg-paper transition"
          >
            Send Message
          </button>
        </form>
        {status && (
          <div className={`mt-4 text-center font-semibold ${status.includes('successfully') ? 'text-slate' : 'text-clay'}`}>
            {status}
          </div>
        )}

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-2xl text-muted">
          <a href="mailto:adeboyedorcas67@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition">
            <FaEnvelope />
          </a>
          <a href="http://linkedin.com/in/dorcas-adeboye-526a7929b" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/boluwatife07" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition">
            <FaGithub />
          </a>
          <a href="https://x.com/dorcasadeb26544?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
