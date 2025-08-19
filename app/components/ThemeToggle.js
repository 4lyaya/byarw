'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('darkMode')
        if (savedTheme) {
            setDarkMode(savedTheme === 'true')
            document.documentElement.classList.toggle('dark', savedTheme === 'true')
        } else {
            // Check system preference if no saved theme
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(prefersDark)
            document.documentElement.classList.toggle('dark', prefersDark)
            localStorage.setItem('darkMode', prefersDark)
        }
    }, [])

    const toggleTheme = () => {
        const newMode = !darkMode
        setDarkMode(newMode)
        localStorage.setItem('darkMode', newMode)
        document.documentElement.classList.toggle('dark', newMode)
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
            {darkMode ? (
                <FaSun className="w-5 h-5" />
            ) : (
                <FaMoon className="w-5 h-5" />
            )}
        </button>
    )
}