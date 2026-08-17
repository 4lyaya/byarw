"use client";

import Image from "next/image";
import {
  FaGraduationCap,
  FaAward,
  FaCode,
  FaGamepad,
  FaMobile,
  FaHeart,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".about-hero-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );

    gsap.fromTo(
      ".about-hero-description",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
    );

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0, rotation: -5 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.7,
          ease: "back.out(1.7)",
        }
      );
    }

    gsap.fromTo(
      ".story-text",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".expertise-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".education-card",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(".floating-element", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    const expertiseCards = document.querySelectorAll(".expertise-card");
    const enterHandlers = new WeakMap();
    const leaveHandlers = new WeakMap();

    expertiseCards.forEach((card) => {
      const enter = () => {
        gsap.to(card, {
          y: -10,
          boxShadow:
            "0 20px 25px -5px rgba(37, 99, 235, 0.2), 0 10px 10px -5px rgba(37, 99, 235, 0.1)",
          duration: 0.3,
        });
      };
      const leave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          duration: 0.3,
        });
      };
      enterHandlers.set(card, enter);
      leaveHandlers.set(card, leave);
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      expertiseCards.forEach((card) => {
        card.removeEventListener("mouseenter", enterHandlers.get(card));
        card.removeEventListener("mouseleave", leaveHandlers.get(card));
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="text-center mb-16">
        <h1 className="about-hero-title text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-400">
            Me
          </span>
        </h1>
        <p className="about-hero-description text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Get to know the person behind the code and my journey in technology
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
        {/* Profile Image */}
        <div className="lg:w-1/3 flex justify-center relative">
          <div
            ref={imageRef}
            className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800"
          >
            <Image
              src="/images/profile.jpg"
              alt="Akmal Raditya Wijaya"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative floating elements */}
          <div className="floating-element absolute -top-4 -left-4 bg-electric/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
            <FaHeart className="text-electric-blue text-xl" />
          </div>
          <div className="floating-element absolute -bottom-4 -right-4 bg-electric/10 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
            <FaLightbulb className="text-electric-blue text-xl" />
          </div>
          <div className="floating-element absolute top-1/2 -right-6 bg-electric p-3 rounded-full shadow-lg">
            <FaRocket className="text-white text-xl" />
          </div>
        </div>

        {/* Bio Section */}
        <div className="lg:w-2/3 space-y-8">
          <div ref={storyRef} className="space-y-6">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              My Story
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p className="story-text">
                I'm{" "}
                <span className="font-semibold text-electric-blue">
                  Akmal Raditya Wijaya
                </span>
                , a passionate Full Stack Developer specializing in web,
                mobile, and game development. With over 5 years of professional
                experience, I've delivered solutions ranging from startup MVPs to
                enterprise-grade applications.
              </p>
              <p className="story-text">
                My coding journey began in high school when I built my first
                website. That spark ignited a lifelong passion for creating
                digital experiences. I thrive on solving complex problems with
                elegant solutions and believe in writing clean, maintainable
                code.
              </p>
              <p className="story-text">
                Beyond development, I'm an avid learner constantly exploring new
                technologies. When I'm not at my desk, you'll find me gaming,
                contributing to open-source projects, or mentoring aspiring
                developers.
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div
            ref={expertiseRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div className="expertise-card bg-white dark:bg-black p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-3 transition-all duration-300">
              <div className="bg-electric/10 p-3 rounded-full">
                <FaCode className="text-electric-blue text-2xl" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Full Stack
              </span>
            </div>
            <div className="expertise-card bg-white dark:bg-black p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-3 transition-all duration-300">
              <div className="bg-electric/10 p-3 rounded-full">
                <FaMobile className="text-electric-blue text-2xl" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Mobile Apps
              </span>
            </div>
            <div className="expertise-card bg-white dark:bg-black p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex items-center gap-3 transition-all duration-300">
              <div className="bg-electric/10 p-3 rounded-full">
                <FaGamepad className="text-electric-blue text-2xl" />
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Game Dev
              </span>
            </div>
          </div>

          {/* Education & Certifications */}
          <div
            ref={educationRef}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="education-card bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-electric/10 p-2 rounded-full">
                  <FaGraduationCap className="text-electric-blue text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    RPL (Rekayasa Perangkat Lunak)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    SMK MUHAMMADIYAH 6 ROGOJAMPI
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    2023 - Belum Lulus
                  </p>
                </div>
              </div>
            </div>

            <div className="education-card bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-electric/10 p-2 rounded-full">
                  <FaAward className="text-electric-blue text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-3">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Google Certified Professional Cloud Architect
                    </span>
                  </div>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      AWS Certified Developer - Associate
                    </span>
                  </div>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Unity Certified Programmer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="bg-gradient-to-r from-electric/5 to-electric/5 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Fun Facts
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-electric-blue">50+</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="bg-white dark:bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-electric-blue">15+</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Technologies Mastered
                </div>
              </div>
              <div className="bg-white dark:bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-electric-blue">
                  1000+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Cups of Coffee
                </div>
              </div>
              <div className="bg-white dark:bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-electric-blue">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Learning Mindset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
