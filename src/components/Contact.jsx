import { personalInfo } from '../data/personalInfo';
import { colors } from '../data/themeConfig';

const Contact = () => {
    const contactCards = [
        {
            icon: '✉️',
            title: 'Email',
            link: `mailto:${personalInfo.email}`,
            text: personalInfo.email,
            external: false
        },
        {
            icon: '🔗',
            title: 'GitHub',
            link: personalInfo.github,
            text: 'CSwan300',
            external: true
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            link: personalInfo.linkedin,
            text: 'campbell-swan',
            external: true
        },
    ];

    return (
        <section id="contact" className="py-24" style={{ backgroundColor: colors.background }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-4"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                        }}
                    >
                        Get In Touch
                    </h2>
                    <div
                        className="h-1 w-20 mx-auto rounded-full mb-6"
                        style={{ backgroundColor: colors.primary }}
                    ></div>
                    <p className="text-lg" style={{ color: colors.textSecondary }}>
                        I'm always open to discussing new projects, opportunities, and ideas.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {contactCards.map((contact, idx) => (
                        <a
                            key={idx}
                            href={contact.link}
                            target={contact.external ? '_blank' : undefined}
                            rel={contact.external ? 'noopener noreferrer' : undefined}
                            className="group block rounded-xl border transition transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
                            style={{
                                backgroundColor: colors.surface,
                                borderColor: colors.cardBorder,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = colors.primary;
                                e.currentTarget.style.backgroundColor = `rgba(50, 184, 198, 0.05)`;
                                e.currentTarget.style.boxShadow = `0 0 20px rgba(50, 184, 198, 0.2)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = colors.cardBorder;
                                e.currentTarget.style.backgroundColor = colors.surface;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="p-8 text-center h-full flex flex-col items-center justify-center">
                                <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">
                                    {contact.icon}
                                </div>
                                <h3
                                    className="text-xl font-semibold mb-2 group-hover:translate-y-1 transition"
                                    style={{ color: colors.primary }}
                                >
                                    {contact.title}
                                </h3>
                                <p
                                    className="text-sm break-all group-hover:opacity-100 transition"
                                    style={{ color: colors.textSecondary }}
                                >
                                    {contact.text}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className="rounded-xl p-12 text-center border"
                    style={{
                        backgroundColor: colors.secondary,
                        borderColor: colors.border,
                    }}
                >
                    <h3
                        className="text-2xl font-bold mb-4"
                        style={{ color: colors.primary }}
                    >
                        Ready to collaborate?
                    </h3>
                    <p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        style={{ color: colors.textSecondary }}
                    >
                        Feel free to reach out through any of the channels above. I'll get back to you as soon as possible!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 duration-300"
                            style={{
                                backgroundColor: colors.primary,
                                color: colors.btnPrimaryText,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = '0.9';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = '1';
                            }}
                        >
                            Send Me an Email
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-lg font-semibold transition border transform hover:scale-105 duration-300"
                            style={{
                                color: colors.primary,
                                borderColor: colors.border,
                                backgroundColor: 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `rgba(50, 184, 198, 0.1)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
