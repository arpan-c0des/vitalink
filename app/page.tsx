'use client';

import React, { useState } from 'react';
import { 
  Heart, 
  Video, 
  Bot, 
  Pill, 
  AlertTriangle, 
  FileText, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  Search, 
  Bell, 
  Send, 
  Ambulance, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sparkles, 
  User, 
  ShieldAlert, 
  Calendar, 
  MessageSquare, 
  Navigation, 
  Check, 
  Plus, 
  Lock, 
  Share2, 
  RefreshCw, 
  Download, 
  Globe, 
  Wifi, 
  WifiOff, 
  Mic, 
  MicOff,
  LayoutGrid,
  Users,
  CalendarDays,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Settings,
  Radio,
  ExternalLink,
  Shield,
  PhoneForwarded,
  Stethoscope,
  Hospital
} from 'lucide-react';

const translations: Record<string, Record<string, string>> = {
  en: {
    title: 'VitaLink',
    tagline: 'Healthcare Reimagined',
    overview: 'Overview & Alerts',
    telemedicine: '1. Telemedicine',
    aiAssistant: '2. AI Symptom Assistant',
    medTracker: '3. Medicine Tracker',
    emergencySos: '4. Emergency SOS',
    pmr: '5. Medical Record (PMR)',
    simulateRole: 'Select Role / उपयोगकर्ता भूमिका',
    searchPlaceholder: 'Search records, doctors, medications...',
    sosActive: 'EMERGENCY SOS ACTIVE',
    sosTriggeredBtn: 'SOS Active (Live Tracking)',
    sosTriggerNow: 'Trigger Emergency SOS',
    sosPrompt: 'One-Tap Emergency SOS',
    sosSubtext: 'Instantly transmits unified medical history, current vitals, allergies, and GPS to nearest emergency response teams.',
    offlineNotice: 'Offline Mode: Local database active.',
    listening: 'Listening to your voice...',
    speakSymptom: 'Speak or type your symptoms...',
    bp: 'Blood Pressure',
    hr: 'Heart Rate',
    nextDose: 'Next Dosage',
    hospSync: 'Hospital HIS Sync',
    online: 'Online (High-Bandwidth)',
    lowBandwidth: 'Low-Bandwidth (2G/Rural)',
    offline: 'Offline-First Cache',
    bloodType: 'Blood Group',
    allergies: 'Severe Allergies',
    currentMeds: 'Active Medications'
  },
  hi: {
    title: 'वाइटालिंक',
    tagline: 'सुलभ स्वास्थ्य सेवा',
    overview: 'विवरण और अलर्ट',
    telemedicine: '1. टेलीमेडिसिन',
    aiAssistant: '2. एआई लक्षण सहायक',
    medTracker: '3. दवा ट्रैकर',
    emergencySos: '4. आपातकालीन एसओएस',
    pmr: '5. मेडिकल रिकॉर्ड',
    simulateRole: 'भूमिका चुनें',
    searchPlaceholder: 'रिकॉर्ड, डॉक्टर या दवा खोजें...',
    sosActive: 'आपातकालीन एसओएस सक्रिय है',
    sosTriggeredBtn: 'एसओएस सक्रिय (लाइव स्थिति)',
    sosTriggerNow: 'तत्काल एसओएस दबाएं',
    sosPrompt: 'वन-टैप आपातकालीन एसओएस',
    sosSubtext: 'यह बटन तुरंत आपका संपूर्ण मेडिकल इतिहास, एलर्जी और लाइव जीपीएस निकटतम अस्पताल को भेजता है।',
    offlineNotice: 'ऑफ़लाइन मोड सक्रिय',
    listening: 'आपकी आवाज़ सुनी जा रही है...',
    speakSymptom: 'माइक दबाएं या लक्षण लिखें...',
    bp: 'रक्तचाप',
    hr: 'हृदय गति',
    nextDose: 'अगली खुराक',
    hospSync: 'अस्पताल सिंक',
    online: 'ऑनलाइन (हाई-बैंडविड्थ)',
    lowBandwidth: 'कम नेटवर्क (2G / ग्रामीण)',
    offline: 'ऑफ़लाइन-फ़र्स्ट मोड',
    bloodType: 'रक्त समूह',
    allergies: 'गंभीर एलर्जी',
    currentMeds: 'सक्रिय दवाएं'
  },
  bn: {
    title: 'ভাইটালিঙ্ক',
    tagline: 'সহজ স্বাস্থ্যসেবা',
    overview: 'সংক্ষিপ্ত বিবরণ ও সতর্কতা',
    telemedicine: '১. টেলিমেডিসিন',
    aiAssistant: '২. এআই লক্ষণ সহকারী',
    medTracker: '৩. ওষুধ ট্র্যাকার',
    emergencySos: '৪. জরুরি এসওএস (SOS)',
    pmr: '৫. মেডিকেল রেকর্ড',
    simulateRole: 'ভূমিকা পরিবর্তন করুন',
    searchPlaceholder: 'মেডিকেল রেকর্ড বা ডাক্তার খুঁজুন...',
    sosActive: 'জরুরি এসওএস সক্রিয় রয়েছে',
    sosTriggeredBtn: 'এসওএস সক্রিয় (লাইভ ট্র্যাকার)',
    sosTriggerNow: 'জরুরি এসওএস ট্রিগার করুন',
    sosPrompt: 'এক-ট্যাপ জরুরি এসওএস',
    sosSubtext: 'এটি এক ক্লিকেই আপনার অতীতের মেডিকেল ইতিহাস ও লাইভ জিপিএস অ্যাম্বুলেন্সে পাঠিয়ে দেবে।',
    offlineNotice: 'অফলাইন মোড সক্রিয়',
    listening: 'আপনার কথা শোনা হচ্ছে...',
    speakSymptom: 'কথা বলুন অথবা উপসর্গ লিখুন...',
    bp: 'রক্তচাপ',
    hr: 'হার্ট রেট',
    nextDose: 'পরবর্তী ডোজ',
    hospSync: 'হাসপাতাল সিঙ্ক',
    online: 'অনলাইন (হাই-ব্যান্ডউইথ)',
    lowBandwidth: 'কম ব্যান্ডউইথ (2G / গ্রামীণ)',
    offline: 'অফলাইন মোড',
    bloodType: 'রক্তের গ্রুপ',
    allergies: 'অ্যালার্জি',
    currentMeds: 'বর্তমান ওষুধ'
  },
  es: {
    title: 'VitaLink',
    tagline: 'Salud Accesible',
    overview: 'Resumen y Alertas',
    telemedicine: '1. Telemedicina',
    aiAssistant: '2. Asistente IA',
    medTracker: '3. Rastreador de Medicinas',
    emergencySos: '4. SOS Emergencia',
    pmr: '5. Historial Médico',
    simulateRole: 'Simular Rol',
    searchPlaceholder: 'Buscar historial, doctores...',
    sosActive: 'SOS DE EMERGENCIA ACTIVO',
    sosTriggeredBtn: 'SOS Activo (Ver Rastreo)',
    sosTriggerNow: 'Activar SOS Ahora',
    sosPrompt: 'SOS de Emergencia en 1 Toque',
    sosSubtext: 'Transmite al instante el historial médico unificado y coordenadas GPS a emergencias.',
    offlineNotice: 'Modo sin conexión',
    listening: 'Escuchando su voz...',
    speakSymptom: 'Presione el micrófono o escriba...',
    bp: 'Presión Arterial',
    hr: 'Frecuencia Cardíaca',
    nextDose: 'Próxima Dosis',
    hospSync: 'Sincronización Hospital',
    online: 'En Línea (Alta Velocidad)',
    lowBandwidth: 'Bajo Ancho de Banda (2G)',
    offline: 'Modo Offline',
    bloodType: 'Grupo Sanguíneo',
    allergies: 'Alergias Severas',
    currentMeds: 'Medicamentos Actuales'
  }
};

export default function VitaLinkMain() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'telemedicine' | 'ai-assistant' | 'medicine' | 'sos' | 'pmr'>('dashboard');
  
  // Default user role restored to Patient / Family
  const [userRole, setUserRole] = useState<'Patient / Family' | 'Healthcare Worker' | 'Doctor / Specialist' | 'Paramedics / Emergency' | 'Admin'>('Patient / Family');
  
  // Multilingual & Bandwidth State
  const [language, setLanguage] = useState<'en' | 'hi' | 'bn' | 'es'>('en');
  const [networkMode, setNetworkMode] = useState<'online' | 'low' | 'offline'>('online');
  const [isListening, setIsListening] = useState(false);

  const t = translations[language];

  // Emergency SOS State
  const [sosActive, setSosActive] = useState(false);
  const [sosStep, setSosStep] = useState<number>(1);

  // Patient Emergency Context Snapshot
  const patientEmergencyProfile = {
    patientName: 'Arpan Mukherjee (ID #VL-8924)',
    age: 34,
    gender: 'Male',
    bloodGroup: 'O Positive (O+)',
    allergies: 'Severe Penicillin Allergy, Sulfa Drugs',
    chronicConditions: 'Type 2 Diabetes, Mild Hypertension',
    activeMedications: 'Metformin 500mg (Daily), Paracetamol (SOS)',
    pastSurgeries: 'Appendectomy (2021)',
    currentGPS: 'Lat: 23.2324° N, Long: 87.0715° E (Bankura District)'
  };

  // AI Assistant Chat State
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; triage?: 'low' | 'moderate' | 'emergency' }>>([
    {
      sender: 'ai',
      text: 'Hello! I am your VitaLink AI Symptom Assistant. Describe what you are feeling (e.g., "sharp chest pain", "fever and headache") or click the microphone to speak.'
    }
  ]);
  const [inputText, setInputText] = useState('');

  // Telemedicine State
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [inCall, setInCall] = useState(false);

  // Medicine Tracker State
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol 500mg', time: '08:00 AM & 08:00 PM', purpose: 'Fever / Pain Relief', stock: 12, taken: true },
    { id: 2, name: 'Amoxicillin 250mg', time: '02:00 PM', purpose: 'Antibiotic Course', stock: 4, taken: false },
    { id: 3, name: 'Metformin 500mg', time: '09:00 PM', purpose: 'Blood Sugar Regulation', stock: 24, taken: false },
  ]);

  // PMR State
  const [isSyncing, setIsSyncing] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  const medicalRecords = [
    {
      date: 'Aug 14, 2026',
      hospital: 'District General Hospital (HIS Sync)',
      doctor: 'Dr. Sarah Jenkins',
      type: 'Diagnosis & Prescription',
      details: 'Acute Upper Respiratory Infection. Prescribed Amoxicillin course and hydration.',
      status: 'Verified & Encrypted'
    },
    {
      date: 'Jul 22, 2026',
      hospital: 'Apex Pathology Labs',
      doctor: 'Dr. R. K. Sharma',
      type: 'Diagnostic Lab Report',
      details: 'Complete Blood Count (CBC) & HbA1c (5.8% - Normal). All biomarkers optimal.',
      status: 'Verified & Encrypted'
    },
    {
      date: 'Feb 10, 2026',
      hospital: 'Community Health Sub-Centre',
      doctor: 'Staff Nurse Aditi',
      type: 'Immunization / Vaccination',
      details: 'Tetanus Toxoid (TT) Booster administered.',
      status: 'Verified & Encrypted'
    }
  ];

  const pharmacies = [
    { name: 'City Central Pharmacy', distance: '0.8 km away', stock: 'In Stock', price: '$4.50', address: '12 Main Rd, Central Market' },
    { name: 'Rural Health Dispensary', distance: '2.3 km away', stock: 'Limited Stock (3 left)', price: '$3.80', address: 'Sector 4, Community Block' },
    { name: 'CarePlus 24/7 Meds', distance: '4.1 km away', stock: 'In Stock', price: '$4.90', address: 'Near District Hospital Gate' },
  ];

  // Speech Recognition
  const toggleSpeechRecognition = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type your symptoms.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'hi' ? 'hi-IN' : language === 'bn' ? 'bn-IN' : language === 'es' ? 'es-ES' : 'en-US';
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
    }
  };

  // Backend Triage
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');

    try {
      const res = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: userMsg, language }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: data.recommendation || 'Symptoms recorded to offline clinical cache.',
          triage: data.triage || 'low',
        },
      ]);
    } catch (err) {
      const lower = userMsg.toLowerCase();
      let triage: 'emergency' | 'moderate' | 'low' = 'low';
      let text = 'General symptom recorded. Please consult an available specialist.';

      if (lower.includes('chest') || lower.includes('breath') || lower.includes('unconscious') || lower.includes('छाती') || lower.includes('বুকে')) {
        triage = 'emergency';
        text = 'CRITICAL ALERT: Your symptoms indicate an acute cardiopulmonary risk. Emergency SOS is recommended.';
      } else if (lower.includes('fever') || lower.includes('cough') || lower.includes('headache') || lower.includes('बुखार') || lower.includes('জ্বর')) {
        triage = 'moderate';
        text = 'ASSESSMENT: Mild-to-moderate viral symptoms detected. Maintain hydration and rest. Book Telemedicine if symptoms continue.';
      }

      setMessages((prev) => [...prev, { sender: 'ai', text, triage }]);
    }
  };

  const toggleMedicineTaken = (id: number) => {
    setMedicines(medicines.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      await fetch('/api/records');
    } catch (e) {}
    setTimeout(() => setIsSyncing(false), 900);
  };

  const handleShareRecord = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  return (
    <div className="flex h-screen bg-[#0d0f0e] text-[#f1f5f4] font-sans antialiased overflow-hidden select-none">
      
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-[#111413] border-r border-[#1e2321] flex flex-col justify-between p-5 hidden md:flex">
        <div className="space-y-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-9 h-9 rounded-xl bg-[#2bfb8d] text-[#0d0f0e] flex items-center justify-center font-black shadow-lg shadow-[#2bfb8d]/20">
              <Heart className="w-5 h-5 fill-current animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                {t.title}
              </h1>
              <p className="text-[10px] text-[#2bfb8d] font-semibold tracking-wide uppercase">{t.tagline}</p>
            </div>
          </div>

          {/* Core Modules 1 to 5 Navigation */}
          <nav className="space-y-1.5 pt-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>{t.overview}</span>
            </button>

            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'telemedicine'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>{t.telemedicine}</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'ai-assistant'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bot className="w-4 h-4" />
                <span>{t.aiAssistant}</span>
              </div>
              <span className="w-5 h-5 rounded-full bg-[#2bfb8d] text-[#0d0f0e] text-[10px] font-black flex items-center justify-center">
                AI
              </span>
            </button>

            <button
              onClick={() => setActiveTab('medicine')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'medicine'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <Pill className="w-4 h-4" />
              <span>{t.medTracker}</span>
            </button>

            <button
              onClick={() => setActiveTab('sos')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'sos'
                  ? 'bg-red-500/20 text-red-400 font-bold border border-red-500/30'
                  : 'text-red-400/90 hover:bg-red-950/30 hover:text-red-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>{t.emergencySos}</span>
              </div>
              {sosActive && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>}
            </button>

            <button
              onClick={() => setActiveTab('pmr')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'pmr'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{t.pmr}</span>
            </button>
          </nav>
        </div>

        {/* Bottom Switchers: Language, Bandwidth, and Exact Role Dropdown from Screenshot */}
        <div className="space-y-3 pt-3 border-t border-[#1e2321]">
          {/* Language Selector */}
          <div>
            <label className="text-[10px] font-bold text-[#8b9590] uppercase tracking-wider block mb-1 flex items-center gap-1">
              <Globe className="w-3 h-3 text-[#2bfb8d]" /> LANGUAGE / भाषा
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="w-full bg-[#161a18] text-[#e0e6e3] border border-[#232a26] rounded-xl px-2.5 py-1.5 outline-none text-xs cursor-pointer font-medium"
            >
              <option value="en">English (Global)</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="es">Español (Spanish)</option>
            </select>
          </div>

          {/* Bandwidth Mode */}
          <div>
            <label className="text-[10px] font-bold text-[#8b9590] uppercase tracking-wider block mb-1 flex items-center gap-1">
              <Radio className="w-3 h-3 text-[#2bfb8d]" /> NETWORK / बैंडविड्थ
            </label>
            <select
              value={networkMode}
              onChange={(e) => setNetworkMode(e.target.value as any)}
              className="w-full bg-[#161a18] text-[#e0e6e3] border border-[#232a26] rounded-xl px-2.5 py-1.5 outline-none text-xs cursor-pointer font-medium"
            >
              <option value="online">Online (High-Bandwidth)</option>
              <option value="low">Low-Bandwidth (2G/Rural)</option>
              <option value="offline">Offline-First Cache</option>
            </select>
          </div>

          {/* Exact Role Dropdown Selector */}
          <div>
            <label className="text-[10px] font-bold text-[#8b9590] uppercase tracking-wider block mb-1 flex items-center gap-1">
              <Users className="w-3 h-3 text-[#2bfb8d]" /> {t.simulateRole}
            </label>
            <select 
              value={userRole} 
              onChange={(e) => setUserRole(e.target.value as any)}
              className="w-full bg-[#161a18] text-[#2bfb8d] font-bold border border-[#232a26] rounded-xl px-2.5 py-2 outline-none text-xs cursor-pointer"
            >
              <option value="Patient / Family">Patient / Family</option>
              <option value="Healthcare Worker">Healthcare Worker</option>
              <option value="Doctor / Specialist">Doctor / Specialist</option>
              <option value="Paramedics / Emergency">Paramedics / Emergency</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#0d0f0e]">
        {/* Network Mode Status Banner */}
        {networkMode !== 'online' && (
          <div className={`px-6 py-2 text-xs font-semibold flex items-center justify-between ${
            networkMode === 'offline' ? 'bg-amber-500 text-slate-900' : 'bg-teal-600 text-white'
          }`}>
            <div className="flex items-center gap-2">
              {networkMode === 'offline' ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
              <span>{networkMode === 'offline' ? t.offlineNotice : 'Low-Bandwidth 2G Mode Active: Data compression enabled.'}</span>
            </div>
            <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded font-bold uppercase">
              {networkMode === 'offline' ? 'Offline Cache' : '2G Mode'}
            </span>
          </div>
        )}

        {/* Top Header */}
        <header className="px-8 py-5 flex items-center justify-between sticky top-0 bg-[#0d0f0e]/85 backdrop-blur-md z-10 border-b border-[#161a18]">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white capitalize">
              {activeTab === 'dashboard' ? t.overview : (t as any)[activeTab] || activeTab}
            </h2>
            <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#1d2420] text-[#2bfb8d] border border-[#2bfb8d]/20">
              {userRole}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-72">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full bg-[#161a18] border border-[#232a26] rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-[#5a6560] focus:outline-none focus:border-[#2bfb8d] transition-all"
              />
              <Search className="w-4 h-4 text-[#5a6560] absolute left-3.5 top-2.5" />
            </div>

            <button className="w-9 h-9 rounded-2xl bg-[#161a18] border border-[#232a26] flex items-center justify-center text-[#8b9590] hover:text-white relative">
              <Bell className="w-4 h-4" />
              {sosActive && <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2 animate-ping"></span>}
            </button>

            {/* Profile Pill */}
            <div className="flex items-center gap-2.5 pl-3 py-1 pr-1.5 bg-[#161a18] border border-[#232a26] rounded-2xl">
              <div className="text-right">
                <p className="text-xs font-bold text-white leading-tight">
                  {userRole.startsWith('Patient') ? 'Arpan M.' : userRole.startsWith('Doctor') ? 'Dr. Jenkins' : 'Operator'}
                </p>
                <p className="text-[10px] text-[#5a6560] font-medium">{userRole.split(' ')[0]}</p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2bfb8d] to-teal-400 text-[#0d0f0e] font-black text-xs flex items-center justify-center shadow-md">
                {userRole[0]}
              </div>
            </div>
          </div>
        </header>

        {/* Center Content Body */}
        <div className="p-8 space-y-6 max-w-6xl">
          {/* DASHBOARD TAB (Patient & Universal Overview) */}
          {activeTab === 'dashboard' && (
            <>
              {/* Emergency SOS Banner */}
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-bold text-red-100 text-xs tracking-wider uppercase mb-1">
                    <AlertTriangle className="w-4 h-4" /> Context-Aware Emergency Response
                  </div>
                  <h3 className="text-2xl font-black">{t.emergencySos}</h3>
                  <p className="text-xs text-red-100 mt-1 max-w-xl">
                    {t.sosSubtext}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSosActive(true);
                    setActiveTab('sos');
                  }}
                  className="px-6 py-3 bg-white text-red-600 rounded-2xl font-black shadow-md hover:bg-red-50 active:scale-95 transition-all text-xs uppercase tracking-wider whitespace-nowrap"
                >
                  {sosActive ? t.sosTriggeredBtn : t.sosTriggerNow}
                </button>
              </div>

              {/* Patient Vitals & Health Telemetry Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8b9590]">{t.bp}</p>
                    <p className="text-lg font-bold text-white">120/80 <span className="text-[10px] font-normal text-[#5a6560]">mmHg</span></p>
                  </div>
                </div>

                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#1d2420] text-teal-400 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8b9590]">{t.hr}</p>
                    <p className="text-lg font-bold text-white">72 <span className="text-[10px] font-normal text-[#5a6560]">bpm</span></p>
                  </div>
                </div>

                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#1d2420] text-amber-400 flex items-center justify-center">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8b9590]">{t.nextDose}</p>
                    <p className="text-lg font-bold text-white">2:00 PM <span className="text-[10px] font-normal text-amber-400">(Amoxicillin)</span></p>
                  </div>
                </div>

                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#8b9590]">{t.hospSync}</p>
                    <p className="text-lg font-bold text-[#2bfb8d]">Active <span className="text-[10px] font-normal text-[#5a6560]">(Encrypted)</span></p>
                  </div>
                </div>
              </div>

              {/* 5 Core Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div onClick={() => setActiveTab('telemedicine')} className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] hover:border-[#2bfb8d] hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center mb-4 group-hover:bg-[#2bfb8d] group-hover:text-[#0d0f0e] transition-all">
                    <Video className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">{t.telemedicine}</h4>
                  <p className="text-xs text-[#8b9590] mt-1">Connect with verified doctors & specialists via low-latency audio/video consultations.</p>
                </div>

                <div onClick={() => setActiveTab('ai-assistant')} className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] hover:border-[#2bfb8d] hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center mb-4 group-hover:bg-[#2bfb8d] group-hover:text-[#0d0f0e] transition-all">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">{t.aiAssistant}</h4>
                  <p className="text-xs text-[#8b9590] mt-1">Instant voice/text symptom checking, preliminary triage risk score, and first-aid recommendations.</p>
                </div>

                <div onClick={() => setActiveTab('medicine')} className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] hover:border-[#2bfb8d] hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center mb-4 group-hover:bg-[#2bfb8d] group-hover:text-[#0d0f0e] transition-all">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">{t.medTracker}</h4>
                  <p className="text-xs text-[#8b9590] mt-1">Automated dosage reminders, refill alerts, and regional pharmacy stock locator.</p>
                </div>

                <div onClick={() => setActiveTab('sos')} className="bg-[#161a18] p-6 rounded-3xl border border-red-500/20 hover:border-red-500 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">{t.emergencySos}</h4>
                  <p className="text-xs text-[#8b9590] mt-1">Live GPS tracking and context-aware medical history transmission to ambulance teams.</p>
                </div>

                <div onClick={() => setActiveTab('pmr')} className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] hover:border-[#2bfb8d] hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center mb-4 group-hover:bg-[#2bfb8d] group-hover:text-[#0d0f0e] transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">{t.pmr}</h4>
                  <p className="text-xs text-[#8b9590] mt-1">Auto-synced hospital history, lab results, prescriptions, and encrypted doctor sharing.</p>
                </div>
              </div>
            </>
          )}

          {/* 1. TELEMEDICINE TAB */}
          {activeTab === 'telemedicine' && (
            <div className="space-y-6">
              {inCall ? (
                <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26]">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#232a26]">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                      <div>
                        <h4 className="font-bold text-white text-sm">Live Video Call: {selectedDoctor}</h4>
                        <p className="text-xs text-[#8b9590]">Low-bandwidth rural stream active</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setInCall(false)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-bold"
                    >
                      End Call
                    </button>
                  </div>
                  <div className="bg-[#111413] rounded-2xl h-80 flex flex-col items-center justify-center border border-[#202723]">
                    <Video className="w-16 h-16 text-[#2bfb8d] animate-pulse mb-3" />
                    <p className="text-white text-sm font-semibold">Consultation active with {selectedDoctor}</p>
                    <p className="text-[#5a6560] text-xs mt-1">Audio packets prioritized for 2G network resiliency</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { name: 'Dr. Sarah Jenkins', spec: 'General Physician / Internal Medicine', rating: '4.9 (124 reviews)', available: 'Available Now', wait: '2 mins' },
                    { name: 'Dr. Rajesh Mukherjee', spec: 'Cardiologist & Triage Specialist', rating: '4.8 (89 reviews)', available: 'Available Now', wait: '5 mins' },
                    { name: 'Dr. Emily Chen', spec: 'Pediatric Care Specialist', rating: '5.0 (210 reviews)', available: 'Next Slot: 3:30 PM', wait: 'Scheduled' },
                  ].map((doc, idx) => (
                    <div key={idx} className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center font-bold text-lg">
                            {doc.name.split(' ')[1][0]}
                          </div>
                          <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#1d2420] text-[#2bfb8d] border border-[#2bfb8d]/20">
                            {doc.available}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm">{doc.name}</h4>
                        <p className="text-xs text-[#8b9590] mt-0.5">{doc.spec}</p>
                        <p className="text-xs text-amber-400 font-semibold mt-2">★ {doc.rating}</p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#232a26] flex gap-2">
                        <button 
                          onClick={() => {
                            setSelectedDoctor(doc.name);
                            setInCall(true);
                          }}
                          className="flex-1 py-2.5 bg-[#2bfb8d] hover:bg-[#25e27e] text-[#0d0f0e] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                        >
                          <Video className="w-3.5 h-3.5" /> Start Call
                        </button>
                        <button className="p-2.5 bg-[#111413] border border-[#202723] hover:bg-[#161a18] text-[#8b9590] rounded-xl">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2. AI SYMPTOM ASSISTANT */}
          {activeTab === 'ai-assistant' && (
            <div className="bg-[#161a18] rounded-3xl border border-[#232a26] flex flex-col h-[600px] overflow-hidden">
              <div className="p-4 bg-[#111413] border-b border-[#202723] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">{t.aiAssistant}</h4>
                    <p className="text-[10px] text-[#5a6560]">Offline-capable neural triage</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#2bfb8d] bg-[#1d2420] px-2.5 py-1 rounded-full font-bold border border-[#2bfb8d]/20">
                  Multilingual Voice & Text
                </span>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-lg p-4 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#2bfb8d] text-[#0d0f0e] font-semibold' 
                        : msg.triage === 'emergency'
                        ? 'bg-red-500/20 text-red-200 border border-red-500/40'
                        : 'bg-[#111413] text-[#e0e6e3] border border-[#202723]'
                    }`}>
                      {msg.triage && (
                        <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${
                          msg.triage === 'emergency' ? 'bg-red-600 text-white' : 'bg-amber-500 text-[#0d0f0e]'
                        }`}>
                          {msg.triage === 'emergency' ? 'High Risk - Paramedic Alert' : 'Moderate Priority'}
                        </span>
                      )}
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#111413] border-t border-[#202723] flex items-center gap-3">
                <button
                  onClick={toggleSpeechRecognition}
                  className={`p-3 rounded-2xl border transition-all ${
                    isListening ? 'bg-red-500 text-white border-red-500 animate-pulse' : 'bg-[#161a18] text-[#8b9590] border-[#232a26]'
                  }`}
                  title="Speak in selected language"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isListening ? t.listening : t.speakSymptom}
                  className="flex-1 bg-[#161a18] border border-[#232a26] rounded-2xl px-4 py-2.5 text-xs text-white placeholder-[#5a6560] focus:outline-none focus:border-[#2bfb8d]"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-5 py-2.5 bg-[#2bfb8d] text-[#0d0f0e] font-bold text-xs rounded-2xl flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" /> Send
                </button>
              </div>
            </div>
          )}

          {/* 3. MEDICINE TRACKER */}
          {activeTab === 'medicine' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#161a18] p-6 rounded-3xl border border-[#232a26]">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h4 className="font-bold text-white text-sm">Prescribed Dosages & Schedule</h4>
                      <p className="text-xs text-[#8b9590]">Adherence tracking and reminder alerts</p>
                    </div>
                    <button className="text-xs text-[#2bfb8d] bg-[#1d2420] px-3 py-1.5 rounded-xl font-bold flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Add Dose
                    </button>
                  </div>

                  <div className="space-y-3">
                    {medicines.map((med) => (
                      <div key={med.id} className="bg-[#111413] p-4 rounded-2xl border border-[#202723] flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <button
                            onClick={() => toggleMedicineTaken(med.id)}
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                              med.taken ? 'bg-[#2bfb8d] text-[#0d0f0e]' : 'border border-[#344039] hover:border-[#2bfb8d]'
                            }`}
                          >
                            {med.taken && <Check className="w-4 h-4" />}
                          </button>
                          <div>
                            <p className={`text-xs font-bold ${med.taken ? 'line-through text-[#5a6560]' : 'text-white'}`}>{med.name}</p>
                            <p className="text-[11px] text-[#8b9590]">{med.purpose} • <span className="text-[#2bfb8d] font-semibold">{med.time}</span></p>
                          </div>
                        </div>
                        <span className="text-[10px] text-[#8b9590] bg-[#161a18] px-2.5 py-1 rounded-lg">
                          {med.stock} doses left
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nearby Pharmacies */}
                <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Nearby Pharmacy Locator</h4>
                    <p className="text-xs text-[#8b9590] mb-4">Stock verification & local price check</p>
                    
                    <div className="space-y-3">
                      {pharmacies.map((p, i) => (
                        <div key={i} className="bg-[#111413] p-3.5 rounded-2xl border border-[#202723] text-xs">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-white">{p.name}</span>
                            <span className="text-[#2bfb8d] font-bold">{p.price}</span>
                          </div>
                          <p className="text-[10px] text-[#5a6560] mt-0.5">{p.address}</p>
                          <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#1e2321]">
                            <span className="text-[#8b9590]">{p.distance}</span>
                            <span className="text-[10px] text-[#2bfb8d] bg-[#1d2420] px-2 py-0.5 rounded-md font-bold">{p.stock}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. EMERGENCY SOS */}
          {activeTab === 'sos' && (
            <div className="space-y-6">
              {!sosActive ? (
                <div className="bg-[#161a18] p-8 rounded-3xl border border-[#232a26] text-center max-w-xl mx-auto py-12">
                  <div className="w-20 h-20 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                    <AlertTriangle className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.sosPrompt}</h3>
                  <p className="text-xs text-[#8b9590] mt-2 mb-6 max-w-md mx-auto">{t.sosSubtext}</p>
                  <button
                    onClick={() => {
                      setSosActive(true);
                      setSosStep(1);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-black text-sm rounded-2xl uppercase tracking-wider shadow-xl shadow-red-600/30 active:scale-95 transition-all"
                  >
                    {t.sosTriggerNow}
                  </button>
                </div>
              ) : (
                <div className="bg-[#161a18] rounded-3xl border border-red-500/30 overflow-hidden">
                  <div className="bg-red-500/20 p-5 border-b border-red-500/30 flex justify-between items-center text-red-300">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-bold text-sm">{t.sosActive}</span>
                    </div>
                    <button onClick={() => setSosActive(false)} className="text-xs bg-[#111413] hover:bg-[#161a18] px-3 py-1 rounded-xl text-white">
                      Cancel Alert
                    </button>
                  </div>

                  <div className="p-6 bg-[#111413] border-b border-[#202723]">
                    <h5 className="text-[11px] font-black uppercase text-amber-400 tracking-wider mb-3">Context-Aware Medical Snapshot</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 bg-[#161a18] rounded-xl border border-[#232a26]">
                        <p className="text-[10px] text-[#5a6560] font-bold">{t.bloodType}</p>
                        <p className="text-red-400 font-bold">{patientEmergencyProfile.bloodGroup}</p>
                      </div>
                      <div className="p-3 bg-[#161a18] rounded-xl border border-[#232a26]">
                        <p className="text-[10px] text-[#5a6560] font-bold">{t.allergies}</p>
                        <p className="text-amber-400 font-bold">{patientEmergencyProfile.allergies}</p>
                      </div>
                      <div className="p-3 bg-[#161a18] rounded-xl border border-[#232a26]">
                        <p className="text-[10px] text-[#5a6560] font-bold">{t.currentMeds}</p>
                        <p className="text-white font-bold">{patientEmergencyProfile.activeMedications}</p>
                      </div>
                      <div className="p-3 bg-[#161a18] rounded-xl border border-[#232a26]">
                        <p className="text-[10px] text-[#5a6560] font-bold">Past Surgeries</p>
                        <p className="text-white font-bold">{patientEmergencyProfile.pastSurgeries}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-3 border-b border-[#202723] text-xs">
                    <div className="p-3 rounded-xl bg-[#161a18] border border-[#232a26]">
                      <p className="text-[#2bfb8d] font-bold mb-1">1. Live Location</p>
                      <p className="text-[#8b9590]">{patientEmergencyProfile.currentGPS}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#161a18] border border-[#232a26]">
                      <p className="text-blue-400 font-bold mb-1">2. History Sync</p>
                      <p className="text-[#8b9590]">3 hospital records attached</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#161a18] border border-[#232a26]">
                      <p className="text-amber-400 font-bold mb-1">3. Triage Severity</p>
                      <p className="text-[#8b9590]">Code Red Level 1</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#161a18] border border-red-500/30">
                      <p className="text-red-400 font-bold mb-1">4. Paramedic Status</p>
                      <p className="text-white font-bold">Dispatched (ETA: 4 mins)</p>
                    </div>
                  </div>

                  <div className="p-5 flex justify-between items-center">
                    <span className="text-xs text-[#8b9590]">Pipeline Step: {sosStep}/4</span>
                    <button
                      onClick={() => setSosStep((prev) => Math.min(prev + 1, 4))}
                      className="px-4 py-2 bg-[#2bfb8d] text-[#0d0f0e] font-bold text-xs rounded-xl"
                    >
                      Advance Pipeline
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 5. PMR MEDICAL RECORDS */}
          {activeTab === 'pmr' && (
            <div className="space-y-4">
              <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <h4 className="font-bold text-white text-sm">Unified Personal Medical Records (PMR)</h4>
                  <p className="text-xs text-[#8b9590]">Continuous auto-sync with hospital HIS databases</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleManualSync} className="px-3.5 py-2 bg-[#111413] text-white text-xs rounded-xl border border-[#202723] flex items-center gap-1.5">
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#2bfb8d]' : ''}`} /> Sync HIS
                  </button>
                  <button onClick={handleShareRecord} className="px-3.5 py-2 bg-[#2bfb8d] text-[#0d0f0e] font-bold text-xs rounded-xl flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5" /> Share with Doctor
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {medicalRecords.map((rec, i) => (
                  <div key={i} className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex justify-between items-center text-xs">
                    <div>
                      <span className="text-[10px] text-[#2bfb8d] bg-[#1d2420] px-2 py-0.5 rounded-md font-bold">{rec.hospital}</span>
                      <h5 className="font-bold text-white text-sm mt-2">{rec.type}</h5>
                      <p className="text-[#8b9590] mt-1">{rec.details}</p>
                      <p className="text-[10px] text-[#5a6560] mt-1">{rec.doctor} • {rec.date}</p>
                    </div>
                    <span className="text-[10px] text-[#2bfb8d] bg-[#1d2420] px-2.5 py-1 rounded-full font-bold">
                      {rec.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}