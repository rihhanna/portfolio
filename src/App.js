import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["home", "about", "skills", "projects", "education", "contact"];

  const skills = {
    "Frontend": ["React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    "Backend": ["Django", "Python", "REST API", "Node.js"],
    "Data & ML": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn"],
    "Database": ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    "Tools": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Power BI", "Excel"],
  };

  const projects = [
    {
      title: "Weather App",
      desc: "Real-time weather app using React, Tailwind CSS and OpenWeatherMap API with dynamic backgrounds.",
      tags: ["React", "Tailwind", "API"],
      icon: "🌤️",
      color: "from-blue-500 to-indigo-600",
      github: "https://github.com/rihhanna/weather-app",
      live: "#",
    },
    {
      title: "Telco Customer Churn Analysis",
      desc: "End-to-end data analysis project predicting customer churn using ML classification models.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      icon: "📊",
      color: "from-purple-500 to-pink-600",
      github: "https://github.com/rihhanna",
      live: null,
    },
    {
      title: "Sales Performance Dashboard",
      desc: "Interactive dashboard visualizing KPIs, revenue trends and sales insights from raw data.",
      tags: ["Power BI", "Excel", "Python"],
      icon: "📈",
      color: "from-green-500 to-teal-600",
      github: "https://github.com/rihhanna",
      live: null,
    },
    {
      title: "COVID-19 Data Pipeline",
      desc: "Automated data pipeline for cleaning, processing and visualizing COVID-19 global datasets.",
      tags: ["Python", "Pandas", "Matplotlib"],
      icon: "🦠",
      color: "from-red-500 to-orange-600",
      github: "https://github.com/rihhanna",
      live: null,
    },
    {
      title: "Customer Segmentation",
      desc: "Unsupervised ML project using K-Means clustering to segment customers by behavior.",
      tags: ["Python", "Clustering", "ML"],
      icon: "🎯",
      color: "from-amber-500 to-yellow-600",
      github: "https://github.com/rihhanna",
      live: null,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950 bg-opacity-90 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rehana.dev
          </span>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`capitalize text-sm transition-colors ${
                  activeSection === link ? "text-purple-400 font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-900 px-6 pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} className="capitalize text-left text-gray-300 hover:text-purple-400 transition">
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-950 to-pink-900 opacity-40" />
        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-900">
              <img src="/avatar.jpg" alt="Rehana Hassan" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="text-purple-400 font-medium mb-2 tracking-widest text-sm uppercase">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Rehana Hassan
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Muhumed
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            ML & Full Stack Developer · Data Analyst · AI Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            <span className="bg-purple-900 bg-opacity-60 border border-purple-700 px-3 py-1 rounded-full">🎓 Magna Cum Laude – 3.86 GPA</span>
            <span className="bg-pink-900 bg-opacity-60 border border-pink-700 px-3 py-1 rounded-full">🏆 Hackathon Winner – Telesom 2024</span>
            <span className="bg-indigo-900 bg-opacity-60 border border-indigo-700 px-3 py-1 rounded-full">💡 Aspiring AI Specialist</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollTo("projects")} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition shadow-lg shadow-purple-900">
              View My Work
            </button>
            <button onClick={() => scrollTo("contact")} className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 transition">
              Contact Me
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/rihhanna" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition text-sm">GitHub</a>
            <a href="https://linkedin.com/in/rehana-hassan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition text-sm">LinkedIn</a>
            <a href="mailto:hrihhana@gmail.com" className="text-gray-400 hover:text-pink-400 transition text-sm">Email</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a <span className="text-purple-400 font-semibold">Software Engineering Graduate</span> with a passion for building intelligent, data-driven applications. I combine full-stack development skills with machine learning expertise to create impactful solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My journey spans <span className="text-pink-400 font-semibold">Data Analytics, Machine Learning</span> and modern web development with React and Django. I'm driven by curiosity and a desire to specialize in Artificial Intelligence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a <span className="text-indigo-400 font-semibold">proud Hijabi in Tech</span>, I'm on a mission to inspire more women into STEM while continuously pushing my own technical boundaries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "GPA", value: "3.86", icon: "🎓" },
              { label: "Hackathons Won", value: "2", icon: "🏆" },
              { label: "Projects Built", value: "50+", icon: "💻" },
              { label: "Tech Stacks", value: "10+", icon: "⚡" },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-700 transition">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-purple-700 transition">
                <h3 className="text-purple-400 font-semibold mb-4 text-sm uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-300 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-700 transition group">
              <div className={`h-2 bg-gradient-to-r ${p.color}`} />
              <div className="p-6">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition">GitHub →</a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sm text-purple-400 hover:text-purple-300 transition">Live Demo →</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="relative border-l-2 border-purple-700 pl-8 ml-4 space-y-8">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500" />
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-purple-700 transition">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-900 bg-opacity-60 border border-purple-700 flex items-center justify-center text-2xl">🎓</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Bachelor of Software Engineering</h3>
                    <p className="text-purple-400 font-medium">Graduated with Magna Cum Laude</p>
                  </div>
                </div>
                <span className="bg-purple-900 bg-opacity-60 border border-purple-700 text-purple-300 text-sm px-3 py-1 rounded-full">GPA 3.86</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="text-gray-400 text-sm">🏆 Hackathon Winner – Telesom Academy 2024</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Data Structures", "Algorithms", "Machine Learning", "Web Development", "Database Systems", "AI"].map((c) => (
                  <span key={c} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>

            {/* IBM Certificate */}
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-pink-700 transition">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 bg-opacity-60 border border-blue-700 flex items-center justify-center text-2xl">🏅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">IBM Data Analyst Specialist</h3>
                    <p className="text-pink-400 font-medium">Coursera · IBM</p>
                  </div>
                </div>
                <span className="bg-green-900 bg-opacity-60 border border-green-700 text-green-300 text-sm px-3 py-1 rounded-full">A+ Grade</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Professional certificate covering data analysis, visualization, Python, SQL, Excel, and IBM tools including Cognos Analytics and Watson Studio.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Python", "SQL", "Excel", "Data Visualization", "IBM Cognos", "Watson Studio", "Pandas", "NumPy"].map((c) => (
                  <span key={c} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{c}</span>
                ))}
              </div>
              <div className="mt-4">
                <a href="https://coursera.org/share/b23bc821868ef9508c777f489bbdd6d9" target="_blank" rel="noreferrer" className="text-sm text-pink-400 hover:text-pink-300 transition">
                  View Certificate →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          {formSent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thanks! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project..." className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-purple-900">
                Send Message 🚀
              </button>
            </form>
          )}
          <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-gray-800">
            <a href="mailto:hrihhana@gmail.com" className="text-gray-400 hover:text-pink-400 transition text-sm">📧 hrihhana@gmail.com</a>
            <a href="https://github.com/rihhanna" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition text-sm">GitHub</a>
            <a href="https://linkedin.com/in/rehana-hassan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition text-sm">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        Built with ❤️ by Rehana Hassan Muhumed · {new Date().getFullYear()}
      </footer>

    </div>
  );
}