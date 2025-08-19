import ProjectCard from '../components/ProjectCard'
import { FaSearch, FaFilter } from 'react-icons/fa'

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce platform with payment integration, product management, and user authentication systems.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/images/project1.jpg",
        link: "#",
        category: "Web Development",
        year: 2023
    },
    {
        id: 2,
        title: "Mobile Banking App",
        description: "Cross-platform mobile banking application with biometric authentication and transaction features.",
        tags: ["React Native", "Firebase", "Redux"],
        image: "/images/project2.jpg",
        link: "#",
        category: "Mobile Development",
        year: 2022
    },
    {
        id: 3,
        title: "2D Adventure Game",
        description: "Browser-based 2D adventure game with physics engine and multiplayer capabilities.",
        tags: ["Unity", "C#", "Photon"],
        image: "/images/project3.jpg",
        link: "#",
        category: "Game Development",
        year: 2023
    },
    {
        id: 4,
        title: "Task Management Dashboard",
        description: "Web-based task management system with drag-and-drop functionality and team collaboration features.",
        tags: ["Next.js", "Tailwind CSS", "Firebase"],
        image: "/images/project1.jpg",
        link: "#",
        category: "Web Development",
        year: 2022
    },
    {
        id: 5,
        title: "Fitness Tracking App",
        description: "Mobile application for tracking workouts, nutrition, and progress with data visualization.",
        tags: ["Flutter", "Dart", "SQLite"],
        image: "/images/project2.jpg",
        link: "#",
        category: "Mobile Development",
        year: 2021
    },
    {
        id: 6,
        title: "AR Shopping Experience",
        description: "Augmented reality application that lets users visualize furniture in their space before purchasing.",
        tags: ["Unity", "ARKit", "3D Modeling"],
        image: "/images/project3.jpg",
        link: "#",
        category: "Game Development",
        year: 2023
    }
]

const categories = ["All", "Web Development", "Mobile Development", "Game Development"]
const years = ["All", "2023", "2022", "2021"]

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    A collection of my professional work and personal projects
                </p>
            </div>

            {/* Filters */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                            placeholder="Search projects..."
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 w-full md:w-auto">
                        <div className="relative">
                            <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-4 pr-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm">
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <FaFilter className="text-gray-400" />
                            </div>
                        </div>

                        <div className="relative">
                            <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg pl-4 pr-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm">
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
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Unity</span>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
                <nav className="flex items-center gap-2">
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                        1
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        2
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        3
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        Next
                    </button>
                </nav>
            </div>
        </div>
    )
}