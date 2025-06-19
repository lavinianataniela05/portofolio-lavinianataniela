

// "use client";
// import { useState, useEffect, useRef, SetStateAction } from 'react';
// import { 
//   FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, 
//   FiExternalLink, FiCode, FiInstagram, FiDownload, FiStar,
//   FiAward, FiHeart, FiZap, FiTrendingUp, FiFigma, FiLayers
// } from 'react-icons/fi';
// import { 
//   FaReact, FaNodeJs, FaPython, FaJava, FaAward as FaSolidAward, FaGraduationCap 
// } from 'react-icons/fa';
// import { 
//   SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, 
//   SiFastapi, SiExpress, SiLeetcode, SiTailwindcss, SiJavascript
// } from 'react-icons/si';
// import { IoLogoFirebase } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion";

// const portfolioData = {
//   name: "Lavinia Nataniela Novyandi",
//   nickname: "LN",
//   role: "Full Stack Developer & Database Designer",
//   email: "lavinianataniela05@gmail.com",
//   phone: "+62 877-8777-3918",
//   location: "Jakarta, Indonesia",
//   bio: "Full Stack Developer specializing in scalable web applications and robust database systems. Experienced in building end-to-end solutions with efficient backend architectures and modern data technologies.",
//   skills: [
//     "JavaScript", "TypeScript", "React", "Next.js", 
//     "Python", "Node.js", "PostgreSQL", "Firebase", "Java OOP", "Tailwind CSS","Figma","C language", "mySql","Docker"
//   ],
//   projects: [
//     {
//       id: 1,
//   title: "EcoManage",
//   description: "An interactive web-based platform for households and communities to manage, track, and recycle waste efficiently using real-time data and reward systems.",
//   tech: ["Next.js", "TypeScript", "Firebase", "Figma"],
//   image: "/ecomanage.png", // Gambar disimpan di folder /public, jadi path cukup seperti ini
//   github: "https://github.com/lavinianataniela05/pengelolaansampah",
//   website: "https://pengelolaansampah.vercel.app/",
//   features: [
//     "Waste category tracking and reporting",
//     "User-friendly dashboard with CRUD operations",
//     "Reward point system for recycling participation",
//     "Real-time waste data visualization",
//     "Community-level waste contribution insights"
        
//       ]
//     },
//     {
//       id: 2,
//       title: "Brew And Bliss Cafe Website",
//       description: "a web-based application designed to streamline café operations, from reservations to orders and payments, with an elegant interface and efficient workflow management.",
//       tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
//       image: "/brewandbliss.png",
//       github: "https://github.com/lavinianataniela05/cafemanagementsystem",
//       website: "https://cafemanagementsystem-nu.vercel.app",
//       features: [
//         "User authentication with role-based access for customers, staff, and administrators",
//         "Table reservation system with real-time availability",
//         "Order management for handling dine-in or take-away orders",
//         "Dynamic menu display with categorized items and image support",
//         "Payment processing interface with future integration support",
//         "Admin dashboard for monitoring reservations, staff, and order data",
//         "Built using Next.js, Tailwind CSS, and TypeScript for scalability and performance"
//       ]
//     },
//     {
//       id: 3,
//       title: "Concurrent Flights Prediction",
//       description: "A machine learning project that predicts the number of flights occurring at the same time using over 6 million historical flight records.",
//       tech: ["Python", "Streamlit", "Jupyter Notebook", "Machine"],
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
//       github: "https://github.com/lavinianataniela05/dataAnalytics",
//       website: "https://github.com/lavinianataniela05/dataAnalytics",
//       features: [
//         "Processes large-scale flight data",
//         "Cleans and transforms time-based features",
//         "Uses RandomForest and XGBoost models",
//         "Optimized with RandomizedSearchCV",
//         "Supports air traffic and airport planning"
//       ]
//     }
//   ],
//   experience: [
//     {
//       company: "TechFlow Solutions",
//       role: "Senior Full Stack Developer",
//       period: "2023 - Present",
//       description: "Leading the development of enterprise-scale web applications and mentoring junior developers in modern web technologies.",
//       achievements: [
//         "Architected and built 5+ high-traffic web applications serving 100K+ users",
//         "Improved application performance by 40% through optimization techniques",
//         "Led a team of 6 developers in agile development practices",
//         "Implemented CI/CD pipelines reducing deployment time by 60%"
//       ]
//     },
//     {
//       company: "Digital Creative Agency",
//       role: "Frontend Developer & UI/UX Designer",
//       period: "2022 - 2023",
//       description: "Created stunning user interfaces and seamless user experiences for various client projects across different industries.",
//       achievements: [
//         "Designed and developed 15+ responsive web applications",
//         "Increased client satisfaction scores by 35% through user-centered design",
//         "Collaborated with cross-functional teams on brand identity projects",
//         "Mentored interns and junior designers in design thinking methodologies"
//       ]
//     }
//   ],
//   achievements: [
//     {
//       title: "Best Innovation Award",
//       description: "Won first place in Jakarta Tech Innovation Challenge 2024",
//       year: "2024",
//       icon: <FiStar className="text-yellow-400" />,
//       category: "Technology"
//     },
//     {
//       title: "UI/UX Excellence",
//       description: "Recognized for outstanding user interface design in mobile applications",
//       year: "2024",
//       icon: <FiHeart className="text-pink-400" />,
//       category: "Design"
//     },
//     {
//       title: "Top Contributor",
//       description: "Most active contributor in open-source community projects",
//       year: "2023",
//       icon: <FiTrendingUp className="text-green-400" />,
//       category: "Community"
//     },
//     {
//       title: "Hackathon Winner",
//       description: "1st place in Southeast Asia Developer Challenge 2023",
//       year: "2023",
//       icon: <FiZap className="text-blue-400" />,
//       category: "Technology"
//     },
//     {
//       title: "Design Thinking Certification",
//       description: "Certified in Advanced Design Thinking by IDEO",
//       year: "2022",
//       icon: <FiFigma className="text-purple-400" />,
//       category: "Design"
//     },
//     {
//       title: "Women in Tech Scholarship",
//       description: "Recipient of Google's Women Techmakers Scholarship",
//       year: "2022",
//       icon: <FaGraduationCap className="text-red-400" />,
//       category: "Education"
//     }
//   ],
//   social: {
//     github: "https://github.com/lavinianataniela05",
//     linkedin: "https://www.linkedin.com/in/lavinianatanielanovyandi/",
//     instagram: "https://www.instagram.com/lavinia_nataniela/",
//   }
// };

// const techIcons = {
//   'JavaScript': <SiJavascript className="text-yellow-400" />,
//   'TypeScript': <SiTypescript className="text-blue-600" />,
//   'React': <FaReact className="text-blue-500" />,
//   'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
//   'Node.js': <FaNodeJs className="text-green-600" />,
//   'Python': <FaPython className="text-blue-800" />,
//   'PostgreSQL': <SiPostgresql className="text-blue-700" />,
//   'MongoDB': <SiMongodb className="text-green-500" />,
//   'Java': <FaJava className="text-red-600" />,
//   'FastAPI': <SiFastapi className="text-green-500" />,
//   'Express': <SiExpress className="text-gray-800 dark:text-gray-200" />,
//   'Firebase': <IoLogoFirebase className="text-yellow-500" />,
//   'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
//   'UI/UX Design': <FiZap className="text-purple-500" />,
//   'Figma': <FiFigma className="text-purple-600" />

// };

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
//   github: string;
//   website: string;
//   features: string[];
// };

// export default function LaviniaPortfolio() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeProject, setActiveProject] = useState<Project | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [activeAchievementCategory, setActiveAchievementCategory] = useState('All');
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const sections = ['home', 'about', 'achievements', 'projects', 'experience'];
    
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
//     );

//     sections.forEach(section => {
//       const element = document.getElementById(section);
//       if (element) observerRef.current?.observe(element);
//     });

//     return () => {
//       if (observerRef.current) {
//         sections.forEach(section => {
//           const element = document.getElementById(section);
//           if (element) observerRef.current?.unobserve(element);
//         });
//       }
//     };
//   }, []);
  
//   const openProjectModal = (project: Project) => {
//     setActiveProject(project);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setActiveProject(null);
//     document.body.style.overflow = 'auto';
//   };

//   const menuItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'experience', label: 'Experience' },
//         { id: 'achievements', label: 'Achievements' },

//   ];

//   const achievementCategories = ['All', ...Array.from(new Set(portfolioData.achievements.map(a => a.category)))];

//   const filteredAchievements = activeAchievementCategory === 'All' 
//     ? portfolioData.achievements 
//     : portfolioData.achievements.filter(a => a.category === activeAchievementCategory);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//         <div 
//           className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
//           style={{
//             transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//         <div 
//           className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
//           style={{
//             transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         />
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <motion.div 
//               className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               {portfolioData.nickname}
//             </motion.div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-8">
//               {menuItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.id 
//                       ? 'text-purple-600 scale-105' 
//                       : 'text-gray-600 hover:text-purple-600 hover:scale-105'
//                   }`}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="w-6 h-6 flex flex-col justify-center items-center">
//                 <span className={`bg-purple-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
//                 <span className={`bg-purple-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//                 <span className={`bg-purple-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
//               </div>
//             </motion.button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <motion.div 
//               className="md:hidden py-4 border-t border-purple-100"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {menuItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="block w-full text-left py-3 px-4 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300"
//                   whileHover={{ x: 5 }}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </nav>

//       <main className="pt-16 relative z-10">
//         {/* Hero Section */}
//         <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div 
//               className="mb-8 relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl relative overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <motion.span 
//                   className="relative z-10 transition-transform duration-500 group-hover:scale-110"
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//                 >
//                   {portfolioData.nickname}
//                 </motion.span>
//               </div>
//             </motion.div>
            
//             <motion.h1 
//               className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 relative"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
//                 {portfolioData.name}
//               </span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-xl md:text-2xl text-gray-600 mb-8 flex items-center justify-center gap-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <FiZap className="text-purple-500 animate-bounce" />
//               <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
//                 {portfolioData.role}
//               </span>
//               <FiHeart className="text-pink-500 animate-pulse" />
//             </motion.p>
            
//             <motion.p 
//               className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               {portfolioData.bio}
//             </motion.p>
            
//             <motion.div 
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <motion.button
//                 onClick={() => scrollToSection('projects')}
//                 className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <FiExternalLink className="animate-bounce" />
//                 View My Work
//               </motion.button>
//               <motion.a
//                   href="#"
//                 className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//                   whileHover={{ y: -3 }}
//                 >
//                   <FiDownload /> Download Resume
//                 </motion.a>
//               {/* <motion.button
//                 onClick={() => scrollToSection('achievements')}
//                 className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <FiAward className="animate-pulse" />
//                 My Achievements
//               </motion.button> */}
//             </motion.div>
//           </div>

//           {/* Animated floating elements */}
//           <motion.div 
//             className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-purple-400/20 blur-xl"
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 20, 0]
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//           <motion.div 
//             className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-pink-400/20 blur-xl"
//             animate={{
//               y: [0, 30, 0],
//               x: [0, -30, 0]
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden">
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//             <motion.h2 
//               className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               About Me
//             </motion.h2>
            
//             <div className="grid md:grid-cols-2 gap-12 items-start">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
//                   <FiCode className="text-purple-500" />
//                   Skills & Technologies
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4 mb-12">
//                   {portfolioData.skills.map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-center gap-2 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 border border-purple-100"
//                       whileHover={{ y: -5 }}
//                     >
//                       {techIcons[skill as keyof typeof techIcons] || <FiCode />}
//                       <span className="text-gray-700 font-medium">{skill}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
//                   <FiMail className="text-purple-500" />
//                   Contact Information
//                 </h3>
//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-purple-50 transition-colors border border-purple-100">
//                     <FiMail className="text-purple-600 text-xl" />
//                     <a 
//                       href={`mailto:${portfolioData.email}`} 
//                       className="text-gray-700 hover:text-purple-600 transition-colors"
//                     >
//                       {portfolioData.email}
//                     </a>
//                   </div>
//                   <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-purple-50 transition-colors border border-purple-100">
//                     <FiPhone className="text-purple-600 text-xl" />
//                     <a 
//                       href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} 
//                       className="text-gray-700 hover:text-purple-600 transition-colors"
//                     >
//                       {portfolioData.phone}
//                     </a>
//                   </div>
//                   <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-purple-50 transition-colors border border-purple-100">
//                     <FiMapPin className="text-purple-600 text-xl" />
//                     <span className="text-gray-700">{portfolioData.location}</span>
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
//                   <FiHeart className="text-pink-500" />
//                   Let's Connect
//                 </h3>
//                 <div className="flex flex-wrap gap-4 mb-8">
//                   <motion.a 
//                     href={portfolioData.social.github} 
//                     className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -3 }}
//                   >
//                     <FiGithub /> GitHub
//                   </motion.a>
//                   <motion.a 
//                     href={portfolioData.social.linkedin} 
//                     className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -3 }}
//                   >
//                     <FiLinkedin /> LinkedIn
//                   </motion.a>
//                   <motion.a 
//                     href={portfolioData.social.instagram} 
//                     className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-md"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -3 }}
//                   >
//                     <FiInstagram /> Instagram
//                   </motion.a>
                  
//                 </div>
                
                
//               </motion.div>
//             </div>
//           </div>
//         </section>

        

//         {/* Projects Section */}
//         <section id="projects" className="py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden">
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//             <motion.h2 
//               className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Featured Projects
//             </motion.h2>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {portfolioData.projects.map((project) => (
//                 <motion.div 
//                   key={project.id} 
//                   className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-purple-100 overflow-hidden group cursor-pointer"
//                   onClick={() => openProjectModal(project)}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
//                     <img 
//                       src={project.image}
//                       alt={project.title} 
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="absolute bottom-4 right-4 flex gap-2">
//                       <a 
//                         href={project.github} 
//                         className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:bg-white shadow-md transform hover:scale-110 transition-all duration-300"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <FiGithub />
//                       </a>
//                       <a 
//                         href={project.website} 
//                         className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:bg-white shadow-md transform hover:scale-110 transition-all duration-300"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <FiExternalLink />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech, index) => (
//                         <span 
//                           key={index}
//                           className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
//                         >
//                           {techIcons[tech as keyof typeof techIcons] || <FiCode size={12} />}
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 relative overflow-hidden">
//           <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//             <motion.h2 
//               className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Professional Experience
//             </motion.h2>
            
//             <div className="space-y-12">
//               {portfolioData.experience.map((exp, index) => (
//                 <motion.div 
//                   key={index}
//                   className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 relative overflow-hidden group"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
//                       <p className="text-lg text-purple-600 font-medium">{exp.role}</p>
//                     </div>
//                     <span className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
//                       {exp.period}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 mb-6">{exp.description}</p>
                  
//                   <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
//                     <FaSolidAward className="text-yellow-500" />
//                     Key Achievements
//                   </h4>
//                   <ul className="space-y-3">
//                     {exp.achievements.map((achievement, idx) => (
//                       <li key={idx} className="flex items-start gap-3">
//                         <FiStar className="text-purple-500 mt-1 flex-shrink-0" />
//                         <span className="text-gray-700">{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//         {/* Achievements Section */}
//         <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 relative overflow-hidden">
//           <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl"></div>
          
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//             <motion.h2 
//               className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               My Achievements
//             </motion.h2>
            
//             <motion.div 
//               className="flex flex-wrap justify-center gap-3 mb-12"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               {achievementCategories.map(category => (
//                 <motion.button
//                   key={category}
//                   onClick={() => setActiveAchievementCategory(category)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeAchievementCategory === category
//                       ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
//                       : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </motion.div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredAchievements.map((achievement, index) => (
//                 <motion.div 
//                   key={index}
//                   className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 relative overflow-hidden group"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-purple-600">
//                       {achievement.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
//                       <span className="text-sm text-purple-600 font-medium">{achievement.year}</span>
//                     </div>
//                   </div>
//                   <p className="text-gray-600 mb-4">{achievement.description}</p>
//                   <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
//                     {achievement.category}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Project Modal */}
//         <AnimatePresence>
//           {isModalOpen && activeProject && (
//             <motion.div 
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//             >
//               <motion.div 
//                 className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button 
//                   className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                   onClick={closeModal}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
                
//                 <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
//                   <img 
//                     src={activeProject.image}
//                     alt={activeProject.title} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
                
//                 <div className="p-8">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//                     <h2 className="text-3xl font-bold text-gray-900">{activeProject.title}</h2>
//                     <div className="flex gap-3">
//                       <a 
//                         href={activeProject.github} 
//                         className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FiGithub /> Code
//                       </a>
//                       <a 
//                         href={activeProject.website} 
//                         className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FiExternalLink /> Live Demo
//                       </a>
//                     </div>
//                   </div>
                  
//                   <p className="text-lg text-gray-600 mb-8">{activeProject.description}</p>
                  
//                   <div className="mb-8">
//                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-600">
//                       <FiLayers className="text-purple-900" />
//                       Technologies Used
//                     </h3>
//                     <div className="flex flex-wrap gap-3">
//                       {activeProject.tech.map((tech, index) => (
//                         <span 
//                           key={index}
//                           className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
//                         >
//                           {techIcons[tech as keyof typeof techIcons] || <FiCode size={14} />}
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-600">
//                       <FiZap className="text-pink-500" />
//                       Key Features
//                     </h3>
//                     <ul className="space-y-3">
//                       {activeProject.features.map((feature, index) => (
//                         <li key={index} className="flex items-start gap-3">
//                           <FiStar className="text-purple-500 mt-1 flex-shrink-0" />
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Footer */}
//         <footer className="py-12 bg-gradient-to-br from-purple-900 to-pink-900 text-white relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//               <div>
//                 <h2 className="text-3xl font-bold mb-4">{portfolioData.name}</h2>
//                 <p className="text-purple-200 max-w-md">{portfolioData.bio}</p>
//               </div>
              
//               <div className="flex flex-col items-center md:items-end">
//                 <div className="flex gap-4 mb-6">
//                   <a 
//                     href={portfolioData.social.github} 
//                     className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FiGithub className="text-xl" />
//                   </a>
//                   <a 
//                     href={portfolioData.social.linkedin} 
//                     className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FiLinkedin className="text-xl" />
//                   </a>
//                   <a 
//                     href={portfolioData.social.instagram} 
//                     className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FiInstagram className="text-xl" />
//                   </a>
                  
//                 </div>
                
//                 <div className="text-center md:text-right">
//                   <p className="text-purple-200 mb-1">{portfolioData.email}</p>
//                   <p className="text-purple-200">{portfolioData.phone}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-300">
//               {/* <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p> */}
//             </div>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from 'react';
import { 
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, 
  FiExternalLink, FiCode, FiInstagram, FiDownload, FiStar,
  FiAward, FiHeart, FiZap, FiTrendingUp, FiFigma, FiLayers,
  FiArrowRight, FiMenu, FiX, FiChevronDown,
  FiCheck,
  FiCpu
} from 'react-icons/fi';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaAward as FaSolidAward, FaGraduationCap 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, 
  SiFastapi, SiExpress, SiLeetcode, SiTailwindcss, SiJavascript
} from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";

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
      description: "a web-based application designed to streamline café operations, from reservations to orders and payments, with an elegant interface and efficient workflow management.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
      image: "/brewandbliss.png",
      github: "https://github.com/lavinianataniela05/cafemanagementsystem",
      website: "https://cafemanagementsystem-nu.vercel.app",
      features: [
        "User authentication with role-based access for customers, staff, and administrators",
        "Table reservation system with real-time availability",
        "Order management for handling dine-in or take-away orders",
        "Dynamic menu display with categorized items and image support",
        "Payment processing interface with future integration support",
        "Admin dashboard for monitoring reservations, staff, and order data",
        "Built using Next.js, Tailwind CSS, and TypeScript for scalability and performance"
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
        "Cleans and transforms time-based features",
        "Uses RandomForest and XGBoost models",
        "Optimized with RandomizedSearchCV",
        "Supports air traffic and airport planning"
      ]
    }
  ],
  experience: [
    {
      company: "Bina Nusantara University",
      role: "Part-time Assistant Laboratory",
      period: "2024 - 2025",
      description: "Worked as a part-time assistant lecturer at Binus Bandung, instructing over 100 students from the Computer Science and Creativepreneurship programs in Introduction to Programming with Java—covering foundational Java concepts and the four pillars of Object-Oriented Programming (OOP)—as well as Algorithms & Programming.",
      achievements: [
        "Instructed over 100 students in Java and OOP fundamentals",
        "Developed and delivered engaging lab materials",
        "Supported students in understanding algorithms and programming concepts"
      ]
    },
    {
      company: "Teaching Instructor",
      role: "HIMTI Summer Class",
      period: "2024",
      description: "Developed teaching materials and presentations for Algorithm and Programming subjects, covering basic algorithm concepts, programming logic, and code implementation using programming languages.",
      achievements: [
        "Created comprehensive teaching materials for Summer class",
        "Presented algorithm and programming concepts to students",
        "Received positive feedback from participants"
      ]
    },
    {
      company: "Teaching Instructor",
      role: "HIMTI Computer Class",
      period: "2024",
      description: "Developed teaching materials and presentations for Algorithm and Programming subjects, covering basic algorithm concepts, programming logic, and code implementation using programming languages.",
      achievements: [
        "Created comprehensive teaching materials for computer class",
        "Presented algorithm and programming concepts to students",
        "Received positive feedback from participants"
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
    
    {
      title: "Hackathon 7.0 Technoscape Participant",
      description: "Participated in Hackathon 7.0 Technoscape",
      year: "2024",
      icon: <FiZap className="text-blue-400" />,
      category: "Technology"
    },
    {
      title: "Web3 Competition ICP Builder Day Participant",
      description: "Participated in ICP Builder Day Web3 Competition",
      year: "2024",
      icon: <FiCpu className="text-violet-400" />,
      category: "Technology"
    }
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
  link.href = '/resume.pdf'; // Path is relative to the public folder
  link.download = 'LaviniaNataniela_Resume.pdf'; // Name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function ProfessionalPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    website: string;
    features: string[];
  };
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeAchievementCategory, setActiveAchievementCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);

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
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">{portfolioData.nickname}</span>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg">Lavinia Nataniela Novyandi</div>
                <div className="text-sm text-slate-600">Full Stack Developer & Database Designer</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-indigo-600' 
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
                  )}
                </button>
              ))}
              {/* <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Contact Me
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-slate-200 py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/10 to-purple-100/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 text-sm font-medium text-indigo-700 mb-8">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="block text-slate-900">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Lavinia Nataniela
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
                Full Stack Developer specializing in scalable web applications and robust database systems. Experienced in building end-to-end solutions with efficient backend architectures and modern data technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  View My Work
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  <FiDownload className="mr-2" />
                  Download Resume
                </button> */}
               <button 
  onClick={handleDownload}
  className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
>
  <FiDownload className="mr-2" />
  Download Resume
</button>
              </div>
              
              <div className="flex items-center space-x-6">
                {Object.entries(portfolioData.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {platform === 'github' && <FiGithub size={20} />}
                    {platform === 'linkedin' && <FiLinkedin size={20} />}
                    {platform === 'instagram' && <FiInstagram size={20} />}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse" />
                <div className="relative bg-gradient-to-br from-slate-100 to-white rounded-3xl p-8 border border-slate-200/50 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <div className="text-xs text-slate-500 font-mono">portfolio.tsx</div>
                    </div>
                    <div className="space-y-3 text-sm font-mono">
                      <div className="text-slate-700">
                        <span className="text-purple-600">const</span> <span className="text-blue-600">developer</span> = {"{"}
                      </div>
                      <div className="pl-4 space-y-0">
                        <div><span className="text-green-600">name:</span> <span className="text-amber-600">"Lavinia"</span>,</div>
                        <div><span className="text-green-600">role:</span> <span className="text-amber-600">"Full Stack Developer & Database Designer"</span>,</div>
                        <div><span className="text-green-600">passion:</span> <span className="text-amber-600">"Problem Solving, Team Work, Communication"</span></div>
                      </div>
                      <div className="text-slate-700">{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate developer with expertise in building scalable applications and creating seamless user experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Skills */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl p-8 border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <FiCode className="text-white" size={16} />
                  </div>
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {portfolioData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="mr-3 text-2xl group-hover:scale-110 transition-transform">
                        {techIcons[skill as keyof typeof techIcons] || <FiCode />}
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <a 
                    href={`mailto:${portfolioData.email}`}
                    className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiMail className="mr-3" />
                    <span className="text-sm">{portfolioData.email}</span>
                  </a>
                  <a 
                    href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}
                    className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FiPhone className="mr-3" />
                    <span className="text-sm">{portfolioData.phone}</span>
                  </a>
                  <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                    <FiMapPin className="mr-3" />
                    <span className="text-sm">{portfolioData.location}</span>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Projects Completed</span>
                    <span className="font-bold text-indigo-600">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Years Experience</span>
                    <span className="font-bold text-indigo-600">3+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Technologies</span>
                    <span className="font-bold text-indigo-600">12+</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in full-stack development and problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-white hover:text-indigo-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={16} />
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-white hover:text-indigo-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        <span className="mr-1">{techIcons[tech as keyof typeof techIcons] || <FiCode size={12} />}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center group/btn"
                  >
                    View Details
                    <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
      <section id="achievements" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Achievements</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognition and milestones throughout my career journey
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {achievementCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveAchievementCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeAchievementCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-indigo-50">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{achievement.title}</h3>
                    <div className="text-sm text-indigo-600 font-medium">{achievement.year}</div>
                  </div>
                </div>
                <p className="text-slate-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{portfolioData.nickname}</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Lavinia Nataniela</div>
                  <div className="text-sm text-slate-300">Full Stack Developer</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6">{portfolioData.bio}</p>
              <div className="flex space-x-4">
                {Object.entries(portfolioData.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {platform === 'github' && <FiGithub size={18} />}
                    {platform === 'linkedin' && <FiLinkedin size={18} />}
                    {platform === 'instagram' && <FiInstagram size={18} />}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-400">
                    <FiMail className="mr-3" />
                    <span>{portfolioData.email}</span>
                  </li>
                  <li className="flex items-center text-slate-400">
                    <FiPhone className="mr-3" />
                    <span>{portfolioData.phone}</span>
                  </li>
                  <li className="flex items-center text-slate-400">
                    <FiMapPin className="mr-3" />
                    <span>{portfolioData.location}</span>
                  </li>
                </ul>
              </div>

              
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>© {new Date().getFullYear()} Lavinia Nataniela Novyandi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="sticky top-0 bg-white p-6 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-900">{activeProject.title}</h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Description</h4>
                  <p className="text-slate-600">{activeProject.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        <span className="mr-1">{techIcons[tech as keyof typeof techIcons] || <FiCode size={12} />}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <FiCheck className="text-indigo-600" size={12} />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center"
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={activeProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}