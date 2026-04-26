import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
console.log("Hi")

const EMPTY_FORM = { name: '', email: '', message: '' };

const ContactForm = () => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formData,      setFormData]      = useState(EMPTY_FORM);
    const [isSending,     setIsSending]     = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage('');

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                setStatusMessage('success');
                setFormData(EMPTY_FORM);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatusMessage('error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const isSuccess = statusMessage === 'success';

    return (
        <section className="portfolio-section contact">
            <div className="portfolio-container">

                <h2 className="portfolio-section-title">Send Me An Email</h2>

                <div className="cf-wrapper">
                    <div className="contact__footer-box">

                        <form onSubmit={sendEmail} noValidate>

                            <div className="cf-field">
                                <label htmlFor="cf-name" className="cf-label">Name</label>
                                <input
                                    id="cf-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="cf-input"
                                />
                            </div>

                            <div className="cf-field">
                                <label htmlFor="cf-email" className="cf-label">Email</label>
                                <input
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="cf-input"
                                />
                            </div>

                            <div className="cf-field">
                                <label htmlFor="cf-message" className="cf-label">Message</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="What would you like to say?"
                                    className="cf-input cf-textarea"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`cf-btn${isSending ? ' cf-btn--sending' : ''}`}
                            >
                                {isSending ? (
                                    <>
                                        <span className="cf-spinner" aria-hidden="true" />
                                        Sending…
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>

                        {statusMessage && (
                            <p
                                className={`cf-status ${isSuccess ? 'cf-status--success' : 'cf-status--error'}`}
                                role="status"
                            >
                                {isSuccess
                                    ? '✓ Message sent successfully!'
                                    : '✕ Failed to send. Please try again.'}
                            </p>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;