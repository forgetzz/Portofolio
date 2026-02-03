"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
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
  Eye,
  Monitor,
  LucideIcon,
} from "lucide-react";
import { link } from "fs";
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

const PortfolioLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showIframe, setShowIframe] = useState<boolean>(false);

  // Sample project data - replace with your actual projects
  const projects: Project[] = [

    {
      id: 1,
      title: "ASB Family",
      description:
        "Aplikasi web full-stack yang dibangun menggunakan React, Node.js, dan Firebase. Memiliki fitur lengkap termasuk payment gateway dan dashboard admin.",
      image: "/projects/1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Next.js"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.forgetzz.asbapps&hl=id",
      category: "mobile",
    },
    {
      id: 2,
      title: "ASBGO",
      description:
        "Aplikasi mobile yang dibangun menggunakan React Native (Expo) dengan UI/UX intuitif, fitur transfer, pembayaran, dan notifikasi real-time.",
      image: "/projects/2.png",
      technologies: ["React Native", "Firebase", "Expo", "NoSQL"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.forgetzz.asbgo&hl=id",
      category: "mobile",
    },
    {
      id: 3,
      title: "Roket Store",
      description:
        "Aplikasi mobile untuk jual beli chip game dengan transaksi aman, antarmuka ramah pengguna, dan pemrosesan pesanan secara real-time.",
      image: "/projects/3.png",
      technologies: ["Node.js", "React-native(expo)", "firebase", "NoSql"],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=com.zerogic.RoketStore&hl=id",
      category: "mobile",
    },
    {
      id: 4,
      title: "ASB Family Web (Multilevel Marketing)",
      description:
        "Platform MLM dengan fitur pendaftaran pengguna, sistem referral, dashboard member, dan manajemen jaringan.",
      image: "/projects/5.png",
      technologies: ["next.js", "firebase", "node.js", "express.js", "NoSql"],
      githubUrl: "#",
      liveUrl: "https://asbfamilyy.vercel.app/",
      category: "web",
    },
    {
      id: 5,
      title: "Big Dipper Machinery Makassar",
      description:
        "Website company profile untuk bisnis alat berat yang menampilkan produk, layanan, dan informasi kontak.",
      image: "/projects/11.png",
      technologies: ["Next.js", "NoSql", "firestore"],
      githubUrl: "#",
      liveUrl: "https://loadermakassar.id",
      category: "web",
    },
    {
      id: 6,
      title: "Nekoswap (Platform DeFi)",
      description:
        "Aplikasi DeFi yang memungkinkan transaksi aman, transparan, dan otomatis menggunakan smart contract.",
      image: "LL.png",
      technologies: ["React", "Next.js", "Solidity", "TypeScript"],
      githubUrl: "#",
      liveUrl: "https://nekoswap.org",
      category: "web",
    },
    {
      id: 7,
      title: "Stay Barbershop",
      description:
        "Website barbershop yang menampilkan layanan, model potongan rambut, harga, dan informasi kontak online.",
      image: "/projects/12.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://staybarber.vercel.app",
      category: "web",
    },
    {
      id: 8,
      title: "ASPCT (Marketplace)",
      description:
        "Platform marketplace untuk jual beli produk dengan tampilan modern dan pengalaman pengguna yang mudah.",
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
        "Website perusahaan jasa service AC yang menampilkan layanan, profil perusahaan, dan informasi kontak.",
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
        "Website token kripto yang menyediakan informasi tentang token, utilitas, dan ekosistem.",
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
        "Website klinik yang menyediakan informasi layanan medis, dokter, dan kontak pasien.",
      image: "/projects/14.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://klinikmedica.github.io",
      category: "web",
    },
    {
      id: 12,
      title: "Aplikasi POS Barbershop (Web)",
      description:
        "Aplikasi point of sale (POS) berbasis web untuk barbershop dengan manajemen transaksi, daftar layanan, dan laporan penjualan.",
      image: "/projects/6.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://barber-apk.vercel.app",
      category: "web",
    },
    {
      id: 13,
      title: "Aplikasi Web Generator Surat",
      description:
        "Aplikasi web untuk membuat surat formal dan kustom secara otomatis.",
      image: "/projects/13.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "/",
      category: "Custom",
    },
    {
      id: 14,
      title: "Aplikasi Web APK Store",
      description:
        "Aplikasi berbasis web untuk browsing dan mengunduh aplikasi Android.",
      image: "/projects/8.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://forgetzz.vercel.app/",
      category: "Custom",
    },
    {
      id: 15,
      title: "Website Marketplace Motor Bekas",
      description:
        "Website untuk jual beli motor bekas dengan fitur listing produk dan kontak.",
      image: "/projects/10.png",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCss"],
      githubUrl: "#",
      liveUrl: "https://forgetzz.vercel.app/",
      category: "web",
    },
    {
      id: 16,
      title: "Jasa Pengembangan Smart Contract",
      description:
        "Layanan pembuatan smart contract untuk aplikasi blockchain termasuk token, staking, dan sistem terdesentralisasi.",
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
    <div className="min-h-screen  text-white">
      {/* Iframe Modal */}
      {showIframe && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-6xl h-5/6 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <Monitor className="text-emerald-400" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {selectedProject.liveUrl}
                  </p>
                </div>
              </div>
              <button
                onClick={closeProjectPreview}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={selectedProject.liveUrl}
                className="w-full h-full rounded-lg border-2 border-gray-700"
                title={selectedProject.title}
                sandbox="allow-same-origin allow-scripts allow-forms allow-links"
                loading="lazy"
              />
            </div>
            <div className="p-4 border-t border-gray-700 flex justify-between items-center">
              <div className="flex space-x-2">
                {selectedProject.technologies.map(
                  (tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-emerald-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex space-x-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>Live Site</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="
fixed top-0 w-full z-50
bg-gradient-to-r from-slate-900/80 via-indigo-950/80 to-emerald-900/80
backdrop-blur-md
border-b border-white/10
shadow-lg shadow-black/30
">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white px-3 py-1 rounded-lg
drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]">
                ForgetzStudio
              </h1>

            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {(
                  ["home", "about", "skills", "services", "projects", "contact"] as const
                ).map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors ${activeSection === item
                      ? "bg-emerald-600 text-black"
                      : "text-white hover:bg-gray-700 hover:text-white"
                      }`}
                  >
                    {item}
                  </button>
                ))}

                {/* STORE MENU */}
                <a
                  href="/store"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-white transition-colors"
                >
                  Store
                </a>

                {/* LANGUAGE SWITCH */}
                <div className="flex items-center gap-2 ml-4">
                  <a
                    href="/id"
                    className="px-3 py-1 rounded-md text-sm font-medium border border-gray-400 text-white hover:bg-gray-700 hover:text-white"
                  >
                    ID
                  </a>

                  <a
                    href="/"
                    className="px-3 py-1 rounded-md text-sm font-medium border border-gray-400 text-white hover:bg-gray-700 hover:text-white"
                  >
                    EN
                  </a>
                </div>
              </div>
            </div>


            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {(
                ["home", "about", "skills", "projects", "contact"] as const
              ).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}

              {/* STORE MENU */}
              <a
                href="/store"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Store
              </a>

              {/* LANGUAGE SWITCH */}
              <div className="flex gap-2 px-3 pt-4">
                <a
                  href="/id"
                  className="w-full text-center px-3 py-2 rounded-md text-sm font-medium border border-gray-400 text-white hover:bg-gray-700"
                >
                  ID
                </a>

                <a
                  href="/"
                  className="w-full text-center px-3 py-2 rounded-md text-sm font-medium border border-gray-400 text-white hover:bg-gray-700"
                >
                  EN
                </a>
              </div>
            </div>
          </div>
        )}


      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/pos.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 
    bg-gradient-to-br from-black/70 via-slate-900/60 to-emerald-900/60">
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 
      text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
            <span className="text-emerald-400">
              Layanan Pengembangan
            </span>
            <br /> Website & Aplikasi Seluler

          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Kami menyediakan layanan pembuatan website, aplikasi web, dan aplikasi mobile profesional untuk membantu bisnis dan startup tumbuh lebih cepat dengan desain modern dan kinerja optimal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <button
              onClick={() => scrollToSection("services")}
              className="
        bg-gradient-to-r from-emerald-500 to-blue-600
        hover:from-emerald-600 hover:to-blue-700
        text-white px-8 py-3 rounded-lg font-semibold
        transition-all transform hover:scale-105
        shadow-lg shadow-emerald-500/30
        "
            >
              Lihat layanan
            </button>

            <a
              href="https://wa.me/6289602203266"
              target="_blank"
              rel="noopener noreferrer"
              className="
        border border-white/50 text-white
        hover:bg-white hover:text-black
        px-8 py-3 rounded-lg font-semibold
        transition-all
        "
            >
              kontak kami
            </a>

          </div>

        </div>

        {/* SCROLL ICON */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown size={32} className="text-white/70" />
        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-slate-100 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Tentang kami 
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="
          p-1 rounded-full 
          bg-gradient-to-r from-emerald-500 to-blue-600
        ">
                <img
                  src="/log.png"
                  alt="ForgetzStudio Logo"
                  className="
              rounded-full h-72 w-72 object-cover
              bg-white
            "
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="
        bg-white rounded-2xl p-8
        shadow-xl shadow-black/10
      ">

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
               Pengembang Full-Stack yang Bersemangat
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
               Kami adalah pengembang full-stack yang bersemangat menciptakan solusi teknologi inovatif dan berdampak. Dengan pengalaman lebih dari 5 tahun, kami telah mengembangkan berbagai aplikasi web dan mobile untuk berbagai industri.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Keahlian kami meliputi pengembangan frontend dengan React & Next.js, pengembangan backend dengan Node.js, pengembangan aplikasi mobile dengan React Native, serta bekerja dengan basis data dan teknologi cloud.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
                >
                  <Github size={22} />
                </a>

                <a
                  href="#"
                  className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="#"
                  className="p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  <Mail size={22} />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Trusted Section */}
      <section
        id="trusted"
        className="py-24 bg-gradient-to-b from-white to-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
             Dipercaya oleh Perusahaan
            </span>
          </h2>

          <p className="text-center text-gray-600 mb-14">
           Beberapa perusahaan dan merek yang telah bekerja sama dengan Forgetzstudio
          </p>

          {/* LOGO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {trustedCompanies.map((company, index) => (
              <a
                key={index}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
          group bg-white/80 backdrop-blur
          rounded-xl p-6
          flex items-center justify-center
          shadow-md shadow-black/10
          hover:shadow-emerald-500/30
          transition-all hover:-translate-y-1
          "
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  loading="lazy"
                  className="
            h-20 object-contain
            opacity-70
            group-hover:grayscale-0
            group-hover:opacity-100
            transition
            "
                />
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* Skills Section */}
      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-b from-slate-100 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Keterampilan & Teknologi
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {skills.map((skill: Skill, index: number) => {
              const IconComponent: LucideIcon = skill.icon;
              return (
                <div
                  key={index}
                  className="
            bg-white/80 backdrop-blur
            p-6 rounded-xl
            border border-white/40
            shadow-md shadow-black/10
            hover:shadow-emerald-500/30
            transition-all hover:-translate-y-1
            "
                >

                  {/* HEADER */}
                  <div className="flex items-center mb-4">
                    <IconComponent
                      size={24}
                      className="text-emerald-500 mr-3"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                  </div>

                  {/* BAR */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      className="
                bg-gradient-to-r from-emerald-500 to-blue-600
                h-3 rounded-full
                transition-all duration-700
                "
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <span className="text-sm text-gray-600">
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
        className="py-24 bg-gradient-to-b from-slate-100 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Layanan Pengembangan Website & Aplikasi Kami
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="
          bg-white/80 backdrop-blur
          p-6 rounded-2xl
          shadow-lg shadow-black/10
          hover:shadow-emerald-500/30
          transition-all hover:-translate-y-1
          "
              >

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <p className="text-2xl font-bold text-emerald-500 mb-4">
                  {service.price}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      ✔ {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6289602203266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            block text-center
            bg-gradient-to-r from-emerald-500 to-blue-600
            hover:from-emerald-600 hover:to-blue-700
            text-white py-2 rounded-lg font-semibold
            transition
            "
                >
                  Pesan sekarang
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-b from-white to-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
             Proyek Portofolio
            </span>
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
           Berikut adalah beberapa proyek yang telah saya buat menggunakan teknologi modern.
          </p>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`
          px-4 py-2 rounded-full transition
          ${filter === category.id
                    ? "bg-emerald-500 text-white"
                    : "bg-white shadow text-gray-700 hover:bg-emerald-50"
                  }
          `}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="
          bg-white/80 backdrop-blur
          rounded-2xl overflow-hidden
          shadow-lg shadow-black/10
          hover:shadow-emerald-500/30
          transition-all hover:-translate-y-1
          group
          "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-emerald-500 font-semibold"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      className="text-gray-500"
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


      {/* Services Section */}
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-b from-slate-100 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-14">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
             Apa Kata Klien Kami
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
          bg-white/80 backdrop-blur
          p-6 rounded-xl
          shadow-lg shadow-black/10
          hover:shadow-emerald-500/30
          transition-all hover:-translate-y-1
          "
              >

                <div className="flex mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                <p className="text-gray-700 italic mb-4">
                  "{item.message}"
                </p>

                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
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
        className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-emerald-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-6">
            Mari Bekerja Sama
          </h2>

          <p className="text-center text-gray-300 mb-12">
           Tertarik untuk bekerja sama? Saya siap membantu mewujudkan ide-ide digital Anda.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-2xl font-semibold mb-6">
              Hubungi Kami
              </h3>

              <p className="mb-2">📧 forget.noxa90@gmail.com</p>
              <p>💻 github.com/forgetzz</p>
            </div>

            <div className="space-y-4">

              <input
                placeholder="Nama Anda"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3"
              />

              <input
                placeholder="Email Anda"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3"
              />

              <textarea
                rows={4}
                placeholder="Pesan Anda"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 resize-none"
              ></textarea>

              <a
                href="https://wa.me/6289602203266"
                target="_blank"
                className="
          block text-center
          bg-gradient-to-r from-emerald-500 to-blue-600
          py-3 rounded-lg font-semibold
          hover:from-emerald-600 hover:to-blue-700
          transition
          "
              >
                Kirim Pesan
              </a>

            </div>

          </div>

        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 ForgetzStudio Dibuat dengan ❤️ menggunakan React & Tailwind
            CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLanding;
