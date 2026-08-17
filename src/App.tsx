import { useState, useEffect } from 'react'
import drRanaPhoto from '@/imports/image.png'

type Lang = 'en' | 'ar'

const T = {
  en: {
    dir: 'ltr' as const,
    navServices: 'Services', navAbout: 'About', navReviews: 'Reviews', navLocation: 'Location',
    bookNow: 'Book Now', bookAppt: 'Book Appointment',
    langLabel: 'AR',
    heroTag: "Bahrain's #1 Hair Transplant Clinic · Riffa",
    heroTitle1: "Bahrain's first", heroTitle2: 'choice for hair', heroTitleEm: '& aesthetics.',
    heroSub: "Dr Rana's Clinic is Bahrain's leading specialist in hair transplantation and aesthetic medicine — combining surgical precision with a results-first approach that clients trust.",
    heroCta: 'Book a Free Consultation', heroViewTx: 'View Treatments',
    heroYears: '7+', heroYearsL: 'Years of expertise',
    heroTx: '500+', heroTxL: 'Hair transplants done',
    heroPct: '98%', heroPctL: 'Client satisfaction',
    heroAr: 'عيادة الدكتورة رنا · زراعة الشعر والتجميل',
    barAddr: 'Road 4313, Riffa, Southern Governorate, Bahrain',
    barHours: 'Sat–Thu 9 AM – 9 PM · Fri Closed',
    barWa: 'WhatsApp us',
    philoEye: "Bahrain's Leading Hair & Aesthetic Clinic",
    philoQ: "Hair loss or skin concerns — you deserve a specialist who delivers",
    philoQEm: 'real, lasting results.',
    philoBody: "Dr Rana's Clinic is Bahrain's #1 destination for hair transplantation — and a trusted name in aesthetic medicine. Whether you are tackling hair loss, skin ageing, or body confidence, our team combines the latest medical technology with a deeply personal approach. No pressure, no guesswork — just results you can see.",
    svcEye: 'What we offer', svcTitle: 'Our Treatments', svcCta: 'Book any treatment →',
    quoteText: 'Hair is confidence. Skin is confidence. We give you back', quoteEm: 'both.',
    quoteBy: '— Dr. Rana · Hair Transplant & Aesthetic Specialist, Bahrain',
    aboutEye: "Bahrain's #1 Hair Transplant Clinic", aboutTitle: 'Expert hair restoration,\npremium aesthetics',
    aboutP1: "Dr Rana's Clinic has established itself as Bahrain's leading destination for hair transplantation since 2018 — performing hundreds of successful FUE and DHI procedures with natural, permanent results.",
    aboutP2: "Dr Rana is a specialist physician with advanced training in hair restoration surgery, aesthetic injectables, laser therapy, and skin science. She treats every client individually — understanding your goals and designing a plan that is right for you, not a one-size-fits-all protocol.",
    aboutP3: 'Our promise:', aboutP3b: 'transparent consultations, honest pricing, and results that speak for themselves.',
    teamLead: 'Lead Physician', teamTherapist: 'Hair Transplant Specialist', teamLang: 'Languages', teamLangV: 'Arabic · English', teamEst: 'Established', teamEstV: '2018, Riffa',
    bookConsult: 'Book a Consultation', chatWa: '💬 Chat on WhatsApp',
    revEye: 'What clients say', revTitle: 'Trusted by Bahrain',
    ctaEye: 'Ready to take the first step?', ctaTitle: 'Your hair & skin', ctaTitleEm: 'transformed.',
    ctaBody: "Book a free consultation with Dr Rana — Bahrain's #1 hair transplant specialist — and get a personalised plan with no obligation.",
    ctaBook: 'Book an Appointment', ctaWa: '💬 Message on WhatsApp',
    ctaNote: '+973 1766 1266 · Riffa, Bahrain · Sat–Thu 9 AM – 9 PM',
    locEye: 'Find us', locTitle: 'Visit the Clinic',
    locAddrL: 'Address', locAddrV: 'Road 4313, Block 943\nRiffa, Southern Governorate\nKingdom of Bahrain',
    locMaps: 'Open in Google Maps ↗',
    locHoursL: 'Opening Hours', locHoursV: 'Saturday – Thursday\n9:00 AM – 9:00 PM\n\nFriday: Closed',
    locContactL: 'Contact', locWa: 'WhatsApp ↗',
    ftTx: "Bahrain's leading hair transplant and aesthetic medicine clinic — based in Riffa since 2018, trusted by hundreds of clients across the Kingdom.",
    ftTreat: 'Treatments', ftContact: 'Contact', ftHours: 'Hours',
    ftH1: 'Sat–Thu: 9 AM – 9 PM', ftH2: 'Friday: Closed',
    ftCopy: "Dr Rana's Aesthetic Health Centre. All rights reserved.",
    ftLoc: 'Riffa, Kingdom of Bahrain',
    moTitle: 'Book an Appointment', moSub: "Dr Rana's Aesthetic Health Centre · Riffa, Bahrain",
    moStep1: 'Treatment', moStep2: 'Date & Time', moStep3: 'Details',
    moPickQ: 'Which treatment are you interested in?',
    moNext: 'Next →', moBack: '← Back',
    moDateL: 'Preferred Date', moDateNote: 'Sat–Thu only',
    moTimeL: 'Preferred Time',
    moNameL: 'Your Name', moNameP: 'Full name',
    moPhoneL: 'Phone / WhatsApp', moPhoneP: '+973 XXXX XXXX',
    moNotesL: 'Notes', moNotesNote: '(optional)', moNotesP: 'Skin concerns, allergies, questions…',
    moSummaryT: 'Appointment summary',
    moAt: 'at',
    moDiscl: 'Your request will be sent via WhatsApp to the clinic. Nothing is stored on this website. The team will confirm within a few hours during clinic hours.',
    moSend: 'Send via WhatsApp',
    doneTitle: 'Request sent!',
    doneBody: "Your appointment request was sent to Dr Rana's team via WhatsApp. They will confirm your booking within a few hours during clinic hours (Sat–Thu, 9 AM–9 PM).",
    close: 'Close',
    drBadgeL: 'Hair Transplant & Aesthetic Specialist',
    drBadgeSub: 'Riffa, Bahrain',
  },
  ar: {
    dir: 'rtl' as const,
    navServices: 'الخدمات', navAbout: 'عن العيادة', navReviews: 'آراء العملاء', navLocation: 'الموقع',
    bookNow: 'احجز الآن', bookAppt: 'احجز موعد',
    langLabel: 'EN',
    heroTag: 'الرقم ١ في زراعة الشعر في البحرين · الرفاع',
    heroTitle1: 'الخيار الأول', heroTitle2: 'لزراعة الشعر', heroTitleEm: 'والتجميل في البحرين.',
    heroSub: 'عيادة الدكتورة رنا — الوجهة الأولى في البحرين لزراعة الشعر والطب الجمالي، تجمع بين الدقة الجراحية ونتائج حقيقية يثق بها العملاء.',
    heroCta: 'احجز استشارة مجانية', heroViewTx: 'استعرض العلاجات',
    heroYears: '+7', heroYearsL: 'سنوات خبرة',
    heroTx: '+500', heroTxL: 'عملية زراعة شعر',
    heroPct: '98%', heroPctL: 'رضا العملاء',
    heroAr: 'مركز الدكتورة رنا الصحي للتجميل',
    barAddr: 'طريق 4313، الرفاع، البحرين',
    barHours: 'السبت–الخميس 9 ص – 9 م · الجمعة مغلق',
    barWa: 'واتساب',
    philoEye: 'الرقم ١ في زراعة الشعر والتجميل بالبحرين',
    philoQ: 'تساقط الشعر أو مشاكل البشرة — تستحق متخصصاً يقدم',
    philoQEm: 'نتائج حقيقية وثابتة.',
    philoBody: 'عيادة الدكتورة رنا هي الوجهة الأولى في البحرين لزراعة الشعر والطب الجمالي. سواء كنت تعاني من تساقط الشعر، أو تسعى لتجديد البشرة، أو تحسين مظهرك العام — فريقنا يجمع أحدث التقنيات الطبية مع نهج شخصي حقيقي. لا ضغط، لا تخمين — فقط نتائج تراها.',
    svcEye: 'ما نقدمه', svcTitle: 'علاجاتنا', svcCta: 'احجز أي علاج ←',
    quoteText: 'الشعر ثقة. البشرة ثقة. نحن نمنحكِ', quoteEm: 'الاثنين معاً.',
    quoteBy: '— د. رنا · متخصصة في زراعة الشعر والطب الجمالي، البحرين',
    aboutEye: 'الرقم ١ في زراعة الشعر بالبحرين', aboutTitle: 'زراعة شعر متخصصة،\وطب جمالي راقٍ',
    aboutP1: 'رسّخت عيادة الدكتورة رنا مكانتها منذ 2018 كالوجهة الأولى في البحرين لزراعة الشعر — بمئات العمليات الناجحة بتقنيتي FUE وDHI بنتائج طبيعية ودائمة.',
    aboutP2: 'الدكتورة رنا طبيبة متخصصة في جراحة زراعة الشعر والطب الجمالي، مع تدريب متقدم في الحقن والليزر وعلوم الجلد. تُعالج كل عميل بشكل فردي — تفهم أهدافك وتضع خطة مناسبة لك تحديداً، لا بروتوكولاً جاهزاً.',
    aboutP3: 'وعدنا:', aboutP3b: 'استشارات شفافة، أسعار واضحة، ونتائج تتحدث عن نفسها.',
    teamLead: 'الطبيبة الرئيسية', teamTherapist: 'أخصائية زراعة الشعر', teamLang: 'اللغات', teamLangV: 'العربية · الإنجليزية', teamEst: 'تأسست', teamEstV: '2018، الرفاع',
    bookConsult: 'احجز استشارة', chatWa: '💬 تواصل عبر واتساب',
    revEye: 'آراء العملاء', revTitle: 'ثقة البحرين',
    ctaEye: 'مستعد لاتخاذ الخطوة الأولى؟', ctaTitle: 'شعرك وبشرتك', ctaTitleEm: 'يستحقان الأفضل.',
    ctaBody: 'احجز استشارة مجانية مع الدكتورة رنا — متخصصة زراعة الشعر والطب الجمالي الأولى في البحرين — واحصل على خطة علاجية مخصصة بدون أي التزام.',
    ctaBook: 'احجز موعد', ctaWa: '💬 راسلينا على واتساب',
    ctaNote: '1766 1266 973+ · الرفاع، البحرين · السبت–الخميس 9 ص – 9 م',
    locEye: 'جدينا', locTitle: 'زوري العيادة',
    locAddrL: 'العنوان', locAddrV: 'طريق 4313، بلوك 943\nالرفاع، المحافظة الجنوبية\nمملكة البحرين',
    locMaps: '↗ افتح في خرائط جوجل',
    locHoursL: 'ساعات العمل', locHoursV: 'السبت – الخميس\n9:00 ص – 9:00 م\n\nالجمعة: مغلق',
    locContactL: 'التواصل', locWa: '↗ واتساب',
    ftTx: 'الوجهة الأولى في البحرين لزراعة الشعر والطب الجمالي — الرفاع منذ 2018، بثقة مئات العملاء في المملكة.',
    ftTreat: 'العلاجات', ftContact: 'التواصل', ftHours: 'ساعات العمل',
    ftH1: 'السبت–الخميس: 9 ص – 9 م', ftH2: 'الجمعة: مغلق',
    ftCopy: 'مركز الدكتورة رنا الصحي للتجميل. جميع الحقوق محفوظة.',
    ftLoc: 'الرفاع، مملكة البحرين',
    moTitle: 'احجز موعد', moSub: 'مركز الدكتورة رنا الصحي للتجميل · الرفاع، البحرين',
    moStep1: 'العلاج', moStep2: 'التاريخ والوقت', moStep3: 'التفاصيل',
    moPickQ: 'ما العلاج الذي تودين حجزه؟',
    moNext: 'التالي ←', moBack: '→ رجوع',
    moDateL: 'التاريخ المفضل', moDateNote: 'السبت–الخميس فقط',
    moTimeL: 'الوقت المفضل',
    moNameL: 'اسمك', moNameP: 'الاسم الكامل',
    moPhoneL: 'هاتف / واتساب', moPhoneP: '+973 XXXX XXXX',
    moNotesL: 'ملاحظات', moNotesNote: '(اختياري)', moNotesP: 'مخاوف جلدية، حساسية، أسئلة…',
    moSummaryT: 'ملخص الحجز',
    moAt: 'في',
    moDiscl: 'سيُرسَل طلبك عبر واتساب للعيادة. لا يُخزَّن أي بيانات على هذا الموقع. سيؤكد الفريق موعدك خلال ساعات قليلة.',
    moSend: 'إرسال عبر واتساب',
    doneTitle: 'تم إرسال الطلب!',
    doneBody: 'تم إرسال طلب حجزك لفريق الدكتورة رنا عبر واتساب. سيؤكدون موعدك خلال ساعات قليلة في أوقات العمل (السبت–الخميس، 9 ص – 9 م).',
    close: 'إغلاق',
    drBadgeL: 'متخصصة زراعة الشعر والتجميل',
    drBadgeSub: 'الرفاع، البحرين',
  }
}

const SERVICES = {
  en: [
    { num: '01', icon: '◉', name: 'Hair Transplant (FUE & DHI)', dur: 'Full-day procedure', desc: "Bahrain's #1 hair transplant clinic. We perform FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation) — the gold-standard techniques for natural, permanent hair restoration with zero visible scarring and minimal recovery time." },
    { num: '02', icon: '✧', name: 'Hair Loss Treatment (PRP)', dur: '45–60 min', desc: 'Platelet-rich plasma therapy harvested from your own blood and injected directly into the scalp to revive dormant follicles, slow hair loss, and encourage new growth — ideal before or after transplant.' },
    { num: '03', icon: '◌', name: 'Beard & Eyebrow Transplant', dur: 'Half-day procedure', desc: 'Restore or define your beard and eyebrows using the same precise FUE technique. Permanent, natural-looking results tailored to your facial structure and desired density.' },
    { num: '04', icon: '✦', name: 'Laser Hair Removal', dur: '30–60 min', desc: 'Advanced diode and Nd:YAG laser technology for permanent hair reduction on all skin tones. Safe, effective, and virtually painless treatments tailored to your skin type and hair colour.' },
    { num: '05', icon: '◈', name: 'Skin Rejuvenation & Resurfacing', dur: '45–75 min', desc: 'From hydrafacials and chemical peels to fractional laser, we rebuild skin texture and luminosity using clinically proven protocols that address pigmentation, scars, and uneven tone.' },
    { num: '06', icon: '◇', name: 'Botox & Dermal Fillers', dur: '20–60 min', desc: 'Precision injectable treatments to soften lines and restore volume — Botox for dynamic wrinkles, hyaluronic acid fillers for cheekbones, jawline, and lips. Natural results, never overdone.' },
    { num: '07', icon: '◆', name: 'Carbon Laser Facial & Peels', dur: '30–75 min', desc: 'The "Hollywood Peel" and advanced chemical peels for glass-skin results — refining pores, fading pigmentation and acne scars, and delivering a radiant finish with zero downtime.' },
  ],
  ar: [
    { num: '01', icon: '◉', name: 'زراعة الشعر (FUE و DHI)', dur: 'إجراء يوم كامل', desc: 'الرقم ١ في زراعة الشعر بالبحرين. نُجري عمليات FUE وDHI — أحدث تقنيات زراعة الشعر الدائمة والطبيعية، بدون ندبات ظاهرة وبفترة تعافٍ قصيرة جداً.' },
    { num: '02', icon: '✧', name: 'علاج تساقط الشعر بالـ PRP', dur: '٤٥–٦٠ د', desc: 'علاج البلازما الغنية بالصفائح من دمك الخاص، يُحقن في فروة الرأس لإعادة إحياء الجريبات وإبطاء التساقط — مثالي قبل زراعة الشعر أو بعدها.' },
    { num: '03', icon: '◌', name: 'زراعة اللحية والحواجب', dur: 'إجراء نصف يوم', desc: 'استعد أو عرِّف لحيتك وحاجبيك بتقنية FUE الدقيقة ذاتها. نتائج دائمة وطبيعية مصممة حسب ملامح وجهك والكثافة المطلوبة.' },
    { num: '04', icon: '✦', name: 'إزالة الشعر بالليزر', dur: '٣٠–٦٠ د', desc: 'تقنية الليزر المتطورة لإزالة الشعر بشكل دائم لجميع أنواع البشرة. علاجات آمنة وفعّالة وغير مؤلمة تقريباً.' },
    { num: '05', icon: '◈', name: 'تجديد وتجليد البشرة', dur: '٤٥–٧٥ د', desc: 'من الهيدرافيشيال والتقشير الكيميائي إلى الليزر التجزيئي — نعيد بناء ملمس البشرة وإشراقها باستخدام بروتوكولات مثبتة سريرياً.' },
    { num: '06', icon: '◇', name: 'البوتوكس والفيلر', dur: '٢٠–٦٠ د', desc: 'حقن دقيقة لتليين الخطوط واستعادة الحجم — البوتوكس لخطوط التعبير، وحمض الهيالورونيك للخدود والفك والشفاه. نتائج طبيعية، دائماً.' },
    { num: '07', icon: '◆', name: 'ليزر الكربون والتقشير', dur: '٣٠–٧٥ د', desc: '"بيلينج هوليوود" والتقشير الكيميائي المتقدم لبشرة كالزجاج — تنعيم المسام، وتبهيت التصبغات وآثار حب الشباب، بدون توقف عن الحياة.' },
  ]
}

const REVIEWS = {
  en: [
    { name: 'Ahmed K.', date: 'April 2025', tag: 'Hair Transplant (FUE)', stars: 5, text: "I researched every hair transplant clinic in Bahrain and Dr Rana's was the clear choice. Six months later the results are completely natural — nobody can tell I had it done. Absolutely life-changing." },
    { name: 'Yousef M.', date: 'Feb 2025', tag: 'Hair Transplant (DHI)', stars: 5, text: "The DHI transplant exceeded every expectation. Dr Rana's precision and the team's professionalism made the whole experience comfortable. My hairline looks exactly as I hoped. Worth every fils." },
    { name: 'Sara A.', date: 'March 2025', tag: 'Laser Hair Removal', stars: 5, text: "I have tried many clinics in Bahrain but Dr Rana's is on a completely different level. The laser sessions were comfortable and results after three visits are incredible." },
    { name: 'Layla M.', date: 'Jan 2025', tag: 'Botox & Fillers', stars: 5, text: "Dr Rana made me feel completely at ease about injectables. The result looks so natural — exactly what I wanted. The whole team is professional, warm, and genuinely caring." },
  ],
  ar: [
    { name: 'أحمد خ.', date: 'أبريل 2025', tag: 'زراعة الشعر FUE', stars: 5, text: 'بحثت في كل عيادات زراعة الشعر في البحرين وكانت عيادة الدكتورة رنا الخيار الواضح. بعد ستة أشهر النتائج طبيعية تماماً — لا أحد يعلم أنني أجريت العملية. غيّرت حياتي.' },
    { name: 'يوسف م.', date: 'فبراير 2025', tag: 'زراعة الشعر DHI', stars: 5, text: 'زراعة DHI تخطت كل توقعاتي. دقة الدكتورة رنا واحترافية الفريق جعلت التجربة مريحة جداً. خط شعري بالضبط كما أردت. يستحق كل فلس.' },
    { name: 'سارة أ.', date: 'مارس 2025', tag: 'إزالة الشعر بالليزر', stars: 5, text: 'جربت عيادات كثيرة في البحرين لكن عيادة الدكتورة رنا على مستوى مختلف تماماً. جلسات الليزر كانت مريحة والنتائج رائعة.' },
    { name: 'ليلى م.', date: 'يناير 2025', tag: 'البوتوكس والفيلر', stars: 5, text: 'الدكتورة رنا جعلتني أرتاح تماماً من الحقن. النتيجة طبيعية جداً — بالضبط ما أردت. الفريق كله محترف ودافئ ومهتم حقاً.' },
  ]
}

const TIMES = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM']
const TICK = { en: ["Bahrain's #1 Hair Transplant",'FUE & DHI Transplants','Beard & Eyebrow Transplant','PRP Hair Therapy','Laser Hair Removal','Botox & Fillers','Skin Rejuvenation','Carbon Laser Facial'], ar: ['الرقم ١ في زراعة الشعر بالبحرين','زراعة FUE و DHI','زراعة اللحية والحواجب','علاج PRP للشعر','إزالة الشعر بالليزر','البوتوكس والفيلر','تجديد البشرة','ليزر الكربون'] }

function Stars({ n }: { n: number }) {
  return (
    <span style={{ display:'inline-flex', gap:'2px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill={i<=n ? '#C09255' : '#DDD5C8'}>
          <polygon points="6,1 7.5,4.5 11.5,4.8 8.8,7.2 9.7,11 6,9 2.3,11 3.2,7.2 0.5,4.8 4.5,4.5"/>
        </svg>
      ))}
    </span>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('rana-lang') as Lang) || 'en')
  const [dark, setDark] = useState(() => localStorage.getItem('rana-dark') === 'true')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSvc, setOpenSvc] = useState<number | null>(null)
  const [modal, setModal] = useState(false)
  const [step, setStep] = useState(1)
  const [selSvc, setSelSvc] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [done, setDone] = useState(false)
  const today = new Date().toISOString().split('T')[0]

  const t = T[lang]
  const svcs = SERVICES[lang]
  const reviews = REVIEWS[lang]
  const ticks = TICK[lang]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('rana-dark', String(dark))
  }, [dark])

  useEffect(() => {
    document.documentElement.setAttribute('dir', t.dir)
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('rana-lang', lang)
  }, [lang, t.dir])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en')

  const openBook = (svc = '') => {
    setSelSvc(svc); setStep(1); setDate(''); setTime(''); setName(''); setPhone(''); setNotes(''); setDone(false)
    setModal(true); setMenuOpen(false)
  }

  const send = () => {
    const svcName = svcs.find(s => s.num === selSvc)?.name ?? selSvc
    const msg = encodeURIComponent(`Hello Dr Rana's Aesthetic Health Centre\n\nAppointment request:\nService: ${svcName}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phone}${notes ? `\nNotes: ${notes}` : ''}\n\nThank you!`)
    window.open(`https://wa.me/97317661266?text=${msg}`, '_blank')
    setDone(true)
  }

  const s1ok = !!selSvc
  const s2ok = !!date && !!time
  const s3ok = name.trim().length > 1 && phone.trim().length > 6
  const svcLabel = svcs.find(s => s.num === selSvc)?.name ?? ''

  return (
    <>
      <nav className={`nav ${scrolled ? 'dn' : 'up'}`}>
        <div className="w ni">
          <div className="logo">
            <div className="lm">R</div>
            <div className="ln">
              <span className="ln-a">Dr Rana's</span>
              <span className="ln-b">Aesthetic Health Centre</span>
            </div>
          </div>
          <div className="nl">
            <a href="#services" className="na">{t.navServices}</a>
            <a href="#about" className="na">{t.navAbout}</a>
            <a href="#reviews" className="na">{t.navReviews}</a>
            <a href="#location" className="na">{t.navLocation}</a>
          </div>
          <div className="nr">
            <button className="lang-btn" onClick={toggleLang} aria-label="Switch language" title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}>{t.langLabel}</button>
            <button className="bm" onClick={() => setDark(d => !d)} aria-label="Toggle dark mode">{dark ? '☀' : '◑'}</button>
            <button className="b-book" onClick={() => openBook()}>{t.bookNow}</button>
            <button className="hbg" onClick={() => setMenuOpen(m => !m)} aria-label="Menu"><span/><span/><span/></button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mm">
          <a href="#services" onClick={() => setMenuOpen(false)}>{t.navServices}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.navAbout}</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>{t.navReviews}</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>{t.navLocation}</a>
          <div className="mm-btns">
            <button className="b-book" onClick={() => openBook()}>{t.bookAppt}</button>
            <button className="lang-btn" onClick={() => { toggleLang(); setMenuOpen(false) }}>{t.langLabel}</button>
            <button className="bm" onClick={() => { setDark(d => !d); setMenuOpen(false) }}>{dark ? '☀' : '◑'}</button>
          </div>
        </div>
      )}

      <section className="hero">
        <div className="hl">
          <div className="h-tag">
            <div className="h-tag-line"/>
            <span className="h-tag-txt">{t.heroTag}</span>
          </div>
          <h1 className="h-title fr">
            {t.heroTitle1}<br/>{t.heroTitle2}<br/><em>{t.heroTitleEm}</em>
          </h1>
          <p className="h-sub">{t.heroSub}</p>
          <div className="h-actions">
            <button className="b-hero" onClick={() => openBook()}>{t.heroCta}</button>
            <a href="#services" className="b-ghost">{t.heroViewTx}</a>
          </div>
          <div className="h-nums">
            <div><div className="h-nv fr">{t.heroYears}</div><div className="h-nl">{t.heroYearsL}</div></div>
            <div><div className="h-nv fr">{t.heroTx}</div><div className="h-nl">{t.heroTxL}</div></div>
            <div><div className="h-nv fr">{t.heroPct}</div><div className="h-nl">{t.heroPctL}</div></div>
          </div>
          <p className="h-ar">{t.heroAr}</p>
        </div>
        <div className="hr">
          <div className="hr-glow"/>
          <div className="hr-wrap">
            <div className="hr-ring3"/>
            <div className="hr-ring2"/>
            <div className="hr-ring"/>
            <div className="hr-arch">
              <img src={drRanaPhoto} alt="Dr Rana at her Aesthetic Health Centre in Riffa, Bahrain" loading="eager"/>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider — blends hero into bar */}
      <div style={{ background:'var(--plum)', lineHeight:0 }}>
        <svg viewBox="0 0 1440 32" preserveAspectRatio="none" style={{ width:'100%', height:'32px', display:'block' }}>
          <path d="M0,0 Q360,32 720,16 Q1080,0 1440,20 L1440,32 L0,32 Z" fill="var(--plum)" opacity=".4"/>
        </svg>
      </div>

      <div className="bar">
        <div className="w bar-in">
          <div className="bi">📍 <span>{t.barAddr}</span></div>
          <div className="bi">🕐 <span>{t.barHours}</span></div>
          <div className="bi">📞 <a href="tel:+97317661266">+973 1766 1266</a></div>
          <div className="bi">💬 <a href="https://wa.me/97317661266" target="_blank" rel="noreferrer">{t.barWa}</a></div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="tick-track">
          {[0,1].map(ii => (
            <span key={ii} style={{ display: 'contents' }}>
              {ticks.map(tx => <span key={tx+ii} className="tick-item"><span className="tick-dot"/>{tx}</span>)}
            </span>
          ))}
        </div>
      </div>

      <section className="intro">
        <div className="intro-in">
          <div className="i-eyebrow">{t.philoEye}</div>
          <p className="i-quote fr">
            "{t.philoQ}<br/><strong> {t.philoQEm}</strong>"
          </p>
          <p className="i-body">{t.philoBody}</p>
        </div>
      </section>

      <section className="svc-sec" id="services">
        <div className="w">
          <div className="sh">
            <div>
              <div className="sl">{t.svcEye}</div>
              <h2 className="st fr">{t.svcTitle}</h2>
            </div>
            <button className="slink" onClick={() => openBook()}>{t.svcCta}</button>
          </div>
          <div className="acc-list">
            {svcs.map((s, i) => (
              <div key={s.num} className={`acc-item ${openSvc === i ? 'open' : ''}`}>
                <div className="acc-row" onClick={() => setOpenSvc(openSvc === i ? null : i)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setOpenSvc(openSvc === i ? null : i)}>
                  <span className="acc-num fr">{s.num}</span>
                  <span className="acc-name fr">{s.name}</span>
                  <div className="acc-right">
                    <span className="acc-dur">{s.dur}</span>
                    <span className="acc-icon">{openSvc === i ? '×' : '+'}</span>
                  </div>
                </div>
                <div className="acc-body">
                  <div className="acc-inner">
                    <span/>
                    <div className="acc-text">
                      {s.desc}
                    </div>
                    <div className="acc-cta">
                      <button className="b-acc" onClick={() => openBook(s.num)}>{lang === 'ar' ? 'احجز ↗' : 'Book ↗'}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-sec">
        <div className="q-in">
          <div className="q-mark fr">"</div>
          <p className="q-text fr">"{t.quoteText} <em>{t.quoteEm}</em>"</p>
          <div className="q-line"/>
          <p className="q-source">{t.quoteBy}</p>
        </div>
      </section>

      <section className="about-sec" id="about">
        <div className="w">
          <div className="about-g">
            <div className="about-img-w">
              <div className="about-img">
                <img src={drRanaPhoto} alt="Dr Rana — Aesthetic Medicine Specialist" loading="lazy"/>
              </div>
              <div className="about-badge">
                <div className="ab-n fr">Dr Rana</div>
                <div className="ab-s">{'★★★★★'.split('').map((x,i) => <span key={i} style={{ color:'var(--sand)', fontSize:'.7rem' }}>{x}</span>)}</div>
                <div className="ab-l">{t.drBadgeL}<br/>{t.drBadgeSub}</div>
              </div>
            </div>
            <div className="about-txt">
              <div className="sl">{t.aboutEye}</div>
              <h2 className="st fr" style={{ whiteSpace:'pre-line' }}>{t.aboutTitle}</h2>
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p><strong>{t.aboutP3}</strong> {t.aboutP3b}</p>
              <div className="team">
                <div className="tc"><div className="tc-r">{t.teamLead}</div><div className="tc-n">Dr Rana</div></div>
                <div className="tc"><div className="tc-r">{t.teamTherapist}</div><div className="tc-n">{lang === 'ar' ? 'الفريق المتقدم' : 'Senior Team'}</div></div>
                <div className="tc"><div className="tc-r">{t.teamLang}</div><div className="tc-n">{t.teamLangV}</div></div>
                <div className="tc"><div className="tc-r">{t.teamEst}</div><div className="tc-n">{t.teamEstV}</div></div>
              </div>
              <div className="ab-btns">
                <button className="b-solid" onClick={() => openBook()}>{t.bookConsult}</button>
                <a href="https://wa.me/97317661266" target="_blank" rel="noreferrer" className="b-out">{t.chatWa}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rev-sec" id="reviews">
        <div className="w">
          <div className="rev-head">
            <div>
              <div className="sl">{t.revEye}</div>
              <h2 className="st fr">{t.revTitle}</h2>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:'.35rem', fontSize:'.8rem', color:'var(--ink2)' }}>
              <span style={{ color:'var(--sand)' }}>★★★★★</span> 5.0 · Google Reviews
            </div>
          </div>
          <div className="rev-g">
            {reviews.map((r, i) => (
              <div key={i} className="rc">
                <div className="rc-q fr">"</div>
                <p className="rc-t fr">{r.text}</p>
                <div className="rc-f">
                  <div className="rc-p">
                    <div className="rc-av">{r.name[0]}</div>
                    <div>
                      <div className="rc-nm">{r.name}</div>
                      <div className="rc-dt">{r.date}</div>
                    </div>
                  </div>
                  <div>
                    <div className="rc-tag">{r.tag}</div>
                    <div style={{ marginTop:'.4rem' }}><Stars n={r.stars}/></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="cta-in">
          <div className="c-ey">{t.ctaEye}</div>
          <h2 className="c-t fr">{t.ctaTitle} <em>{t.ctaTitleEm}</em></h2>
          <p className="c-b">{t.ctaBody}</p>
          <div className="c-acts">
            <button className="b-gold" onClick={() => openBook()}>{t.ctaBook}</button>
            <a href="https://wa.me/97317661266" target="_blank" rel="noreferrer" className="b-gw">{t.ctaWa}</a>
          </div>
          <p className="c-note">{t.ctaNote}</p>
        </div>
      </section>

      <section className="loc-sec" id="location">
        <div className="w">
          <div className="sl">{t.locEye}</div>
          <h2 className="st fr">{t.locTitle}</h2>
          <div className="loc-g">
            <div className="loc-items">
              <div className="loc-c">
                <div className="loc-ico">📍</div>
                <div>
                  <div className="loc-lbl">{t.locAddrL}</div>
                  <div className="loc-val">{t.locAddrV}</div>
                  <a href="https://maps.google.com/?q=Dr+Rana+Aesthetic+Health+Centre+Riffa+Bahrain" target="_blank" rel="noreferrer" className="loc-a">{t.locMaps}</a>
                </div>
              </div>
              <div className="loc-c">
                <div className="loc-ico">🕐</div>
                <div>
                  <div className="loc-lbl">{t.locHoursL}</div>
                  <div className="loc-val">{t.locHoursV}</div>
                </div>
              </div>
              <div className="loc-c">
                <div className="loc-ico">📞</div>
                <div>
                  <div className="loc-lbl">{t.locContactL}</div>
                  <div className="loc-val"><a href="tel:+97317661266" style={{ color:'var(--pur)' }}>+973 1766 1266</a></div>
                  <a href="https://wa.me/97317661266" target="_blank" rel="noreferrer" className="loc-a">{t.locWa}</a>
                </div>
              </div>
            </div>
            <div className="map-b">
              <iframe
                title="Dr Rana Aesthetic Health Centre Riffa Bahrain"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.9!2d50.5500!3d26.1300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e48a50c673f19d9%3A0x7b7f0f4d2b2ea8c5!2sRiffa%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1700000000000!5m2!1sen!2sbh"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="w">
          <div className="fg">
            <div>
              <div className="f-brand">
                <div className="f-em">R</div>
                <div>
                  <div className="f-nm">Dr Rana's</div>
                  <div className="f-sb">Aesthetic Health Centre</div>
                </div>
              </div>
              <p className="f-p">{t.ftTx}</p>
              <p className="f-ar">مركز الدكتورة رنا الصحي للتجميل</p>
            </div>
            <div>
              <div className="f-ch">{t.ftTreat}</div>
              <div className="fc">
                {svcs.slice(0,4).map(s => <button key={s.num} onClick={() => openBook(s.num)}>{s.name}</button>)}
              </div>
            </div>
            <div>
              <div className="f-ch">{t.ftContact}</div>
              <div className="fc">
                <a href="tel:+97317661266">+973 1766 1266</a>
                <a href="https://wa.me/97317661266" target="_blank" rel="noreferrer">WhatsApp</a>
                <a href="https://www.instagram.com/dr.ranas_aesthetic/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#location">{lang === 'ar' ? 'الرفاع، البحرين' : 'Riffa, Bahrain'}</a>
              </div>
              <div className="f-ch" style={{ marginTop:'1rem' }}>{t.ftHours}</div>
              <div className="fc">
                <span style={{ display:'block', fontSize:'.77rem', color:'rgba(255,255,255,.38)' }}>{t.ftH1}</span>
                <span style={{ display:'block', fontSize:'.77rem', color:'rgba(255,255,255,.38)' }}>{t.ftH2}</span>
              </div>
            </div>
          </div>
          <div className="fb">
            <span>© {new Date().getFullYear()} {t.ftCopy}</span>
            <span>{t.ftLoc}</span>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/97317661266" target="_blank" rel="noreferrer" className="fab" aria-label="WhatsApp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
        </svg>
      </a>

      {modal && (
        <div className="ov" onClick={e => { if (e.target === e.currentTarget) { setModal(false); setDone(false) } }}>
          <div className="mo" role="dialog" aria-modal="true">
            <div className="mo-top">
              <div>
                <div className="mo-h fr">{t.moTitle}</div>
                <div className="mo-s">{t.moSub}</div>
              </div>
              <button className="mo-x" onClick={() => { setModal(false); setDone(false) }} aria-label="Close">×</button>
            </div>
            {!done ? (
              <>
                <div className="mo-steps">
                  {[1,2,3].map((n,i) => (
                    <span key={n} style={{ display:'contents' }}>
                      <span className={`sd ${step===n?'on':step>n?'ok':'off'}`}>{step>n?'✓':n}</span>
                      {i < 2 && (<><span className={`sl2 ${step>n+1?'on':''}`}>{[t.moStep1,t.moStep2,t.moStep3][i]}</span><span className="sb"/></>)}
                    </span>
                  ))}
                </div>
                <div className="mo-body">
                  {step === 1 && (
                    <>
                      <p style={{ fontSize:'.8rem', color:'var(--ink2)', marginBottom:'.9rem' }}>{t.moPickQ}</p>
                      <div className="pg">
                        {svcs.map(s => (
                          <button key={s.num} className={`pk ${selSvc===s.num?'on':''}`} onClick={() => setSelSvc(s.num)}>
                            <div className="pi">{s.icon}</div>
                            <div className="pn">{s.name}</div>
                            <div className="pd">{s.dur}</div>
                          </button>
                        ))}
                      </div>
                      <div className="ma"><button className="bn" disabled={!s1ok} onClick={() => setStep(2)}>{t.moNext}</button></div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className="fst">
                        <div>
                          <label className="fl">{t.moDateL} <span className="fn">{t.moDateNote}</span></label>
                          <input className="fi" type="date" min={today} value={date} onChange={e => setDate(e.target.value)}/>
                        </div>
                        <div>
                          <label className="fl">{t.moTimeL}</label>
                          <div className="tcs">{TIMES.map(ti => <button key={ti} className={`tch ${time===ti?'on':''}`} onClick={() => setTime(ti)}>{ti}</button>)}</div>
                        </div>
                      </div>
                      <div className="ma">
                        <button className="bb" onClick={() => setStep(1)}>{t.moBack}</button>
                        <button className="bn" disabled={!s2ok} onClick={() => setStep(3)}>{t.moNext}</button>
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <div className="fst">
                        <div>
                          <label className="fl">{t.moNameL}</label>
                          <input className="fi" type="text" placeholder={t.moNameP} value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div>
                          <label className="fl">{t.moPhoneL}</label>
                          <input className="fi" type="tel" placeholder={t.moPhoneP} value={phone} onChange={e => setPhone(e.target.value)}/>
                        </div>
                        <div>
                          <label className="fl">{t.moNotesL} <span className="fn">{t.moNotesNote}</span></label>
                          <input className="fi" type="text" placeholder={t.moNotesP} value={notes} onChange={e => setNotes(e.target.value)}/>
                        </div>
                      </div>
                      <div className="msum">
                        <strong>{t.moSummaryT}</strong>
                        {svcLabel} · {date} {t.moAt} {time}
                      </div>
                      <p className="mn">{t.moDiscl}</p>
                      <div className="ma">
                        <button className="bb" onClick={() => setStep(2)}>{t.moBack}</button>
                        <button className="bw" disabled={!s3ok} onClick={send}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
                          {t.moSend}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="mo-body sc">
                <div className="sr">✓</div>
                <h3 className="fr" style={{ fontSize:'1.3rem', marginBottom:'.5rem', color:'var(--ink)' }}>{t.doneTitle}</h3>
                <p style={{ fontSize:'.85rem', color:'var(--ink2)', lineHeight:'1.8', marginBottom:'1.5rem' }}>{t.doneBody}</p>
                <button className="b-solid" onClick={() => { setModal(false); setDone(false) }}>{t.close}</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
