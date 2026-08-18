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
  ExternalLink
} from 'lucide-react';

const translations: Record<string, Record<string, string>> = {
  en: {
    title: 'VitaLink',
    tagline: 'Healthcare Reimagined',
    overview: 'Dashboard',
    telemedicine: 'Telemedicine',
    aiAssistant: 'AI Assistant',
    medTracker: 'Medicine Tracker',
    emergencySos: 'Emergency SOS',
    pmr: 'My Documents',
    simulateRole: 'Simulate Role',
    searchPlaceholder: 'Search records, diagnoses, doctors...',
    sosActive: 'EMERGENCY SOS ACTIVE',
    sosTriggeredBtn: 'SOS Active (Tracking)',
    sosTriggerNow: 'Trigger SOS',
    sosPrompt: 'One-Tap Emergency SOS',
    sosSubtext: 'Instantly transmits unified medical history, current conditions, and GPS to emergency dispatchers.',
    offlineNotice: 'Offline Cache Mode: Local storage active.',
    listening: 'Listening...',
    speakSymptom: 'Speak or type symptoms...',
    bp: 'Blood Pressure',
    hr: 'Heart Rate',
    nextDose: 'Next Dosage',
    hospSync: 'Hospital Sync',
    online: 'Online',
    lowBandwidth: '2G Bandwidth',
    offline: 'Offline',
    bloodType: 'Blood Group',
    allergies: 'Severe Allergies',
    currentMeds: 'Active Medications'
  },
  hi: {
    title: 'वाइटालिंक',
    tagline: 'सुलभ स्वास्थ्य सेवा',
    overview: 'डैशबोर्ड',
    telemedicine: 'टेलीमेडिसिन',
    aiAssistant: 'एआई सहायक',
    medTracker: 'दवा ट्रैकर',
    emergencySos: 'आपातकालीन एसओएस',
    pmr: 'मेडिकल दस्तावेज',
    simulateRole: 'भूमिका',
    searchPlaceholder: 'खोजें...',
    sosActive: 'एसओएस सक्रिय है',
    sosTriggeredBtn: 'एसओएस सक्रिय',
    sosTriggerNow: 'एसओएस दबाएं',
    sosPrompt: 'वन-टैप आपातकालीन एसओएस',
    sosSubtext: 'यह बटन तुरंत आपका संपूर्ण मेडिकल इतिहास निकटतम अस्पताल को भेजता है।',
    offlineNotice: 'ऑफ़लाइन मोड सक्रिय',
    listening: 'सुन रहे हैं...',
    speakSymptom: 'बोलें या लिखें...',
    bp: 'रक्तचाप',
    hr: 'हृदय गति',
    nextDose: 'अगली खुराक',
    hospSync: 'अस्पताल सिंक',
    online: 'ऑनलाइन',
    lowBandwidth: '2G नेटवर्क',
    offline: 'ऑफ़लाइन',
    bloodType: 'रक्त समूह',
    allergies: 'एलर्जी',
    currentMeds: 'दवाएं'
  },
  bn: {
    title: 'ভাইটালিঙ্ক',
    tagline: 'সহজ স্বাস্থ্যসেবা',
    overview: 'ড্যাশবোর্ড',
    telemedicine: 'টেলিমেডিসিন',
    aiAssistant: 'এআই সহকারী',
    medTracker: 'ওষুধ ট্র্যাকার',
    emergencySos: 'জরুরি এসওএস',
    pmr: 'ডকুমেন্টস',
    simulateRole: 'ভূমিকা',
    searchPlaceholder: 'অনুসন্ধান করুন...',
    sosActive: 'এসওএস সক্রিয়',
    sosTriggeredBtn: 'এসওএস সক্রিয়',
    sosTriggerNow: 'এসওএস পাঠান',
    sosPrompt: 'এক-ট্যাপ জরুরি এসওএস',
    sosSubtext: 'মেডিকেল ইতিহাস ও লাইভ জিপিএস অ্যাম্বুলেন্সে পাঠিয়ে দেবে।',
    offlineNotice: 'অফলাইন মোড সক্রিয়',
    listening: 'শুনছি...',
    speakSymptom: 'বলুন বা লিখুন...',
    bp: 'রক্তচাপ',
    hr: 'হার্ট রেট',
    nextDose: 'পরবর্তী ডোজ',
    hospSync: 'হাসপাতাল সিঙ্ক',
    online: 'অনলাইন',
    lowBandwidth: '2G মোড',
    offline: 'অফলাইন',
    bloodType: 'ব্লাড গ্রুপ',
    allergies: 'অ্যালার্জি',
    currentMeds: 'ওষুধ'
  },
  es: {
    title: 'VitaLink',
    tagline: 'Salud Accesible',
    overview: 'Panel',
    telemedicine: 'Telemedicina',
    aiAssistant: 'Asistente IA',
    medTracker: 'Medicamentos',
    emergencySos: 'SOS Emergencia',
    pmr: 'Documentos',
    simulateRole: 'Rol',
    searchPlaceholder: 'Buscar...',
    sosActive: 'SOS ACTIVO',
    sosTriggeredBtn: 'SOS Activo',
    sosTriggerNow: 'Activar SOS',
    sosPrompt: 'SOS en 1 Toque',
    sosSubtext: 'Transmite historial médico y coordenadas GPS a emergencias.',
    offlineNotice: 'Modo Offline',
    listening: 'Escuchando...',
    speakSymptom: 'Hable o escriba...',
    bp: 'Presión Arterial',
    hr: 'Frecuencia',
    nextDose: 'Próxima Dosis',
    hospSync: 'Sincronización',
    online: 'En Línea',
    lowBandwidth: 'Modo 2G',
    offline: 'Offline',
    bloodType: 'Grupo Sanguíneo',
    allergies: 'Alergias',
    currentMeds: 'Medicamentos'
  }
};

export default function VitaLinkDarkDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'telemedicine' | 'ai-assistant' | 'medicine' | 'sos' | 'pmr'>('dashboard');
  const [userRole, setUserRole] = useState<'Patient' | 'Healthcare Worker' | 'Doctor' | 'Paramedic' | 'Admin'>('Doctor');
  
  // Multilingual & Bandwidth
  const [language, setLanguage] = useState<'en' | 'hi' | 'bn' | 'es'>('en');
  const [networkMode, setNetworkMode] = useState<'online' | 'low' | 'offline'>('online');
  const [isListening, setIsListening] = useState(false);

  const t = translations[language];

  // Emergency SOS State
  const [sosActive, setSosActive] = useState(false);
  const [sosStep, setSosStep] = useState<number>(1);

  // Context-Aware Medical Snapshot
  const patientEmergencyProfile = {
    patientName: 'Emily Carter (ID #VL-8924)',
    age: 28,
    bloodGroup: 'O+ (Positive)',
    allergies: 'Penicillin, Sulfa Drugs',
    chronicConditions: 'Mild Asthma, Migraines',
    activeMedications: 'Amoxicillin 250mg, Salbutamol Inhaler',
    pastSurgeries: 'None Reported',
    currentGPS: 'Lat: 23.2324° N, Long: 87.0715° E'
  };

  // AI Assistant Chat State
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; triage?: 'low' | 'moderate' | 'emergency' }>>([
    {
      sender: 'ai',
      text: 'Hello! I am your VitaLink neural triage assistant. Speak or type symptoms to start clinical check.'
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

  // Backend Triage Call
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
          text: data.recommendation || 'Assessment logged to offline cache.',
          triage: data.triage || 'low',
        },
      ]);
    } catch (err) {
      // Fallback
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Offline analysis: Vital parameters stable. Telemedicine escalation available.', triage: 'low' },
      ]);
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
          {/* Logo Header matching HealthySpace emerald pill */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-9 h-9 rounded-xl bg-[#2bfb8d] text-[#0d0f0e] flex items-center justify-center font-black shadow-lg shadow-[#2bfb8d]/20">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                {t.title}
              </h1>
              <p className="text-[10px] text-emerald-400 font-semibold tracking-wide uppercase">Connected Health</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 pt-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#1a211e] text-[#2bfb8d] shadow-sm font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-4 h-4" />
                <span>{t.overview}</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'telemedicine'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4" />
                <span>{t.telemedicine}</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('pmr')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'pmr'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>{t.pmr}</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('medicine')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'medicine'
                  ? 'bg-[#1a211e] text-[#2bfb8d] font-semibold'
                  : 'text-[#8b9590] hover:bg-[#161a18] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <CalendarDays className="w-4 h-4" />
                <span>{t.medTracker}</span>
              </div>
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
                2
              </span>
            </button>

            <button
              onClick={() => setActiveTab('sos')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-xs transition-all ${
                activeTab === 'sos'
                  ? 'bg-red-500/20 text-red-400 font-bold border border-red-500/30'
                  : 'text-red-400/80 hover:bg-red-950/30 hover:text-red-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>{t.emergencySos}</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            </button>
          </nav>
        </div>

        {/* Bottom Banner & Controls matching 20% off card */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#2bfb8d]/20 via-[#17231c] to-[#121614] p-4 rounded-3xl border border-[#2bfb8d]/20 relative overflow-hidden">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2bfb8d] text-[#0d0f0e] text-[10px] font-black uppercase tracking-wider mb-2">
              Context SOS
            </span>
            <h5 className="text-xs font-bold text-white leading-tight">Instant Hospital Telemetry Active</h5>
            <p className="text-[10px] text-[#8b9590] mt-1">Live GPS & HIS auto-sync connected</p>
            <button 
              onClick={() => {
                setSosActive(true);
                setActiveTab('sos');
              }}
              className="mt-3 w-full py-2 bg-[#0d0f0e] hover:bg-[#161a18] text-white text-[11px] font-bold rounded-xl border border-[#232d27] transition-all"
            >
              Test Emergency Line
            </button>
          </div>

          <div className="pt-2 border-t border-[#1e2321] space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#8b9590]">
              <span className="flex items-center gap-1.5"><Globe className="w-3 h-3 text-[#2bfb8d]" /> Lang</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-[#161a18] text-[#e0e6e3] border border-[#232a26] rounded-lg px-2 py-1 outline-none text-[10px] cursor-pointer"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="bn">বাংলা</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#8b9590]">
              <span className="flex items-center gap-1.5"><Radio className="w-3 h-3 text-[#2bfb8d]" /> Net</span>
              <select
                value={networkMode}
                onChange={(e) => setNetworkMode(e.target.value as any)}
                className="bg-[#161a18] text-[#e0e6e3] border border-[#232a26] rounded-lg px-2 py-1 outline-none text-[10px] cursor-pointer"
              >
                <option value="online">Online</option>
                <option value="low">2G Rural</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. CENTER CONTENT COLUMN */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-[#0d0f0e]">
        {/* Top Navbar */}
        <header className="px-8 py-5 flex items-center justify-between sticky top-0 bg-[#0d0f0e]/80 backdrop-blur-md z-10">
          <div className="relative w-80">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#161a18] border border-[#232a26] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#5a6560] focus:outline-none focus:border-[#2bfb8d] transition-all"
            />
            <Search className="w-4 h-4 text-[#5a6560] absolute left-3.5 top-3" />
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-2xl bg-[#161a18] border border-[#232a26] flex items-center justify-center text-[#8b9590] hover:text-white relative">
              <Bell className="w-4 h-4" />
              {sosActive && <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2.5 right-2.5 animate-ping"></span>}
            </button>
            <button className="w-10 h-10 rounded-2xl bg-[#161a18] border border-[#232a26] flex items-center justify-center text-[#8b9590] hover:text-white">
              <Settings className="w-4 h-4" />
            </button>

            {/* Profile Pill */}
            <div className="flex items-center gap-3 pl-3 py-1.5 pr-2 bg-[#161a18] border border-[#232a26] rounded-2xl">
              <div className="text-right">
                <p className="text-xs font-bold text-white leading-tight">Dr. Beasley</p>
                <p className="text-[10px] text-[#5a6560] font-medium">{userRole} View</p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2bfb8d] to-teal-400 text-[#0d0f0e] font-black text-xs flex items-center justify-center shadow-md">
                DB
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Center Body */}
        <div className="p-8 space-y-6 max-w-5xl">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <>
              {/* Top 3 Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">8</h3>
                    <p className="text-xs text-[#8b9590] mt-0.5">Today's consultations</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <Video className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">152</h3>
                    <p className="text-xs text-[#8b9590] mt-0.5">Patients this month</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">22</h3>
                    <p className="text-xs text-[#8b9590] mt-0.5">Prescriptions this week</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* New Patients Triage Stream Section */}
              <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26]">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">New Patients Triage</h4>
                    <span className="w-5 h-5 rounded-full bg-[#2bfb8d] text-[#0d0f0e] text-[10px] font-black flex items-center justify-center">
                      6
                    </span>
                  </div>
                  <button onClick={() => setActiveTab('telemedicine')} className="text-xs text-[#2bfb8d] hover:underline font-semibold flex items-center gap-1">
                    View all <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Patient Card 1 */}
                  <div className="bg-[#111413] p-5 rounded-2xl border border-[#202723] flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500/30 to-amber-200/40 mx-auto mb-3 flex items-center justify-center text-amber-300 font-bold text-lg border-2 border-amber-500/20">
                        EC
                      </div>
                      <div className="flex justify-between items-center">
                        <h5 className="font-bold text-white text-xs">Emily Carter</h5>
                        <span className="text-[9px] bg-[#1a211e] text-[#8b9590] px-2 py-0.5 rounded-md">Follow-up</span>
                      </div>
                      <p className="text-[10px] text-[#5a6560] mt-0.5">📅 22 Aug, 10.00 AM</p>
                      <p className="text-[11px] text-[#8b9590] mt-2 line-clamp-2 leading-relaxed">
                        Persistent chest discomfort and mild dyspnea recorded during offline check.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1e2321] flex items-center gap-2">
                      <button 
                        onClick={() => {
                          setSelectedDoctor('Dr. Sarah Jenkins');
                          setInCall(true);
                          setActiveTab('telemedicine');
                        }}
                        className="flex-1 py-2 bg-[#2bfb8d] hover:bg-[#25e27e] text-[#0d0f0e] rounded-xl text-xs font-bold transition-all"
                      >
                        Accept
                      </button>
                      <button className="p-2 text-[#5a6560] hover:text-white rounded-xl bg-[#161a18]">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Patient Card 2 */}
                  <div className="bg-[#111413] p-5 rounded-2xl border border-[#202723] flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-teal-500/30 to-teal-200/40 mx-auto mb-3 flex items-center justify-center text-teal-300 font-bold text-lg border-2 border-teal-500/20">
                        SR
                      </div>
                      <div className="flex justify-between items-center">
                        <h5 className="font-bold text-white text-xs">Sophia Russell</h5>
                        <span className="text-[9px] bg-[#1a211e] text-[#8b9590] px-2 py-0.5 rounded-md">Initial</span>
                      </div>
                      <p className="text-[10px] text-[#5a6560] mt-0.5">📅 22 Aug, 04.00 PM</p>
                      <p className="text-[11px] text-[#8b9590] mt-2 line-clamp-2 leading-relaxed">
                        Reported sharp abdominal cramps and nausea post antibiotic cycle.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1e2321] flex items-center gap-2">
                      <button 
                        onClick={() => {
                          setSelectedDoctor('Dr. Rajesh Mukherjee');
                          setInCall(true);
                          setActiveTab('telemedicine');
                        }}
                        className="flex-1 py-2 bg-[#2bfb8d] hover:bg-[#25e27e] text-[#0d0f0e] rounded-xl text-xs font-bold transition-all"
                      >
                        Accept
                      </button>
                      <button className="p-2 text-[#5a6560] hover:text-white rounded-xl bg-[#161a18]">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Patient Card 3 */}
                  <div className="bg-[#111413] p-5 rounded-2xl border border-[#202723] flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500/30 to-purple-200/40 mx-auto mb-3 flex items-center justify-center text-purple-300 font-bold text-lg border-2 border-purple-500/20">
                        NC
                      </div>
                      <div className="flex justify-between items-center">
                        <h5 className="font-bold text-white text-xs">Noah Clarke</h5>
                        <span className="text-[9px] bg-[#1a211e] text-[#8b9590] px-2 py-0.5 rounded-md">Initial</span>
                      </div>
                      <p className="text-[10px] text-[#5a6560] mt-0.5">📅 23 Aug, 02.00 PM</p>
                      <p className="text-[11px] text-[#8b9590] mt-2 line-clamp-2 leading-relaxed">
                        Arrived with high viral fever and swollen lymph nodes in rural outpost.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1e2321] flex items-center gap-2">
                      <button 
                        onClick={() => {
                          setSelectedDoctor('Dr. Emily Chen');
                          setInCall(true);
                          setActiveTab('telemedicine');
                        }}
                        className="flex-1 py-2 bg-[#2bfb8d] hover:bg-[#25e27e] text-[#0d0f0e] rounded-xl text-xs font-bold transition-all"
                      >
                        Accept
                      </button>
                      <button className="p-2 text-[#5a6560] hover:text-white rounded-xl bg-[#161a18]">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Statistics Chart matching the green neon curve in screenshot */}
              <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-[#8b9590] font-medium">Patient Statistics</p>
                    <h3 className="text-2xl font-black text-[#2bfb8d] mt-0.5">261</h3>
                  </div>
                  <span className="text-xs bg-[#111413] text-[#8b9590] border border-[#202723] px-3 py-1.5 rounded-xl">
                    This month ▾
                  </span>
                </div>

                {/* SVG Curve visualization */}
                <div className="relative h-28 w-full mt-2">
                  <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2bfb8d" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2bfb8d" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,95 100,60 T200,85 T300,30 T400,70 T500,65 L500,100 L0,100 Z"
                      fill="url(#grad)"
                    />
                    <path
                      d="M0,80 Q50,95 100,60 T200,85 T300,30 T400,70 T500,65"
                      fill="none"
                      stroke="#2bfb8d"
                      strokeWidth="2.5"
                    />
                    <circle cx="300" cy="30" r="4" fill="#2bfb8d" stroke="#0d0f0e" strokeWidth="2" />
                  </svg>

                  {/* Marker Pin */}
                  <div className="absolute left-[58%] top-2 bg-[#111413] border border-[#232a26] px-2.5 py-1 rounded-xl shadow-lg text-[10px] text-white">
                    <p className="text-[#5a6560]">21 August</p>
                    <p className="font-bold text-[#2bfb8d]">11 patients</p>
                  </div>
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
                        <h4 className="font-bold text-white text-sm">Consultation: {selectedDoctor}</h4>
                        <p className="text-[11px] text-[#8b9590]">Bandwidth mode: {networkMode}</p>
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
                    <p className="text-white text-sm font-semibold">Low-latency Rural Stream Connected</p>
                    <p className="text-[#5a6560] text-xs mt-1">Audio packets prioritized for 2G networks</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Dr. Sarah Jenkins', spec: 'General Physician / Internal Medicine', rating: '4.9', available: 'Available Now' },
                    { name: 'Dr. Rajesh Mukherjee', spec: 'Cardiologist & Emergency Triage', rating: '4.8', available: 'Available Now' },
                    { name: 'Dr. Emily Chen', spec: 'Pediatric Care Specialist', rating: '5.0', available: 'Next Slot: 3:30 PM' },
                  ].map((doc, idx) => (
                    <div key={idx} className="bg-[#161a18] p-5 rounded-3xl border border-[#232a26] flex justify-between items-center">
                      <div>
                        <span className="text-[9px] text-[#2bfb8d] bg-[#1d2420] px-2 py-0.5 rounded-md font-bold">
                          {doc.available}
                        </span>
                        <h4 className="font-bold text-white text-sm mt-2">{doc.name}</h4>
                        <p className="text-xs text-[#8b9590]">{doc.spec}</p>
                        <p className="text-xs text-amber-400 mt-1 font-semibold">★ {doc.rating}</p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedDoctor(doc.name);
                          setInCall(true);
                        }}
                        className="px-4 py-2.5 bg-[#2bfb8d] hover:bg-[#25e27e] text-[#0d0f0e] rounded-xl text-xs font-bold flex items-center gap-1.5"
                      >
                        <Video className="w-3.5 h-3.5" /> Call
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2. AI SYMPTOM ASSISTANT */}
          {activeTab === 'ai-assistant' && (
            <div className="bg-[#161a18] rounded-3xl border border-[#232a26] flex flex-col h-[550px]">
              <div className="p-4 border-b border-[#232a26] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#1d2420] text-[#2bfb8d] flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs">VitaLink AI Symptom Triage</h4>
                    <p className="text-[10px] text-[#5a6560]">Offline-capable neural triage</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#2bfb8d] bg-[#1d2420] px-2 py-0.5 rounded-full font-bold">
                  Voice Active
                </span>
              </div>

              <div className="flex-1 p-5 overflow-y-auto space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#2bfb8d] text-[#0d0f0e] font-medium' 
                        : msg.triage === 'emergency'
                        ? 'bg-red-500/20 text-red-200 border border-red-500/40'
                        : 'bg-[#111413] text-[#e0e6e3] border border-[#202723]'
                    }`}>
                      {msg.triage === 'emergency' && (
                        <span className="inline-block bg-red-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded mb-1.5">
                          High Criticality
                        </span>
                      )}
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#111413] border-t border-[#202723] rounded-b-3xl flex items-center gap-2">
                <button
                  onClick={toggleSpeechRecognition}
                  className={`p-2.5 rounded-xl border ${
                    isListening ? 'bg-red-500 text-white border-red-500 animate-pulse' : 'bg-[#161a18] text-[#8b9590] border-[#232a26]'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isListening ? t.listening : t.speakSymptom}
                  className="flex-1 bg-[#161a18] border border-[#232a26] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#5a6560] focus:outline-none focus:border-[#2bfb8d]"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-[#2bfb8d] text-[#0d0f0e] font-bold text-xs rounded-xl flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* 3. MEDICINE TRACKER */}
          {activeTab === 'medicine' && (
            <div className="space-y-4">
              <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26]">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-white text-sm">Active Prescriptions & Adherence</h4>
                  <button className="text-xs text-[#2bfb8d] bg-[#1d2420] px-3 py-1.5 rounded-xl font-bold flex items-center gap-1">
                    <Plus className="w-3 h-3" /> Add Dose
                  </button>
                </div>

                <div className="space-y-2.5">
                  {medicines.map((med) => (
                    <div key={med.id} className="bg-[#111413] p-4 rounded-2xl border border-[#202723] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleMedicineTaken(med.id)}
                          className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                            med.taken ? 'bg-[#2bfb8d] text-[#0d0f0e]' : 'border border-[#344039]'
                          }`}
                        >
                          {med.taken && <Check className="w-4 h-4" />}
                        </button>
                        <div>
                          <p className={`text-xs font-bold ${med.taken ? 'line-through text-[#5a6560]' : 'text-white'}`}>{med.name}</p>
                          <p className="text-[10px] text-[#8b9590]">{med.purpose} • {med.time}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#8b9590] bg-[#161a18] px-2.5 py-1 rounded-lg">
                        {med.stock} left
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pharmacies */}
              <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26]">
                <h4 className="font-bold text-white text-sm mb-3">Nearby Pharmacy Live Inventory</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {pharmacies.map((p, i) => (
                    <div key={i} className="bg-[#111413] p-3.5 rounded-2xl border border-[#202723] text-xs">
                      <p className="font-bold text-white">{p.name}</p>
                      <p className="text-[10px] text-[#5a6560] mt-0.5">{p.distance}</p>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#1e2321]">
                        <span className="text-[#2bfb8d] font-bold">{p.stock}</span>
                        <span className="text-white font-semibold">{p.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. EMERGENCY SOS */}
          {activeTab === 'sos' && (
            <div className="space-y-4">
              {!sosActive ? (
                <div className="bg-[#161a18] p-8 rounded-3xl border border-[#232a26] text-center max-w-lg mx-auto py-12">
                  <div className="w-20 h-20 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                    <AlertTriangle className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.sosPrompt}</h3>
                  <p className="text-xs text-[#8b9590] mt-2 mb-6">{t.sosSubtext}</p>
                  <button
                    onClick={() => {
                      setSosActive(true);
                      setSosStep(1);
                    }}
                    className="w-full py-3.5 bg-red-500 hover:bg-red-600 text-white font-black text-sm rounded-2xl uppercase tracking-wider shadow-lg shadow-red-500/20"
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
                    <button onClick={() => setSosActive(false)} className="text-xs bg-[#111413] px-3 py-1 rounded-xl text-white">
                      Cancel
                    </button>
                  </div>

                  {/* Context Snapshot */}
                  <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#111413] border-b border-[#202723] text-xs">
                    <div>
                      <p className="text-[10px] text-[#5a6560] uppercase font-bold">Blood Group</p>
                      <p className="text-red-400 font-bold">{patientEmergencyProfile.bloodGroup}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5a6560] uppercase font-bold">Severe Allergies</p>
                      <p className="text-amber-400 font-bold">{patientEmergencyProfile.allergies}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5a6560] uppercase font-bold">Active Meds</p>
                      <p className="text-white font-bold">{patientEmergencyProfile.activeMedications}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5a6560] uppercase font-bold">Live GPS</p>
                      <p className="text-[#2bfb8d] font-bold">{patientEmergencyProfile.currentGPS}</p>
                    </div>
                  </div>

                  <div className="p-5 flex justify-between items-center">
                    <span className="text-xs text-[#8b9590]">Dispatch Step: {sosStep}/4 (Ambulance ETA: 4 mins)</span>
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

          {/* 5. PMR DOCUMENTS */}
          {activeTab === 'pmr' && (
            <div className="space-y-4">
              <div className="bg-[#161a18] p-6 rounded-3xl border border-[#232a26] flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white text-sm">Unified Personal Medical Records</h4>
                  <p className="text-xs text-[#8b9590]">End-to-end encrypted hospital telemetry</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleManualSync} className="px-3 py-2 bg-[#111413] text-white text-xs rounded-xl border border-[#202723] flex items-center gap-1">
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#2bfb8d]' : ''}`} /> Sync HIS
                  </button>
                  <button onClick={handleShareRecord} className="px-3 py-2 bg-[#2bfb8d] text-[#0d0f0e] font-bold text-xs rounded-xl flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5" /> Share
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

      {/* 3. RIGHT CALENDAR & SCHEDULE DRAWER (matching right-hand pane in screenshot) */}
      <aside className="w-80 bg-[#111413] border-l border-[#1e2321] p-6 hidden lg:flex flex-col justify-between overflow-y-auto">
        <div className="space-y-6">
          {/* Mini Calendar Header */}
          <div className="bg-[#161a18] p-4 rounded-3xl border border-[#232a26]">
            <div className="flex items-center justify-between mb-3 text-xs">
              <button className="p-1 rounded-lg hover:bg-[#111413] text-[#8b9590]"><ChevronLeft className="w-4 h-4" /></button>
              <div className="text-center">
                <p className="text-[10px] text-[#5a6560] font-semibold uppercase">Today</p>
                <p className="font-bold text-white">August 22, Monday</p>
              </div>
              <button className="p-1 rounded-lg hover:bg-[#111413] text-[#8b9590]"><ChevronRight className="w-4 h-4" /></button>
            </div>

            {/* Day Pills */}
            <div className="grid grid-cols-6 gap-1 text-center text-[10px]">
              {['Sun 21', 'Mon 22', 'Tue 23', 'Wed 24', 'Thu 25', 'Fri 26'].map((d, i) => (
                <div key={i} className={`py-1.5 rounded-xl ${i === 1 ? 'bg-[#2bfb8d] text-[#0d0f0e] font-black' : 'text-[#8b9590]'}`}>
                  <p className="text-[8px]">{d.split(' ')[0]}</p>
                  <p className="font-bold">{d.split(' ')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-white text-xs">Schedule</h4>
              <span className="text-[10px] text-[#8b9590] bg-[#161a18] px-2 py-0.5 rounded-md">
                10.00 am - 18.00 pm
              </span>
            </div>

            <div className="space-y-2">
              {[
                { name: 'Emily Carter', time: '10.00 AM - 11.00 AM', avatar: 'EC' },
                { name: 'James Bennett', time: '11.00 AM - 12.00 AM', avatar: 'JB' },
                { name: 'Olivia Turner', time: '12.00 AM - 01.00 PM', avatar: 'OT' },
                { name: 'Liam Mitchell', time: '01.00 PM - 02.00 PM', avatar: 'LM' },
                { name: 'Sophia Russell', time: '02.00 PM - 03.00 PM', avatar: 'SR' },
                { name: 'Ethan Brooks', time: '03.00 PM - 04.00 PM', avatar: 'EB' },
                { name: 'Ava Morgan', time: '04.00 PM - 05.00 PM', avatar: 'AM' },
              ].map((patient, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-2xl bg-[#161a18]/60 hover:bg-[#161a18] border border-transparent hover:border-[#232a26] transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-[#1d2420] text-[#2bfb8d] text-[10px] font-bold flex items-center justify-center">
                      {patient.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">{patient.name}</p>
                      <p className="text-[9px] text-[#5a6560]">{patient.time}</p>
                    </div>
                  </div>
                  <MoreVertical className="w-3.5 h-3.5 text-[#5a6560]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}