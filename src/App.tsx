/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Star, 
  ChevronRight,
  Menu as MenuIcon,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = [
    "https://i.postimg.cc/HWJjcMDQ/686992500-122100197834430981-7458300441110132464-n.jpg",
    "https://i.postimg.cc/XNTqwv4w/688835667-122100422486430981-2771870882607406161-n.jpg"
  ];

  const openingHours = [
    { day: "Poniedziałek", hours: "10:00 - 22:00" },
    { day: "Wtorek", hours: "10:00 - 22:00" },
    { day: "Środa", hours: "10:00 - 22:00" },
    { day: "Czwartek", hours: "10:00 - 22:00" },
    { day: "Piątek", hours: "10:00 - 00:00" },
    { day: "Sobota", hours: "10:00 - 00:00" },
    { day: "Niedziela", hours: "11:00 - 00:00" },
  ];

  const reels = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2997419573784793%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1547301043612039%2F&show_text=false&width=267&t=0"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-obsidian/90 backdrop-blur-lg transition-all duration-700 border-b border-gold/5">
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-velvet/30 to-transparent"></div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-8">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="font-serif text-2xl md:text-3xl font-light italic text-gold cursor-pointer uppercase tracking-[0.5em] transition-all hover:text-gold-light"
          >
            Broadway
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden space-x-12 md:flex">
            {["O nas", "Galeria", "Godziny", "Kontakt"].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="nav-link relative group"
                whileHover={{ opacity: 1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-gold hover:text-gold-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} strokeWidth={1} />}
          </motion.button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="overflow-hidden bg-obsidian/95 backdrop-blur-xl md:hidden border-b border-gold/10"
            >
              <div className="flex flex-col items-center space-y-8 py-12">
                {["O nas", "Galeria", "Godziny", "Kontakt"].map((item, idx) => (
                  <motion.a 
                    key={item} 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={`#${item.toLowerCase().replace(" ", "-")}`} 
                    className="nav-link text-sm tracking-[0.4em]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black selection:bg-velvet selection:text-white">
        {/* Animated Spotlight Effect */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 left-1/4 h-[150%] w-[150%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-obsidian/60 to-obsidian"></div>
          <motion.img 
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 4, ease: [0.19, 1, 0.22, 1] }}
            src={images[0]} 
            alt="Broadway Background" 
            className="h-full w-full object-cover grayscale-[30%] brightness-[0.8]"
          />
        </div>

        {/* Improved Curtain Intro */}
        <motion.div 
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
          className="absolute inset-0 z-40 bg-obsidian origin-top shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute bottom-0 left-0 w-full h-px bg-gold/20"></div>
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-12">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gold/40"></div>
              <p className="font-display text-[10px] uppercase tracking-[0.8em] text-gold/50 font-medium">
                Restauracja.Broadway
              </p>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-gold/40"></div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mb-8 font-serif text-[15vw] sm:text-[180px] leading-[0.7] italic text-gold-light drop-shadow-[0_0_60px_rgba(212,175,55,0.15)] mix-blend-screen select-none"
            >
              Broadway
            </motion.h1>

            <motion.div variants={itemVariants} className="ornament-line opacity-40"></motion.div>
            
            <motion.p variants={itemVariants} className="mt-8 md:mt-12 font-serif text-xl sm:text-4xl text-white/80 max-w-3xl mx-auto italic tracking-wider leading-relaxed">
              Elegancka kuchnia europejska i ukraińska w wyjątkowej atmosferze.
            </motion.p>
          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-display text-[8px] uppercase tracking-[0.5em] text-gold/30">Odkryj Scenę</span>
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="h-24 w-[1px] bg-gradient-to-b from-gold/40 via-gold/10 to-transparent"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="relative py-32 md:py-64 px-6 md:px-8 overflow-hidden bg-obsidian">
        {/* Theatrical lighting effects */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/[0.02] via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.02] via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(139,0,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-20 md:gap-40 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="relative"
            >
              <div className="absolute -left-10 md:-left-20 -top-10 md:-top-20 text-[20vw] md:text-[25vw] font-serif italic text-white/[0.02] pointer-events-none select-none -z-10">Scene</div>
              
              <motion.h2 variants={itemVariants} className="theater-heading text-4xl sm:text-8xl mb-12 md:mb-16 relative z-10 border-l-4 border-velvet/20 pl-6 md:pl-8">Nasza Kuchnia</motion.h2>
              
              <div className="space-y-8 md:space-y-12 text-lg md:text-2xl text-white/70 leading-relaxed font-sans relative z-10">
                <motion.p variants={itemVariants} className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 md:first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1 md:first-letter:mt-2">
                  Broadway to więcej niż restauracja. To pasja do smaku i elegancji, którą celebrujemy każdego dnia na ulicy Modrzejowskiej w Sosnowcu.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Nasz kunszt kulinarny łączy w sobie to, co najlepsze w kuchni europejskiej z tradycyjnymi, serdecznymi smakami Ukrainy. 
                </motion.p>
                
                <motion.div variants={itemVariants} className="pt-12 md:pt-20 mt-12 md:mt-20 group relative">
                  <div className="absolute top-0 left-0 w-24 h-[2px] bg-gold/30"></div>
                  <span className="font-display text-[10px] uppercase tracking-[0.5em] text-gold/40 mb-6 md:mb-8 block font-semibold transition-all group-hover:text-gold group-hover:tracking-[0.6em]">Premiera Smaku</span>
                  <p className="text-xl md:text-3xl italic font-serif text-white/95 leading-tight transition-all duration-700 group-hover:text-gold-light group-hover:translate-x-2">
                    "Eleganckie wnętrza inspirowane duchem teatru, w których każdy posiłek staje się spektaklem smaku."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInScale}
              className="group relative"
            >
              <div className="absolute -inset-4 md:-inset-8 border border-gold/10 transition-all duration-1000 group-hover:scale-105 group-hover:border-gold/30"></div>
              <div className="aspect-[3/4] overflow-hidden relative rounded-sm shadow-2xl border border-white/5">
                <img 
                  src={images[1]} 
                  alt="Wnętrze Restauracji" 
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-transparent transition-colors duration-1000"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]"></div>
              </div>
              {/* Refined ornamental accents */}
              <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-12 md:w-20 h-12 md:h-20 border-t-2 border-l-2 border-gold/30 group-hover:border-gold group-hover:w-16 md:group-hover:w-24 group-hover:h-16 md:group-hover:h-24 transition-all duration-700"></div>
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-12 md:w-20 h-12 md:h-20 border-b-2 border-r-2 border-gold/30 group-hover:border-gold group-hover:w-16 md:group-hover:w-24 group-hover:h-16 md:group-hover:h-24 transition-all duration-700"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Map Section */}
      <section id="godziny" className="bg-[#020202] py-32 md:py-64 px-6 md:px-8 border-y border-gold/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.03)_0%,transparent_80%)] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-gold/[0.03] to-transparent pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-24 md:gap-40 lg:grid-cols-2">
            
            {/* Hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="flex flex-col items-center lg:items-start mb-16 md:mb-24">
                <motion.h2 variants={itemVariants} className="theater-heading text-4xl sm:text-7xl mb-6">Zapraszamy</motion.h2>
                <motion.div variants={itemVariants} className="h-1 w-24 bg-velvet/40"></motion.div>
              </div>

              <div className="space-y-0 group/hours">
                {openingHours.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row justify-between py-6 md:py-8 border-b border-white/5 transition-all duration-500 hover:pl-4 md:hover:pl-8 hover:border-gold/40 group/item relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-gold scale-y-0 group-hover/item:scale-y-100 transition-transform origin-top duration-500"></div>
                    <span className="font-display text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-white/30 group-hover/item:text-gold transition-colors font-medium mb-1 sm:mb-0">{item.day}</span>
                    <span className="font-serif italic text-lg md:text-2xl text-white/80 group-hover/item:text-white group-hover/item:tracking-wide transition-all">{item.hours}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-20 md:mt-32 p-8 md:p-16 border border-gold/10 bg-white/[0.01] relative overflow-hidden group/quote shadow-2xl backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover/quote:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-gold via-velvet to-gold scale-y-0 group-hover/quote:scale-y-100 transition-transform origin-top duration-700"></div>
                
                <p className="italic text-xl md:text-3xl text-white/95 mb-8 md:mb-12 font-serif leading-relaxed relative z-10 transition-all group-hover:translate-x-2">
                  "Serdecznie polecam. Wszystkie zamówione dania były podane elegancko i smakowały nieziemsko. Klasa sama w sobie. Obsługa bardzo miła. Na pewno tu wrócę"
                </p>
                <div className="h-px w-24 md:w-32 bg-gold/30 mb-8 md:mb-10"></div>
                <motion.a 
                  whileHover={{ x: 15 }}
                  href="https://www.facebook.com/profile.php?id=61562929442326&sk=reviews" 
                  target="_blank" 
                  rel="noreferrer"
                  className="relative z-10 inline-flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-gold font-display transition-all hover:text-gold-light hover:tracking-[0.5em]"
                >
                  <Facebook size={14} strokeWidth={1} />
                  Historie Gości
                  <ChevronRight size={14} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col"
            >
              <div className="flex flex-col items-center lg:items-start mb-16 md:mb-24">
                <motion.h2 variants={itemVariants} className="theater-heading text-4xl sm:text-7xl mb-6">Gdzie Jesteśmy</motion.h2>
                <motion.div variants={itemVariants} className="h-1 w-24 bg-velvet/40"></motion.div>
              </div>

              <motion.div 
                variants={itemVariants}
                className="relative mb-16 md:mb-24 aspect-video w-full overflow-hidden bg-black shadow-xl ring-1 ring-gold/10"
              >
                <div className="absolute inset-0 pointer-events-none z-10 box-decoration-clone border-[10px] md:border-[20px] border-obsidian/60 transition-all group-hover:border-transparent"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.90463070776!2d19.129831677022427!3d50.27503929997766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716dabba54e23c5%3A0x4d53b137e6e4c37e!2sModrzejowska%2043%2C%2041-200%20Sosnowiec!5e0!3m2!1spl!2spl!4v1778240611068!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              
              <div className="space-y-12 md:space-y-16">
                {[
                  { icon: MapPin, label: "Adres", val: "Modrzejowska 43, Sosnowiec 41-200" },
                  { icon: Phone, label: "Kontakt", val: "786 477 235" },
                  { icon: Mail, label: "E-mail", val: "broadwaylokal@gmail.com" }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-start gap-6 md:gap-10 group">
                    <div className="mt-1 p-3 md:p-4 rounded-full border border-gold/10 group-hover:border-gold/60 transition-all duration-700 bg-gold/[0.03] group-hover:bg-gold/10 shadow-[0_0_20px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                      <item.icon className="text-gold" size={24} md:size={28} strokeWidth={1} />
                    </div>
                    <div>
                      <p className="font-display text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/30 mb-2 md:mb-4 block font-medium group-hover:text-gold transition-colors">{item.label}</p>
                      <p className="text-xl md:text-3xl font-serif italic text-white/95 group-hover:text-gold-light transition-all duration-700 group-hover:translate-x-2">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Socials & Reels */}
      <section id="social" className="py-32 md:py-64 px-6 md:px-8 bg-obsidian relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50"></div>
        
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-24 md:mb-40"
          >
            <motion.h2 variants={itemVariants} className="theater-heading text-4xl sm:text-9xl mb-8 md:mb-10 drop-shadow-2xl">Broadway na żywo</motion.h2>
            <motion.p variants={itemVariants} className="text-gold/50 font-display text-[9px] md:text-[11px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-medium">Codzienne spektakle smaku na Twoim ekranie</motion.p>
            <motion.div variants={itemVariants} className="ornament-line opacity-40 mt-12 md:mt-16"></motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid gap-12 md:gap-24 sm:grid-cols-2 max-w-6xl mx-auto mb-32 md:mb-48"
          >
            {reels.map((url, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative aspect-[9/16] w-full overflow-hidden border border-gold/20 bg-black shadow-2xl ring-1 ring-white/5 active:scale-95 transition-all"
              >
                <iframe 
                  src={url} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:brightness-110"
                ></iframe>
                
                <div className="pointer-events-none absolute inset-0 z-20 border-[1px] border-gold/10 group-hover:border-gold/60 transition-all duration-700 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-700 group-hover:opacity-0 z-10"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                  <div className="px-6 py-3 border border-gold/60 bg-black/60 backdrop-blur-md rounded-full text-gold font-display text-[9px] uppercase tracking-[0.4em]">Zobacz Spektakl</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-48"
          >
            {[
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61562929442326" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/restauracja_broadway" }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col items-center gap-6 md:gap-10"
              >
                <div className="relative">
                  <div className="absolute -inset-10 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
                  <div className="absolute -inset-2 rounded-full border border-gold/20 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"></div>
                  <div className="relative flex h-20 md:h-28 w-20 md:w-28 items-center justify-center rounded-full border border-gold/10 transition-all duration-1000 group-hover:border-gold/80 group-hover:bg-gold/10 shadow-[0_0_40px_rgba(212,175,55,0)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.3)]">
                    <social.icon size={28} md:size={36} strokeWidth={1} className="text-white group-hover:text-gold transition-all duration-700 group-hover:scale-110" />
                  </div>
                </div>
                <span className="font-display text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-white/20 group-hover:text-gold transition-all duration-700 group-hover:tracking-[0.8em] font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-black pt-24 md:pt-48 pb-16 md:pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_top,rgba(139,0,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center justify-between gap-12 md:gap-24 md:flex-row">
            <div className="text-center md:text-left group cursor-default">
              <motion.p 
                whileHover={{ letterSpacing: "0.6em" }}
                className="font-serif text-3xl md:text-5xl italic text-gold-light mb-4 md:mb-6 transition-all duration-1000 uppercase tracking-[0.4em]"
              >
                Broadway
              </motion.p>
              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
                <div className="h-[1px] w-6 md:w-8 bg-gold/40"></div>
                <p className="text-[9px] md:text-[11px] text-white/30 tracking-[0.4em] md:tracking-[0.5em] font-display uppercase font-medium">Restauracja & Lounge</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6 md:gap-10">
              <p className="text-[9px] md:text-[10px] text-white/20 font-display uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium">
                © {new Date().getFullYear()} Broadway. Spektakl smaku.
              </p>
              <div className="h-[2px] w-32 md:w-48 bg-gradient-to-l from-gold/40 via-velvet/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
