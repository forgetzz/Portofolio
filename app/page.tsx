"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  Store,
  GraduationCap,
  ArrowUpRight,
  LucideIcon,
  Package,
  FileText,
  Brain,
} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { trackEvent } from "@/lib/gtag";
interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
}
// Interface untuk project
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

// Interface untuk skill
interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

// Interface untuk category
interface Category {
  id: string;
  name: string;
}

interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
}

// Interface untuk quick link di hero
interface QuickLink {
  label: string;
  path: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

const PortfolioLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showIframe, setShowIframe] = useState<boolean>(false);
  const mapRef = useRef(null);
  const heroLinksRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(mapRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 80%",
      },
    });

    if (heroLinksRef.current) {
      gsap.from((heroLinksRef.current as HTMLElement).children, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.3,
      });
    }
  });

  // Quick links tampil di hero - list redirect cepat
  const quickLinks: QuickLink[] = [
    {
      label: "Our Courses",
      path: "~/class",
      href: "https://class.forgetzstudio.com",
      icon: GraduationCap,
           external: true,
    },
    {
      label: "Our Store",
      path: "~/store",
      href: "/store",
      icon: Store,
      
    },
    {
      label: "@forgetzstudio/sdk",
      path: "~/library",
      href: "https://www.npmjs.com/~forgetzstudio",
      icon:   Package,
      external: true,
    },
    {
      label: "Our Models",
      path: "~/AI",
      href: "https://ai.forgetzstudio.com",
      icon:   Brain,
      external: true,
    },
    {
      label: "Docs",
      path: "~/doc",
      href: "https://docs.forgetzstudio.com",
      icon:  FileText,
      external: true,
    },
    {
      label: "Instagram",
      path: "~/instagram",
      href: "https://instagram.com/forgetzstudio",
      icon: Instagram,
      external: true,
    },
    {
      label: "WhatsApp",
      path: "~/contact",
      href: "https://wa.me/6289602203266",
      icon: Mail,
      external: true,
    },
  ];

  // Sample project data - replace with your actual projects
  const projects: Project[] = [

    {
      id: 1,
      title: "ASB family",
      description:
        "Full-stack web application built with React, Node.js, and firebase. Complete features including payment gateway and admin dashboard.",
      image:
        "/projects/1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Next.js"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.forgetzz.asbapps&hl=id",
      category: "mobile",
    },
    {
      id: 2,
      title: "Asbgo",
      description:
        "Mobile application built with React Native (expo). Intuitive UI/UX with transfer, payment, and real-time notification features.",
      image:
        "/projects/2.png",
      technologies: ["React Native", "Firebase", "Expo", "NoSQL"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.forgetzz.asbgo&hl=id",
      category: "mobile",
    },
    {
      id: 3,
      title: "Roket store",
      description:
        "Mobile application for buying and selling game chips, featuring secure transactions, user-friendly interface, and real-time order processing.",

      image:
        "/projects/3.png",
      technologies: ["Node.js", "React-native(expo)", "firebase", "NoSql"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.zerogic.RoketStore&hl=id",
      category: "mobile",
    },
    {
      id: 4,
      title: "ASB family web (Multilevel marketing)",
      description:
        "MLM platform featuring user registration, referral tracking, member dashboard, and network management system.",

      image:
        "/projects/5.png",
      technologies: ["next.js", "firebase", "node.js", "express.js", "NoSql"],
      githubUrl: "#",
      liveUrl: "https://asbfamilyy.vercel.app/",
      category: "web",
    },
    {
      id: 5,
      title: "Big Dipper Machinery Makassar",
      description:
        "Company profile website for heavy machinery business, showcasing products, services, and contact information.",

      image:
        "/projects/11.png",
      technologies: ["Next.js", "NoSql", "firestore"],
      githubUrl: "#",
      liveUrl: "https://loadermakassar.id",
      category: "web",
    },
    {
      id: 6,
      title: "Nekoswap (Decentralized Finance Platform)",
      description:
        "DeFi application that enables secure, transparent, and automated transactions using smart contracts.",
      image: "LL.png",
      technologies: ["React", "Next.js", "Solidity", "TypeScript"],
      githubUrl: "#",
      liveUrl: "https://nekoswap.org",
      category: "web",
    },
    {
      id: 7,
      title: "Staybarbershop",
      description:
        "Barbershop website showcasing services, haircut styles, pricing, and online contact information.",

      image: "/projects/12.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://staybarber.vercel.app",
      category: "web",
    },
    {
      id: 8,
      title: "Aspct (Marketplace)",
      description:
        "Marketplace platform for buying and selling products with modern interface and user-friendly experience.",

      image: "/projects/9.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://aspct.xyz",
      category: "web",
    },
    {
      id: 9,
      title: "Ataya Agung Pratama",
      description:
        "Company website for air conditioning service business, showcasing services, company profile, and contact information.",
      image: "/projects/7.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://www.aapserviceac.com/",
      category: "web",
    },
    {
      id: 10,
      title: "Zerogic Token",
      description:
        "Cryptocurrency token website providing information about the token, utilities, and ecosystem.",

      image: "/projects/15.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://zerogic.github.io",
      category: "web",
    },
    {
      id: 11,
      title: "Klinik Medica",
      description:
        "Clinic website providing information about medical services, doctors, and patient contact details.",

      image: "/projects/14.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://klinikmedica.github.io",
      category: "web",
    },
    {
      id: 12,
      title: "Barbershop POS Web Application",
      description:
        "Point of sale (POS) web application for barbershop with transaction management, services list, and sales reports.",
      image: "/projects/6.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://barber-apk.vercel.app",
      category: "web",
    },
    {
      id: 13,
      title: "Letter Generator Web Application",
      description:
        "Web application for generating formal and custom letters automatically.",
      image: "/projects/13.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "/",
      category: "Custom",
    },
    {
      id: 14,
      title: "APK Store Web Application",
      description:
        "Web-based application for browsing and downloading Android applications.",
      image: "/projects/8.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://forgetzz.vercel.app/",
      category: "Custom",
    },
    {
      id: 15,
      title: "Used Motorcycle Marketplace Website",
      description:
        "Website for buying and selling used motorcycles with product listings and contact features.",
      image: "/projects/10.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://forgetzz.vercel.app/",
      category: "web",
    },
    {
      id: 16,
      title: "Smart Contract Development",
      description:
        "Smart contract development service for blockchain applications including tokens, staking, and decentralized systems.",
      image: "/projects/16.png",
      technologies: ["Solidity", "EVM", "Blockchain", "Hardhat", "Web3.js"],
      githubUrl: "#",
      liveUrl: "https://polygonscan.com/token/0x4a7db095d7d56de8af219a5ae9c0b3be11f240f5#code",
      category: "Custom",
    },
  ];




  const services: Service[] = [
    {
      title: "Company Profile Website",
      description: "Professional website for business & company profile",
      price: "$150",
      features: [
        "Landing Page",
        "Mobile Responsive",
        "Free 1 Month Hosting",
        "Free Domain for 1 Year",
      ],
    },
    {
      title: "Web Application",
      description: "Web-based systems (dashboard, marketplace, etc)",
      price: "$300",
      features: [
        "Login & Registration",
        "Admin Dashboard",
        "Database Integration",
        "API Integration",
      ],
    },
    {
      title: "Mobile App (Android)",
      description: "Android application using React Native / Flutter",
      price: "$450",
      features: [
        "Modern UI/UX",
        "Firebase / Backend",
        "Push Notifications",
        "APK Build",
      ],
    },
    {
      title: "Custom Web & App",
      description: "Custom website and application development",
      price: "Starting from $300",
      features: [
        "Custom Features",
        "Modern UI/UX",
        "Firebase / Backend",
        "Push Notifications",
      ],
    },
  ];


  const skills: Skill[] = [
    { name: "JavaScript / TypeScript", level: 95, icon: Code },
    { name: "React / Next.js", level: 90, icon: Globe },
    { name: "Node.js / Express", level: 85, icon: Database },
    { name: "Solidity / Smart Contracts", level: 60, icon: Code },
    { name: "React Native", level: 85, icon: Smartphone },
    { name: "Database (SQL / NoSQL)", level: 88, icon: Database },
  ];

  const openProjectPreview = (project: Project): void => {
    setSelectedProject(project);
    setShowIframe(true);
  };

  const closeProjectPreview = (): void => {
    setShowIframe(false);
    setSelectedProject(null);
  };

  const [filter, setFilter] = useState<string>("all");
  const categories: Category[] = [
    { id: "all", name: "Semua" },
    { id: "web", name: "Web App" },
    { id: "mobile", name: "Mobile" },
    { id: "Custom", name: "Custom" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Drg Fatmawati",
      role: "Owner Klinik Medica",
      message:
        "Website dari ForgetStudio sangat profesional dan cepat. Penjualan saya meningkat drastis.",
      rating: 5,
    },
    {
      name: "Muh Rafly ",
      role: "UMKM Parfum",
      message:
        "Pelayanan ramah, revisi cepat, hasil sesuai keinginan. Sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "PT ASB",
      role: "Startup Founder",
      message:
        "Aplikasi mobile berjalan lancar dan stabil. Tim ForgetStudio sangat komunikatif.",
      rating: 4,
    },
  ];

  const filteredProjects: Project[] =
    filter === "all"
      ? projects
      : projects.filter((project: Project) => project.category === filter);
  const trustedCompanies = [

    {
      name: "PT AAP",
      logo: "/logos/aa.png",
      link: "https://www.aapserviceac.com/"
    },

    // {
    //   name: "Tonasa Company",
    //   logo: "/logos/tonasa.png",
    //   link: ""
    // },
    {
      name: "Tonasa Company",
      logo: "/logos/logoasb.png",
      link: "https://asbfamilyy.vercel.app/"
    },

    {
      name: "PT BDMI",
      logo: "/logos/bdmi.png",
      link: "https://loadermakassar.id/"
    },

    {
      name: "Klinik Medica",
      logo: "/logos/medica.png",
      link: "https://klinikmedica.github.io/"
    },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: string[] = ["home", "about", "skills", "services", "projects", "testimonials", "contact"]
        ;
      const scrollPosition: number = window.scrollY + 100;

      sections.forEach((section: string) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop: number = element.offsetTop;
          const height: number = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F2F0EA] font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/90 backdrop-blur-sm border-b border-[#26262A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="font-display text-lg tracking-tight text-[#F2F0EA]">
                ForgetzStudio
              </h1>

            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {(
                  ["home", "about", "skills", "services", "projects", "contact"] as const
                ).map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 font-mono text-[12px] uppercase tracking-wide capitalize transition-colors border-b-2 ${activeSection === item
                      ? "text-[#FF6A3D] border-[#FF6A3D]"
                      : "text-[#8A8880] border-transparent hover:text-[#F2F0EA]"
                      }`}
                  >
                    {item}
                  </button>
                ))}

                {/* STORE MENU */}
                <a
                  href="/store"
                  className="px-3 py-2 font-mono text-[12px] uppercase tracking-wide text-[#8A8880] hover:text-[#F2F0EA] transition-colors"
                >
                  Store
                </a>

                {/* LANGUAGE SWITCH */}
                <div className="flex items-center gap-2 ml-4">
                  <a
                    href="/id"
                    className="px-3 py-1 font-mono text-[11px] uppercase border border-[#26262A] text-[#F2F0EA] hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors"
                  >
                    ID
                  </a>

                  <a
                    href="/"
                    className="px-3 py-1 font-mono text-[11px] uppercase border border-[#26262A] text-[#F2F0EA] hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors"
                  >
                    EN
                  </a>
                </div>
              </div>
            </div>


            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#F2F0EA]"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#26262A]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0A0A0B]">
              {(
                ["home", "about", "skills", "projects", "contact"] as const
              ).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 font-mono text-[13px] uppercase tracking-wide text-[#8A8880] hover:text-[#F2F0EA] capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}

              {/* STORE MENU */}
              <a
                href="/store"
                className="block px-3 py-2 font-mono text-[13px] uppercase tracking-wide text-[#8A8880] hover:text-[#F2F0EA]"
              >
                Store
              </a>

              {/* LANGUAGE SWITCH */}
              <div className="flex gap-2 px-3 pt-4">
                <a
                  href="/id"
                  className="w-full text-center px-3 py-2 font-mono text-[12px] uppercase border border-[#26262A] text-[#F2F0EA]"
                >
                  ID
                </a>

                <a
                  href="/"
                  className="w-full text-center px-3 py-2 font-mono text-[12px] uppercase border border-[#26262A] text-[#F2F0EA]"
                >
                  EN
                </a>
              </div>
            </div>
          </div>
        )}


      </nav>

      {/* Hero Section - simplified: headline + quick-access link list */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >

   

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/95 via-[#0A0A0B]/90 to-[#0A0A0B]" />

        {/* CONTENT */}
        <div className="max-w-xl mx-auto px-4 relative z-10 w-full">

          <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#FF6A3D] mb-4 text-center">
            Forgetz Studio
          </p>

          <h1 className="font-display font-medium text-4xl md:text-5xl leading-[1.05] mb-3 text-[#F2F0EA] text-center">
            Website &amp; Mobile App
            <br />
            <span className="text-[#8A8880]">Development Studio</span>
          </h1>

          <p className="text-sm text-[#8A8880] mb-10 text-center font-mono">
           Choose where you want to go ↓
          </p>

          {/* QUICK LINK LIST */}
          <div ref={heroLinksRef} className="flex flex-col border border-[#26262A] divide-y divide-[#26262A]">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between px-5 py-4 bg-[#0F0F11] hover:bg-[#17171A] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent size={16} className="text-[#FF6A3D]" />
                    <span className="font-mono text-[11px] text-[#5C5B55] hidden sm:inline">
                      {link.path}
                    </span>
                    <span className="text-sm text-[#F2F0EA]">{link.label}</span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#5C5B55] group-hover:text-[#FF6A3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              );
            })}
          </div>

        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 md:py-32 bg-[#0A0A0B] border-b border-[#26262A]"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] text-center mb-3">
            About
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-center mb-16 text-[#F2F0EA]">
            Who's behind ForgetzStudio
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="p-1 border border-[#26262A]">
                <img
                  src="/log.png"
                  alt="ForgetzStudio Logo"
                  className="h-72 w-72 object-cover bg-[#111113]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="border-t border-[#26262A] md:border-t-0 md:border-l md:pl-10 pt-8 md:pt-0">

              <h3 className="font-display text-2xl mb-4 text-[#F2F0EA]">
                Passionate Full-Stack Developer
              </h3>

              <p className="text-[#8A8880] mb-4 leading-relaxed">
                We are a full-stack developer passionate about creating innovative and
                impactful technology solutions. With more than 5 years of experience,
                we have developed various web and mobile applications for multiple industries.
              </p>

              <p className="text-[#8A8880] mb-6 leading-relaxed">
                Our expertise includes frontend development with React & Next.js,
                backend development with Node.js, mobile development with React Native,
                and working with databases and cloud technologies.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3">
              

                <a
                  href="https://instagram.com/forgetzstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#26262A] text-[#F2F0EA] hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="mailto:forget.noxa90@gmail.com"
                  className="p-2 border border-[#26262A] text-[#F2F0EA] hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Trusted Section */}
      <section
        id="trusted"
        className="py-24 bg-[#111113] border-b border-[#26262A]"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] text-center mb-3">
            Trusted by
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-center mb-4 text-[#F2F0EA]">
            Companies we've worked with
          </h2>

          <p className="text-center text-[#8A8880] mb-14">
            Some companies and brands that have worked with Forgetz Studio
          </p>

          {/* LOGO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {trustedCompanies.map((company, index) => (
              <a
                key={index}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0A0A0B] border border-[#26262A] p-6 flex items-center justify-center hover:border-[#FF6A3D] transition-colors"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  className="h-16 object-contain grayscale opacity-60 invert group-hover:grayscale-0 group-hover:opacity-100 group-hover:invert-0 transition"
                />
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 md:py-32 bg-[#0A0A0B] border-b border-[#26262A]"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] mb-3">
            Skills
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl mb-16 text-[#F2F0EA]">
            Skills &amp; technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">

            {skills.map((skill: Skill, index: number) => {
              const IconComponent: LucideIcon = skill.icon;
              return (
                <div key={index}>

                  {/* HEADER */}
                  <div className="flex items-center mb-3">
                    <IconComponent
                      size={18}
                      className="text-[#FF6A3D] mr-2.5"
                    />
                    <h3 className="text-[15px] font-medium text-[#F2F0EA]">
                      {skill.name}
                    </h3>
                  </div>

                  {/* BAR */}
                  <div className="w-full bg-[#26262A] h-1.5 mb-2 overflow-hidden">
                    <div
                      className="bg-[#FF6A3D] h-1.5 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <span className="font-mono text-[12px] text-[#8A8880]">
                    {skill.level}%
                  </span>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      <section
        id="services"
        className="py-24 md:py-32 bg-[#111113] border-b border-[#26262A]"
      >
        <div className="max-w-7xl mx-auto px-4">

          <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] text-center mb-3">
            Services
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-center mb-14 text-[#F2F0EA]">
            Our website &amp; app development services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#26262A] border border-[#26262A]">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0A0A0B] p-6 flex flex-col"
              >
                <span className="font-mono text-[12px] text-[#FF6A3D] mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-display text-xl mb-2 text-[#F2F0EA]">
                  {service.title}
                </h3>

                <p className="text-[#8A8880] text-sm mb-4">
                  {service.description}
                </p>

                <p className="font-display text-2xl mb-4 text-[#F2F0EA]">
                  {service.price}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f, i) => (
                    <li key={i} className="text-[#8A8880] text-sm">
                      — {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6289602203266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-mono text-[12px] uppercase tracking-wide border border-[#F2F0EA] text-[#F2F0EA] py-2.5 hover:bg-[#FF6A3D] hover:text-[#0A0A0B] hover:border-[#FF6A3D] transition-colors"
                >
                  Order Now
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 md:py-32 bg-[#0A0A0B] border-b border-[#26262A]"
      >
        <div className="max-w-7xl mx-auto px-4">

          <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] text-center mb-3">
            Work
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-center mb-4 text-[#F2F0EA]">
            Portfolio projects
          </h2>

          <p className="text-center text-[#8A8880] mb-12 max-w-2xl mx-auto">
            Below are some of the projects I have built using modern technologies.
          </p>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`font-mono text-[12px] uppercase tracking-wide px-4 py-2 border transition-colors ${filter === category.id
                    ? "bg-[#FF6A3D] text-[#0A0A0B] border-[#FF6A3D]"
                    : "border-[#26262A] text-[#8A8880] hover:border-[#F2F0EA] hover:text-[#F2F0EA]"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26262A] border border-[#26262A]">

            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="bg-[#0A0A0B] overflow-hidden group"
              >

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">

                  <h3 className="font-display text-lg mb-2 text-[#F2F0EA]">
                    {project.title}
                  </h3>

                  <p className="text-[#8A8880] mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] uppercase tracking-wide border border-[#26262A] text-[#8A8880] px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 font-mono text-[12px] uppercase tracking-wide">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-[#FF6A3D] hover:underline"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      className="text-[#8A8880] hover:underline"
                    >
                      Code
                    </a>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 md:py-32 bg-[#111113] border-b border-[#26262A]"
      >
        <div className="max-w-6xl mx-auto px-4">

          <p className="font-mono text-[12px] uppercase tracking-wide text-[#8A8880] text-center mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-center mb-14 text-[#F2F0EA]">
            What our clients say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A0A0B] border border-[#26262A] p-6"
              >

                <div className="flex mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#FF6A3D]">★</span>
                  ))}
                </div>

                <p className="font-display italic text-[#F2F0EA] mb-5 leading-relaxed">
                  "{item.message}"
                </p>

                <h4 className="font-medium text-[#F2F0EA] text-sm">
                  {item.name}
                </h4>

                <p className="font-mono text-[11px] text-[#8A8880]">
                  {item.role}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>



      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 md:py-32 bg-[#0A0A0B] text-[#F2F0EA]"
      >
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="font-display font-medium text-3xl md:text-4xl text-center mb-6">
            Let's Work Together
          </h2>

          <p className="text-center text-[#8A8880] mb-12">
            Interested in working together? I am ready to help turn your digital ideas into reality.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="font-display text-xl mb-6">
                Get In Touch
              </h3>

              <p className="mb-2 font-mono text-sm text-[#8A8880]">📧 forget.noxa90@gmail.com</p>
           
            </div>

            <div className="space-y-3">

              <input
                placeholder="Nama Anda"
                className="w-full bg-transparent border border-[#26262A] px-4 py-3 text-sm focus:border-[#FF6A3D] outline-none transition-colors placeholder:text-[#5C5B55]"
              />

              <input
                placeholder="Email Anda"
                className="w-full bg-transparent border border-[#26262A] px-4 py-3 text-sm focus:border-[#FF6A3D] outline-none transition-colors placeholder:text-[#5C5B55]"
              />

              <textarea
                rows={4}
                placeholder="Pesan Anda"
                className="w-full bg-transparent border border-[#26262A] px-4 py-3 text-sm resize-none focus:border-[#FF6A3D] outline-none transition-colors placeholder:text-[#5C5B55]"
              ></textarea>

              <a
                href="https://wa.me/6289602203266"
                target="_blank"
                className="block text-center font-mono text-[12px] uppercase tracking-wide bg-[#FF6A3D] text-[#0A0A0B] py-3 hover:bg-[#F2F0EA] transition-colors"
              >
                Kirim Pesan
              </a>

            </div>
            <div ref={mapRef} className="md:col-span-2 w-full">

              <h3 className="font-display text-lg mb-4 text-center md:text-left">
                📍 Alamat Kantor Kami
              </h3>

              <div className="w-full h-[350px] border border-[#26262A] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.99550508894!2d119.5341459!3d-5.1044221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefb831617eb09%3A0xb1d71384ca5f90c7!2sforgetz%20studio!5e0!3m2!1sid!2sid!4v1770370754202!5m2!1sid!2sid"
                  className="w-full h-full border-0 grayscale invert contrast-[0.9]"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-[#0A0A0B] border-t border-[#26262A] py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-mono text-[11px] text-[#5C5B55]">
            © 2024 ForgetzStudio created with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLanding;