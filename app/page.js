"use client";

import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaMobile, FaGamepad, FaArrowRight } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Hero section animations
    gsap.fromTo('.hero-badge',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    )

    gsap.fromTo('.hero-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.4, stagger: 0.1 }
    )

    gsap.fromTo('.hero-description',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
    )

    gsap.fromTo('.hero-buttons',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1.2 }
    )

    gsap.fromTo('.hero-social',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1.6 }
    )

    gsap.fromTo('.hero-image',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.8, ease: "back.out(1.7)" }
    )

    gsap.fromTo('.experience-badge',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 1.8, ease: "elastic.out(1, 0.8)" }
    )

    // Skills section animations
    gsap.fromTo('.skill-card', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Project cards animation
    gsap.fromTo('.project-card', {
      y: 100,
      opacity: 0,
      rotationY: 15
    }, {
      y: 0,
      opacity: 1,
      rotationY: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    // CTA section animation
    gsap.fromTo('.cta-content', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // Floating animation for experience badge
    gsap.to('.experience-badge', {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Hover animations for social icons
    const socialIcons = document.querySelectorAll('.social-icon')
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.5
        })
      })
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.5
        })
      })
    })

    return () => {
      // Clean up event listeners
      socialIcons.forEach(icon => {
        icon.removeEventListener('mouseenter', () => { })
        icon.removeEventListener('mouseleave', () => { })
      })
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "BlueShop E-commerce Platform",
      description: "Front End e-commerce platform",
      tags: ["HTML", "CSS", "JS"],
      image: "/images/project1.jpg",
      link: "https://github.com/4lyaya/BlueShop"
    },
    {
      id: 2,
      title: "SmartMoney Platform",
      description: "Cross-platform SmartMoney Platform",
      tags: ["Laravel", "Tailwind", "Vite", "ApexChart", "MySQL"],
      image: "/images/project2.jpg",
      link: "https://github.com/4lyaya/SmartMoney"
    },
    {
      id: 3,
      title: "2D Adventure Game",
      description: "Browser-based 2D adventure game with physics",
      tags: ["Unity", "C#"],
      image: "/images/project3.jpg",
      link: "https://github.com/4lyaya/Stickman-Adventure"
    }
  ]

  const skills = [
    {
      title: "Web Development",
      icon: <FaCode className="text-4xl" />,
      items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "Laravel", "PHP"]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-4xl" />,
      items: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "Game Development",
      icon: <FaGamepad className="text-4xl" />,
      items: ["Unity", "Unreal Engine", "C#", "C++", "Game Design", "Godot"]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2 space-y-6">
          <div className="hero-badge inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">Full Stack Developer</span>
          </div>
          <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
              Akmal Raditya Wijaya
            </span>
          </h1>
          <p className="hero-description text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            I craft exceptional digital experiences for web, mobile, and games with clean code and intuitive design.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/projects" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 text-center">
              View My Work
            </Link>
            <Link href="/contact" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all text-center">
              Contact Me
            </Link>
          </div>
          <div className="hero-social flex gap-4 pt-4">
            <a href="https://github.com" className="social-icon text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com" className="social-icon text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="social-icon text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="hero-image relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Akmal Raditya Wijaya"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="experience-badge absolute -bottom-8 -right-8 bg-primary/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My <span className="text-primary">Expertise</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I bring a diverse set of skills to deliver complete solutions for your digital needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-gray-600 dark:text-gray-300">Some of my best work</p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-primary hover:text-secondary font-medium group"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-primary/80 text-white text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-secondary font-medium group"
                >
                  View Project
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl px-6">
        <div className="cta-content max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm currently available for freelance work. Let's collaborate to turn your ideas into reality with cutting-edge solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 gap-2 group"
          >
            Let's Talk
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}