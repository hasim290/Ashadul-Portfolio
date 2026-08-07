import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        services: "Services",
        testimonials: "Testimonials",
        blog: "Blog",
        gallery: "Gallery",
        github: "GitHub",
        contact: "Contact",
        hireMe: "Hire Me",
        resume: "Resume"
      },
      hero: {
        availableBadge: "Available for Freelance & Full-time Roles",
        greeting: "Hello, I'm",
        name: "Sk Ashadul Hossain",
        roles: [
          "Frontend Developer",
          "UI/UX Designer",
          "Graphic Designer",
          "Video Editor"
        ],
        description: "Crafting world-class digital experiences, pixel-perfect user interfaces, engaging video edits, and scalable web applications with modern technologies.",
        viewProjects: "Explore Work",
        contactMe: "Get In Touch",
        expYears: "Years Experience",
        projectsDone: "Projects Completed",
        clientSatisfaction: "Client Satisfaction"
      },
      about: {
        title: "About Me",
        subtitle: "Passionate about blending aesthetics with clean code & motion",
        bioP1: "I am a multi-disciplinary Frontend Developer and Visual Creative with 3+ years of experience transforming complex ideas into intuitive, high-performance web applications and captivating visual content.",
        bioP2: "Whether engineering interactive web apps in React & Next.js, designing fluid UI/UX systems in Figma, editing high-converting video projects, or crafting brand identities, I pay meticulous attention to design detail and technical performance.",
        coreValues: "Core Values",
        values: [
          { title: "User Centric", desc: "Building intuitive interfaces prioritizing accessibility & delight." },
          { title: "Performance First", desc: "Optimized code, lightning-fast load times, and fluid 60fps animations." },
          { title: "Visual Elegance", desc: "Precision typography, glassmorphism, and subtle micro-interactions." }
        ]
      },
      skills: {
        title: "Skills & Expertise",
        subtitle: "My technical toolkit across frontend engineering and creative design",
        categories: {
          all: "All Skills",
          frontend: "Frontend Dev",
          uiux: "UI/UX Design",
          graphic: "Graphic Design",
          video: "Video Editing",
          tools: "Tools & Cloud"
        }
      },
      projects: {
        title: "Featured Case Studies",
        subtitle: "Selected web applications, design systems, visual branding & video projects",
        searchPlaceholder: "Search projects by name, tech or tag...",
        liveDemo: "Live Demo",
        sourceCode: "GitHub",
        viewDetails: "View Case Study",
        filterAll: "All Work",
        filterWeb: "Web Apps",
        filterDesign: "UI/UX & Graphic",
        filterVideo: "Video Edits"
      },
      services: {
        title: "Services Offered",
        subtitle: "Comprehensive technical and creative solutions tailored for your business",
        estimateProject: "Estimate Your Project",
        getQuote: "Request Quote"
      },
      experience: {
        title: "Experience & Journey",
        subtitle: "My professional path and educational milestone timeline",
        workTab: "Work Experience",
        eduTab: "Education"
      },
      testimonials: {
        title: "Client Testimonials",
        subtitle: "What partners, recruiters, and clients say about working together"
      },
      gallery: {
        title: "Visual Gallery",
        subtitle: "A showcase of graphic designs, video clips, and creative assets"
      },
      certifications: {
        title: "Certifications",
        subtitle: "Validated knowledge and industry achievements"
      },
      blog: {
        title: "Articles & Insights",
        subtitle: "Thoughts on frontend development, UI design trends, and workflow hacks",
        readTime: "min read",
        readArticle: "Read Full Article"
      },
      github: {
        title: "GitHub Activity",
        subtitle: "Open source contributions, activity metrics, and code repositories"
      },
      contact: {
        title: "Let's Build Something Great",
        subtitle: "Have a project in mind or looking for a talented team member? Reach out today!",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        sendBtn: "Send Message",
        sending: "Sending...",
        successMsg: "Message sent successfully! I will reply shortly.",
        bookCall: "Schedule a Call"
      },
      recruiter: {
        title: "Recruiter Quick Actions",
        status: "Currently Open for Opportunities",
        downloadResume: "Download Resume (PDF)",
        directEmail: "Direct Email",
        directWhatsApp: "WhatsApp Chat"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "मुख्य पृष्ठ",
        about: "मेरे बारे में",
        skills: "कौशल",
        experience: "अनुभव",
        projects: "परियोजनाएं",
        services: "सेवाएं",
        testimonials: "प्रशंसापत्र",
        blog: "ब्लॉग",
        gallery: "गैलरी",
        github: "गिटहब",
        contact: "संपर्क करें",
        hireMe: "हायर करें",
        resume: "रिज्यूमे"
      },
      hero: {
        availableBadge: "फ्रीलांस और फुल-टाइम भूमिकाओं के लिए उपलब्ध",
        greeting: "नमस्ते, मैं हूँ",
        name: "एसके अशआदुल हुसैन",
        roles: [
          "फ्रंटएंड डेवलपर",
          "UI/UX डिज़ाइनर",
          "ग्राफिक डिज़ाइनर",
          "वीडियो एडिटर"
        ],
        description: "आधुनिक तकनीकों के साथ विश्व स्तरीय डिजिटल अनुभव, पिक्सेल-परफेक्ट यूआई, आकर्षक वीडियो और स्केलेबल वेब ऐप्स का निर्माण।",
        viewProjects: "काम देखें",
        contactMe: "संपर्क करें",
        expYears: "वर्षों का अनुभव",
        projectsDone: "पूरी की गई परियोजनाएं",
        clientSatisfaction: "ग्राहक संतुष्टि"
      },
      about: {
        title: "मेरे बारे में",
        subtitle: "सौंदर्यशास्त्र, स्वच्छ कोड और एनिमेशन के संयोजन के प्रति जुनूनी",
        bioP1: "मैं एक बहु-विषयक फ्रंटएंड डेवलपर और विजुअल क्रिएटिव हूँ जिसके पास 3+ वर्षों का अनुभव है।",
        bioP2: "चाहे रिएक्ट और नेक्स्ट.जेएस में वेब ऐप्स बनाना हो या फिगमा में यूआई डिज़ाइन करना हो, मैं गुणवत्ता पर ध्यान देता हूँ।",
        coreValues: "मुख्य मूल्य",
        values: [
          { title: "उपयोगकर्ता केंद्रित", desc: "पहुंचयोग्यता और सहजता को प्राथमिकता देना।" },
          { title: "प्रदर्शन प्राथमिकता", desc: "अनुकूलित कोड और तेज़ लोडिंग समय।" },
          { title: "दृदृश्य लालित्य", desc: "सटीक टाइपोग्राफी और सुंदर डिज़ाइन।" }
        ]
      },
      skills: {
        title: "कौशल और विशेषज्ञता",
        subtitle: "फ्रंटएंड और क्रिएटिव डिज़ाइन के लिए मेरा तकनीकी उपकरण सेट",
        categories: {
          all: "सभी कौशल",
          frontend: "फ्रंटएंड देव",
          uiux: "UI/UX डिज़ाइन",
          graphic: "ग्राफिक डिज़ाइन",
          video: "वीडियो एडिटिंग",
          tools: "टूल्स और क्लाउड"
        }
      },
      projects: {
        title: "प्रमुख परियोजनाएं",
        subtitle: "चुनिंदा वेब ऐप्स, डिज़ाइन सिस्टम और वीडियो प्रोजेक्ट्स",
        searchPlaceholder: "नाम या तकनीक द्वारा खोजें...",
        liveDemo: "लाइव डेमो",
        sourceCode: "गिटहब",
        viewDetails: "विवरण देखें",
        filterAll: "सभी काम",
        filterWeb: "वेब ऐप्स",
        filterDesign: "UI/UX और ग्राफिक",
        filterVideo: "वीडियो एडिटिंग"
      },
      services: {
        title: "प्रदत्त सेवाएं",
        subtitle: "आपके व्यवसाय के लिए व्यापक तकनीकी और रचनात्मक समाधान",
        estimateProject: "परियोजना अनुमान लगाएँ",
        getQuote: "कोटेशन मांगें"
      },
      experience: {
        title: "अनुभव और यात्रा",
        subtitle: "मेरा पेशेवर पथ और शैक्षणिक मील के पत्थर",
        workTab: "कार्य अनुभव",
        eduTab: "शिक्षा"
      },
      testimonials: {
        title: "ग्राहक प्रशंसापत्र",
        subtitle: "साथ काम करने के बारे में ग्राहकों की राय"
      },
      gallery: {
        title: "विजुअल गैलरी",
        subtitle: "ग्राफिक डिज़ाइन और वीडियो क्लिप्स का संग्रह"
      },
      certifications: {
        title: "प्रमाणपत्र",
        subtitle: "सत्यापित ज्ञान और उपलब्धियां"
      },
      blog: {
        title: "लेख और अंतर्दृष्टि",
        subtitle: "वेब विकास और डिज़ाइन रुझानों पर विचार",
        readTime: "मिनट पढ़ें",
        readArticle: "पूरा लेख पढ़ें"
      },
      github: {
        title: "गिटहब गतिविधि",
        subtitle: "ओपन सोर्स योगदान और कोड रिपोजिटरी"
      },
      contact: {
        title: "आइए मिलकर कुछ बेहतरीन बनाएं",
        subtitle: "कोई परियोजना दिमाग में है? आज ही संपर्क करें!",
        nameLabel: "आपका नाम",
        emailLabel: "आपका ईमेल",
        subjectLabel: "विषय",
        messageLabel: "संदेश",
        sendBtn: "संदेश भेजें",
        sending: "भेज रहा है...",
        successMsg: "संदेश सफलतापूर्वक भेजा गया!",
        bookCall: "कॉल शेड्यूल करें"
      },
      recruiter: {
        title: "रिक्रूटर त्वरित कार्य",
        status: "अवसरों के लिए खुला है",
        downloadResume: "रिज्यूमे डाउनलोड करें",
        directEmail: "डायरेक्ट ईमेल",
        directWhatsApp: "व्हाट्सएप चैट"
      }
    }
  },
  bn: {
    translation: {
      nav: {
        home: "হোম",
        about: "আমার সম্পর্কে",
        skills: "দক্ষতা",
        experience: "অভিজ্ঞতা",
        projects: "প্রজেক্টস",
        services: "সেবাসমূহ",
        testimonials: "মতামত",
        blog: "ব্লগ",
        gallery: "গ্যালারি",
        github: "গিটহাব",
        contact: "যোগাযোগ",
        hireMe: "হায়ার করুন",
        resume: "রিজিউমে"
      },
      hero: {
        availableBadge: "ফ্রিল্যান্স এবং ফুল-টাইম কাজের জন্য উপলব্ধ",
        greeting: "হ্যালো, আমি",
        name: "শেখ আশাদুল হোসেন",
        roles: [
          "ফ্রন্টএন্ড ডেভেলপার",
          "ইউআই/ইউএক্স ডিজাইনার",
          "গ্রাফিক ডিজাইনার",
          "ভিডিও এডিটর"
        ],
        description: "আধুনিক প্রযুক্তির সাহায্যে বিশ্বমানের ডিজিটাল অভিজ্ঞতা, পিক্সেল-পারফেক্ট ডিজাইন এবং দ্রুতগতির ওয়েব অ্যাপ্লিকেশন তৈরি করছি।",
        viewProjects: "কাজসমূহ দেখুন",
        contactMe: "যোগাযোগ করুন",
        expYears: "বছরের অভিজ্ঞতা",
        projectsDone: "সম্পন্ন প্রজেক্ট",
        clientSatisfaction: "ক্লায়েন্ট সন্তুষ্টি"
      },
      about: {
        title: "আমার সম্পর্কে",
        subtitle: "নান্দনিকতা, পরিচ্ছন্ন কোড এবং অ্যানিমেশনের চমৎকার সংমিশ্রণ",
        bioP1: "আমি ৩+ বছরের অভিজ্ঞতাসম্পন্ন একজন ফ্রন্টএন্ড ডেভেলপার এবং ভিজ্যুয়াল ক্রিয়েটিভ।",
        bioP2: "রিয়েক্ট ও নেক্সট.জেএস-এ ওয়েব অ্যাপ তৈরি বা ফিগমায় ডিজাইন যাই হোক না কেন, আমি কোয়ালিটি নিশ্চিত করি।",
        coreValues: "মূল মূল্যবোধ",
        values: [
          { title: "ব্যবহারকারী কেন্দ্রিক", desc: "সহজ এবং সাবলীল ইউজার ইন্টারফেস তৈরি।" },
          { title: "পারফরম্যান্স প্রথম", desc: "অপটিমাইজড কোড এবং দ্রুত লোডিং টাইম।" },
          { title: "ভিজ্যুয়াল সৌন্দর্য", desc: "সুনির্দিষ্ট টাইপোগ্রাফি ও আধুনিক ডিজাইন।" }
        ]
      },
      skills: {
        title: "দক্ষতা ও প্রযুক্তি",
        subtitle: "আমার ব্যবহৃত কারিগরি ও ক্রিয়েটিভ টুলস",
        categories: {
          all: "সকল দক্ষতা",
          frontend: "ফ্রন্টএন্ড দেব",
          uiux: "ইউআই/ইউএক্স",
          graphic: "গ্রাফিক ডিজাইন",
          video: "ভিডিও এডিটিং",
          tools: "টুলস ও ক্লাউড"
        }
      },
      projects: {
        title: "বিশেষ প্রজেক্টসমূহ",
        subtitle: "নির্বাচিত ওয়েব অ্যাপ্লিকেশন, ডিজাইন সিস্টেম ও ভিডিও প্রজেক্ট",
        searchPlaceholder: "নাম বা প্রযুক্তি দিয়ে খুঁজুন...",
        liveDemo: "লাইভ ডেমো",
        sourceCode: "গিটহাব",
        viewDetails: "বিস্তারিত দেখুন",
        filterAll: "সব কাজ",
        filterWeb: "ওয়েব অ্যাপ",
        filterDesign: "ডিজাইন",
        filterVideo: "ভিডিও এডিটিং"
      },
      services: {
        title: "সেবাসমূহ",
        subtitle: "আপনার ব্যবসার জন্য আধুনিক প্রযুক্তি ও ক্রিয়েটিভ সমাধান",
        estimateProject: "প্রজেক্ট বাজেট নির্ধারণ",
        getQuote: "কোটেশন নিন"
      },
      experience: {
        title: "অভিজ্ঞতা ও যাত্রা",
        subtitle: "আমার কাজের অভিজ্ঞতা ও শিক্ষাগত সাফল্য",
        workTab: "কাজের অভিজ্ঞতা",
        eduTab: "শিক্ষা"
      },
      testimonials: {
        title: "ক্লায়েন্টদের মতামত",
        subtitle: "একসাথে কাজ করার বিষয়ে সহকর্মী ও ক্লায়েন্টদের রিভিউ"
      },
      gallery: {
        title: "ভিজ্যুয়াল গ্যালারি",
        subtitle: "গ্রাফিক ডিজাইন ও ভিডিওর সংগ্রহশালা"
      },
      certifications: {
        title: "সার্টিফিকেট",
        subtitle: "অনুমোদিত দক্ষতা ও অর্জন"
      },
      blog: {
        title: "ব্লগ ও টিপস",
        subtitle: "ওয়েব ডেভেলপমেন্ট এবং ডিজাইনের আধুনিক ট্রেন্ডস",
        readTime: "মিনিট পড়া",
        readArticle: "সম্পূর্ণ পড়ুন"
      },
      github: {
        title: "গিটহাব অ্যাক্টিভিটি",
        subtitle: "ওপেন সোর্স কাজ ও কোড রিপোজিটরি"
      },
      contact: {
        title: "আসুন একসাথে নতুন কিছু তৈরি করি",
        subtitle: "কোনো প্রজেক্ট বা কাজের সুযোগ আছে? আজই মেসেজ দিন!",
        nameLabel: "আপনার নাম",
        emailLabel: "আপনার ইমেইল",
        subjectLabel: "বিষয়",
        messageLabel: "মেসেজ",
        sendBtn: "মেসেজ পাঠান",
        sending: "পাঠানো হচ্ছে...",
        successMsg: "মেসেজ সফলভাবে পাঠানো হয়েছে!",
        bookCall: "মিটিং সিডিউল করুন"
      },
      recruiter: {
        title: "রিক্রুটার কুইক অ্যাকশন",
        status: "নতুন কাজের জন্য উন্মুক্ত",
        downloadResume: "রিজিউমে ডাউনলোড (PDF)",
        directEmail: "সরাসরি ইমেইল",
        directWhatsApp: "হোয়াটসঅ্যাপ চ্যাট"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "عني",
        skills: "المهارات",
        experience: "الخبرة",
        projects: "المشاريع",
        services: "الخدمات",
        testimonials: "التوصيات",
        blog: "المدونة",
        gallery: "المعرض",
        github: "جيت هاب",
        contact: "اتصل بي",
        hireMe: "توظيف",
        resume: "السيرة الذاتية"
      },
      hero: {
        availableBadge: "متاح للعمل الحر والوظائف الكاملة",
        greeting: "مرحباً، أنا",
        name: "سك أسعد حسين",
        roles: [
          "مطور واجهات أمامية",
          "مصمم واجهات وتجربة المستخدم",
          "مصمم جرافيك",
          "محرر فيديو"
        ],
        description: "صناعة تجارب رقمية عالمية المستوى، واجهات مستخدم دقيقة، ومقاطع فيديو احترافية مع أحدث التقنيات.",
        viewProjects: "استكشف الأعمال",
        contactMe: "تواصل معي",
        expYears: "سنوات خبرة",
        projectsDone: "مشروع مكتمل",
        clientSatisfaction: "رضا العملاء"
      },
      about: {
        title: "نبذة عني",
        subtitle: "مبتكر يجمع بين الجماليات، الكود النظيف، والحركة",
        bioP1: "أنا مطور واجهات أمامية ومبدع بصري بخبرة تزيد عن 3 سنوات في تحويل الأفكار المعقدة إلى تطبيقات وتصاميم حديثة.",
        bioP2: "سواء كنت تبني تطبيقات React و Next.js أو تصمم واجهات Figma، فإنني أولي اهتماماً دقيقاً للتفاصيل والسرعة.",
        coreValues: "القيم الأساسية",
        values: [
          { title: "التركيز على المستخدم", desc: "بناء واجهات سهلة وسلسة تركز على إمكانية الوصول." },
          { title: "الأداء أولاً", desc: "كود محسن وسرعة تحميل فائقة." },
          { title: "الأناقة البصرية", desc: "طباعة دقيقة وتصاميم حديثة." }
        ]
      },
      skills: {
        title: "المهارات والخبرات",
        subtitle: "مجموعتي التقنية في التطوير والتصميم",
        categories: {
          all: "كل المهارات",
          frontend: "تطوير الواجهات",
          uiux: "تصميم UI/UX",
          graphic: "تصميم جرافيك",
          video: "تحرير الفيديو",
          tools: "الأدوات والسحاب"
        }
      },
      projects: {
        title: "أبرز المشاريع",
        subtitle: "مجموعة مختارة من تطبيقات الويب، الهويات البصرية، ومقاطع الفيديو",
        searchPlaceholder: "بحث عن مشروع بالاسم أو التقنية...",
        liveDemo: "معاينة حية",
        sourceCode: "جيت هاب",
        viewDetails: "عرض التفاصيل",
        filterAll: "كل الأعمال",
        filterWeb: "تطبيقات الويب",
        filterDesign: "التصميم والجرافيك",
        filterVideo: "تحرير الفيديو"
      },
      services: {
        title: "الخدمات المقدمة",
        subtitle: "حلول تقنية وإبداعية متكاملة مصممة لأعمالك",
        estimateProject: "تقدير مشروعك",
        getQuote: "طلب عرض سعر"
      },
      experience: {
        title: "الخبرة والمسيرة",
        subtitle: "مساري المهني والمحطات التعليمية",
        workTab: "خبرة العمل",
        eduTab: "التعليم"
      },
      testimonials: {
        title: "توصيات العملاء",
        subtitle: "ما يقوله الشركاء والعملاء عن العمل معي"
      },
      gallery: {
        title: "المعرض البصري",
        subtitle: "معرض للتصاميم الجرافيكية ومقاطع الفيديو",
      },
      certifications: {
        title: "الشهادات",
        subtitle: "المعارف المعتمدة والانجازات"
      },
      blog: {
        title: "المقالات",
        subtitle: "أفكار حول تطوير الواجهات واتجاهات التصميم",
        readTime: "دقائق قراءة",
        readArticle: "قراءة المقال"
      },
      github: {
        title: "نشاط جيت هاب",
        subtitle: "المساهمات والمشاريع برمجية"
      },
      contact: {
        title: "دعنا نبني شيئاً رائعاً",
        subtitle: "هل لديك مشروع في الذهن؟ تواصل معي اليوم!",
        nameLabel: "الاسم",
        emailLabel: "البريد الإلكتروني",
        subjectLabel: "الموضوع",
        messageLabel: "الرسالة",
        sendBtn: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        successMsg: "تم إرسال الرسالة بنجاح!",
        bookCall: "حجز موعد"
      },
      recruiter: {
        title: "إجراءات سريعة لمسؤولي التوظيف",
        status: "متاح للفرص الجديدة",
        downloadResume: "تحميل السيرة الذاتية",
        directEmail: "البريد المباشر",
        directWhatsApp: "محادثة واتساب"
      }
    }
  },
  ur: {
    translation: {
      nav: {
        home: "ہوم",
        about: "میرے بارے میں",
        skills: "مہارتیں",
        experience: "تجربہ",
        projects: "پراجیکٹس",
        services: "خدمات",
        testimonials: "رائے",
        blog: "بلاگ",
        gallery: "گیلری",
        github: "گٹ ہب",
        contact: "رابطہ کریں",
        hireMe: "ہائر کریں",
        resume: "ریزیومے"
      },
      hero: {
        availableBadge: "فری لانس اور مستقل ملازمت کے لیے دستیاب",
        greeting: "ہیلو، میں ہوں",
        name: "ایس کے اسعد الحسین",
        roles: [
          "فرنٹ اینڈ ڈیولپر",
          "UI/UX ڈیزائنر",
          "گرافک ڈیزائنر",
          "ویڈیو ایڈیٹر"
        ],
        description: "جدید ٹیکنالوجیز کے ساتھ اعلیٰ ترین ڈیجیٹل تجربات، تیز ترین ویب ایپس، اور دلکش ویڈیو ایڈیٹنگ کی تخلیق۔",
        viewProjects: "کام دیکھیں",
        contactMe: "رابطہ کریں",
        expYears: "سالہ تجربہ",
        projectsDone: "مکمل پراجیکٹس",
        clientSatisfaction: "کلائنٹ کا اطمینان"
      },
      about: {
        title: "میرے بارے میں",
        subtitle: "خوبصورتی، صاف ستھرے کوڈ اور اینیمیشن کے ملاپ کا جنون",
        bioP1: "میں ایک ملٹی ڈسپلنری فرنٹ اینڈ ڈیولپر اور ویژول کری ایٹو ہوں جس کے پاس 3+ سال کا تجربہ ہے۔",
        bioP2: "خواہ React میں ایپس بنانا ہو یا Figma میں ڈیزائن تیار کرنا، میں معیار پر مکمل توجہ دیتا ہوں۔",
        coreValues: "بنیادی اقدار",
        values: [
          { title: "صارف کی ترجیح", desc: "آسان اور بہترین یوژر انٹرفیس۔" },
          { title: "کارکردگی پہلا اصول", desc: "تیز ترین لوڈنگ اور بہتر کوڈ۔" },
          { title: "بصری خوبصورتی", desc: "جدید اور دلکش ڈیزائننگ۔" }
        ]
      },
      skills: {
        title: "مہارتیں اور ٹولز",
        subtitle: "ڈیولپمنٹ اور ڈیزائننگ کے لیے میرا ٹیکنالوجی سیٹ",
        categories: {
          all: "تمام مہارتیں",
          frontend: "فرنٹ اینڈ",
          uiux: "UI/UX ڈیزائن",
          graphic: "گرافک ڈیزائن",
          video: "ویڈیو ایڈیٹنگ",
          tools: "ٹولز اور کلاؤڈ"
        }
      },
      projects: {
        title: "نمایاں پراجیکٹس",
        subtitle: "منتخب ویب ایپس، برانڈنگ اور ویڈیو پراجیکٹس",
        searchPlaceholder: "نام یا ٹیکنالوجی سے تلاش کریں...",
        liveDemo: "لائیو ڈیمو",
        sourceCode: "گٹ ہب",
        viewDetails: "تفصیلات دیکھیں",
        filterAll: "تمام کام",
        filterWeb: "ویب ایپس",
        filterDesign: "ڈیزائن",
        filterVideo: "ویڈیو ایڈیٹنگ"
      },
      services: {
        title: "خدمات",
        subtitle: "آپ کے کاروبار کے لیے ٹیکنالوجی اور کری ایٹو حل",
        estimateProject: "پراجیکٹ بجٹ تخمینہ",
        getQuote: "کوٹیشن حاصل کریں"
      },
      experience: {
        title: "تجربہ اور سفر",
        subtitle: "میرا پیشہ ورانہ سفر اور تعلیمی اسناد",
        workTab: "کام کا تجربہ",
        eduTab: "تعلیم"
      },
      testimonials: {
        title: "کلائنٹس کی رائے",
        subtitle: "ساتھ کام کرنے کے بارے میں مختلف آراء"
      },
      gallery: {
        title: "گیلری",
        subtitle: "گرافک ڈیزائنز اور ویڈیوز کا مجموعہ"
      },
      certifications: {
        title: "اسناد",
        subtitle: "مصدقہ اسناد اور کامیابیوں"
      },
      blog: {
        title: "بلاگ",
        subtitle: "ویب ڈیولپمنٹ اور ڈیزائننگ کے رجحانات",
        readTime: "منٹ مطالعہ",
        readArticle: "مکمل پڑھیں"
      },
      github: {
        title: "گٹ ہب سرگرمی",
        subtitle: "اوپن سورس کام اور کوڈ ریپوزیٹریز"
      },
      contact: {
        title: "آئیے مل کر کچھ زبردست بنائیں",
        subtitle: "کیا کوئی پراجیکٹ ذہن میں ہے؟ آج ہی رابطہ کریں!",
        nameLabel: "آپ کا نام",
        emailLabel: "آپ کا ای میل",
        subjectLabel: "عنوان",
        messageLabel: "پیغام",
        sendBtn: "پیغام بھیجیں",
        sending: "بھیجا جا رہا ہے...",
        successMsg: "پیغام کامیابی سے بھیج دیا گیا!",
        bookCall: "میٹنگ شیڈول کریں"
      },
      recruiter: {
        title: "ریکروٹر کوئیک ایکشنز",
        status: "نئے مواقع کے لیے دستیاب",
        downloadResume: "ریزیومے ڈاؤن لوڈ کریں",
        directEmail: "براہ راست ای میل",
        directWhatsApp: "واٹس ایپ چیٹ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
