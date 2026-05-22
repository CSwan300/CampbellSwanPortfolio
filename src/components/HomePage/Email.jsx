import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMPTY_FORM = { name: '', email: '', message: '' };

const ContactForm = () => {
    // Scroll Animation Logic
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const [formData, setFormData] = useState(EMPTY_FORM);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(''); // 'success' | 'error' | ''

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData(EMPTY_FORM);
            })
            .catch(() => setStatus('error'))
            .finally(() => setIsSending(false));
    };

    return (
        <section id="email-contact" className="contact-section">
            <div className="contact-container">

                {/* Step 1: Heading fades in first */}
                <h2 className="reveal">Send Me An Email</h2>

                <div className="contact-card-wrap reveal delay-1">
                    <div className="contact-panel">
                        <form onSubmit={sendEmail}>

                            {/* Step 2: Form fields build in sequence */}
                            <div className="contact-field reveal delay-1">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="contact-field reveal delay-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="contact-field reveal delay-3">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="What's on your mind?"
                                    required
                                />
                            </div>

                            {/* Step 3: Button appears last */}
                            <button
                                type="submit"
                                className="contact-submit reveal delay-4"
                                disabled={isSending}
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {status === 'success' && (
                            <p className="contact-status--success" style={{marginTop: '1rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', textAlign: 'center'}}>
                                ✓ Message sent! I'll be in touch soon.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;