"use client";

import { useState, useEffect, useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaCheckCircle, FaUser, FaComment } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const heroRef = useRef(null)
    const formRef = useRef(null)
    const infoRef = useRef(null)
    const formElementsRef = useRef([])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate form submission
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(true)
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Reset form success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000)
        }, 2000)
    }

    useEffect(() => {
        // Hero section animations
        gsap.fromTo('.contact-hero-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )

        gsap.fromTo('.contact-hero-description',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
        )

        // Form animations
        gsap.fromTo('.form-element',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Contact info animations
        gsap.fromTo('.contact-info-item',
            { x: -30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Social links animation
        gsap.fromTo('.social-link',
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.social-links-container',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Floating animation for decorative elements
        gsap.to('.floating-element', {
            y: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })

        // Input focus animations
        const inputs = document.querySelectorAll('input, textarea')
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)',
                    duration: 0.3
                })
            })
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    boxShadow: 'none',
                    duration: 0.3
                })
            })
        })

        return () => {
            inputs.forEach(input => {
                input.removeEventListener('focus', () => { })
                input.removeEventListener('blur', () => { })
            })
        }
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
            {/* Hero Section */}
            <div ref={heroRef} className="text-center mb-16">
                <h1 className="contact-hero-title text-4xl sm:text-5xl font-bold mb-4">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
                </h1>
                <p className="contact-hero-description text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                {/* Contact Form */}
                <div ref={formRef} className="lg:w-1/2">
                    <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                        {/* Decorative elements */}
                        {/* <div className="floating-element absolute -top-4 -left-4 bg-primary/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                            <FaUser className="text-primary text-xl" />
                        </div>
                        <div className="floating-element absolute -bottom-4 -right-4 bg-secondary/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                            <FaComment className="text-secondary text-xl" />
                        </div> */}

                        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Send Me a Message</h2>

                        {isSubmitted && (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 text-xl" />
                                <p className="text-green-800 dark:text-green-200">
                                    Thank you for your message! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="form-element">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-element">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-element">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all"
                                    placeholder="Project Inquiry"
                                    required
                                />
                            </div>

                            <div className="form-element">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Message <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="form-element w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div ref={infoRef} className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800/50 dark:to-gray-800/80 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 h-full relative overflow-hidden">
                        {/* Decorative elements */}
                        {/* <div className="floating-element absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                            <FaEnvelope className="text-primary text-xl" />
                        </div> */}

                        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Contact Information</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                            Reach out through any of these channels. I typically respond within 24 hours.
                        </p>

                        <div className="space-y-8">
                            {/* Contact Items */}
                            <div className="contact-info-item flex items-start gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
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

                            <div className="contact-info-item flex items-start gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
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

                            <div className="contact-info-item flex items-start gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
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
                            <div className="pt-6 social-links-container">
                                <h3 className="text-lg font-semibold mb-6">Follow Me</h3>
                                <div className="flex gap-6">
                                    <a
                                        href="#"
                                        className="social-link bg-white dark:bg-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md transition-all transform hover:-translate-y-1"
                                    >
                                        <FaGithub className="text-2xl" />
                                    </a>
                                    <a
                                        href="#"
                                        className="social-link bg-white dark:bg-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md transition-all transform hover:-translate-y-1"
                                    >
                                        <FaLinkedin className="text-2xl" />
                                    </a>
                                    <a
                                        href="#"
                                        className="social-link bg-white dark:bg-gray-700 p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-md transition-all transform hover:-translate-y-1"
                                    >
                                        <FaTwitter className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="h-64 md:h-96 w-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                        <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Rogojampi, Banyuwangi</h3>
                        <p className="text-gray-600 dark:text-gray-400">East Java, Indonesia</p>
                        <a
                            href="https://www.google.com/maps/place/Rogojampi,+Banyuwangi,+East+Java"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-primary hover:text-secondary font-medium"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}