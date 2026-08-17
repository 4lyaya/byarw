import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start text-xl font-bold text-electric-blue">
              <div className="w-8 h-8 relative rounded-lg overflow-hidden border-2 border-electric-blue mr-2">
                <Image
                  src="/images/arw_logo.png"
                  alt="AKW Logo"
                  fill
                  className="object-contain"
                />
              </div>
              Akmal Raditya
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-electric-blue" size={14} />
              akmal.raditya.wijaya@gmail.com
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
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
