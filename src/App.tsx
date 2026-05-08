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
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="font-serif text-2xl italic text-gold cursor-pointer"
          >
            Broadway
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden space-x-12 md:flex">
            {["O nas", "Galeria", "Godziny", "Kontakt"].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="nav-link"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </motion.button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden bg-black/95 md:hidden"
            >
              <div className="flex flex-col items-center space-y-8 py-12">
                {["O nas", "Galeria", "Godziny", "Kontakt"].map((item, idx) => (
                  <motion.a 
                    key={item} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={`#${item.toLowerCase().replace(" ", "-")}`} 
                    className="nav-link text-lg"
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
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={images[0]} 
            alt="Broadway Background" 
            className="h-full w-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="mb-4 font-display text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold/80">
              Restauracja.Broadway
            </motion.p>
            <motion.h1 
              variants={itemVariants}
              className="mb-0 font-serif text-[18vw] sm:text-[120px] leading-[0.8] italic text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Broadway
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-8 font-serif text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto">
              Elegancka kuchnia europejska i ukraińska w wyjątkowej atmosferze.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold/30"
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="theater-heading text-6xl mb-10">Nasza Kuchnia</motion.h2>
              <div className="space-y-8 text-xl text-white/70 leading-relaxed font-sans">
                <motion.p variants={itemVariants}>
                  Broadway to więcej niż restauracja. To pasja do smaku i elegancji, którą celebrujemy każdego dnia na ulicy Modrzejowskiej w Sosnowcu.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Nasz kunszt kulinarny łączy w sobie to, co najlepsze w kuchni europejskiej z tradycyjnymi, serdecznymi smakami Ukrainy. 
                </motion.p>
                <motion.div variants={itemVariants} className="pt-8">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="h-px w-16 bg-gold/50"></div>
                    <span className="font-display text-[11px] uppercase tracking-[0.3em] text-gold">Wyjątkowa Scena</span>
                  </div>
                  <p className="text-lg italic font-serif text-white/90">
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
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src={images[1]} 
                alt="Wnętrze Restauracji" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Map Section */}
      <section id="godziny" className="bg-[#070707] py-40 px-6 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-24 lg:grid-cols-2">
            
            {/* Hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="theater-heading text-5xl mb-16">Zapraszamy</motion.h2>
              <div className="space-y-0">
                {openingHours.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex justify-between py-5 border-b border-white/5 group hover:bg-white/[0.02] transition-colors px-4"
                  >
                    <span className="font-display text-[11px] uppercase tracking-widest text-white/50 group-hover:text-gold transition-colors">{item.day}</span>
                    <span className="font-sans text-white/90 group-hover:text-white">{item.hours}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-20 p-10 border border-white/5 bg-white/[0.01] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                
                <p className="italic text-2xl text-white/90 mb-8 font-serif leading-snug">
                  "Serdecznie polecam. Wszystkie zamówione dania były podane elegancko i smakowały nieziemsko. Klasa sama w sobie. Obsługa bardzo miła. Na pewno tu wrócę"
                </p>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="https://www.facebook.com/profile.php?id=61562929442326&sk=reviews" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-widest text-gold font-display"
                >
                  <Facebook size={14} />
                  Poznaj historię naszych gości
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
              <motion.h2 variants={itemVariants} className="theater-heading text-5xl mb-16">Gdzie Jesteśmy</motion.h2>
              <motion.div 
                variants={itemVariants}
                className="relative mb-12 aspect-video w-full overflow-hidden rounded-sm grayscale group hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/5"
              >
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
              <div className="space-y-10">
                {[
                  { icon: MapPin, label: "Adres", val: "Modrzejowska 43, Sosnowiec 41-200" },
                  { icon: Phone, label: "Kontakt", val: "786 477 235" },
                  { icon: Mail, label: "E-mail", val: "broadwaylokal@gmail.com" }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-start gap-6 group">
                    <div className="mt-1 p-2 rounded-full border border-gold/20 group-hover:border-gold/50 transition-colors">
                      <item.icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <p className="font-display text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">{item.label}</p>
                      <p className="text-xl font-light tracking-wide">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Socials & Reels */}
      <section id="social" className="py-40 px-6 bg-[#030303]">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.h2 variants={itemVariants} className="theater-heading text-6xl mb-6">Broadway na żywo</motion.h2>
            <motion.p variants={itemVariants} className="text-white/40 font-display text-xs uppercase tracking-[0.4em]">Codzienne spektakle smaku na Twoim ekranie</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto mb-24"
          >
            {reels.map((url, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
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
                  className="absolute inset-0 h-full w-full object-cover"
                ></iframe>
                
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10 group-hover:ring-gold/40 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-transparent transition-all duration-700"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center gap-12 sm:gap-24 border-t border-white/5 pt-20"
          >
            <motion.a 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              href="https://www.facebook.com/profile.php?id=61562929442326" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-6"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:bg-gold/5">
                <Facebook size={28} className="text-white group-hover:text-gold transition-colors" />
              </div>
              <span className="font-display text-[11px] uppercase tracking-[0.4em] text-white/40 group-hover:text-gold transition-colors">Facebook</span>
            </motion.a>
            
            <motion.a 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              href="https://www.instagram.com/restauracja_broadway" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-6"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:bg-gold/5">
                <Instagram size={28} className="text-white group-hover:text-gold transition-colors" />
              </div>
              <span className="font-display text-[11px] uppercase tracking-[0.4em] text-white/40 group-hover:text-gold transition-colors">Instagram</span>
            </motion.a>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050505] py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl italic text-gold mb-2">Broadway</p>
              <p className="text-xs text-white/30 tracking-widest font-display uppercase">Restauracja & Lounge</p>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="nav-link !text-[10px]">Polityka Prywatności</a>
              <a href="#" className="nav-link !text-[10px]">Regulamin</a>
            </div>

            <p className="text-[10px] text-white/20 font-display uppercase tracking-widest">
              © {new Date().getFullYear()} Broadway. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
