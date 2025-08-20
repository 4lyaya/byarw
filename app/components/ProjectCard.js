"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ProjectCard({ project }) {
    const cardRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        // Animation on card hover
        const card = cardRef.current
        const image = imageRef.current

        const handleMouseEnter = () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: "power2.out"
            })
            gsap.to(image, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
            })
        }

        const handleMouseLeave = () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })
            gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            })
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)

        // Initial animation when card enters viewport
        gsap.fromTo(card,
            {
                y: 50,
                opacity: 0,
                rotationY: 10
            },
            {
                y: 0,
                opacity: 1,
                rotationY: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Content animation on hover
        const contentElements = contentRef.current.children
        gsap.set(contentElements, { y: 10, opacity: 0 })

        const showContent = () => {
            gsap.to(contentElements, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.1,
                delay: 0.2
            })
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showContent()
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1 })

        observer.observe(card)

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter)
            card.removeEventListener('mouseleave', handleMouseLeave)
            observer.disconnect()
        }
    }, [])

    return (
        <div
            ref={cardRef}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform-gpu"
        >
            <div className="relative h-48 overflow-hidden">
                <div ref={imageRef} className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.category}
                    </span>
                </div>

                {/* Overlay with project info on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-center gap-2 mb-4">
                            {project.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-white/20 text-white rounded-full text-xs backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={project.link}
                            className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                            View Details
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div ref={contentRef} className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold transform transition-transform group-hover:translate-x-1 duration-300">
                        {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full transform transition-transform group-hover:scale-110 duration-300">
                        {project.year}
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs transform transition-transform group-hover:scale-105 duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full text-xs">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
                <Link
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors group/link"
                >
                    View Project
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}