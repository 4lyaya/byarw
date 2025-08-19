import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center text-xl font-bold text-primary">
                            <FaCode className="mr-2" />
                            Akmal Raditya
                        </Link>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Full Stack Developer | Web | Mobile | Game
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-2">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-primary transition">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-primary transition">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-primary transition">
                                <FaTwitter className="text-2xl" />
                            </a>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} Akmal Raditya Wijaya. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}