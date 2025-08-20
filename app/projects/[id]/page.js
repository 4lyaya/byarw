"use client";

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendar, FaTag, FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// Data projects (biasanya dari API atau database)
const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce platform with payment integration, product management, and user authentication systems.",
        fullDescription: "A comprehensive e-commerce solution built with modern technologies. This platform includes advanced features like real-time inventory management, personalized recommendations, and a sophisticated admin dashboard. The project was built with a focus on performance, security, and scalability to handle thousands of concurrent users.",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT", "Cloudinary"],
        image: "/images/project1.jpg",
        images: [
            "/images/project1.jpg",
            "/images/project2.jpg",
            "/images/project3.jpg"
        ],
        link: "#",
        github: "#",
        category: "Web Development",
        year: "2023",
        client: "Retail Company",
        role: "Full Stack Developer",
        challenges: "Implementing secure payment processing while maintaining performance and user experience.",
        solutions: "Integrated Stripe with webhooks for secure transactions and used Redis for caching to improve performance.",
        technologies: [
            { name: "Frontend", items: ["React", "Redux", "Tailwind CSS", "Context API"] },
            { name: "Backend", items: ["Node.js", "Express", "MongoDB", "Mongoose"] },
            { name: "Services", items: ["Stripe API", "Cloudinary", "JWT", "Nodemailer"] }
        ]
    },
    {
        id: 2,
        title: "Mobile Banking App",
        description: "Cross-platform mobile banking application with biometric authentication and transaction features.",
        fullDescription: "A secure mobile banking application built with React Native that provides users with a seamless banking experience. Features include fingerprint authentication, transaction history, bill payments, and fund transfers with real-time notifications.",
        tags: ["React Native", "Firebase", "Redux", "Node.js"],
        image: "/images/project2.jpg",
        images: [
            "/images/project2.jpg",
            "/images/project1.jpg",
            "/images/project3.jpg"
        ],
        link: "#",
        github: "#",
        category: "Mobile Development",
        year: "2022",
        client: "Financial Institution",
        role: "Mobile Developer",
        challenges: "Ensuring bank-level security while maintaining app performance and user experience.",
        solutions: "Implemented biometric authentication, end-to-end encryption, and optimized React Native performance for smooth user experience.",
        technologies: [
            { name: "Frontend", items: ["React Native", "Redux", "Styled Components"] },
            { name: "Backend", items: ["Node.js", "Express", "MongoDB"] },
            { name: "Security", items: ["JWT", "Biometric Auth", "Encryption"] }
        ]
    },
    // Tambahkan data project lainnya sesuai kebutuhan
];

export default function ProjectView() {
    const params = useParams()
    const router = useRouter()
    const { id } = params
    const [activeImage, setActiveImage] = useState(0)
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)

    const heroRef = useRef(null)
    const contentRef = useRef(null)
    const galleryRef = useRef(null)
    const detailsRef = useRef(null)

    // Find project based on ID
    useEffect(() => {
        if (id) {
            const projectId = parseInt(id)
            const foundProject = projectsData.find(p => p.id === projectId)
            setProject(foundProject)
            setLoading(false)
        }
    }, [id])

    useEffect(() => {
        if (!project) return

        // Hero section animations
        gsap.fromTo('.project-hero-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )

        gsap.fromTo('.project-hero-description',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
        )

        gsap.fromTo('.project-hero-image',
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "back.out(1.7)" }
        )

        gsap.fromTo('.project-hero-meta',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.8, stagger: 0.1 }
        )

        gsap.fromTo('.project-hero-actions',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 1.1 }
        )

        // Content animations
        gsap.fromTo('.content-section', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        })

        // Gallery animations
        if (project.images.length > 1) {
            gsap.fromTo('.gallery-item', {
                y: 50,
                opacity: 0,
                scale: 0.95
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            })
        }

        // Details animations
        gsap.fromTo('.tech-stack-item', {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: detailsRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        })

        // Floating animation for decorative elements
        gsap.to('.floating-element', {
            y: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [project])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <h2 className="text-xl font-semibold">Loading project...</h2>
                </div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-5xl mb-4">🔍</div>
                    <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
                    <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
                    <Link href="/projects" className="bg-primary text-white px-6 py-3 rounded-lg font-medium">
                        Back to Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors group mb-6"
                        >
                            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="project-hero-title text-4xl sm:text-5xl font-bold mb-6">
                                {project.title}
                            </h1>
                            <p className="project-hero-description text-xl text-gray-600 dark:text-gray-300 mb-8">
                                {project.description}
                            </p>

                            <div className="project-hero-meta flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                                    <FaCalendar className="text-primary" />
                                    <span>{project.year}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                                    <FaTag className="text-primary" />
                                    <span>{project.category}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                                    <FaUsers className="text-primary" />
                                    <span>{project.client}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                                    <FaCode className="text-primary" />
                                    <span>{project.role}</span>
                                </div>
                            </div>

                            <div className="project-hero-actions flex flex-wrap gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                                >
                                    <FaGithub />
                                    View Code
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                                >
                                    <FaExternalLinkAlt />
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="project-hero-image relative">
                            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                                <Image
                                    src={project.images[activeImage]}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Decorative floating elements */}
                            <div className="floating-element absolute -top-4 -left-4 bg-primary/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                                <FaLightbulb className="text-primary text-xl" />
                            </div>
                            <div className="floating-element absolute -bottom-4 -right-4 bg-secondary/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                                <FaRocket className="text-secondary text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section ref={contentRef} className="py-16 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="content-section">
                            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {project.fullDescription}
                                </p>

                                <h3 className="text-xl font-semibold mb-3 text-primary">Challenges</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    {project.challenges}
                                </p>

                                <h3 className="text-xl font-semibold mb-3 text-primary">Solutions</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {project.solutions}
                                </p>
                            </div>
                        </div>

                        <div className="content-section">
                            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
                            <div className="space-y-6">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
                                        <h3 className="text-lg font-semibold mb-3 text-primary">{tech.name}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {tech.items.map((item, i) => (
                                                <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {project.images.length > 1 && (
                <section ref={galleryRef} className="py-16 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="gallery-item relative group cursor-pointer"
                                    onClick={() => setActiveImage(index)}
                                >
                                    <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 transition-transform group-hover:scale-105">
                                        <Image
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white font-medium">View</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Tech Stack Details */}
            <section ref={detailsRef} className="py-16 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Technical Implementation</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="tech-stack-item">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <FaCode className="text-blue-600" />
                                </div>
                                Frontend Development
                            </h3>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Implemented responsive design with Tailwind CSS</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>State management using Redux Toolkit</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Optimized performance with React.memo and useCallback</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Implemented lazy loading for images and components</span>
                                </li>
                            </ul>
                        </div>

                        <div className="tech-stack-item">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <FaCode className="text-green-600" />
                                </div>
                                Backend Development
                            </h3>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>RESTful API design with Express.js</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Database modeling with Mongoose ODM</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>JWT authentication and authorization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Payment processing with Stripe integration</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6">Interested in similar projects?</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        I'm available for freelance work and would love to help bring your ideas to life.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-secondary transition-colors"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/projects"
                            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary/10 transition-colors"
                        >
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}