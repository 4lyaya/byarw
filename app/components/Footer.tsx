import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, href: "#", label: "GitHub" },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "#",
      label: "LinkedIn",
    },
    { icon: <FaTwitter className="text-2xl" />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-white dark:bg-black py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-electric-blue"
            >
              <FaCode className="mr-2" />
              Akmal Raditya
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Full Stack Developer | Web | Mobile | Game
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Akmal Raditya Wijaya. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
