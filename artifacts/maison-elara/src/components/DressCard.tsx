import { useState, type MouseEvent } from 'react';
import { Link } from 'wouter';
import { Heart, ArrowUpLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Dress } from '@/data/dresses';
import { money } from '@/data/dresses';
import { readStore, writeStore } from '@/lib/storage';

export function DressCard({dress, index=0}:{dress:Dress;index?:number}){
  const [saved,setSaved]=useState(()=>readStore<string[]>('elara-wishlist',[]).includes(dress.id));
  const [imageLoaded,setImageLoaded]=useState(false);
  const toggle=(e:MouseEvent)=>{e.preventDefault();e.stopPropagation();const list=readStore<string[]>('elara-wishlist',[]);const next=saved?list.filter(id=>id!==dress.id):[...list,dress.id];writeStore('elara-wishlist',next);setSaved(!saved);window.dispatchEvent(new Event('elara-storage'));};
  return <motion.article className="dress-card" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.45,delay:Math.min(index*.04,.2)}} data-testid={`card-dress-${dress.id}`}>
    <Link href={`/dress/${dress.id}`} className={`dress-image ${imageLoaded?'image-ready':'image-loading'}`} data-testid={`link-dress-${dress.id}`}><img src={dress.images[0]} alt={`فستان ${dress.name}`} loading={index>3?'lazy':'eager'} onLoad={()=>setImageLoaded(true)} onError={()=>setImageLoaded(true)}/><span className="dress-badge">{dress.category}</span><button className={`save-dress ${saved?'saved':''}`} type="button" onClick={toggle} aria-label={saved?'إزالة من المفضلة':'أضيفي إلى المفضلة'} data-testid={`button-wishlist-${dress.id}`}><Heart size={19} fill={saved?'currentColor':'none'}/></button></Link>
    <div className="dress-meta"><div><Link href={`/dress/${dress.id}`} className="dress-name" data-testid={`link-dress-title-${dress.id}`}>{dress.name}</Link><span className="dress-detail-line">{dress.silhouette} · {dress.fabric}</span></div><div className="dress-price">{money(dress.price)}</div></div>
    {!dress.available&&<span className="availability">متاح للقياس حسب الطلب</span>}
    <Link className="card-discover" href={`/dress/${dress.id}`}>اكتشفي التفاصيل <ArrowUpLeft size={15}/></Link>
  </motion.article>;
}
