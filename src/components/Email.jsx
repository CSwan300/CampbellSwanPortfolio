import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
                setStatusMessage('success');
                setFormData(EMPTY_FORM);
            })
            .catch((error) => {
                setStatusMessage('error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const isSuccess = statusMessage === 'success';

    return (
        <section>
            <div>
                <h2>Send Me An Email</h2>

                <div>
                    <div>
                        <form onSubmit={sendEmail} noValidate>
                            <div>
                                <label htmlFor="cf-name">Name</label>
                                <input
                                    id="cf-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="cf-email">Email</label>
                                <input
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="cf-message">Message</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="What would you like to say?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <>
                                        <span aria-hidden="true" />
                                        Sending…
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>

                        {statusMessage && (
                            <p role="status">
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