
"use client";
import { useState, useEffect } from 'react';
import { 
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, 
  FiExternalLink, FiCode, FiInstagram, FiDownload, FiStar,
  FiAward, FiZap, FiMenu, FiX, FiChevronDown, FiCheck, FiCpu,
  FiChevronLeft, FiChevronRight, FiUser, FiBriefcase,
  FiCalendar, FiSearch, FiArrowRight, FiHeart,
  FiUsers,
  FiTrendingUp,
  FiTarget,
  FiMonitor,
  FiServer,
  FiTool,
  FiMessageCircle
} from 'react-icons/fi';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAward as FaSolidAward, FaGraduationCap 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, 
  SiFastapi, SiExpress, SiTailwindcss, SiJavascript
} from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

// Portfolio Data (sama seperti sebelumnya)
const portfolioData = {
  name: "Lavinia Nataniela Novyandi",
  nickname: "LN",
  role: "Full Stack Developer & Database Designer",
  email: "lavinianataniela05@gmail.com",
  phone: "+62 877-8777-3918",
  location: "Jakarta, Indonesia",
  bio: "Full Stack Developer specializing in scalable web applications and robust database systems. Experienced in building end-to-end solutions with efficient backend architectures and modern data technologies.",
  startYear: "2021", // Add this line (set your actual start year)
  roles: [
    "Full Stack Developer",
    "Software Engineer", 
    "Front End Developer",
    "Database Designer",
    "Web Developer"
  ],
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Python", "Node.js", "PostgreSQL", "Firebase", "Java OOP", 
    "Tailwind CSS", "Figma", "C language", "MySQL", "Docker"
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
  ],
  social: {
    github: "https://github.com/lavinianataniela05",
    linkedin: "https://www.linkedin.com/in/lavinianatanielanovyandi/",
    instagram: "https://www.instagram.com/lavinia_nataniela/",
  }
};

const techIcons = {
  'JavaScript': <SiJavascript className="text-yellow-400 w-4 h-4" />,
  'TypeScript': <SiTypescript className="text-blue-600 w-4 h-4" />,
  'React': <FaReact className="text-blue-500 w-4 h-4" />,
  'Next.js': <SiNextdotjs className="text-slate-900 w-4 h-4" />,
  'Node.js': <FaNodeJs className="text-green-600 w-4 h-4" />,
  'Python': <FaPython className="text-blue-800 w-4 h-4" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700 w-4 h-4" />,
  'MongoDB': <SiMongodb className="text-green-500 w-4 h-4" />,
  'Java OOP': <FaJava className="text-red-600 w-4 h-4" />,
  'Firebase': <IoLogoFirebase className="text-yellow-500 w-4 h-4" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400 w-4 h-4" />,
  'Figma': <FiZap className="text-violet-600 w-4 h-4" />,
  'C language': <FiCode className="text-blue-500 w-4 h-4" />,
  'MySQL': <SiPostgresql className="text-blue-500 w-4 h-4" />,
  'Docker': <FiCode className="text-blue-400 w-4 h-4" />
};

// Enhanced Custom Cursor Component
// const CustomCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");
//   const [isPointer, setIsPointer] = useState(false);

//   useEffect(() => {
//     const mouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Check if hovering over clickable elements
//       const target = e.target as HTMLElement;
//       if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
//         setIsPointer(true);
//         setCursorVariant("pointer");
//       } else {
//         setIsPointer(false);
//         setCursorVariant("default");
//       }
//     };

//     window.addEventListener('mousemove', mouseMove);
//     return () => window.removeEventListener('mousemove', mouseMove);
//   }, []);

//   const variants = {
//     default: {
//       x: cursorPosition.x - 8,
//       y: cursorPosition.y - 8,
//       scale: 1,
//     },
//     pointer: {
//       x: cursorPosition.x - 16,
//       y: cursorPosition.y - 16,
//       scale: 1.5,
//     }
//   };

//   return (
//     <>
//       {/* Main Cursor */}
//       <motion.div
//         className="hidden sm:block fixed w-4 h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-300"
//         variants={variants}
//         animate={cursorVariant}
//         transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
//       />
      
//       {/* Cursor Trail */}
//       <motion.div
//         className="hidden sm:block fixed w-8 h-8 bg-indigo-400/30 rounded-full pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: cursorPosition.x - 16,
//           y: cursorPosition.y - 16,
//         }}
//         transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
//       />
      
//       {/* Cursor Ring for pointer state */}
//       <motion.div
//         className="hidden sm:block fixed w-12 h-12 border-2 border-indigo-400/50 rounded-full pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: cursorPosition.x - 24,
//           y: cursorPosition.y - 24,
//           scale: isPointer ? 1 : 0,
//           opacity: isPointer ? 1 : 0,
//         }}
//         transition={{ type: "spring", damping: 20, stiffness: 300 }}
//       />
//     </>
//   );
// };
const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY }]);
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' || 
                         target.tagName === 'BUTTON' || 
                         !!target.closest('a') || 
                         !!target.closest('button') ||
                         target.style.cursor === 'pointer';
      
      setIsPointer(isClickable);
      setCursorVariant(isClickable ? "pointer" : "default");
    };

    const mouseLeave = () => setIsHidden(true);
    const mouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 12,
      y: cursorPosition.y - 12,
      scale: 1,
      backgroundColor: "#8b5cf6",
    },
    pointer: {
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      scale: 1.8,
      backgroundColor: "#ec4899",
    }
  };

  const ringVariants = {
    default: { scale: 1, opacity: 0.6 },
    pointer: { scale: 1.5, opacity: 0.8 }
  };

  return (
    <>
      {/* Main Cursor with gradient rotation */}
      <motion.div
        className="hidden sm:block fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)',
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ 
          type: "spring", 
          damping: 15, 
          stiffness: 400, 
          mass: 0.5 
        }}
      />
      
      {/* Pulsing dot in center */}
      <motion.div
        className="hidden sm:block fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 4,
          y: cursorPosition.y - 4,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Ring */}
      <motion.div
        className="hidden sm:block fixed w-14 h-14 border-2 border-purple-400 rounded-full pointer-events-none z-50"
        variants={ringVariants}
        animate={cursorVariant}
        style={{
          x: cursorPosition.x - 28,
          y: cursorPosition.y - 28,
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 300 
        }}
      />

      {/* Magnetic dot trail */}
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="hidden sm:block fixed w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-40 opacity-30"
          animate={{
            x: pos.x - 6,
            y: pos.y - 6,
            scale: 1 - (index * 0.2),
            opacity: 0.3 - (index * 0.06),
          }}
          transition={{
            duration: 0.1,
          }}
        />
      ))}

      {/* Hover explosion effect */}
      <motion.div
        className="hidden sm:block fixed w-8 h-8 border-2 border-pink-400 rounded-full pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
          scale: isPointer ? [1, 2, 0] : 0,
          opacity: isPointer ? [1, 0.5, 0] : 0,
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="hidden sm:block fixed w-24 h-24 bg-purple-500 rounded-full pointer-events-none z-30 blur-xl opacity-20"
        animate={{
          x: cursorPosition.x - 48,
          y: cursorPosition.y - 48,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200 
        }}
      />

      {/* Hide when leaving window */}
      <motion.div
        className="hidden sm:block fixed pointer-events-none z-50"
        animate={{
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-6 h-6 rounded-full mix-blend-difference"
          style={{
            background: 'conic-gradient(from 0deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)',
          }}
          variants={variants}
          animate={cursorVariant}
          transition={{ 
            type: "spring", 
            damping: 15, 
            stiffness: 400, 
            mass: 0.5 
          }}
        />
      </motion.div>
    </>
  );
};

// Floating Background Elements
const FloatingElements = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-indigo-200/20 to-purple-300/20 rounded-full blur-sm md:blur-xl"
      animate={{
        x: [0, 20, 0, -20, 0],
        y: [0, -20, 0, 20, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/3 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-sm md:blur-xl"
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -15, 0, 15, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />
    <motion.div
      className="hidden md:block absolute bottom-1/4 left-1/3 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-sm md:blur-xl"
      animate={{
        x: [0, -15, 0, 15, 0],
        y: [0, 20, 0, -20, 0],
        rotate: [360, 180, 0],
        scale: [1, 1.15, 1]
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 7 }}
    />
  </div>
);

// Navigation Component (sama seperti sebelumnya)
const Navigation = ({ 
  activeSection, 
  scrollToSection, 
  isMenuOpen, 
  setIsMenuOpen 
}: { 
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-lg">{portfolioData.nickname}</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-900 text-base sm:text-lg">{portfolioData.name}</div>
              <div className="text-xs sm:text-sm text-slate-600">{portfolioData.role}</div>
            </div>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium transition-all duration-300 ${
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
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
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
  );
};

// Hero Section (sama seperti sebelumnya)
const HeroSection = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = portfolioData.roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(80 + Math.random() * 40);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(30 + Math.random() * 30);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.roles.length);
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'LaviniaNataniela_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    { href: portfolioData.social.github, icon: FiGithub, color: 'from-slate-700 to-slate-900' },
    { href: portfolioData.social.linkedin, icon: FiLinkedin, color: 'from-blue-500 to-blue-700' },
    { href: portfolioData.social.instagram, icon: FiInstagram, color: 'from-pink-500 to-purple-600' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden pt-16 sm:pt-0">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-60"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-400/40 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{ 
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Availability Badge */}
            <motion.div 
              className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 text-xs sm:text-sm font-medium text-indigo-700 mb-6 sm:mb-8"
              animate={{ 
                y: [0, -3, 0],
                boxShadow: [
                  "0 4px 14px rgba(79, 70, 229, 0.1)", 
                  "0 6px 20px rgba(79, 70, 229, 0.15)", 
                  "0 4px 14px rgba(79, 70, 229, 0.1)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              Available for new opportunities
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="block text-slate-900"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typewriter
                  words={["Hi, ", "Hello, ", "你好, ", "Hola,", "Bonjour, ", "Ciao, ", "こんにちは ", "สวัสดีค่ะ,"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1100}
                />
              </motion.span>
              <motion.span 
                className="block text-slate-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm Lavinia Nataniela
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Typing Animation */}
           <div className="h-12 sm:h-16 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* Multiple Bubbles - Static */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                Full Stack Developer
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                Software Engineer
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
            Database Designer  </div>
            </div>


            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <FiDownload className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl font-medium shadow hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FiCode className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-indigo-600 transition-colors duration-300" />
                <span>View Projects</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 rounded-lg sm:rounded-xl`}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon 
                    size={18} 
                    className="text-slate-700 group-hover:text-white relative z-10 transition-colors duration-300" 
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Visual */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-2xl md:blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main container */}
              <motion.div 
                className="w-64 h-64 xl:w-80 xl:h-80 bg-gradient-to-br from-white/80 to-indigo-50/80 rounded-full flex items-center justify-center shadow-2xl border border-white/40 backdrop-blur-sm relative overflow-hidden"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotate: 0
                }}
              >
                {/* Profile Image */}
                <motion.div 
                  className="text-center relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div 
                    className="w-48 h-48 xl:w-60 xl:h-60 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ y: 0 }}
                  >
                    <img 
                      src="/foto_profesional.jpeg"
                      alt="Lavinia Nataniela - Professional Photo"
                      className="w-full h-full object-cover"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent" />
                  </motion.div>
                </motion.div>

                {/* Floating elements */}
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full shadow-lg border border-white/50 ${
                      index === 0 ? 'top-4 left-4' :
                      index === 1 ? 'top-4 right-4' :
                      'bottom-4 left-1/2 transform -translate-x-1/2'
                    }`}
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 1.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
      >
        <motion.div 
          className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 1)",
            y: 0
          }}
        >
          <FiChevronDown size={20} className="text-indigo-600 group-hover:text-purple-600 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};


const AboutSection = () => (
  <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/20 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-16 text-center"
      >
       
        
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
        />
      </motion.div>
      
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {/* Quick Intro */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Hello! I'm <span className="font-semibold text-slate-800">Lavinia</span>, an undergraduate Computer Science student at Binus University, Indonesia, where I channel my passion for problem-solving into building digital solutions. My journey has taken me across the full stack, from crafting engaging and intuitive user interfaces to engineering robust back-end systems.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                I thrive on turning complex ideas into functional, tangible reality, and I'm deeply committed to creating meaningful work that delivers real value through clean design, seamless interactions, and scalable architecture.
              </p>
            
            </div>
          </motion.div>

      
        </motion.div>

        {/* Right Column - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
      

          {/* Skills Grid */}
          <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-800">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {portfolioData.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex items-center p-2 sm:p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm sm:text-base"
                    whileHover={{ y: -3, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    {techIcons[skill as keyof typeof techIcons] || <FiCode className="text-indigo-600 mr-2" />}
                    <span className="text-slate-800 truncate">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

        
        </motion.div>
      </div>
    </div>
  </section>
);
// Projects Section (sama seperti sebelumnya)
const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        {/* Enhanced Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {portfolioData.projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 overflow-hidden group text-sm sm:text-base ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-lg backdrop-blur-sm'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {project.title}
                </span>
                {activeProject === index && (
                  <motion.div
                    layoutId="activeProject"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Project Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-5 sm:p-8 relative">
                  {/* Project Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <FiStar className="w-3 h-3 sm:w-4 sm:h-4" />
                    Featured Project
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                    {portfolioData.projects[activeProject].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    {portfolioData.projects[activeProject].description}
                  </p>

                  {/* Enhanced Features List */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-bold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <FiZap className="text-yellow-500" />
                      Key Features
                    </h4>
                    <div className="grid gap-2 sm:gap-3">
                      {portfolioData.projects[activeProject].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-300 group"
                        >
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FiCheck className="text-white text-xs" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 group-hover:text-slate-900">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-bold text-slate-800 mb-3 sm:mb-4 text-sm sm:text-base">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {portfolioData.projects[activeProject].tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-slate-100 text-slate-700 rounded-lg text-xs sm:text-sm font-medium border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={portfolioData.projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-slate-900 text-white rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 sm:gap-3 hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={portfolioData.projects[activeProject].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-medium flex items-center justify-center gap-2 sm:gap-3 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Project Visual */}
                <div 
                  className="relative h-64 sm:h-80 lg:h-auto bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.img 
                    src={portfolioData.projects[activeProject].image} 
                    alt={portfolioData.projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Project Navigation Arrows */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveProject((prev) => (prev === 0 ? portfolioData.projects.length - 1 : prev - 1))}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <FiChevronLeft className="text-slate-700 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              
              <div className="flex items-center gap-1 sm:gap-2">
                {portfolioData.projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      activeProject === index 
                        ? 'bg-indigo-600 w-6 sm:w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveProject((prev) => (prev === portfolioData.projects.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <FiChevronRight className="text-slate-700 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Experience Section (sama seperti sebelumnya)
const ExperienceSection = () => (
  <section id="experience" className="py-16 sm:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 sm:mb-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Experience</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline - Hidden on mobile */}
        <div className="absolute left-8 lg:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 transform -translate-x-1/2 hidden lg:block" />
        
        <div className="space-y-8 sm:space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
            >
              {/* Timeline dot - Hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white" />
              
              {/* Experience card */}
              <div className={`lg:w-[45%] bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-sm hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <FaSolidAward className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-indigo-600 font-medium text-sm sm:text-base">{exp.company}</div>
                    <div className="text-xs sm:text-sm text-slate-500">{exp.period}</div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{exp.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.achievements && exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <FiCheck className="text-indigo-600" size={10} />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700">{achievement}</span>
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
);

// Achievements Section (sama seperti sebelumnya)
const AchievementsSection = () => {
  const [activeAchievementCategory, setActiveAchievementCategory] = useState('All');
  const achievementCategories = ['All', ...Array.from(new Set(portfolioData.achievements.map(a => a.category)))];
  const filteredAchievements = activeAchievementCategory === 'All' 
    ? portfolioData.achievements 
    : portfolioData.achievements.filter(a => a.category === activeAchievementCategory);

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
            Achievements & Awards
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl">
            Recognitions and accomplishments throughout my academic and professional journey.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievementCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveAchievementCategory(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-indigo-50 rounded-lg mr-3 sm:mr-4">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">{achievement.title}</h3>
                  <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 sm:px-2 sm:py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer (sama seperti sebelumnya)
const Footer = () => (
  <footer className="py-10 sm:py-12 bg-slate-900 text-slate-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">{portfolioData.nickname}</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">{portfolioData.name}</div>
              <div className="text-xs sm:text-sm text-slate-400">{portfolioData.role}</div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 sm:space-x-6">
          <motion.a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ y: -3 }}
          >
            <FiGithub size={18} />
          </motion.a>
          <motion.a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ y: -3 }}
          >
            <FiLinkedin size={18} />
          </motion.a>
          <motion.a
            href={portfolioData.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ y: -3 }}
          >
            <FiInstagram size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${portfolioData.email}`}
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ y: -3 }}
          >
            <FiMail size={18} />
          </motion.a>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component - DITAMBAHKAN CUSTOM CURSOR
const ProfessionalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'achievements'];
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-60px 0px -60px 0px'
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
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen overflow-x-hidden cursor-none">
      {/* Custom Cursor - DITAMBAHKAN DI SINI */}
      <CustomCursor />
      
      <FloatingElements />
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

export default ProfessionalPortfolio;