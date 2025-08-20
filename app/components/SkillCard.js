"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SkillCard({ skill }) {
    const cardRef = useRef(null);
    const iconRef = useRef(null);
    const titleRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        // Animation when card enters viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Card animation
                        gsap.to(cardRef.current, {
                            y: 0,
                            opacity: 1,
                            rotationY: 0,
                            duration: 0.8,
                            ease: "power3.out",
                        });

                        // Icon animation
                        gsap.to(iconRef.current, {
                            scale: 1,
                            rotation: 360,
                            duration: 1,
                            ease: "back.out(1.7)",
                            delay: 0.2,
                        });

                        // Title animation
                        gsap.to(titleRef.current, {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            delay: 0.4,
                        });

                        // Items animation with stagger
                        gsap.to(itemsRef.current, {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.1,
                            delay: 0.6,
                        });

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Initial state
        gsap.set(cardRef.current, {
            y: 50,
            opacity: 0,
            rotationY: 15,
        });

        gsap.set(iconRef.current, {
            scale: 0,
            rotation: -180,
        });

        gsap.set(titleRef.current, {
            y: 20,
            opacity: 0,
        });

        gsap.set(itemsRef.current, {
            y: 20,
            opacity: 0,
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Hover animations
    const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power1.out",
        });

        gsap.to(iconRef.current, {
            y: -5,
            duration: 0.3,
            ease: "power1.out",
        });

        // Floating particles animation
        gsap.to(".particle", {
            y: -20,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power1.out",
        });

        gsap.to(iconRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power1.out",
        });

        // Reset particles
        gsap.to(".particle", {
            y: 0,
            opacity: 0,
            duration: 0.3,
        });
    };

    return (
        <div
            ref={cardRef}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden transform-gpu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating particles */}
            <div className="particle absolute top-4 left-4 w-2 h-2 bg-primary rounded-full opacity-0"></div>
            <div className="particle absolute top-6 right-6 w-1.5 h-1.5 bg-secondary rounded-full opacity-0"></div>
            <div className="particle absolute bottom-5 left-8 w-1 h-1 bg-primary rounded-full opacity-0"></div>
            <div className="particle absolute bottom-8 right-4 w-1.5 h-1.5 bg-secondary rounded-full opacity-0"></div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-700 rounded-2xl"></div>
            </div>

            {/* Skill icon with advanced animation */}
            <div className="relative z-10 flex justify-center mb-6">
                <div
                    ref={iconRef}
                    className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 shadow-inner"
                >
                    <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                    </div>
                </div>
            </div>

            {/* Skill title with gradient text */}
            <h3
                ref={titleRef}
                className="relative z-10 text-2xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500"
            >
                {skill.title}
            </h3>

            {/* Skill items with advanced animation */}
            <ul className="relative z-10 space-y-3">
                {skill.items.map((item, index) => (
                    <li
                        key={index}
                        ref={el => itemsRef.current[index] = el}
                        className="flex items-center px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:bg-white dark:group-hover:bg-gray-600 transition-all duration-300 hover:translate-x-2 backdrop-blur-sm border border-gray-100 dark:border-gray-600 group-hover:border-primary/20"
                    >
                        <div className="relative mr-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-medium">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Corner accent elements */}
            <div className="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 -mb-4 -ml-4 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -rotate-12 group-hover:-rotate-45 transition-transform duration-700 delay-100"></div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
    );
}