
"use client";
import { useState, useEffect, useRef } from 'react';
import { 
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, 
  FiExternalLink, FiCode, FiInstagram, FiDownload, FiStar,
  FiAward, FiHeart, FiZap, FiTrendingUp, FiFigma, FiLayers,
  FiArrowRight, FiMenu, FiX, FiChevronDown, FiCheck, FiCpu
} from 'react-icons/fi';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAward as FaSolidAward, FaGraduationCap 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, 
  SiFastapi, SiExpress, SiLeetcode, SiTailwindcss, SiJavascript
} from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const portfolioData = {
  name: "Lavinia Nataniela Novyandi",
  nickname: "LN",
  role: "Full Stack Developer & Database Designer",
  email: "lavinianataniela05@gmail.com",
  phone: "+62 877-8777-3918",
  location: "Jakarta, Indonesia",
  bio: "Full Stack Developer specializing in scalable web applications and robust database systems. Experienced in building end-to-end solutions with efficient backend architectures and modern data technologies.",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Python", "Node.js", "PostgreSQL", "Firebase", "Java OOP", "Tailwind CSS","Figma","C language", "mySql","Docker"
  ],
  projects: [
    {
      id: 1,
      title: "EcoManage",
      description: "An interactive web-based platform for households and communities to manage, track, and recycle waste efficiently using real-time data and reward systems.",
      tech: ["Next.js", "TypeScript", "Firebase", "Figma"],
      image: "/ecomanage.png",
      github: "https://github.com/lavinianataniela05/pengelolaansampah",
      website: "https://pengelolaansampah.vercel.app/",
      features: [
        "Waste category tracking and reporting",
        "User-friendly dashboard with CRUD operations",
        "Reward point system for recycling participation",
        "Real-time waste data visualization",
        "Community-level waste contribution insights"
      ]
    },
    {
      id: 2,
      title: "Brew And Bliss Cafe Website",
      description: "A web-based application designed to streamline café operations, from reservations to orders and payments, with an elegant interface and efficient workflow management.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
      image: "/brewandbliss.png",
      github: "https://github.com/lavinianataniela05/cafemanagementsystem",
      website: "https://cafemanagementsystem-nu.vercel.app",
      features: [
        "User authentication with role-based access",
        "Table reservation system with real-time availability",
        "Order management for dine-in/take-away",
        "Dynamic menu display with image support",
        "Admin dashboard for monitoring operations"
      ]
    },
    {
      id: 3,
      title: "Concurrent Flights Prediction",
      description: "A machine learning project that predicts the number of flights occurring at the same time using over 6 million historical flight records.",
      tech: ["Python", "Streamlit", "Jupyter Notebook", "Machine Learning"],
      image: "/flightpredictor.png",
      github: "https://github.com/lavinianataniela05/dataAnalytics",
      website: "https://github.com/lavinianataniela05/dataAnalytics",
      features: [
        "Processes large-scale flight data",
        "Uses RandomForest and XGBoost models",
        "Optimized with RandomizedSearchCV",
        "Supports air traffic planning"
      ]
    }
  ],
  experience: [
    {
      company: "Bina Nusantara University",
      role: "Part-time Assistant Laboratory",
      period: "2024 - 2025",
      description: "Worked as a part-time assistant lecturer, instructing over 100 students in Introduction to Programming with Java and Algorithms & Programming.",
      achievements: [
        "Instructed over 100 students in Java and OOP fundamentals",
        "Developed and delivered engaging lab materials",
        "Supported students in understanding algorithms"
      ]
    },
    {
      company: "Teaching Instructor",
      role: "HIMTI Summer Class",
      period: "2024",
      description: "Developed teaching materials and presentations for Algorithm and Programming subjects covering programming logic and implementation.",
      achievements: [
        "Created comprehensive teaching materials",
        "Presented programming concepts to students",
        "Received positive feedback from participants"
      ]
    },
    {
      company: "Teaching Instructor",
      role: "HIMTI Computer Class",
      period: "2024",
      description: "Developed teaching materials for Algorithm and Programming subjects covering basic algorithm concepts and programming logic.",
      achievements: [
        "Created teaching materials for computer class",
        "Presented algorithm concepts to students",
        "Received positive feedback"
      ]
    },
    {
      company: "HIMTI Activist",
      role: "HIMTI ",
      period: "2024",
      description: "Developed teaching materials and presentations for Algorithm and Programming subjects, covering basic algorithm concepts, programming logic, and code implementation using programming languages.",
      achievements: [
        "Created comprehensive teaching materials for computer class",
        "Presented algorithm and programming concepts to students",
        "Received positive feedback from participants"
      ]
    }
  ],
  achievements: [
    {
      title: "Widia Partial Scholarship",
      description: "Awardee of Widia Partial Scholarship in Binus University",
      year: "2023",
      icon: <FaGraduationCap className="text-red-400" />,
      category: "Scholarship"
    },
    {
      title: "Bronze Award - PhIMO Heat Round",
      description: "Philippine International Mathematical Olympiad (PhIMO) Heat Round 2021",
      year: "2021",
      icon: <FiStar className="text-amber-400" />,
      category: "Mathematics"
    },
    {
      title: "Gold Award - PhIMO Heat Round",
      description: "Philippine International Mathematical Olympiad (PhIMO) Heat Round 2022",
      year: "2022",
      icon: <FiStar className="text-amber-400" />,
      category: "Mathematics"
    },
    {
      title: "1st Prize Award - Greater Bay Area Math Olympiad",
      description: "Guangdong-Hong Kong-Macao Greater Bay Area Mathematical Olympiad Heat Round 2021-2022",
      year: "2022",
      icon: <FiAward className="text-emerald-400" />,
      category: "Mathematics"
    },
    {
      title: "2nd Prize Award - Greater Bay Area Math Olympiad",
      description: "Guangdong-Hong Kong-Macao Greater Bay Area Mathematical Olympiad Heat Round 2023",
      year: "2023",
      icon: <FiAward className="text-emerald-400" />,
      category: "Mathematics"
    },
    // {
    //   title: "Hackathon 7.0 Technoscape Participant",
    //   description: "Participated in Hackathon 7.0 Technoscape",
    //   year: "2024",
    //   icon: <FiZap className="text-blue-400" />,
    //   category: "Technology"
    // },
    // {
    //   title: "Web3 Competition ICP Builder Day Participant",
    //   description: "Participated in ICP Builder Day Web3 Competition",
    //   year: "2024",
    //   icon: <FiCpu className="text-violet-400" />,
    //   category: "Technology"
    // }
  ],
  social: {
    github: "https://github.com/lavinianataniela05",
    linkedin: "https://www.linkedin.com/in/lavinianatanielanovyandi/",
    instagram: "https://www.instagram.com/lavinia_nataniela/",
  }
};

const techIcons = {
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'React': <FaReact className="text-blue-500" />,
  'Next.js': <SiNextdotjs className="text-slate-900 dark:text-white" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Python': <FaPython className="text-blue-800" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Java': <FaJava className="text-red-600" />,
  'FastAPI': <SiFastapi className="text-green-500" />,
  'Express': <SiExpress className="text-gray-800 dark:text-gray-200" />,
  'Firebase': <IoLogoFirebase className="text-yellow-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'UI/UX Design': <FiZap className="text-violet-500" />,
  'Figma': <FiFigma className="text-violet-600" />
};

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'LaviniaNataniela_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// const FloatingElements = () => {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       {/* Floating circles */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
//         animate={{
//           x: [0, 20, 0, -20, 0],
//           y: [0, -30, 0, 30, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />
//       <motion.div
//         className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl"
//         animate={{
//           x: [0, 30, 0, -30, 0],
//           y: [0, -20, 0, 20, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//           delay: 5
//         }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl"
//         animate={{
//           x: [0, -20, 0, 20, 0],
//           y: [0, 30, 0, -30, 0],
//         }}
//         transition={{
//           duration: 30,
//           repeat: Infinity,
//           ease: "linear",
//           delay: 10
//         }}
//       />
//     </div>
//   );
// };
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main floating circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-xl"
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -40, 0, 40, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl"
        animate={{
          x: [0, -30, 0, 30, 0],
          y: [0, 40, 0, -40, 0],
          rotate: [360, 180, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
      />
      
      {/* Additional small floating elements */}
      <motion.div
        className="absolute top-1/5 right-1/5 w-12 h-12 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-lg"
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-lg"
        animate={{
          x: [0, -25, 0, 25, 0],
          y: [0, 25, 0, -25, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      {/* Tiny floating stars */}
      <motion.div
        className="absolute top-1/6 left-1/6 w-6 h-6 bg-white/50 rounded-full blur-sm"
        animate={{
          y: [0, -15, 0, 15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/6 right-1/6 w-4 h-4 bg-white/60 rounded-full blur-sm"
        animate={{
          y: [0, 20, 0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

const AnimatedUnderline = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </span>
  );
};

const ProfessionalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeAchievementCategory, setActiveAchievementCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'achievements'];
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const achievementCategories = ['All', ...Array.from(new Set(portfolioData.achievements.map(a => a.category)))];
  const filteredAchievements = activeAchievementCategory === 'All' 
    ? portfolioData.achievements 
    : portfolioData.achievements.filter(a => a.category === activeAchievementCategory);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden">
      {/* Custom cursor effect */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: 1
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
      
      <FloatingElements />

      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{portfolioData.nickname}</span>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg">Lavinia Nataniela Novyandi</div>
                <div className="text-sm text-slate-600">Full Stack Developer & Database Designer</div>
              </div>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-indigo-600' 
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                      layoutId="navUnderline"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg:hidden bg-white border-t border-slate-200"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div 
              className="animate-fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 text-sm font-medium text-indigo-700 mb-8"
                animate={{ 
                  y: [0, -5, 0],
                  boxShadow: ["0 4px 14px rgba(79, 70, 229, 0.1)", "0 6px 20px rgba(79, 70, 229, 0.15)", "0 4px 14px rgba(79, 70, 229, 0.1)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                Available for new opportunities
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <motion.span 
                  className="block text-slate-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hi, I'm {portfolioData.name}
                </motion.span>
              </h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl font-medium text-slate-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {portfolioData.role}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-slate-600 mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {portfolioData.bio}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-lg font-medium shadow hover:shadow-md transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiCode className="mr-2" />
                  View Projects
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right content - Illustration or image
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-bold text-indigo-200/50">LN</div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <AnimatedUnderline>About Me</AnimatedUnderline>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              {portfolioData.bio} I'm passionate about creating efficient, scalable solutions with clean code and intuitive user experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className="text-indigo-600 mt-1 mr-4" size={20} />
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <a href={`mailto:${portfolioData.email}`} className="text-slate-800 hover:text-indigo-600 transition-colors">
                      {portfolioData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-indigo-600 mt-1 mr-4" size={20} />
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="text-slate-800 hover:text-indigo-600 transition-colors">
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-indigo-600 mt-1 mr-4" size={20} />
                  <div>
                    <div className="text-sm text-slate-500">Location</div>
                    <div className="text-slate-800">{portfolioData.location}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-500 mb-4">CONNECT WITH ME</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FiGithub size={20} className="text-slate-800" />
                  </motion.a>
                  <motion.a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FiLinkedin size={20} className="text-blue-700" />
                  </motion.a>
                  <motion.a
                    href={portfolioData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <FiInstagram size={20} className="text-pink-600" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {portfolioData.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-200"
                    whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    {techIcons[skill as keyof typeof techIcons] || <FiCode className="text-indigo-600 mr-2" />}
                    <span className="text-slate-800">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <AnimatedUnderline>Featured Projects</AnimatedUnderline>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-100 text-slate-800 rounded-lg text-sm font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiGithub className="mr-2" /> Code
                    </motion.a>
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <AnimatedUnderline>Professional Experience</AnimatedUnderline>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              My work experience and contributions to various organizations.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.company}</h3>
                    <p className="text-indigo-600 font-medium">{exp.role}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{exp.description}</p>
                <div className="space-y-3">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex">
                      <FiCheck className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{ach}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
       <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Experience</span>
            </h2>
            
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 lg:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 transform -translate-x-1/2 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {portfolioData.experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white" />
                  
                  {/* Experience card */}
                  <div className={`lg:w-[45%] bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl p-8 border border-slate-200/50 shadow-sm hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <FaSolidAward className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <div className="text-indigo-600 font-medium">{exp.company}</div>
                        <div className="text-sm text-slate-500">{exp.period}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements && exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <FiCheck className="text-indigo-600" size={12} />
                          </div>
                          <span className="text-slate-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <AnimatedUnderline>Achievements & Awards</AnimatedUnderline>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl">
              Recognitions and accomplishments throughout my academic and professional journey.
            </p>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {achievementCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveAchievementCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeAchievementCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg mr-4">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{achievement.title}</h3>
                    <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{portfolioData.nickname}</span>
                </div>
                <div>
                  <div className="font-bold text-white">{portfolioData.name}</div>
                  <div className="text-sm text-slate-400">{portfolioData.role}</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href={portfolioData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiInstagram size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${portfolioData.email}`}
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalPortfolio;
                    