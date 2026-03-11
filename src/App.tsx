import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.avif";
import profile from "./assets/profile.jpg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Terminal, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Download,
  Menu,
  X,
  Briefcase
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Data ---
const DATA = {
  name: "DEVA ANAND PRABHU D",
  role: "Software Developer",
  summary: "BCA graduate and passionate Software Developer with strong knowledge of HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, Python, Java, and SQL. Skilled in developing responsive web applications and writing clean, efficient, and scalable code.",
  contact: {
    phone: "7339521741",
    email: "devaanandprabhu@gmail.com",
    linkedin: "https://www.linkedin.com/in/deva-anand-prabhu-d-24679126a",
    github: "https://github.com/DevaAnandPrabhu"
  },
  education: [
    {
      institution: "Kalasalingam Academy of Research and Education, Krishnan koil",
      degree: "Bachelor of Computer Applications",
      year: "2025",
      score: "7.54/10"
    },
    {
      institution: "T.N.P.M. Mari Muthu Nadar Hr.sec.School",
      degree: "HSC",
      year: "2022",
      score: "406"
    }
  ],
  experience: [
    {
      company: "Smart Web Technologies",
      role: "Intern",
      period: "Jan 2025 - Apr 2025",
      description: [
        "Worked on a web-based project titled 'Data Leakage Detection' as part of degree requirements.",
        "Developed modules using JSP and MySQL for identifying and preventing unauthorized data leakage.",
        "Gained practical experience in web development and secure data handling."
      ]
    }
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React Js", "Bootstrap"],
    backend: ["Python", "Node Js", "Express Js", "Flask", "REST APIs"],
    databases: ["SQL", "SQLite", "SQL Alchemy", "MySQL"],
    tools: ["Git", "GitHub", "VSCode", "Docker"],
    concepts: ["OOP", "API Testing", "Unit Testing", "Debugging"]
  },
  projects: [
    {
      title: "Smart Vehicle Service System (SVSS)",
      description: "A full-stack web application for vehicle service centres to manage vehicles, appointments, technicians, and revenue reports.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "Bcrypt"],
      highlights: [
        "Implemented role-based authentication (Admin, Technician, Reception).",
        "Designed RESTful APIs for vehicle CRUD and appointment booking.",
        "Integrated a dynamic theme switcher (Dark, Light, Solarized).",
        "Deployed frontend on Vercel and backend on Render."
      ]
    },
    {
      title: "AI Job Assistant",
      description: "An AI-powered job search platform for students to analyze resumes, browse live job listings, and receive personalized job alerts.",
      tech: ["React.js", "Flask", "Python", "Groq Ai", "JWT", "Flask-Bcrypt","SqlAlchemy"],
      highlights: [
        "Built AI resume analyzer using Groq Llama 3 to generate ATS scores, skill gaps, and grammar feedback.",
        "Developed RESTful APIs with Flask for authentication, resume parsing, and job search.",
        "Integrated JSearch API to fetch live job listings from Chennai, Bangalore, Mumbai, and worldwide.",
        "Implemented JWT-based authentication with secure login, registration, and protected routes.",
        "Deployed frontend on Vercel and backend on Render."
      ],
      liveLink: "https://ai-job-assistant-bay.vercel.app"
    },

  ],
  certifications: [
    "Python Full Stack Developer",
    "Building a Career in AI",
    "Data Analytics Mega Workshop",
    "AWS Mega Workshop",
    "Model Context Protocol Mega Workshop"
  ]
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tight"
        >
          DEVA<span className="text-brand-600">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-600 p-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ project }: { project: typeof DATA.projects[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
        <Code2 size={24} />
      </div>
      <div className="flex gap-2">
        <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <Github size={18} />
        </button>
        <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
    <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
    <p className="text-zinc-600 text-sm mb-4 line-clamp-2">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map(t => (
        <span key={t} className="px-3 py-1 bg-zinc-50 text-zinc-500 text-[10px] font-mono uppercase tracking-wider rounded-full border border-zinc-100">
          {t}
        </span>
      ))}
    </div>
    <ul className="space-y-2">
      {project.highlights.slice(0, 2).map((h, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
          <ChevronRight size={14} className="mt-0.5 text-brand-500 shrink-0" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-6 border border-brand-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Available for Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-gradient">
            Building Modern<br /><span className="text-brand-600">Web Applications</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-zinc-900">{DATA.name}</span>. 
              A passionate Software Developer dedicated to crafting clean, efficient, and scalable web solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200"
              >
                View Projects <ChevronRight size={18} />
              </a>
              <button className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-medium hover:bg-zinc-50 transition-all flex items-center gap-2">
                Download CV <Download size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-blue-500 rounded-[40px] rotate-6 opacity-20 blur-2xl" />
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl bg-zinc-100">
                {/* 
                  To use your actual face image:
                  1. Upload your image to the project folder
                  2. Rename it to 'profile.jpg'
                  3. The code below will automatically pick it up
                */}
                <img 
                  src={profile} 
                  alt="Deva Anand Prabhu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image is not found
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/dev-profile/800/800";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
                    <React.Fragment>
                      <Code2 size={20} />
                    </React.Fragment>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Specialization</div>
                    <div className="text-sm font-bold">Full Stack</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium">Experience</div>
                    <div className="text-sm font-bold">Internship Completed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="A quick look into my professional journey and aspirations.">
                About Me
              </SectionHeading>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>{DATA.summary}</p>
                <p>
                  I specialize in building robust web applications using the MERN stack and Python. 
                  My focus is on delivering high-quality software solutions that solve real-world problems 
                  while maintaining clean and efficient codebases.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-3xl font-display font-bold text-zinc-900">2025</div>
                    <div className="text-sm text-zinc-500">BCA Graduate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-zinc-900">5+</div>
                    <div className="text-sm text-zinc-500">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-3xl bg-zinc-100 overflow-hidden">
                  <img src={img1} className="w-full h-full object-cover duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="h-64 rounded-3xl bg-brand-500 flex items-center justify-center p-8 text-white">
                   <Terminal size={48} />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-3xl bg-zinc-900 flex items-center justify-center p-8 text-white">
                   <Database size={48} />
                </div>
                <div className="h-48 rounded-3xl bg-zinc-100 overflow-hidden">
                  <img src={img2} className="w-full h-full object-cover duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="My technical toolkit across different domains of software development.">
            Technical Skills
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Frontend", icon: <Layout />, skills: DATA.skills.frontend, color: "bg-blue-50 text-blue-600" },
              { title: "Backend", icon: <Server />, skills: DATA.skills.backend, color: "bg-purple-50 text-purple-600" },
              { title: "Databases", icon: <Database />, skills: DATA.skills.databases, color: "bg-emerald-50 text-emerald-600" },
              { title: "Tools", icon: <Terminal />, skills: DATA.skills.tools, color: "bg-orange-50 text-orange-600" },
              { title: "Concepts", icon: <Award />, skills: DATA.skills.concepts, color: "bg-rose-50 text-rose-600" },
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white border border-zinc-100 shadow-sm"
              >
                <div className={cn("inline-flex p-3 rounded-2xl mb-6", category.color)}>
                  {React.cloneElement(category.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-display font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-zinc-50 rounded-xl text-sm font-medium text-zinc-600 border border-zinc-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="My professional experience and internships.">
            Work Experience
          </SectionHeading>

          <div className="space-y-8">
            {DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                  <div className="mb-4 md:mb-0">
                    <div className="text-sm font-mono text-brand-600 font-bold uppercase tracking-wider">{exp.period}</div>
                    <div className="text-zinc-400 text-xs mt-1">Internship</div>
                  </div>
                  <div className="relative pb-12 border-l-2 border-zinc-100 pl-8 md:pl-12">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 border-4 border-white shadow-sm" />
                    <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                    <div className="text-lg text-zinc-900 font-medium mb-4">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-600">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
              <p className="text-zinc-400 max-w-xl">
                A selection of my recent work, ranging from full-stack applications to specialized systems.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-all">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[40px] bg-zinc-800 border border-zinc-700 p-8 md:p-12 hover:border-brand-500/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
  <div className="text-xs font-mono text-brand-400 uppercase tracking-widest">Project {idx + 1}</div>
  <div className="flex gap-4">
    <Github className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={20} />
    {project.liveLink ? (
      <a href={project.liveLink} target="_blank" rel="noreferrer">
        <ExternalLink className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={20} />
      </a>
    ) : (
      <ExternalLink className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={20} />
    )}
  </div>
</div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-brand-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-zinc-700/50 text-zinc-300 text-[10px] font-mono uppercase tracking-wider rounded-full border border-zinc-600">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                      <ChevronRight size={16} className="mt-0.5 text-brand-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-6">
              {DATA.education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-brand-50 text-brand-600 rounded-xl">
                      <GraduationCap size={20} />
                    </div>
                    <span className="text-sm font-mono text-zinc-400">{edu.year}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-zinc-600 text-sm mb-2">{edu.institution}</p>
                  <div className="inline-block px-3 py-1 bg-zinc-50 rounded-lg text-xs font-bold text-zinc-500 border border-zinc-100">
                    Score: {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading>Certifications</SectionHeading>
            <div className="grid gap-4">
              {DATA.certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center gap-4 group"
                >
                  <div className="p-2 bg-zinc-50 text-zinc-400 group-hover:bg-brand-50 group-hover:text-brand-600 rounded-xl transition-colors">
                    <Award size={20} />
                  </div>
                  <span className="font-medium text-zinc-700">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[48px] bg-zinc-900 p-8 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 blur-[120px] -z-0" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                  Let's Build Something <br /> <span className="text-brand-500">Amazing Together.</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-12 max-w-md">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-6">
                  <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-4 group">
                    <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-brand-500 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email Me</div>
                      <div className="text-lg font-medium">{DATA.contact.email}</div>
                    </div>
                  </a>
                  <a href={`tel:${DATA.contact.phone}`} className="flex items-center gap-4 group">
                    <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-brand-500 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Call Me</div>
                      <div className="text-lg font-medium">{DATA.contact.phone}</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass p-8 md:p-12 rounded-[40px] border-zinc-700/50">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Name</label>
                      <input type="text" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email</label>
                      <input type="email" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                    <textarea rows={4} className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold tracking-tight">
            DEVA<span className="text-brand-600">.</span>
          </div>
          <div className="flex gap-8">
            <a href={DATA.contact.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Github size={20} />
            </a>
            <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${DATA.contact.email}`} className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Deva Anand Prabhu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
