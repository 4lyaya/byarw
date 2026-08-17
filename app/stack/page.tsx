"use client";

import { FaCode, FaCloud, FaDatabase, FaMobile, FaPalette, FaTools, FaShieldAlt, FaServer } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  proficiency: number;
}

interface TechCategory {
  category: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "React",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "JavaScript library for building user interfaces",
        proficiency: 90,
      },
      {
        name: "Next.js",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "React framework for production-grade applications",
        proficiency: 85,
      },
      {
        name: "Tailwind CSS",
        icon: <FaPalette className="text-electric-blue text-2xl" />,
        description: "Utility-first CSS framework",
        proficiency: 88,
      },
      {
        name: "TypeScript",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "Typed superset of JavaScript",
        proficiency: 80,
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: <FaServer className="text-electric-blue text-2xl" />,
        description: "JavaScript runtime built on Chrome's V8 engine",
        proficiency: 85,
      },
      {
        name: "Express.js",
        icon: <FaServer className="text-electric-blue text-2xl" />,
        description: "Fast, unopinionated web framework for Node.js",
        proficiency: 82,
      },
      {
        name: "Laravel",
        icon: <FaServer className="text-electric-blue text-2xl" />,
        description: "Elegant PHP framework for web artisans",
        proficiency: 78,
      },
      {
        name: "PHP",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "Server-side scripting language",
        proficiency: 80,
      },
    ],
  },
  {
    category: "Mobile & Game",
    items: [
      {
        name: "React Native",
        icon: <FaMobile className="text-electric-blue text-2xl" />,
        description: "Framework for building native apps using React",
        proficiency: 75,
      },
      {
        name: "Flutter",
        icon: <FaMobile className="text-electric-blue text-2xl" />,
        description: "UI toolkit for building natively compiled applications",
        proficiency: 70,
      },
      {
        name: "Unity",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "Cross-platform game engine",
        proficiency: 80,
      },
      {
        name: "Unreal Engine",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "Professional game engine for high-end games",
        proficiency: 65,
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        icon: <FaCloud className="text-electric-blue text-2xl" />,
        description: "Amazon Web Services cloud platform",
        proficiency: 75,
      },
      {
        name: "Google Cloud",
        icon: <FaCloud className="text-electric-blue text-2xl" />,
        description: "Google Cloud Platform services",
        proficiency: 70,
      },
      {
        name: "Docker",
        icon: <FaTools className="text-electric-blue text-2xl" />,
        description: "Platform for developing, shipping, and running applications",
        proficiency: 72,
      },
      {
        name: "Firebase",
        icon: <FaDatabase className="text-electric-blue text-2xl" />,
        description: "Backend-as-a-Service platform",
        proficiency: 78,
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: <FaDatabase className="text-electric-blue text-2xl" />,
        description: "NoSQL document database",
        proficiency: 85,
      },
      {
        name: "MySQL",
        icon: <FaDatabase className="text-electric-blue text-2xl" />,
        description: "Open-source relational database",
        proficiency: 80,
      },
      {
        name: "PostgreSQL",
        icon: <FaDatabase className="text-electric-blue text-2xl" />,
        description: "Advanced open-source relational database",
        proficiency: 75,
      },
      {
        name: "SQLite",
        icon: <FaDatabase className="text-electric-blue text-2xl" />,
        description: "Lightweight, file-based database",
        proficiency: 70,
      },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      {
        name: "Git",
        icon: <FaTools className="text-electric-blue text-2xl" />,
        description: "Version control system",
        proficiency: 90,
      },
      {
        name: "GitHub",
        icon: <FaTools className="text-electric-blue text-2xl" />,
        description: "Code hosting platform",
        proficiency: 88,
      },
      {
        name: "Figma",
        icon: <FaPalette className="text-electric-blue text-2xl" />,
        description: "UI/UX design tool",
        proficiency: 75,
      },
      {
        name: "Jest",
        icon: <FaCode className="text-electric-blue text-2xl" />,
        description: "JavaScript testing framework",
        proficiency: 70,
      },
    ],
  },
];

export default function Stack() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".stack-hero-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );

    gsap.fromTo(
      ".stack-hero-description",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
    );

    gsap.fromTo(
      ".tech-category",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".tech-item",
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="text-center mb-16"
      >
        <h1 className="stack-hero-title text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">
          My <span className="text-electric-blue">Tech Stack</span>
        </h1>
        <p className="stack-hero-description text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Technologies I work with, organized by category
        </p>
      </div>

      {/* Tech Categories Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {techCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="tech-category bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-electric/20 transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-electric-blue">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="tech-item bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-electric-blue/10 p-2 rounded-lg group-hover:bg-electric-blue/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-electric-blue h-2 rounded-full transition-all duration-300 group-hover:bg-cyan-400"
                          style={{ width: `${item.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-electric-blue">
                      {item.proficiency}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
