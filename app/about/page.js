import Image from 'next/image'
import { FaGraduationCap, FaAward, FaCode, FaGamepad, FaMobile } from 'react-icons/fa'

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Get to know the person behind the code and my journey in technology
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                {/* Profile Image */}
                <div className="lg:w-1/3 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-white dark:border-gray-800">
                        <Image
                            src="/images/profile.jpg"
                            alt="Akmal Raditya Wijaya"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                            <div className="text-2xl font-bold text-primary">5+</div>
                            <div className="text-sm">Years Experience</div>
                        </div> */}
                    </div>
                </div>

                {/* Bio Section */}
                <div className="lg:w-2/3 space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">My Story</h2>
                        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                            <p>
                                I'm <span className="font-semibold text-primary">Akmal Raditya Wijaya</span>, a passionate Full Stack Developer specializing in web, mobile, and game development. With over 5 years of professional experience, I've delivered solutions ranging from startup MVPs to enterprise-grade applications.
                            </p>
                            <p>
                                My coding journey began in high school when I built my first website. That spark ignited a lifelong passion for creating digital experiences. I thrive on solving complex problems with elegant solutions and believe in writing clean, maintainable code.
                            </p>
                            <p>
                                Beyond development, I'm an avid learner constantly exploring new technologies. When I'm not at my desk, you'll find me gaming, contributing to open-source projects, or mentoring aspiring developers.
                            </p>
                        </div>
                    </div>

                    {/* Expertise */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                            <FaCode className="text-primary text-2xl" />
                            <span>Full Stack</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                            <FaMobile className="text-primary text-2xl" />
                            <span>Mobile Apps</span>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                            <FaGamepad className="text-primary text-2xl" />
                            <span>Game Dev</span>
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <FaGraduationCap className="text-primary text-2xl" />
                                <h3 className="text-2xl font-bold">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold">RPL ( Rekayasa Perangkat Lunak)</h4>
                                    <p className="text-gray-600 dark:text-gray-400">SMK MUHAMMADIYAH 6 ROGOJAMPI</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">2023 - Belum Lulus</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <FaAward className="text-primary text-2xl" />
                                <h3 className="text-2xl font-bold">Certifications</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Google Certified Professional Cloud Architect</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>AWS Certified Developer - Associate</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Unity Certified Programmer</span>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}