export type Dress = {
  id: string; name: string; price: number; description: string; silhouette: string;
  fabric: string; sizes: string[]; category: string; available: boolean; images: string[];
};

const editorial = ['/images/bridal-hero.jpg', '/images/bridal-satin.jpg', '/images/bridal-tulle.jpg'];
const lace = ['/images/bridal-lace.jpg', '/images/bridal-tulle.jpg', '/images/bridal-hero.jpg'];
export const dresses: Dress[] = [
  { id:'celeste', name:'سيليست', price:18500000, description:'انسياب من حرير الميكادو النقي يلتقي بذيل طويل مرسوم بعناية، لتمنحكِ سيليست حضوراً هادئاً لا يُنسى.', silhouette:'أميرة', fabric:'حرير ميكادو', sizes:['٣٦','٣٨','٤٠','٤٢'], category:'فساتين فاخرة', available:true, images:editorial },
  { id:'amara', name:'أمارا', price:16900000, description:'تطريز يدوي رقيق يحيط بخطوط دانتيل فرنسي، صُممت أمارا للعروس التي تحب التفاصيل التي تُكتشف عن قرب.', silhouette:'قصة حرف A', fabric:'دانتيل فرنسي', sizes:['٣٦','٣٨','٤٠'], category:'تصاميم رومانسية', available:true, images:lace },
  { id:'solene', name:'سولِين', price:21200000, description:'قصة منحوتة وكتفان مكشوفان يتركان مساحة للأناقة أن تتحدث. ساتان مطفي بتفصيل خياطة خاص.', silhouette:'حورية البحر', fabric:'ساتان إيطالي', sizes:['٣٨','٤٠','٤٢'], category:'تصاميم عصرية', available:true, images:['/images/bridal-satin.jpg','/images/bridal-hero.jpg','/images/bridal-lace.jpg'] },
  { id:'elodie', name:'إيلودي', price:15800000, description:'طبقات تول خفيفة مطرزة بنجوم صغيرة، تحرّكها الخطوة كما لو أنها موسيقى.', silhouette:'منفوش', fabric:'تول مطرز', sizes:['٣٦','٣٨','٤٠','٤٢'], category:'تصاميم رومانسية', available:true, images:['/images/bridal-tulle.jpg','/images/bridal-lace.jpg','/images/bridal-satin.jpg'] },
  { id:'vivienne', name:'فيفيان', price:24600000, description:'توقيع الدار في الدانتيل المرسوم يدوياً. فستان ملكي بخفة مدهشة ولمسات من خيوط اللؤلؤ.', silhouette:'أميرة', fabric:'دانتيل وحرير', sizes:['٣٨','٤٠','٤٢'], category:'فساتين ملكية', available:true, images:lace },
  { id:'seraphine', name:'سيرافين', price:19800000, description:'خطوط نظيفة وظهر مفتوح بتفصيل دقيق، يجمع بين بساطة اليوم وأناقة تبقى في الصور.', silhouette:'عمودي', fabric:'كريب حريري', sizes:['٣٦','٣٨','٤٠'], category:'تصاميم عصرية', available:true, images:editorial },
  { id:'noor', name:'نور', price:17400000, description:'نعومة عاجية مستوحاة من ضوء دمشق في الصباح، مع أكمام دانتيل قابلة للفصل.', silhouette:'قصة حرف A', fabric:'تول ودانتيل', sizes:['٣٦','٣٨','٤٠','٤٢'], category:'تصاميم رومانسية', available:true, images:lace },
  { id:'layan', name:'ليان', price:22900000, description:'كورسيه مطرز بخيط ذهبي معتّق وتنورة واسعة من طبقات الأورغنزا الإيطالية.', silhouette:'أميرة', fabric:'أورغنزا', sizes:['٣٨','٤٠','٤٢'], category:'فساتين ملكية', available:false, images:editorial },
  { id:'mira', name:'ميرا', price:14700000, description:'قصة انسيابية تترك مساحة للحركة، من كريب ناعم بلمعة خفيفة تليق بالاحتفال الحميم.', silhouette:'عمودي', fabric:'كريب حريري', sizes:['٣٦','٣٨','٤٠'], category:'تصاميم عصرية', available:true, images:['/images/bridal-satin.jpg','/images/bridal-lace.jpg','/images/bridal-tulle.jpg'] },
  { id:'yasmin', name:'ياسمين', price:19200000, description:'بتلات دانتيل ثلاثية الأبعاد تتفتح على طول الصدرية، مع ذيل خفيف قابل للفصل.', silhouette:'حورية البحر', fabric:'دانتيل فرنسي', sizes:['٣٦','٣٨','٤٢'], category:'فساتين فاخرة', available:true, images:lace },
  { id:'lara', name:'لارا', price:16400000, description:'تول فرنسي مطوي يدوياً ينساب في طبقات رقيقة، بتفصيل كتف رومانسي وخصر محدد.', silhouette:'منفوش', fabric:'تول فرنسي', sizes:['٣٦','٣٨','٤٠','٤٢'], category:'تصاميم رومانسية', available:true, images:editorial },
  { id:'dana', name:'دانا', price:23600000, description:'ساتان عاجي فاخر بقصة هندسية دقيقة، مع أزرار لؤلؤية تمتد على الظهر حتى نهاية الذيل.', silhouette:'أميرة', fabric:'ساتان إيطالي', sizes:['٣٨','٤٠'], category:'فساتين ملكية', available:true, images:editorial },
];
export const categories = ['جميع الفساتين','فساتين فاخرة','تصاميم رومانسية','تصاميم عصرية','فساتين ملكية'];
export const money = (value:number) => `${new Intl.NumberFormat('ar-SY').format(value)} ل.س`;
