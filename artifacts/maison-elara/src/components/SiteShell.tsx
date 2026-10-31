import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Heart, House, Menu, UserRound, X, Instagram, MapPin, Phone, ArrowUpLeft } from 'lucide-react';
import { readStore } from '@/lib/storage';

const links = [{href:'/',label:'الرئيسية'},{href:'/collection',label:'المجموعة'},{href:'/about',label:'قصتنا'},{href:'/contact',label:'تواصلي معنا'}];
export function Header() {
  const [location] = useLocation(); const [open,setOpen] = useState(false); const [saved,setSaved] = useState(()=>readStore<string[]>('elara-wishlist',[]));
  useEffect(()=>{const update=()=>setSaved(readStore<string[]>('elara-wishlist',[]));window.addEventListener('elara-storage',update);window.addEventListener('storage',update);return()=>{window.removeEventListener('elara-storage',update);window.removeEventListener('storage',update);}},[]);
  return <header className="site-header">
    <div className="page-wrap header-inner">
      <button className="icon-button mobile-menu" aria-label="فتح القائمة" data-testid="button-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <Link href="/" className="brand" data-testid="link-brand"><span className="brand-en">Maison Élara</span><span className="brand-ar">ميزون إيلارا <i>—</i> دمشق</span></Link>
      <nav className="desktop-nav" aria-label="التنقل الرئيسي">{links.map(l=><Link key={l.href} href={l.href} className={location===l.href?'active':''} data-testid={`link-nav-${l.href.slice(1)||'home'}`}>{l.label}</Link>)}</nav>
      <div className="header-actions"><Link className="header-appointment" href="/appointments" data-testid="link-header-appointment">احجزي موعدك <ArrowUpLeft size={15}/></Link><Link href="/wishlist" className="wishlist-head" aria-label="المفضلة" data-testid="link-wishlist"><Heart size={19}/><span>{saved.length}</span></Link><Link href="/account" className="account-head" aria-label="حسابي" data-testid="link-account"><UserRound size={18}/></Link></div>
    </div>
    <AnimatePresence>{open&&<motion.nav className="mobile-menu-panel" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>{[...links,{href:'/appointments',label:'احجزي موعدك'},{href:'/account',label:'حسابي'}].map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} data-testid={`mobile-link-${l.href}`}>{l.label}</Link>)}</motion.nav>}</AnimatePresence>
  </header>;
}
const mobileItems = [{href:'/',label:'الرئيسية',Icon:House},{href:'/collection',label:'المجموعة',Icon:Menu},{href:'/wishlist',label:'المفضلة',Icon:Heart},{href:'/appointments',label:'المواعيد',Icon:CalendarDays},{href:'/account',label:'حسابي',Icon:UserRound}];
export function BottomNav(){const [location]=useLocation(); return <nav className="bottom-nav" aria-label="التنقل السريع">{mobileItems.map(({href,label,Icon})=><Link href={href} key={href} className={location===href?'current':''} data-testid={`bottom-nav-${href.slice(1)||'home'}`}><Icon size={19}/><span>{label}</span></Link>)}</nav>}
export function Footer(){return <footer className="site-footer"><div className="page-wrap footer-grid"><div className="footer-brand"><Link href="/" className="brand" data-testid="footer-link-home"><span className="brand-en">Maison Élara</span><span className="brand-ar">ميزون إيلارا</span></Link><p>دار أزياء عرائس دمشقية، نصنع لكل حكاية بداية تشبهها.</p><div className="social-links"><a href="https://instagram.com" aria-label="إنستغرام" data-testid="link-instagram"><Instagram size={18}/></a><a href="tel:+963114442080" aria-label="اتصلي بنا" data-testid="link-phone"><Phone size={18}/></a></div></div><div><h3>اكتشفي الدار</h3><Link href="/collection" data-testid="footer-link-collection">المجموعة</Link><Link href="/about" data-testid="footer-link-about">قصتنا</Link><Link href="/wishlist" data-testid="footer-link-wishlist">قائمة أمنياتك</Link></div><div><h3>نحن هنا</h3><p><MapPin size={15}/> دمشق، شارع أبو رمانة</p><p><Phone size={15}/> +٩٦٣ ١١ ٤٤٤ ٢٠٨٠</p><p>من السبت إلى الخميس<br/>١٠ صباحاً — ٧ مساءً</p></div><div className="footer-cta"><span className="eyebrow">لحظتكِ تستحق وقتاً خاصاً</span><h3 className="font-display">ننتظركِ في الدار</h3><Link className="text-link" href="/appointments" data-testid="footer-link-appointments">احجزي موعدكِ <ArrowUpLeft size={16}/></Link><Link className="footer-account" href="/account" data-testid="footer-link-account">حسابكِ التجريبي</Link></div></div><div className="page-wrap footer-bottom"><span>© ٢٠٢٥ ميزون إيلارا — دمشق</span><span>كل قطعة تُروى بحبّ</span></div></footer>}
export function Shell({children}:{children:ReactNode}){return <><Header/><main>{children}</main><Footer/><BottomNav/></>}
