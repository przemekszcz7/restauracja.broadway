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

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-2xl italic text-gold"
          >
            Broadway
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden space-x-12 md:flex">
            {["O nas", "Galeria", "Godziny", "Kontakt"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
              className="overflow-hidden bg-black/95 md:hidden"
            >
              <div className="flex flex-col items-center space-y-8 py-12">
                {["O nas", "Galeria", "Godziny", "Kontakt"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(" ", "-")}`} 
                    className="nav-link text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
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
          <img 
            src={images[0]} 
            alt="Broadway Background" 
            className="h-full w-full object-cover opacity-40 scale-105"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 font-display text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold/80">
              Restauracja.Broadway
            </p>
            <h1 className="mb-0 font-serif text-[18vw] sm:text-[120px] leading-[0.8] italic text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Broadway
            </h1>
            <p className="mt-8 font-serif text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto">
              Elegancka kuchnia europejska i ukraińska w wyjątkowej atmosferze.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#godziny" className="btn-gold group flex items-center gap-2">
                Zobacz menu
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:786477235" className="flex items-center gap-3 font-display text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-gold" />
                786 477 235
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold/30"
        >
          <div className="h-12 w-[2px] bg-gradient-to-b from-gold/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="theater-heading text-5xl mb-8">Nasza Kuchnia</h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed font-sans">
                <p>
                  Broadway to więcej niż restauracja. To pasja do smaku i elegancji, którą celebrujemy każdego dnia na ulicy Modrzejowskiej w Sosnowcu.
                </p>
                <p>
                  Nasz kunszt kulinarny łączy w sobie to, co najlepsze w kuchni europejskiej z tradycyjnymi, serdecznymi smakami Ukrainy. Każde danie przygotowujemy z najświeższych składników, dbając o każdy detal prezentacji.
                </p>
                <div className="pt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-gold/50"></div>
                    <span className="font-display text-[10px] uppercase tracking-widest text-gold">Wyjątkowa Atmosfera</span>
                  </div>
                  <p className="text-sm italic">
                    "Eleganckie wnętrza inspirowane duchem teatru, w których każdy posiłek staje się spektaklem smaku."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={images[1]} 
                alt="Wnętrze Restauracji" 
                className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours & Map Section */}
      <section id="godziny" className="bg-[#070707] py-32 px-6 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2">
            
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="theater-heading text-4xl mb-12">Zapraszamy</h2>
              <div className="space-y-1">
                {openingHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-4 border-b border-white/5 group hover:bg-white/[0.02] transition-colors px-2">
                    <span className="font-display text-xs uppercase tracking-widest text-white/60 group-hover:text-gold transition-colors">{item.day}</span>
                    <span className="font-sans text-white/90">{item.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-8 border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4 mb-4 text-gold">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="italic text-lg text-white/80 mb-6">
                  "Jedno z najbardziej nastrojowych miejsc w Sosnowcu. Kuchnia ukraińska na najwyższym poziomie!"
                </p>
                <a 
                  href="https://www.facebook.com/profile.php?id=61562929442326&sk=reviews" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold hover:text-gold-light transition-colors"
                >
                  <Facebook size={12} />
                  Zobacz opinie na Facebooku
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="theater-heading text-4xl mb-12">Lokalizacja</h2>
              <div className="relative mb-8 aspect-video w-full overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.90463070776!2d19.129831677022427!3d50.27503929997766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716dabba54e23c5%3A0x4d53b137e6e4c37e!2sModrzejowska%2043%2C%2041-200%20Sosnowiec!5e0!3m2!1spl!2spl!4v1778240611068!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-widest text-white/50 mb-1">Adres</p>
                    <p className="text-lg">Modrzejowska 43, Sosnowiec 41-200</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-widest text-white/50 mb-1">Kontakt</p>
                    <p className="text-lg">786 477 235</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-widest text-white/50 mb-1">E-mail</p>
                    <p className="text-lg">broadwaylokal@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Socials & Reels */}
      <section id="social" className="py-32 px-6 bg-[#030303]">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="theater-heading text-5xl mb-4">Broadway na żywo</h2>
            <p className="text-white/40 font-display text-[10px] uppercase tracking-[0.3em]">Odkryj naszą atmosferę na mediach społecznościowych</p>
          </motion.div>
          
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto mb-20">
            {reels.map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl"
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
                
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20 group-hover:ring-gold/50 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 border-t border-white/5 pt-16">
            <a 
              href="https://www.facebook.com/profile.php?id=61562929442326" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Facebook size={24} className="text-white group-hover:text-gold" />
              </div>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-gold">Facebook</span>
            </a>
            
            <a 
              href="https://www.instagram.com/restauracja_broadway" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Instagram size={24} className="text-white group-hover:text-gold" />
              </div>
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-gold">Instagram</span>
            </a>
          </div>
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
