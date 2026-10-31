export function readStore<T>(key:string, fallback:T):T { try { const value=localStorage.getItem(key); return value?JSON.parse(value) as T:fallback; } catch { return fallback; } }
export function writeStore<T>(key:string,value:T){try{localStorage.setItem(key,JSON.stringify(value));if(key==='elara-wishlist')window.dispatchEvent(new Event('elara-storage'));}catch{/* Storage may be unavailable in private browsing. */}}
export function reference(prefix:string){return `${prefix}-${Math.random().toString(36).slice(2,7).toUpperCase()}`;}
export function validSyrianPhone(phone:string){const normalized=phone.replace(/[٠-٩]/g,d=>String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/[۰-۹]/g,d=>String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).replace(/[\s()-]/g,'');return /^(?:\+?963|0)?9[0-9]{8}$/.test(normalized);}
