import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaMobile, FaGamepad, FaArrowRight } from 'react-icons/fa'
import ProjectCard from './components/ProjectCard'
import SkillCard from './components/SkillCard'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "BlueShop E-commerce Platform",
      description: "Frond End e-commerce platform",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">Full Stack Developer</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
              Akmal Raditya Wijaya
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            I craft exceptional digital experiences for web, mobile, and games with clean code and intuitive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/projects" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 text-center">
              View My Work
            </Link>
            <Link href="/contact" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all text-center">
              Contact Me
            </Link>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Akmal Raditya Wijaya"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary/10 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
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
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform"
            >
              <div className="text-primary mb-6">{skill.icon}</div>
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
      <section className="py-16">
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm currently available for freelance work. Let's collaborate to turn your ideas into reality with cutting-edge solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 gap-2"
          >
            Let's Talk
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}