"use client";

import ProjectCard from '../components/ProjectCard'
import { FaSearch, FaFilter, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce platform with payment integration, product management, and user authentication systems.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/images/project1.jpg",
        link: "/projects/1",
        category: "Web Development",
        year: 2023
    },
    {
        id: 2,
        title: "Mobile Banking App",
        description: "Cross-platform mobile banking application with biometric authentication and transaction features.",
        tags: ["React Native", "Firebase", "Redux"],
        image: "/images/project2.jpg",
        link: "/projects/2",
        category: "Mobile Development",
        year: 2022
    },
    {
        id: 3,
        title: "2D Adventure Game",
        description: "Browser-based 2D adventure game with physics engine and multiplayer capabilities.",
        tags: ["Unity", "C#", "Photon"],
        image: "/images/project3.jpg",
        link: "/projects/3",
        category: "Game Development",
        year: 2023
    },
    {
        id: 4,
        title: "Task Management Dashboard",
        description: "Web-based task management system with drag-and-drop functionality and team collaboration features.",
        tags: ["Next.js", "Tailwind CSS", "Firebase"],
        image: "/images/project1.jpg",
        link: "/projects/4",
        category: "Web Development",
        year: 2022
    },
    {
        id: 5,
        title: "Fitness Tracking App",
        description: "Mobile application for tracking workouts, nutrition, and progress with data visualization.",
        tags: ["Flutter", "Dart", "SQLite"],
        image: "/images/project2.jpg",
        link: "/projects/5",
        category: "Mobile Development",
        year: 2021
    },
    {
        id: 6,
        title: "AR Shopping Experience",
        description: "Augmented reality application that lets users visualize furniture in their space before purchasing.",
        tags: ["Unity", "ARKit", "3D Modeling"],
        image: "/images/project3.jpg",
        link: "/projects/6",
        category: "Game Development",
        year: 2023
    }
]

const categories = ["All", "Web Development", "Mobile Development", "Game Development"]
const years = ["All", "2023", "2022", "2021"]
const allTags = ["React", "Next.js", "Node.js", "React Native", "Unity", "Flutter", "MongoDB", "Firebase"]

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedYear, setSelectedYear] = useState("All")
    const [selectedTag, setSelectedTag] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const projectsPerPage = 6
    const heroRef = useRef(null)
    const filtersRef = useRef(null)
    const projectsRef = useRef(null)
    const paginationRef = useRef(null)

    // Filter projects based on selections
    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
        const matchesYear = selectedYear === "All" || project.year.toString() === selectedYear
        const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag)
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesCategory && matchesYear && matchesTag && matchesSearch
    })

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        // Hero section animations
        gsap.fromTo('.projects-hero-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
        )

        gsap.fromTo('.projects-hero-description',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
        )

        // Filters animation
        gsap.fromTo('.filter-element',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: filtersRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Projects grid animation
        gsap.fromTo('.project-item',
            {
                y: 50,
                opacity: 0,
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Pagination animation
        gsap.fromTo('.pagination-item',
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: paginationRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none reverse'
                }
            }
        )

        // Hover animations for filter tags
        const tagElements = document.querySelectorAll('.filter-tag')
        tagElements.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                gsap.to(tag, {
                    scale: 1.05,
                    boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)',
                    duration: 0.3
                })
            })
            tag.addEventListener('mouseleave', () => {
                gsap.to(tag, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3
                })
            })
        })

        return () => {
            // Clean up event listeners
            tagElements.forEach(tag => {
                tag.removeEventListener('mouseenter', () => { })
                tag.removeEventListener('mouseleave', () => { })
            })
        }
    }, [])

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory, selectedYear, selectedTag, searchQuery])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
            {/* Hero Section */}
            <div ref={heroRef} className="text-center mb-16">
                <h1 className="projects-hero-title text-4xl sm:text-5xl font-bold mb-4">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                </h1>
                <p className="projects-hero-description text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    A collection of my professional work and personal projects
                </p>
            </div>

            {/* Filters */}
            <div ref={filtersRef} className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="relative w-full md:w-96 filter-element">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                            placeholder="Search projects..."
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 w-full md:w-auto">
                        <div className="relative filter-element">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-4 pr-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <FaFilter className="text-gray-400" />
                            </div>
                        </div>

                        <div className="relative filter-element">
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-4 pr-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm"
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <FaFilter className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all filter-tag ${selectedTag === "All" ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                        onClick={() => setSelectedTag("All")}
                    >
                        All
                    </span>
                    {allTags.map(tag => (
                        <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all filter-tag ${selectedTag === tag ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                            onClick={() => setSelectedTag(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300">
                    Showing {currentProjects.length} of {filteredProjects.length} projects
                </p>
            </div>

            {/* Projects Grid */}
            <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map(project => (
                    <div key={project.id} className="project-item">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* No Results Message */}
            {currentProjects.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Try adjusting your filters or search terms
                    </p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div ref={paginationRef} className="flex justify-center mt-16">
                    <nav className="flex items-center gap-2">
                        <button
                            onClick={() => paginate(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="pagination-item px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            <FaArrowLeft className="text-sm" /> Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => paginate(page)}
                                className={`pagination-item px-4 py-2 border rounded-lg transition-colors ${currentPage === page
                                    ? 'bg-primary text-white border-primary'
                                    : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="pagination-item px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            Next <FaArrowRight className="text-sm" />
                        </button>
                    </nav>
                </div>
            )}
        </div>
    )
}