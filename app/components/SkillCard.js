export default function SkillCard({ skill }) {
    return (
        <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden">
            {/* Gradient background overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Skill icon with animated border */}
            <div className="relative z-10 flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-3xl text-primary">
                        {skill.icon}
                    </div>
                </div>
            </div>

            {/* Skill title */}
            <h3 className="relative z-10 text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                {skill.title}
            </h3>

            {/* Skill items with animated list */}
            <ul className="relative z-10 space-y-3">
                {skill.items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:bg-white dark:group-hover:bg-gray-600 transition-all duration-300 hover:translate-x-2"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 -mb-4 -ml-4 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
        </div>
    )
}