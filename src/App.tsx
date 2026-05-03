/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  FlaskConical, 
  Bus, 
  Trophy, 
  Users, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Download,
  Calendar,
  AlertCircle
} from 'lucide-react';
import Logo from './components/Logo';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b-2 border-brand-blue py-2 shadow-sm' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="flex flex-col">
            <h1 className={`font-heading font-black text-sm md:text-xl leading-none uppercase tracking-tighter ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
              NAVCHETAN <span className="text-brand-orange">VIDYA MANDIR</span>
            </h1>
            <p className={`font-hindi text-[9px] md:text-xs font-bold mt-0.5 tracking-wide ${isScrolled ? 'text-slate-400' : 'text-white/70'}`}>
              नवचेतन विद्या मंदिर स्कूल फकीला, दरभंगा
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`transition-colors hover:text-brand-orange border-b-2 ${isScrolled ? (link.name === 'Home' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-slate-600') : 'border-transparent text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#admissions"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2 rounded font-bold text-xs shadow-sm transition-all active:scale-95"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? 'text-brand-blue' : 'text-white'} /> : <Menu className={isScrolled ? 'text-brand-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-800 font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#admissions"
              className="bg-brand-blue text-white px-8 py-2 rounded-full font-semibold mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[600px] h-[80vh] flex items-center overflow-hidden bg-brand-blue">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="School Building" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full mt-12">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl"
        >
          <span className="bg-brand-orange text-[10px] uppercase font-bold px-2 py-1 rounded inline-block mb-4 text-white tracking-widest leading-none">
            Senior Secondary (10+2)
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-2 text-white leading-tight uppercase tracking-tight">
            Excellence in <br />
            <span className="text-orange-400">Education</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium italic mb-8 border-l-2 border-orange-500 pl-4">
            "Knowledge is the Ultimate Power"
          </p>
          
          <div className="flex flex-row gap-3">
            <motion.a 
              href="#admissions"
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brand-blue px-6 py-2.5 rounded font-bold text-sm transition-all hover:bg-blue-50"
            >
              Enroll Now
            </motion.a>
            <motion.a 
              href="#about"
              whileTap={{ scale: 0.95 }}
              className="border border-white/40 text-white px-6 py-2.5 rounded font-bold text-sm transition-all hover:bg-white/10"
            >
              View Prospectus
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating features - High Density Style */}
      <div className="absolute bottom-6 left-0 w-full hidden md:block">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl inline-flex gap-8">
            {[
              { icon: <CheckCircle className="text-orange-400" size={16} />, title: "Session 2026-27", desc: "Admission Open" },
              { icon: <MapPin className="text-orange-400" size={16} />, title: "Bihar State", desc: "Phakila, Darbhanga" },
              { icon: <Calendar className="text-orange-400" size={16} />, title: "Ongoing", desc: "Registrations" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 pr-8 last:pr-0 border-r last:border-0 border-white/20">
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-[11px] text-white uppercase tracking-wider">{feature.title}</h3>
                  <p className="text-white/60 text-[10px]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-bg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="high-density-card p-6 flex flex-col justify-center text-center">
              <p className="text-3xl font-black text-brand-blue">15+</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div className="high-density-card p-6 flex flex-col justify-center text-center">
              <p className="text-3xl font-black text-brand-blue">1500+</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Active Students</p>
            </div>
            <div className="col-span-2 high-density-card relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop" 
                alt="Students" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="high-density-card p-8 md:p-10 border-t-4 border-t-orange-600"
          >
            <h4 className="text-brand-blue font-bold border-l-4 border-brand-orange pl-3 mb-4 text-sm uppercase tracking-wider">About Our Institution</h4>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-brand-blue mb-4 leading-tight uppercase">
              Nurturing Minds since <span className="text-brand-orange">2010</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 mb-6">
              Navchetan Vidya Mandir is a premier 10+2 English medium institution in Phakila, Darbhanga. We have been dedicated to nurturing young minds for over 15 years through balanced academic and moral development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Modern Multi-media Classes",
                "Qualified Subject Experts",
                "Safe Campus Environment",
                "GPS Tracking Transport"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-orange shrink-0" />
                  <span className="text-slate-700 text-xs font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-brand-blue text-white px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-brand-blue-hover transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Students", value: "1500+", icon: <Users size={16} /> },
    { label: "Faculty", value: "60+", icon: <CheckCircle size={16} /> },
    { label: "Experience", value: "15+", icon: <Clock size={16} /> },
    { label: "Awards", value: "20+", icon: <Trophy size={16} /> },
  ];

  return (
    <section className="py-10 bg-brand-blue border-b border-brand-blue-hover">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between"
            >
              <div>
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-xl font-black text-brand-orange leading-tight mt-1">{stat.value}</h3>
              </div>
              <div className="text-white/20">{stat.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ borderColor: 'var(--color-brand-orange)' }}
    className="bg-slate-50 border border-slate-100 p-5 rounded hover:bg-white shadow-sm transition-all group"
  >
    <div className="text-brand-orange font-bold mb-2 uppercase text-[10px] tracking-widest flex items-center gap-2">
       <span className="w-6 h-6 flex items-center justify-center shrink-0">{icon}</span>
       {title}
    </div>
    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
      {desc}
    </p>
  </motion.div>
);

const FacilitiesSection = () => {
  const facilities = [
    { icon: <FlaskConical size={14} />, title: "Modern Labs", desc: "Science & Hi-tech Computer labs" },
    { icon: <BookOpen size={14} />, title: "Digital Classes", desc: "Digital learning systems for modern kids" },
    { icon: <Bus size={14} />, title: "Safe Transport", desc: "GPS enabled school buses for safe commute" },
    { icon: <Trophy size={14} />, title: "Sports Area", desc: "Large multi-sport playground for events" },
    { icon: <Users size={14} />, title: "Library", desc: "Extensive collection of books and archives" },
    { icon: <CheckCircle size={14} />, title: "Activity", desc: "Dedicated rooms for art and culture" },
  ];

  return (
    <section id="facilities" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h4 className="text-brand-blue font-bold mb-1 flex items-center gap-2">
              <span className="w-1 h-3 bg-brand-orange inline-block"></span>
              Modern Facilities
            </h4>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">Ongoing Expansion 2026-27</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((fac, i) => (
            <FacilityCard 
              key={i} 
              icon={fac.icon}
              title={fac.title}
              desc={fac.desc}
            />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-tight">
          Campus Gallery: Street View / 360° tour available to explore
        </div>
      </div>
    </section>
  );
};

const PrincipalMessage = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-brand-blue rounded-[3rem] p-8 md:p-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Principal" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-2xl shadow-xl">
                  <h4 className="font-bold text-xl">Dr. Alok Kumar</h4>
                  <p className="text-sm opacity-90">M.A., B.Ed, PhD</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 text-white">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-6 block">From the Desk of Principal</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic">
                "Every child is a unique seed that needs nurturing to grow into a strong and successful individual."
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  At Navchetan Vidya Mandir School, we believe that education is more than just textbooks and examinations. It is a journey of self-discovery, character building, and academic excellence.
                </p>
                <p>
                  Our mission is to provide an environment where students feel safe to explore, question, and excel. We are committed to technological advancement while staying rooted in our cultural values.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-white/30"></div>
                <span className="font-hindi text-xl opacity-60">शुभकामनाएं</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdmissionSection = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    parentContact: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ studentName: '', className: '', parentContact: '', email: '' });
    }, 1000);
  };

  return (
    <section id="admissions" className="py-16 bg-slate-bg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="high-density-card p-6 bg-white border-t-4 border-t-brand-orange">
              <span className="bg-orange-600 text-white text-[10px] uppercase px-2 py-1 rounded inline-block mb-3 font-bold">Registration Started</span>
              <h2 className="text-3xl font-black text-brand-blue mb-2 uppercase tracking-tight">Admission Open <span className="text-brand-orange">2026-27</span></h2>
              <p className="text-slate-500 text-sm italic mb-6">"Start your child's journey with excellence and moral values."</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {[
                   { icon: <Download size={16} />, title: "PROSPECTUS", color: "blue" },
                   { icon: <Calendar size={16} />, title: "VISIT CAMPUS", color: "orange" },
                   { icon: <AlertCircle size={16} />, title: "MAY 30 DEADLINE", color: "red" }
                 ].map((item, i) => (
                   <div key={i} className="bg-slate-50 border border-slate-100 p-3 rounded flex items-center gap-3">
                     <span className="text-brand-blue shrink-0">{item.icon}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest">{item.title}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="high-density-card p-4">
                  <h4 className="text-xs font-bold text-brand-blue mb-4 uppercase tracking-tighter border-b pb-2">Academic Tiers</h4>
                  <div className="space-y-2">
                    {["Primary Wing (Nur-V)", "Middle School (VI-VIII)", "Secondary (IX-X)", "Sr. Secondary (XI-XII)"].map((tier, i) => (
                      <div key={i} className="flex justify-between text-[11px] font-medium text-slate-600">
                        <span>{tier}</span>
                        <CheckCircle size={12} className="text-brand-orange" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="high-density-card bg-brand-blue p-4 text-white">
                  <h4 className="text-xs font-bold text-orange-400 mb-4 uppercase tracking-tighter border-b border-white/10 pb-2">Principal Message</h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-slate-400 rounded-full border-2 border-brand-orange"></div>
                    <div>
                      <p className="text-[10px] font-bold">Dr. Alok Kumar</p>
                      <p className="text-[9px] text-white/60 italic">Principal (PhD)</p>
                    </div>
                  </div>
                  <p className="text-[10px] italic leading-relaxed opacity-90">"Every child is a unique seed that needs nurturing to grow into a successful individual."</p>
                </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-4">
            <div className="high-density-card p-6 shadow-md border-t-4 border-t-brand-blue h-full bg-white">
              <h4 className="text-brand-blue font-bold text-center mb-1 text-sm uppercase">Quick Inquiry</h4>
              <p className="text-center text-[10px] text-slate-500 mb-6 uppercase tracking-widest font-bold">Session 2026-27 Enrollment</p>
              
              {isSubmitted ? (
                <div className="text-center py-10 bg-slate-50 rounded-xl">
                  <CheckCircle size={32} className="text-green-600 mx-auto mb-3" />
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">Application Received</p>
                  <p className="text-[10px] text-slate-500 mt-1">We will contact you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      placeholder="Student Full Name"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded outline-none focus:border-brand-blue"
                    />
                  </div>
                  <select 
                    required
                    value={formData.className}
                    onChange={(e) => setFormData({...formData, className: e.target.value})}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded outline-none focus:border-brand-blue"
                  >
                    <option value="">Select Target Class</option>
                    <option value="Nur-UKG">Nur - UKG</option>
                    <option value="1-5">Class 1 to 5</option>
                    <option value="6-8">Class 6 to 8</option>
                    <option value="9-12">Class 9 to 12</option>
                  </select>
                  <input 
                    type="tel" 
                    required
                    value={formData.parentContact}
                    onChange={(e) => setFormData({...formData, parentContact: e.target.value})}
                    placeholder="Parent Phone Number"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded outline-none focus:border-brand-blue"
                  />
                  <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded text-xs uppercase tracking-widest hover:bg-brand-blue-hover transition-all shadow-sm">
                    Submit Inquiry Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnnouncementBanner = () => (
  <div className="bg-white border-y border-slate-200 py-3 overflow-hidden relative shadow-sm">
    <div className="max-w-7xl mx-auto px-4 flex items-center whitespace-nowrap">
      <div className="flex items-center gap-2 font-bold uppercase tracking-tighter bg-orange-600 text-white px-3 py-1 rounded text-[10px] mr-6 z-10 shadow-sm shrink-0">
        <AlertCircle size={14} /> Latest Update
      </div>
      <motion.div 
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-16 font-semibold text-xs text-slate-600 uppercase tracking-wide"
      >
        <span>Board Registration Started - Deadline May 30, 2026</span>
        <span className="text-brand-orange">•</span>
        <span>Annual Sports Meet scheduled for 15 May 2026</span>
        <span className="text-brand-orange">•</span>
        <span>Summer Holidays starting from 1st June 2026</span>
        <span className="text-brand-orange">•</span>
        <span>Admission open for Session 2026-27 Enrollment</span>
      </motion.div>
    </div>
  </div>
);

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = [
    "https://images.unsplash.com/photo-1544250221-729930f329d0?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577891729319-f48710d408f3?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop"
  ];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 uppercase tracking-tighter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="text-left font-black">
            <h4 className="text-brand-blue flex items-center gap-2 text-sm">
               <span className="w-1 h-3 bg-brand-orange inline-block"></span>
               Campus Gallery
            </h4>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Captured moments of excellence</p>
          </div>
          <button className="bg-slate-50 border border-slate-200 text-brand-blue px-6 py-2 rounded font-black text-[10px] flex items-center gap-2 hover:bg-white transition-all uppercase tracking-widest">
            Virtual Tour 360° <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div 
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`overflow-hidden rounded-lg shadow-sm border border-slate-200 bg-slate-50 relative group aspect-square hover:border-brand-orange transition-all cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img src={img} alt="Campus" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[8px] font-bold rounded">CAMPUS_IMG_{i+1}</div>
              <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-2 rounded-full shadow-lg">
                  <ChevronRight size={16} className="text-brand-blue" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-4 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>

            <div 
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={images[selectedIndex]} 
                alt="Enlarged Campus View" 
                className="w-full h-full object-contain rounded-lg border border-white/10 shadow-2xl"
              />
              <div className="absolute bottom-[-40px] left-0 w-full text-center">
                <p className="text-white font-black text-xs uppercase tracking-[0.2em]">
                  {selectedIndex + 1} / {images.length} — CAMPUS_MOMENT_CAP_{selectedIndex + 1}
                </p>
              </div>
            </div>

            <button 
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-4 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Map Column */}
          <div className="lg:col-span-7 h-[450px] high-density-card bg-slate-100">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114865.73634024844!2d85.78763569726562!3d26.115000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edbe420310240d%3A0x9ef245e3fef3c563!2sDarbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1714752780000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="high-density-card bg-slate-800 text-white p-6 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-orange-400 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                   <span className="w-1 h-3 bg-orange-400 inline-block"></span>
                   Location & Contact
                </h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-slate-400 shrink-0" />
                    <p className="text-xs font-medium leading-relaxed">Near Durga Mandir, Balaha, <br />Phakila, Darbhanga, Bihar – 847429</p>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={20} className="text-slate-400 shrink-0" />
                    <p className="text-xs font-medium leading-relaxed tracking-tighter opacity-90 uppercase">
                      +91 0000 000 000 <br />
                      +91 1111 111 111
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={20} className="text-slate-400 shrink-0" />
                    <p className="text-xs font-medium leading-relaxed opacity-90 lowercase underline">info@navchetanvidyamandir.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center">
                 <div className="flex gap-3">
                   {[Facebook, Instagram, Twitter].map((Icon, i) => (
                     <a key={i} href="#" className="w-8 h-8 rounded border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                       <Icon size={14} />
                     </a>
                   ))}
                 </div>
                 <div className="bg-slate-700 px-3 py-1 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                   3XR4+7C Darbhanga
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-6 text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[10px] uppercase font-black tracking-widest leading-none">
          <span className="text-slate-800">© 2026 Navchetan Vidya Mandir School</span>
          <a href="#" className="hover:text-brand-blue border-b border-transparent hover:border-brand-blue">Privacy Policy</a>
          <a href="#" className="hover:text-brand-blue border-b border-transparent hover:border-brand-blue">Terms</a>
          <a href="#" className="hover:text-brand-blue border-b border-transparent hover:border-brand-blue">Alumni</a>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-brand-blue font-black uppercase text-[10px] tracking-tight whitespace-nowrap">Official: FB / IG / YT / LI</span>
          <a 
            href="https://wa.me/910000000000"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-1.5 rounded-full font-black text-[10px] hover:bg-green-600 transition-all uppercase tracking-widest shadow-sm"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/910000000000" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90 flex items-center justify-center"
  >
    <MessageCircle size={32} />
  </a>
);

const AdmissionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-24 right-6 z-40 bg-white p-5 rounded-xl shadow-xl border border-slate-200 max-w-xs border-t-4 border-t-brand-orange"
    >
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
      >
        <X size={16} />
      </button>
      <div className="flex items-center gap-3 mb-3">
        <Logo className="w-10 h-10" />
        <div>
          <h4 className="font-bold text-xs text-brand-blue uppercase tracking-tight">Admission Open!</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Session 2026-27 Enrollment</p>
        </div>
      </div>
      <p className="text-slate-600 text-xs mb-4 leading-relaxed font-medium">
        Limited seats available for Class 11 & 12 Science/Arts streams. Secure your child's future at our premier institution.
      </p>
      <a 
        href="#admissions"
        onClick={() => setIsVisible(false)}
        className="block bg-brand-blue text-white text-center py-2.5 rounded font-black text-[10px] uppercase tracking-widest hover:bg-brand-blue-hover transition-all shadow-sm"
      >
        Apply Online Now
      </a>
    </motion.div>
  );
};

export default function App() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <AnnouncementBanner />
      <AboutSection />
      <StatsSection />
      <FacilitiesSection />
      <PrincipalMessage />
      <AdmissionSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <AdmissionPopup />
    </main>
  );
}
