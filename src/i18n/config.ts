import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.title": "GrameenCure",
      "hero.subtitle": "Intelligent Rural Healthcare & Triage System",
      "hero.description": "AI-powered healthcare platform that helps patients report symptoms in their local language, get instant AI-based triage, and connect directly with the right doctor.",
      "hero.getStarted": "Get Started",
      "hero.learnMore": "Learn More",
      
      // Features
      "features.title": "Transforming Rural Healthcare",
      "features.subtitle": "Bridging the rural-urban healthcare gap with AI-powered solutions",
      
      "feature.multilingual.title": "Multilingual Support",
      "feature.multilingual.description": "Report symptoms in your local language with our natural language processing system",
      
      "feature.ai.title": "AI Triage System",
      "feature.ai.description": "Instant AI-based triage that detects urgency and specialty requirements",
      
      "feature.consultation.title": "Video Consultations",
      "feature.consultation.description": "Connect with qualified doctors through secure video calls with full context",
      
      "feature.offline.title": "Offline Support",
      "feature.offline.description": "Works with low bandwidth and offline capabilities for rural connectivity",
      
      // Patient Journey
      "journey.title": "Patient Journey",
      "journey.subtitle": "Simple steps to get the healthcare you need",
      
      "journey.step1.title": "Report Symptoms",
      "journey.step1.description": "Describe your symptoms in your preferred language",
      
      "journey.step2.title": "AI Analysis",
      "journey.step2.description": "Our AI analyzes symptoms and determines urgency level",
      
      "journey.step3.title": "Connect with Doctor",
      "journey.step3.description": "Get connected with the right specialist for your condition",
      
      "journey.step4.title": "Follow-up Care",
      "journey.step4.description": "Receive digital prescriptions and automated reminders",
      
      // Statistics
      "stats.patients": "Rural Patients Served",
      "stats.doctors": "Healthcare Providers",
      "stats.consultations": "Video Consultations",
      "stats.languages": "Supported Languages",
      
      // CTA
      "cta.title": "Ready to Transform Rural Healthcare?",
      "cta.description": "Join thousands of patients and healthcare providers using GrameenCure",
      "cta.patient": "I'm a Patient",
      "cta.doctor": "I'm a Doctor",
      
      // Auth
      "auth.login.title": "Welcome Back",
      "auth.login.subtitle": "Sign in to your account to continue",
      "auth.login.button": "Sign In",
      "auth.login.noAccount": "Don't have an account?",
      "auth.login.link": "Sign In",
      "auth.signup.title": "Create Account",
      "auth.signup.subtitle": "Join GrameenCure to access quality healthcare",
      "auth.signup.button": "Create Account",
      "auth.signup.hasAccount": "Already have an account?",
      "auth.signup.link": "Sign Up",
      "auth.userType": "User Type",
      "auth.patient": "Patient",
      "auth.doctor": "Doctor",
      "auth.email": "Email",
      "auth.emailPlaceholder": "Enter your email",
      "auth.password": "Password",
      "auth.passwordPlaceholder": "Enter your password",
      "auth.confirmPassword": "Confirm Password",
      "auth.confirmPasswordPlaceholder": "Confirm your password",
      "auth.fullName": "Full Name",
      "auth.fullNamePlaceholder": "Enter your full name",
      "auth.phone": "Phone Number",
      "auth.phonePlaceholder": "Enter your phone number",
      "auth.location": "Location",
      "auth.locationPlaceholder": "Enter your location",
      "auth.specialization": "Specialization",
      "auth.specializationPlaceholder": "Enter your specialization",
      "auth.licenseNumber": "License Number",
      "auth.licenseNumberPlaceholder": "Enter your medical license number",
      
      // Dashboard
      "dashboard.settings": "Settings",
      "dashboard.logout": "Logout",

      // Footer
      "footer.description": "Empowering rural communities with accessible, intelligent healthcare solutions.",
      "footer.links": "Quick Links",
      "footer.contact": "Contact Info",
      "footer.rights": "All rights reserved."
    }
  },
  hi: {
    translation: {
      // Navigation
      "nav.home": "होम",
      "nav.about": "हमारे बारे में",
      "nav.services": "सेवाएं",
      "nav.contact": "संपर्क",
      
      // Hero Section
      "hero.title": "ग्रामीणक्योर",
      "hero.subtitle": "बुद्धिमान ग्रामीण स्वास्थ्य सेवा और ट्राइएज सिस्टम",
      "hero.description": "AI-संचालित स्वास्थ्य सेवा प्लेटफॉर्म जो मरीजों को अपनी स्थानीय भाषा में लक्षण बताने, तुरंत AI-आधारित ट्राइएज प्राप्त करने और सही डॉक्टर से सीधे जुड़ने में मदद करता है।",
      "hero.getStarted": "शुरू करें",
      "hero.learnMore": "और जानें",
      
      // Features
      "features.title": "ग्रामीण स्वास्थ्य सेवा में बदलाव",
      "features.subtitle": "AI-संचालित समाधानों के साथ ग्रामीण-शहरी स्वास्थ्य सेवा अंतर को पाटना",
      
      "feature.multilingual.title": "बहुभाषी समर्थन",
      "feature.multilingual.description": "हमारी प्राकृतिक भाषा प्रसंस्करण प्रणाली के साथ अपनी स्थानीय भाषा में लक्षण बताएं",
      
      "feature.ai.title": "AI ट्राइएज सिस्टम",
      "feature.ai.description": "तत्काल AI-आधारित ट्राइएज जो तात्कालिकता और विशेषता आवश्यकताओं का पता लगाता है",
      
      "feature.consultation.title": "वीडियो परामर्श",
      "feature.consultation.description": "पूर्ण संदर्भ के साथ सुरक्षित वीडियो कॉल के माध्यम से योग्य डॉक्टरों से जुड़ें",
      
      "feature.offline.title": "ऑफ़लाइन समर्थन",
      "feature.offline.description": "ग्रामीण कनेक्टिविटी के लिए कम बैंडविड्थ और ऑफ़लाइन क्षमताओं के साथ काम करता है",
      
      // Patient Journey
      "journey.title": "मरीज़ की यात्रा",
      "journey.subtitle": "आपको जरूरी स्वास्थ्य सेवा पाने के सरल चरण",
      
      "journey.step1.title": "लक्षण बताएं",
      "journey.step1.description": "अपनी पसंदीदा भाषा में अपने लक्षणों का वर्णन करें",
      
      "journey.step2.title": "AI विश्लेषण",
      "journey.step2.description": "हमारा AI लक्षणों का विश्लेषण करता है और तात्कालिकता का स्तर निर्धारित करता है",
      
      "journey.step3.title": "डॉक्टर से जुड़ें",
      "journey.step3.description": "अपनी स्थिति के लिए सही विशेषज्ञ से जुड़ें",
      
      "journey.step4.title": "फॉलो-अप केयर",
      "journey.step4.description": "डिजिटल प्रिस्क्रिप्शन और स्वचालित रिमाइंडर प्राप्त करें",
      
      // Statistics
      "stats.patients": "सेवा प्राप्त ग्रामीण मरीज़",
      "stats.doctors": "स्वास्थ्य सेवा प्रदाता",
      "stats.consultations": "वीडियो परामर्श",
      "stats.languages": "समर्थित भाषाएं",
      
      // CTA
      "cta.title": "ग्रामीण स्वास्थ्य सेवा को बदलने के लिए तैयार हैं?",
      "cta.description": "ग्रामीणक्योर का उपयोग करने वाले हजारों मरीजों और स्वास्थ्य सेवा प्रदाताओं से जुड़ें",
      "cta.patient": "मैं एक मरीज़ हूं",
      "cta.doctor": "मैं एक डॉक्टर हूं",
      
      // Auth
      "auth.login.title": "वापस आपका स्वागत है",
      "auth.login.subtitle": "जारी रखने के लिए अपने खाते में साइन इन करें",
      "auth.login.button": "साइन इन करें",
      "auth.login.noAccount": "खाता नहीं है?",
      "auth.login.link": "साइन इन करें",
      "auth.signup.title": "खाता बनाएं",
      "auth.signup.subtitle": "गुणवत्तापूर्ण स्वास्थ्य सेवा के लिए GrameenCure में शामिल हों",
      "auth.signup.button": "खाता बनाएं",
      "auth.signup.hasAccount": "पहले से खाता है?",
      "auth.signup.link": "साइन अप करें",
      "auth.userType": "उपयोगकर्ता प्रकार",
      "auth.patient": "मरीज़",
      "auth.doctor": "डॉक्टर",
      "auth.email": "ईमेल",
      "auth.emailPlaceholder": "अपना ईमेल दर्ज करें",
      "auth.password": "पासवर्ड",
      "auth.passwordPlaceholder": "अपना पासवर्ड दर्ज करें",
      "auth.confirmPassword": "पासवर्ड की पुष्टि करें",
      "auth.confirmPasswordPlaceholder": "अपने पासवर्ड की पुष्टि करें",
      "auth.fullName": "पूरा नाम",
      "auth.fullNamePlaceholder": "अपना पूरा नाम दर्ज करें",
      "auth.phone": "फोन नंबर",
      "auth.phonePlaceholder": "अपना फोन नंबर दर्ज करें",
      "auth.location": "स्थान",
      "auth.locationPlaceholder": "अपना स्थान दर्ज करें",
      "auth.specialization": "विशेषज्ञता",
      "auth.specializationPlaceholder": "अपनी विशेषज्ञता दर्ज करें",
      "auth.licenseNumber": "लाइसेंस नंबर",
      "auth.licenseNumberPlaceholder": "अपना मेडिकल लाइसेंस नंबर दर्ज करें",
      
      // Dashboard
      "dashboard.settings": "सेटिंग्स",
      "dashboard.logout": "लॉगआउट",

      // Footer
      "footer.description": "सुलभ, बुद्धिमान स्वास्थ्य सेवा समाधानों के साथ ग्रामीण समुदायों को सशक्त बनाना।",
      "footer.links": "त्वरित लिंक",
      "footer.contact": "संपर्क जानकारी",
      "footer.rights": "सभी अधिकार सुरक्षित।"
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
      escapeValue: false,
    },
  });

export default i18n;