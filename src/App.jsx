import { useEffect, useState } from "react";
import {
  Menu, X, Phone, MessageCircle, Download, ArrowRight, Sparkles,
  BookOpen, Briefcase, Code2, Calculator, LineChart, Server,
  Users, Cpu, Monitor, Compass, Award, ShieldCheck,
  Mail, MapPin, Facebook, Instagram, Linkedin, Youtube,
  Plus, Minus, Star, CheckCircle2, Building2, GraduationCap,
  Calendar, FileText, Compass as ClubIcon, Award as SportsIcon
} from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";
import campusBuilding from "@/assets/campus-building.jpg";
import campusClassroom from "@/assets/campus-classroom.jpg";
import campusLab from "@/assets/campus-lab.jpg";
import campusLibrary from "@/assets/campus-library.jpg";
import campusEvents from "@/assets/campus-events.jpg";
import campusSports from "@/assets/campus-sports.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

import logo from "@/assets/logo.png";
import naacIsoBadge from "@/assets/naac-iso-badge.png";

const NAV = [
  { label: "Home", href: "#home" },
  { 
    label: "Academic", 
    href: "#academics",
    dropdown: [
      { label: "Courses Offered", href: "#courses" },
      { label: "Departments", href: "#academics" },
      { label: "Faculty", href: "#why" },
      { label: "Academic Calendar", href: "#exams" },
      { label: "Syllabus", href: "#academics" },
      { label: "Course Plan", href: "#academics" },
      { label: "Choice based credit System", href: "#academics" },
      { label: "Value Added courses", href: "#courses" }
    ]
  },
  { 
    label: "Courses", 
    href: "#courses",
    dropdown: [
      { label: "Placement Cell", href: "#placements" },
      { label: "Library", href: "#campus" },
      { label: "Career Guidance", href: "#why" },
      { label: "National Service Scheme (NSS)", href: "#campus" },
      { label: "E-Resources", href: "#campus" }
    ]
  },
  { 
    label: "Why Vagdevi", 
    href: "#why",
    dropdown: [
      { label: "Guidelines for Admissions", href: "#admissions" },
      { label: "Student Welfare", href: "#why" },
      { label: "Scholarships", href: "#admissions" }
    ]
  },
  { 
    label: "Placements", 
    href: "#placements",
    dropdown: [
      { label: "Placement Cell & Support", href: "#placements" },
      { label: "Career Guidance Cell", href: "#why" },
      { label: "Placement Achievements", href: "#placements" },
      { label: "Our Hiring Partners", href: "#placements" }
    ]
  },
  { 
    label: "Campus Life", 
    href: "#campus",
    dropdown: [
      { label: "Alumni", href: "#campus" },
      { label: "Student Committee", href: "#campus" },
      { label: "Associations", href: "#campus" },
      { label: "Certificates", href: "#why" }
    ]
  },
  { 
    label: "Exam Cell", 
    href: "#exams",
    dropdown: [
      { label: "Notices", href: "#exams" },
      { label: "Results", href: "#exams" }
    ]
  },
  { 
    label: "Admissions", 
    href: "#admissions",
    dropdown: [
      { label: "Enquiry", href: "#admissions" },
      { label: "Admission Form", href: "#admissions" }
    ]
  },
  { label: "Contact", href: "#contact" },
  { label: "Gallery", href: "#Gallery" }
];

const COURSES = [
  { icon: Calculator, name: "B.Com", desc: "Commerce with General, Computers & Tax specializations.", dur: "3 Years" },
  { icon: BookOpen, name: "B.Sc", desc: "Mathematics, Physics, Chemistry & Computer Science streams.", dur: "3 Years" },
  { icon: Code2, name: "BCA", desc: "Computer Applications with modern programming & web tech.", dur: "3 Years" },
  { icon: Briefcase, name: "BBA", desc: "Business Administration with industry case studies.", dur: "3 Years" },
  { icon: LineChart, name: "MBA", desc: "Postgraduate management with finance & marketing tracks.", dur: "2 Years" },
  { icon: Server, name: "MCA", desc: "Advanced computer applications & software engineering.", dur: "2 Years" },
];

const ACCREDITATIONS = [
  { title: "Affiliated University", subtitle: "Acharya Nagarjuna University (ANU)", desc: "Recognized courses & syllabus structure aligned with ANU guidelines." },
  { title: "NAAC Accredited", subtitle: "Grade 'B+' Certification", desc: "Peer-reviewed excellence in education, faculty infrastructure, and resources." },
  { title: "ISO 9001:2015", subtitle: "Quality Certified Institution", desc: "International standard educational processes & student development systems." },
  { title: "AICTE Approved", subtitle: "For Professional Courses", desc: "Postgraduate Management and Computer Application streams (MBA/MCA) approved." }
];

const ACADEMIC_DEPARTMENTS = [
  {
    id: "computers",
    name: "Computer Science & Applications",
    description: "Equipped with state-of-the-art labs and focused on modern software engineering paradigms, AI, and web technologies.",
    courses: ["BCA (Bachelor of Computer Applications)", "B.Sc (Computer Science)", "MCA (Master of Computer Applications)"],
    strength: "45+ Faculty Members | 3 Dedicated Labs | 180+ High-end Workstations"
  },
  {
    id: "commerce",
    name: "Commerce & Management",
    description: "Developing future business leaders through case studies, industrial visits, and comprehensive trade & financial management bootcamps.",
    courses: ["B.Com (General / Computer Applications / Tax)", "BBA (Bachelor of Business Administration)", "MBA (Master of Business Administration)"],
    strength: "35+ Faculty Members | Tally Lab | Industry Association Ties"
  },
  {
    id: "sciences",
    name: "Basic & Applied Sciences",
    description: "Fostering analytical mindset and empirical research in physics, electronics, chemistry, and mathematics with full-scale physical labs.",
    courses: ["B.Sc (Mathematics, Physics, Chemistry)", "B.Sc (Physics, Electronics, Computer Science)"],
    strength: "30+ Faculty Members | Chemistry Lab | Physics & Electronics Lab"
  }
];

const WHY = [
  { icon: Users, title: "Experienced Faculty", desc: "Mentors with decades of academic and industry expertise." },
  { icon: Sparkles, title: "Industry-Ready Curriculum", desc: "Updated syllabus aligned with current market demand." },
  { icon: Monitor, title: "Digital Classrooms", desc: "Smart boards and interactive learning environments." },
  { icon: Cpu, title: "Computer Labs", desc: "High-end systems with modern software and licensed tools." },
  { icon: Compass, title: "Career Guidance", desc: "One-on-one counselling for higher studies and careers." },
  { icon: Award, title: "Placement Support", desc: "Dedicated cell connecting students to top recruiters." },
];

const GALLERY = [
  { src: campusBuilding, label: "Campus" },
  { src: campusClassroom, label: "Classrooms" },
  { src: campusLab, label: "Labs" },
  { src: campusLibrary, label: "Library" },
  { src: campusEvents, label: "Events" },
  { src: campusSports, label: "Sports" },
];

const PLACEMENT = [
  { icon: Briefcase, title: "Top Recruiters", desc: "Tie-ups with leading IT, finance & consulting firms." },
  { icon: Sparkles, title: "Career Training", desc: "Aptitude, communication & technical bootcamps." },
  { icon: Users, title: "Mock Interviews", desc: "Real-world interview simulations by industry experts." },
  { icon: ShieldCheck, title: "Soft Skills", desc: "Personality development & professional grooming." },
  { icon: Award, title: "Placement Assistance", desc: "Year-round support from a dedicated placement cell." },
];

const TESTIMONIALS = [
  { img: student1, name: "Arjun Reddy", course: "BCA, 2024", text: "Vagdevi gave me both the technical edge and the confidence to crack my first software role. The labs and mentors are exceptional." },
  { img: student2, name: "Sneha Lakshmi", course: "B.Com, 2024", text: "The faculty here genuinely cares. The industry workshops helped me land a finance internship in my second year itself." },
  { img: student3, name: "Karthik Varma", course: "MBA, 2023", text: "Placement training was world-class. From mock interviews to soft skills, Vagdevi prepared me for every step of my career." },
];

const STEPS = [
  { n: "01", title: "Fill Enquiry", desc: "Submit the online enquiry form with your details." },
  { n: "02", title: "Counselling", desc: "Personalised guidance to choose the right course." },
  { n: "03", title: "Document Verification", desc: "Submit certificates for quick verification." },
  { n: "04", title: "Admission Confirmation", desc: "Pay fees and secure your seat for 2026." },
];

const FAQS = [
  { q: "How can I apply for admission?", a: "Fill the enquiry form on this page or call our admission helpline. Our counsellor will guide you through every step." },
  { q: "What courses are available?", a: "We offer B.Com, B.Sc, BCA, BBA, MBA and MCA across diverse specializations for the 2026 batch." },
  { q: "Is placement assistance provided?", a: "Yes. A dedicated placement cell, training programs, mock interviews and on-campus drives are available to every student." },
  { q: "How can I download the brochure?", a: "Click any 'Download Brochure' button on this page to instantly receive the latest prospectus." },
];

const WHATSAPP_NUMBER = "919000000000";
const BROCHURE_URL = "/brochure.pdf";

const GradCap = GraduationCap;

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [intent, setIntent] = useState("apply");
  const [activeDept, setActiveDept] = useState("computers");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openEnquiry = (i = "apply") => {
    setIntent(i);
    setModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <div id="home" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card border-b bg-white/95" : "bg-white/90 backdrop-blur-md border-b border-navy/5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between lg:justify-start lg:gap-14 px-4 py-3 lg:px-6">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="Vagdevi Logo" className="h-10 w-10 sm:h-11 sm:w-11 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg sm:text-xl font-extrabold text-navy tracking-tight">Vagdevi</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-navy/70 font-semibold">Autonomous College</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 ml-8 mr-auto">
            {NAV.map((n) => (
              <div key={n.label} className="relative group py-2">
                <a href={n.href}
                  className="text-xs xl:text-sm font-bold text-black hover:text-[#800020] transition-colors tracking-wide shrink-0 whitespace-nowrap">
                  {n.label}
                </a>
                {n.dropdown && (
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-64 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white/98 backdrop-blur-md rounded-xl shadow-elegant border border-navy/10 py-3 relative">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-navy/10"></div>
                      <div className="relative z-10 flex flex-col">
                        {n.dropdown.map((subItem) => (
                          <a key={subItem.label} href={subItem.href}
                            onClick={(e) => {
                              if (subItem.href === "#") {
                                e.preventDefault();
                              }
                            }}
                            className="block px-5 py-2 text-xs xl:text-sm font-bold text-navy hover:text-gold hover:bg-navy/5 transition-colors whitespace-nowrap">
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>



          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-navy p-1" aria-label="Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-5 py-5 shadow-elegant max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {NAV.map((n) => (
                <div key={n.label} className="flex flex-col">
                  {n.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === n.label ? null : n.label)}
                        className="flex items-center justify-between w-full text-sm font-bold text-navy hover:text-gold transition-colors py-1"
                      >
                        <span>{n.label}</span>
                        {mobileSubmenuOpen === n.label ? (
                          <Minus className="h-4 w-4 text-navy/70" />
                        ) : (
                          <Plus className="h-4 w-4 text-navy/70" />
                        )}
                      </button>
                      {mobileSubmenuOpen === n.label && (
                        <div className="pl-4 mt-2 border-l border-navy/10 flex flex-col gap-2.5 py-1">
                          {n.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => {
                                setMenuOpen(false);
                              }}
                              className="text-xs font-bold text-navy/80 hover:text-gold transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={n.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-bold text-navy hover:text-gold transition-colors py-1"
                    >
                      {n.label}
                    </a>
                  )}
                </div>
              ))}

            </div>
          </div>
        )}
      </header>

      {/* HERO - Single Background Image Model */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroCampus} alt="Vagdevi Campus" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/35 lg:to-navy/20"></div>
          {/* Subtle Dots Overlay Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            
            {/* LEFT */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-white border border-white/15 backdrop-blur">
                ★ ADMISSIONS OPEN 2026-27
              </span>

              <h1 className="mt-6 font-display text-[2.75rem] sm:text-5xl lg:text-[3.8rem] font-medium leading-[1.1] text-white tracking-tight">
                Where <span className="italic font-display text-gold">Excellence</span> Meets
                <br />
                Opportunity.
              </h1>

              {/* Custom divider with shield logo */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/10" />
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold shadow-soft">
                  <img src={logo} alt="Shield Emblem" className="h-6 w-6 object-contain brightness-0" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/10" />
              </div>

              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/80">
                Vagdevi Degree College (Autonomous) — a premier institution in Narsaraopet, Andhra Pradesh, shaping future-ready graduates through academic rigour, research and industry-integrated learning. Affiliated to Acharya Nagarjuna University.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => openEnquiry("apply")}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy shadow-soft transition-all hover:scale-[1.02] hover:bg-gold-soft cursor-pointer">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => openEnquiry("brochure")}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-soft hover:bg-white/20 transition-all cursor-pointer backdrop-blur">
                  <Compass className="h-4 w-4 text-gold" /> Virtual Campus Tour
                </button>
              </div>
            </div>

            {/* RIGHT - Floating Credentials Glass Card */}
            <div className="relative animate-fade-up flex justify-center lg:justify-end">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/10 border border-white/15 p-6 rounded-2xl max-w-md shadow-elegant backdrop-blur-md">
                <img src={naacIsoBadge} alt="NAAC Accredited B+ Grade & ISO 9001:2015 certified" className="h-16 object-contain mx-auto sm:mx-0 bg-white/90 p-2.5 rounded-xl shadow-soft" />
                <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4">
                  <div className="text-[10px] font-bold text-gold uppercase tracking-wider">Institution Credentials</div>
                  <div className="text-sm font-bold text-white mt-0.5">Accredited B+ by NAAC & ISO Certified</div>
                  <p className="text-xs text-white/70 mt-1 leading-normal font-medium">Meeting standard qualities in academic excellence.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Premium Bottom Credentials Banner Row */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-white border border-border p-4 shadow-soft">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-border text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start px-4">
                <Award className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-navy/70">NAAC</div>
                  <div className="text-xs font-bold text-navy">Accredited</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start px-4 pt-3 md:pt-0">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-navy/70">UGC</div>
                  <div className="text-xs font-bold text-navy">Recognised</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start px-4 pt-3 md:pt-0">
                <Building2 className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-navy/70">Autonomous</div>
                  <div className="text-xs font-bold text-navy">Status</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start px-4 pt-3 md:pt-0">
                <GradCap className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-navy/70">ANU</div>
                  <div className="text-xs font-bold text-navy">Affiliated to ANU</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="relative px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-elegant sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:p-6">
          {[
            { k: "30+", v: "Years of Excellence" },
            { k: "5000+", v: "Students" },
            { k: "120+", v: "Experienced Faculty" },
            { k: "50+", v: "Recruiters" },
            { k: "95%", v: "Placement Record" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl bg-gradient-soft px-4 py-5 text-center">
              <div className="font-display text-3xl font-semibold text-navy sm:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCREDITATIONS & TRUST PORTAL */}
      <Section id="accreditations" eyebrow="Affiliations" title="Accredited & Affiliated" subtitle="Meeting the highest standards of regulatory bodies & educational commissions.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACCREDITATIONS.map((a) => (
            <div key={a.title} className="glass-card rounded-2xl p-6 border border-border transition-all hover:scale-[1.02]">
              <div className="text-gold font-bold text-xs uppercase tracking-widest">{a.title}</div>
              <h3 className="text-navy font-semibold text-lg mt-1">{a.subtitle}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mt-2">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ACADEMICS & DEPARTMENTS switcher */}
      <Section id="academics" eyebrow="Faculties" title="Academic Departments" subtitle="Our academic framework is structured to cultivate specialized talents across departments." soft>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {ACADEMIC_DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all border cursor-pointer ${
                activeDept === dept.id
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy/80 border-border hover:bg-navy/5"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-border shadow-soft">
          {ACADEMIC_DEPARTMENTS.filter(d => d.id === activeDept).map((d) => (
            <div key={d.id} className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">{d.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                <div className="mt-6 p-4 rounded-2xl bg-gold-soft/40 border border-gold-soft/60">
                  <div className="text-[10px] font-bold text-navy-deep uppercase tracking-wider">Department Assets & Strength</div>
                  <div className="text-xs font-semibold text-navy mt-1">{d.strength}</div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3">Courses Offered</h4>
                <ul className="space-y-3">
                  {d.courses.map((course) => (
                    <li key={course} className="flex gap-2 items-center text-xs font-medium text-navy-deep">
                      <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COURSES */}
      <Section id="courses" eyebrow="Programs" title="Courses Offered" subtitle="UG and PG programs designed for academic depth and career readiness.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map(({ icon: Icon, name, desc, dur }) => (
            <article key={name} className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-gold opacity-10 transition-opacity group-hover:opacity-25" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">Duration · {dur}</span>
                <button onClick={() => openEnquiry("apply")} className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-royal">
                  Know More <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section id="why" eyebrow="Why Choose Us" title="Why Vagdevi" subtitle="Six reasons thousands of students choose us each year." soft>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-navy">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CAMPUS */}
      <Section id="campus" eyebrow="Campus Life" title="Life at Vagdevi" subtitle="A vibrant campus that nurtures learning, leadership and lasting friendships.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <div key={g.label} className={`group relative overflow-hidden rounded-3xl shadow-soft ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
              <img src={g.src} alt={g.label} loading="lazy" width={1024} height={1024}
                className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-square"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/10 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Explore</div>
                <div className="font-display text-xl font-semibold text-white">{g.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PLACEMENTS */}
      <section id="placements" className="relative overflow-hidden bg-navy-deep py-24 text-white">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-royal/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead eyebrow="Placements" title="Building Careers, Not Just Degrees" subtitle="Our placement cell prepares every student to succeed in interviews and on the job." dark />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PLACEMENT.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-dark rounded-2xl p-6 text-white">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-navy-deep">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <button onClick={() => openEnquiry("apply")} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]">
              Start Your Career Journey <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* EXAMINATION CELL & ACADEMIC HUB */}
      <Section id="exams" eyebrow="Evaluation" title="Examination Cell" subtitle="Structured timelines, transparent evaluations, and convenient academic circulars." soft>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-3xl p-6 border border-border shadow-soft">
            <Calendar className="h-8 w-8 text-gold" />
            <h3 className="text-navy font-semibold text-lg mt-4">Academic Calendar 2026</h3>
            <p className="text-muted-foreground text-xs mt-2">Get the latest timelines regarding mid-terms, semester starts, and educational excursions.</p>
            <button onClick={() => openEnquiry("brochure")} className="inline-flex items-center gap-1 text-xs font-semibold text-navy mt-4">
              View Calendar <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          
          <div className="bg-white rounded-3xl p-6 border border-border shadow-soft">
            <FileText className="h-8 w-8 text-gold" />
            <h3 className="text-navy font-semibold text-lg mt-4">Evaluation Guidelines</h3>
            <p className="text-muted-foreground text-xs mt-2">Details on credits, grade points (GPA/CGPA) systems, and eligibility criteria for promotions.</p>
            <button onClick={() => openEnquiry("apply")} className="inline-flex items-center gap-1 text-xs font-semibold text-navy mt-4">
              Get Guidebook <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-border shadow-soft">
            <GraduationCap className="h-8 w-8 text-gold" />
            <h3 className="text-navy font-semibold text-lg mt-4">Syllabus Copies</h3>
            <p className="text-muted-foreground text-xs mt-2">Download the department-wise curriculum blueprint and textbook suggestions.</p>
            <button onClick={() => openEnquiry("brochure")} className="inline-flex items-center gap-1 text-xs font-semibold text-navy mt-4">
              Download Syllabus <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </Section>

      {/* STUDENT DEVELOPMENT & CLUBS */}
      <Section eyebrow="Clubs & Activities" title="Student Clubs & Activities" subtitle="Holistic grooming through active cultural, technical, and sports cells.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative group overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-soft">
            <ClubIcon className="h-7 w-7 text-gold" />
            <h3 className="text-navy font-semibold text-base mt-3">NSS & NCC Wings</h3>
            <p className="text-muted-foreground text-xs mt-1.5">Instilling discipline and community-first approach via weekly social service & patriotic campings.</p>
          </div>
          
          <div className="relative group overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-soft">
            <Code2 className="h-7 w-7 text-gold" />
            <h3 className="text-navy font-semibold text-base mt-3">Tech-Infinity Club</h3>
            <p className="text-muted-foreground text-xs mt-1.5">For coding enthusiast students. Organizing hackathons, UI workshops, and coding challenges.</p>
          </div>

          <div className="relative group overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-soft">
            <SportsIcon className="h-7 w-7 text-gold" />
            <h3 className="text-navy font-semibold text-base mt-3">Vagdevi Sports Cell</h3>
            <p className="text-muted-foreground text-xs mt-1.5">Active representation in state-level cricket, volleyball, and indoor chess athletic leagues.</p>
          </div>

          <div className="relative group overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-soft">
            <Sparkles className="h-7 w-7 text-gold" />
            <h3 className="text-navy font-semibold text-base mt-3">Cultural & Literary Club</h3>
            <p className="text-muted-foreground text-xs mt-1.5">Cultivating literature reviews, public debate forums, and annual inter-collegiate stage musicals.</p>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Voices" title="What Our Students Say" subtitle="Real stories from students who built their future at Vagdevi." soft>
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass-card rounded-3xl p-7">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/85">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img src={t.img} alt={t.name} width={56} height={56} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40" />
                <div>
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ADMISSIONS PROCESS */}
      <Section id="admissions" eyebrow="Process" title="How to Join Vagdevi" subtitle="A simple, four-step admission process designed for clarity and speed.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-white p-7 shadow-soft">
              <div className="font-display text-5xl font-semibold text-gold/30">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute right-4 top-7 hidden h-4 w-4 text-gold/50 lg:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => openEnquiry("apply")} className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-deep">
            Apply Today <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQs" title="Frequently Asked Questions" soft>
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
                <button onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-base font-semibold text-navy">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-soft text-navy">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-navy-deep p-10 text-center text-white shadow-elegant sm:p-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Limited Seats · Apply Early
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Admissions Open for <span className="text-gold">2026</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Take the first step toward a successful career. Reserve your seat at Vagdevi today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => openEnquiry("apply")} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]">
              Apply Now <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => openEnquiry("brochure")} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              <Download className="h-4 w-4" /> Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vagdevi Logo" className="h-10 w-10 object-contain" />
              <div className="leading-tight">
                <div className="font-display text-lg font-bold text-navy">Vagdevi</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Degree & PG College</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Shaping futures through industry-oriented education for over three decades.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-navy transition hover:bg-navy hover:text-white">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={NAV.slice(0, 5).map((n) => ({ label: n.label, href: n.href }))} />
          <FooterCol title="Courses" links={COURSES.map((c) => ({ label: c.name, href: "#courses" }))} />

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Vagdevi Campus, Andhra Pradesh, India</li>
              <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +91 90000 00000</li>
              <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> admissions@vagdevi.edu.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
            <div>© {new Date().getFullYear()} Vagdevi Degree & PG College. All rights reserved.</div>
            <div>Crafted with care · Admissions 2026</div>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <button onClick={() => openEnquiry("brochure")} className="hidden items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white shadow-elegant transition hover:bg-navy-deep sm:inline-flex border-none cursor-pointer">
          <Download className="h-3.5 w-3.5" /> Brochure
        </button>
        <a href="tel:+919000000000" aria-label="Call" className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-elegant transition hover:scale-105">
          <Phone className="h-5 w-5" />
        </a>
        <button onClick={() => openEnquiry("whatsapp")} aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105 border-none cursor-pointer">
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>

      {/* ENQUIRY MODAL */}
      {modalOpen && (
        <EnquiryModal intent={intent} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}

function EnquiryModal({ intent, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (intent === "whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to enquire about admissions at Vagdevi Degree College.")}`, "_blank");
      onClose();
      return;
    }
    setSubmitted(true);
  };

  const title =
    intent === "brochure" ? "Download Brochure" :
    intent === "whatsapp" ? "Chat on WhatsApp" :
    "Admission Enquiry";

  const subtitle =
    intent === "brochure" ? "Share your details and get the prospectus instantly." :
    intent === "whatsapp" ? "Share your details — we'll continue the chat on WhatsApp." :
    "Our admission counsellor will get back within 24 hours.";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 animate-fade-up">
      <button aria-label="Close" onClick={onClose}
        className="absolute inset-0 bg-navy-deep/60 backdrop-blur-md border-none cursor-pointer" />

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/40 bg-white/90 shadow-elegant backdrop-blur-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-gold opacity-25 blur-2xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-royal/20 blur-2xl" />

        <button onClick={onClose} aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-navy/10 bg-white/80 text-navy transition hover:bg-white cursor-pointer">
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-7 sm:p-9">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Vagdevi · 2026 Batch</div>
          <h3 className="mt-1 font-display text-2xl font-semibold text-navy sm:text-3xl">{title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>

          {submitted ? (
            <div className="mt-6 rounded-2xl border border-border bg-gradient-soft p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-navy-deep">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              {intent === "brochure" ? (
                <>
                  <p className="mt-4 font-display text-xl font-semibold text-navy">Thank you for your interest.</p>
                  <p className="mt-1 text-sm text-muted-foreground">Your brochure is ready.</p>
                  <a href={BROCHURE_URL} download
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]">
                    <Download className="h-4 w-4" /> Download Brochure
                  </a>
                </>
              ) : (
                <>
                  <p className="mt-4 font-display text-xl font-semibold text-navy">Enquiry received!</p>
                  <p className="mt-1 text-sm text-muted-foreground">Our admission counsellor will contact you shortly.</p>
                  <button onClick={onClose}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep cursor-pointer">
                    Close
                  </button>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Student Name">
                  <input required type="text" placeholder="Full name"
                    className="w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-ring focus:ring-2" />
                </Field>
                <Field label="Mobile Number">
                  <input required type="tel" pattern="[0-9]{10}" placeholder="10-digit number"
                    className="w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-ring focus:ring-2" />
                </Field>
              </div>
              <Field label="Email Address">
                <input required type="email" placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-ring focus:ring-2" />
              </Field>
              <Field label="Course Interested">
                <select required defaultValue=""
                  className="w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-ring focus:ring-2">
                  <option value="" disabled>Select a course</option>
                  {COURSES.map((c) => <option key={c.name}>{c.name}</option>)}
                </select>
              </Field>
              <Field label="Message">
                <textarea rows={3} placeholder="Tell us anything you'd like us to know (optional)"
                  className="w-full resize-none rounded-xl border border-input bg-white/80 px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-ring focus:ring-2" />
              </Field>
              <button type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy to-navy-deep px-5 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.01] cursor-pointer">
                {intent === "brochure" ? "Submit & Get Brochure"
                  : intent === "whatsapp" ? "Submit & Open WhatsApp"
                  : "Submit Enquiry"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                By submitting, you agree to be contacted by our admission team.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/70">{label}</span>
      {children}
    </label>
  );
}

function SectionHead({ eyebrow, title, subtitle, dark }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className={`text-[11px] font-semibold uppercase tracking-[0.25em] text-gold`}>{eyebrow}</div>
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children, soft }) {
  return (
    <section id={id} className={`relative px-5 py-24 lg:px-8 ${soft ? "bg-gradient-soft" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}><a href={l.href} className="hover:text-navy">{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
