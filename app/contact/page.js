import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                {/* Contact Form */}
                <div className="lg:w-1/2">
                    <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Send Me a Message</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                    placeholder="Project Inquiry"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Message <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800/50 dark:to-gray-800/80 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 h-full">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Contact Information</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                            Reach out through any of these channels. I typically respond within 24 hours.
                        </p>

                        <div className="space-y-8">
                            {/* Contact Items */}
                            <div className="flex items-start gap-6">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <FaEnvelope className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400">akmal.raditya.wijaya@gmail.com</p>
                                    <a
                                        href="mailto:akmal.raditya.wijaya@gmail.com"
                                        className="text-primary hover:text-secondary text-sm font-medium mt-2 inline-block transition-colors"
                                    >
                                        Send an email
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <FaPhone className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-400">0858 0601 4243</p>
                                    <a
                                        href="tel:+6285806014243"
                                        className="text-primary hover:text-secondary text-sm font-medium mt-2 inline-block transition-colors"
                                    >
                                        Call me
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <FaMapMarkerAlt className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Rogojampi, Banyuwangi, Jawa Timur, Indonesia
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Rogojampi,+Banyuwangi,+East+Java"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-secondary text-sm font-medium mt-2 inline-block transition-colors"
                                    >
                                        View on map
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6">
                                <h3 className="text-lg font-semibold mb-6">Follow Me</h3>
                                <div className="flex gap-6">
                                    <a
                                        href="#"
                                        className="bg-white dark:bg-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md transition-all"
                                    >
                                        <FaGithub className="text-2xl" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white dark:bg-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md transition-all"
                                    >
                                        <FaLinkedin className="text-2xl" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white dark:bg-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md transition-all"
                                    >
                                        <FaTwitter className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}