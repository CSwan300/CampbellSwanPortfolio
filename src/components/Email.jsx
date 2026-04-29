import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMPTY_FORM   = { name: '', email: '', message: '' };
const EMPTY_ERRORS = { name: '', email: '', message: '' };

const validate = (formData) => {
    const errors = { ...EMPTY_ERRORS };

    if (!formData.name.trim()) {
        errors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
        errors.message = 'Please enter a message.';
    }

    return errors;
};

const hasErrors = (errors) => Object.values(errors).some(Boolean);

const ContactForm = () => {
    const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formData,      setFormData]      = useState(EMPTY_FORM);
    const [errors,        setErrors]        = useState(EMPTY_ERRORS);
    const [touched,       setTouched]       = useState({ name: false, email: false, message: false });
    const [isSending,     setIsSending]     = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...formData, [name]: value };
        setFormData(updated);

        // Re-validate live once the field has been touched
        if (touched[name]) {
            const newErrors = validate(updated);
            setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const newErrors = validate(formData);
        setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Touch all fields and run full validation on submit
        setTouched({ name: true, email: true, message: true });
        const newErrors = validate(formData);
        setErrors(newErrors);
        if (hasErrors(newErrors)) return;

        setIsSending(true);
        setStatusMessage('');

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatusMessage('success');
                setFormData(EMPTY_FORM);
                setErrors(EMPTY_ERRORS);
                setTouched({ name: false, email: false, message: false });
            })
            .catch(() => {
                setStatusMessage('error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const isSuccess = statusMessage === 'success';

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <h2>Send Me An Email</h2>

                <div className="contact-card-wrap">
                    <div className="contact-panel">

                        <form className="contact-form" onSubmit={sendEmail} noValidate>

                            <div className={`contact-field${errors.name ? ' contact-field--error' : ''}`}>
                                <label htmlFor="cf-name">Name</label>
                                <input
                                    id="cf-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Your name"
                                    aria-describedby={errors.name ? 'cf-name-error' : undefined}
                                    aria-invalid={!!errors.name}
                                />
                                {errors.name && (
                                    <span id="cf-name-error" className="contact-field__error" role="alert">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div className={`contact-field${errors.email ? ' contact-field--error' : ''}`}>
                                <label htmlFor="cf-email">Email</label>
                                <input
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="you@example.com"
                                    aria-describedby={errors.email ? 'cf-email-error' : undefined}
                                    aria-invalid={!!errors.email}
                                />
                                {errors.email && (
                                    <span id="cf-email-error" className="contact-field__error" role="alert">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className={`contact-field${errors.message ? ' contact-field--error' : ''}`}>
                                <label htmlFor="cf-message">Message</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="What would you like to say?"
                                    aria-describedby={errors.message ? 'cf-message-error' : undefined}
                                    aria-invalid={!!errors.message}
                                />
                                {errors.message && (
                                    <span id="cf-message-error" className="contact-field__error" role="alert">
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
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
                            <p
                                role="status"
                                className={`contact-status ${
                                    isSuccess
                                        ? 'contact-status--success'
                                        : 'contact-status--error'
                                }`}
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