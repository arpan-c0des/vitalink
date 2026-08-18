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
  Database,
  Radio,
  Users,
  Stethoscope,
  ClipboardList,
  Flame
} from 'lucide-react';

const translations: Record<string, Record<string, string>> = {
  en: {
    title: 'VITALINK',
    tagline: 'Healthcare Reimagined',
    overview: 'Overview & Alerts',
    telemedicine: '1. Telemedicine',
    aiAssistant: '2. AI Symptom Assistant',
    medTracker: '3. Medicine Tracker',
    emergencySos: '4. Emergency SOS',
    pmr: '5. Medical Record',
    simulateRole: 'Simulate Role',
    searchPlaceholder: 'Search records, diagnoses, doctors...',
    sosActive: 'EMERGENCY SOS ACTIVE',
    sosTriggeredBtn: 'SOS Active (View Live Tracker)',
    sosTriggerNow: 'Trigger SOS Now',
    sosPrompt: 'One-Tap Emergency SOS',
    sosSubtext: 'Triggering instantly transmits your continuous medical history, current vitals, and live GPS coordinates to nearest dispatch units.',
    offlineNotice: 'Offline Mode Active: Data is cached in local secure storage.',
    listening: 'Listening to your voice...',
    speakSymptom: 'Click microphone or type symptoms...',
    bp: 'Blood Pressure',
    hr: 'Heart Rate',
    nextDose: 'Next Dosage',
    hospSync: 'Hospital Sync',
    online: 'Online (High-Bandwidth)',
    lowBandwidth: 'Low-Bandwidth (2G/Rural)',
    offline: 'Offline-First Cache',
    bloodType: 'Blood Group',
    allergies: 'Severe Allergies',
    currentMeds: 'Active Medications'
  },
  hi: {
    title: 'वाइटालिंक (VitaLink)',
    tagline: 'सुलभ व उत्तरदायी स्वास्थ्य सेवा',
    overview: 'विवरण और अलर्ट',
    telemedicine: '1. टेलीमेडिसिन',
    aiAssistant: '2. एआई लक्षण सहायक',
    medTracker: '3. दवा ट्रैकर',
    emergencySos: '4. आपातकालीन एसओएस',
    pmr: '5. मेडिकल रिकॉर्ड',
    simulateRole: 'भूमिका चुनें',
    searchPlaceholder: 'रिकॉर्ड, डॉक्टर या लक्षण खोजें...',
    sosActive: 'आपातकालीन एसओएस सक्रिय है',
    sosTriggeredBtn: 'एसओएस सक्रिय (लाइव स्थिति देखें)',
    sosTriggerNow: 'तत्काल एसओएस दबाएं',
    sosPrompt: 'वन-टैप आपातकालीन एसओएस',
    sosSubtext: 'यह बटन तुरंत आपका संपूर्ण मेडिकल इतिहास, एलर्जी और लाइव जीपीएस निकटतम अस्पताल को भेजता है।',
    offlineNotice: 'ऑफ़लाइन मोड सक्रिय: डेटा स्थानीय रूप से संग्रहीत है।',
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
    title: 'ভাইটালিঙ্ক (VitaLink)',
    tagline: 'সহজ ও দ্রুত স্বাস্থ্যসেবা',
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
    offlineNotice: 'অফলাইন মোড সক্রিয়: ডেটা স্থানীয়ভাবে সংরক্ষিত হচ্ছে।',
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
    title: 'VITALINK',
    tagline: 'Atención Médica Accesible',
    overview: 'Resumen y Alertas',
    telemedicine: '1. Telemedicina',
    aiAssistant: '2. Asistente de Síntomas IA',
    medTracker: '3. Rastreador de Medicinas',
    emergencySos: '4. SOS de Emergencia',
    pmr: '5. Historial Médico',
    simulateRole: 'Simular Rol',
    searchPlaceholder: 'Buscar historial, doctores...',
    sosActive: 'SOS DE EMERGENCIA ACTIVO',
    sosTriggeredBtn: 'SOS Activo (Ver Rastreo)',
    sosTriggerNow: 'Activar SOS Ahora',
    sosPrompt: 'SOS de Emergencia en 1 Toque',
    sosSubtext: 'Transmite al instante el historial médico unificado y coordenadas GPS a emergencias.',
    offlineNotice: 'Modo sin conexión: Datos guardados localmente.',
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

export default function VitaLinkDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'telemedicine' | 'ai-assistant' | 'medicine' | 'sos' | 'pmr'>('dashboard');
  const [userRole, setUserRole] = useState<'Patient' | 'Healthcare Worker' | 'Doctor' | 'Paramedic' | 'Admin'>('Patient');
  
  // Multilingual & Bandwidth State
  const [language, setLanguage] = useState<'en' | 'hi' | 'bn' | 'es'>('en');
  const [networkMode, setNetworkMode] = useState<'online' | 'low' | 'offline'>('online');
  const [isListening, setIsListening] = useState(false);

  const t = translations[language];

  // Emergency SOS State
  const [sosActive, setSosActive] = useState(false);
  const [sosStep, setSosStep] = useState<number>(1);

  // Context-Aware Medical Snapshot
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
      text: 'Hello! I am your VitaLink AI Symptom Assistant. Describe what you are feeling or use the microphone.'
    }
  ]);
  const [inputText, setInputText] = useState('');

  // Telemedicine Consultation State
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

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    const newMessages = [...messages, { sender: 'user' as const, text: userMsg }];
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      if (lower.includes('chest') || lower.includes('breath') || lower.includes('unconscious') || lower.includes('छाती') || lower.includes('বুকে')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'CRITICAL ALERT: Your symptoms indicate an acute cardiopulmonary risk. The Emergency SOS system is available below with 1-tap dispatch.',
            triage: 'emergency'
          }
        ]);
      } else if (lower.includes('fever') || lower.includes('cough') || lower.includes('headache') || lower.includes('बुखार') || lower.includes('জ্বর')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'ASSESSMENT: Mild-to-moderate viral symptoms detected. Recommended First-Aid: Adequate hydration, rest, and regular temperature monitoring. Escalation to Telemedicine available.',
            triage: 'moderate'
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'General inquiry recorded in local health cache. You can request a doctor escalation at any time.',
            triage: 'low'
          }
        ]);
      }
    }, networkMode === 'low' ? 1400 : 600);
  };

  const toggleMedicineTaken = (id: number) => {
    setMedicines(medicines.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  const handleManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
    }, networkMode === 'low' ? 2200 : 1000);
  };

  const handleShareRecord = () => {
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between hidden md:flex shadow-xl">
        <div className="p-5">
          <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-500/20">
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wide bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{t.title}</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{t.tagline}</p>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>{t.overview}</span>
            </button>

            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'telemedicine' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>{t.telemedicine}</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'ai-assistant' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>{t.aiAssistant}</span>
            </button>

            <button
              onClick={() => setActiveTab('medicine')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'medicine' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Pill className="w-4 h-4" />
              <span>{t.medTracker}</span>
            </button>

            <button
              onClick={() => setActiveTab('sos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'sos' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-semibold' : 'text-red-400 hover:bg-red-950/40 hover:text-red-300'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{t.emergencySos}</span>
            </button>

            <button
              onClick={() => setActiveTab('pmr')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'pmr' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{t.pmr}</span>
            </button>
          </nav>
        </div>

        {/* Controls */}
        <div className="p-4 bg-slate-950/70 border-t border-slate-800 space-y-3">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
              <Globe className="w-3 h-3 text-blue-400" /> Language / भाषा
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="w-full bg-slate-800 text-xs text-slate-200 border border-slate-700 rounded-lg p-2 outline-none focus:border-blue-500 cursor-pointer font-medium"
            >
              <option value="en">English (Global)</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="es">Español (Spanish)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
              <Radio className="w-3 h-3 text-teal-400" /> Bandwidth Engine
            </label>
            <select
              value={networkMode}
              onChange={(e) => setNetworkMode(e.target.value as any)}
              className="w-full bg-slate-800 text-xs text-slate-200 border border-slate-700 rounded-lg p-2 outline-none focus:border-blue-500 cursor-pointer font-medium"
            >
              <option value="online">Online (High-Bandwidth)</option>
              <option value="low">Low-Bandwidth (2G/Rural)</option>
              <option value="offline">Offline-First Cache</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {t.simulateRole}
            </label>
            <select 
              value={userRole} 
              onChange={(e) => setUserRole(e.target.value as any)}
              className="w-full bg-slate-800 text-xs text-slate-200 border border-slate-700 rounded-lg p-2 outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="Patient">Patient / Family</option>
              <option value="Healthcare Worker">Healthcare Worker</option>
              <option value="Doctor">Doctor / Specialist</option>
              <option value="Paramedic">Paramedics / Emergency</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {networkMode !== 'online' && (
          <div className={`px-6 py-2 text-xs font-semibold flex items-center justify-between ${
            networkMode === 'offline' ? 'bg-amber-500 text-slate-900' : 'bg-teal-600 text-white'
          }`}>
            <div className="flex items-center gap-2">
              {networkMode === 'offline' ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
              <span>{networkMode === 'offline' ? t.offlineNotice : 'Low-Bandwidth Mode: Data packets compressed by 70% for rural mobile networks.'}</span>
            </div>
            <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
              {networkMode === 'offline' ? 'Cache Active' : '2G Mode'}
            </span>
          </div>
        )}

        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-800 capitalize">
              {activeTab === 'dashboard' ? t.overview : (t as any)[activeTab] || activeTab}
            </h2>
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Role: {userRole}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
            <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full relative">
              <Bell className="w-5 h-5" />
              {sosActive && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>}
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 text-white flex items-center justify-center font-bold text-xs shadow">
              {userRole[0]}
            </div>
          </div>
        </header>

        <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
          {/* ROLE CUSTOM OVERLAYS (DOCTOR / PARAMEDIC / ADMIN) */}
          {userRole === 'Doctor' && activeTab === 'dashboard' && (
            <div className="bg-blue-900 text-white p-6 rounded-3xl shadow-md border border-blue-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-800 px-2.5 py-1 rounded-full text-blue-200">Doctor Portal View</span>
                <h3 className="text-xl font-bold mt-2">Dr. Sarah Jenkins - Outpatient Queue</h3>
                <p className="text-xs text-blue-200 mt-1">3 scheduled telemedicine calls • 1 escalated emergency triage request</p>
              </div>
              <button onClick={() => setActiveTab('telemedicine')} className="px-4 py-2 bg-white text-blue-900 font-bold text-xs rounded-xl shadow">
                Open Telemedicine Queue
              </button>
            </div>
          )}

          {userRole === 'Paramedic' && activeTab === 'dashboard' && (
            <div className="bg-red-950 text-white p-6 rounded-3xl shadow-md border border-red-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-red-800 px-2.5 py-1 rounded-full text-red-200">Paramedic Dispatch Console</span>
                <h3 className="text-xl font-bold mt-2">Emergency Response Unit #04</h3>
                <p className="text-xs text-red-200 mt-1">{sosActive ? 'Active SOS Signal Received: Bankura Sector 3' : 'Standing by for live context-aware SOS alerts'}</p>
              </div>
              <button onClick={() => setActiveTab('sos')} className="px-4 py-2 bg-red-600 text-white font-bold text-xs rounded-xl shadow">
                Open Dispatch Monitor
              </button>
            </div>
          )}

          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <>
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-bold text-red-100 text-xs tracking-wider uppercase mb-1">
                    <AlertTriangle className="w-4 h-4" /> Context-Aware Emergency Trigger
                  </div>
                  <h3 className="text-2xl font-black">{t.emergencySos}</h3>
                  <p className="text-sm text-red-100 mt-1 max-w-xl">
                    {t.sosSubtext}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSosActive(true);
                    setActiveTab('sos');
                  }}
                  className="px-6 py-3 bg-white text-red-600 rounded-xl font-black shadow-md hover:bg-red-50 active:scale-95 transition-all text-sm uppercase tracking-wider"
                >
                  {sosActive ? t.sosTriggeredBtn : t.sosTriggerNow}
                </button>
              </div>

              {/* Vitals Summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.bp}</p>
                    <p className="text-xl font-bold text-slate-800">120/80 <span className="text-xs font-normal text-slate-500">mmHg</span></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.hr}</p>
                    <p className="text-xl font-bold text-slate-800">72 <span className="text-xs font-normal text-slate-500">bpm</span></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                    <Pill className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.nextDose}</p>
                    <p className="text-xl font-bold text-slate-800">2:00 PM <span className="text-xs font-normal text-amber-600">(Amoxicillin)</span></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.hospSync}</p>
                    <p className="text-xl font-bold text-emerald-600">Active <span className="text-xs font-normal text-slate-500">({networkMode === 'offline' ? 'Local DB' : 'HIS Cloud'})</span></p>
                  </div>
                </div>
              </div>

              {/* Module Navigator Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div onClick={() => setActiveTab('telemedicine')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Video className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{t.telemedicine}</h4>
                  <p className="text-xs text-slate-500 mt-1">Connect with verified doctors & specialists via low-latency video or text consultations.</p>
                </div>

                <div onClick={() => setActiveTab('ai-assistant')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{t.aiAssistant}</h4>
                  <p className="text-xs text-slate-500 mt-1">Multilingual voice/text symptom assessment with first-aid guidance and triage tags.</p>
                </div>

                <div onClick={() => setActiveTab('medicine')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{t.medTracker}</h4>
                  <p className="text-xs text-slate-500 mt-1">Automated dosage schedule, refill alerts, and regional pharmacy inventory search.</p>
                </div>

                <div onClick={() => setActiveTab('sos')} className="bg-white p-6 rounded-2xl border border-red-200 hover:border-red-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl w-fit mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{t.emergencySos}</h4>
                  <p className="text-xs text-slate-500 mt-1">Context-aware emergency response bundling live GPS and full patient history.</p>
                </div>

                <div onClick={() => setActiveTab('pmr')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl w-fit mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{t.pmr}</h4>
                  <p className="text-xs text-slate-500 mt-1">Encrypted personal medical history auto-synced across hospitals and clinics.</p>
                </div>
              </div>
            </>
          )}

          {/* 4. EMERGENCY SOS */}
          {activeTab === 'sos' && (
            <div className="space-y-6">
              {!sosActive ? (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center max-w-xl mx-auto py-12">
                  <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <AlertTriangle className="w-12 h-12 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">{t.sosPrompt}</h3>
                  <p className="text-sm text-slate-500 mt-2 mb-8">
                    {t.sosSubtext}
                  </p>
                  <button 
                    onClick={() => {
                      setSosActive(true);
                      setSosStep(1);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-red-600/30 active:scale-95 transition-all uppercase tracking-wider"
                  >
                    {t.sosTriggerNow}
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-red-200 shadow-xl overflow-hidden">
                  <div className="bg-red-600 p-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-700 rounded-lg animate-pulse">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-black text-xl tracking-wide">{t.sosActive}</h3>
                        <p className="text-xs text-red-200">Incident #SOS-9042 • Connected Hospital Dispatch Network</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSosActive(false)}
                      className="text-xs bg-red-800/80 hover:bg-red-800 px-3 py-1.5 rounded-lg border border-red-400/40 text-red-100"
                    >
                      Cancel Alert
                    </button>
                  </div>

                  <div className="p-6 bg-slate-900 text-white border-b border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">Context-Aware Medical Snapshot (Auto-Transmitted to Paramedics)</h4>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                        <p className="text-slate-400 text-[10px] uppercase font-bold">{t.bloodType}</p>
                        <p className="font-bold text-sm text-red-400">{patientEmergencyProfile.bloodGroup}</p>
                      </div>
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                        <p className="text-slate-400 text-[10px] uppercase font-bold">{t.allergies}</p>
                        <p className="font-bold text-amber-300">{patientEmergencyProfile.allergies}</p>
                      </div>
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                        <p className="text-slate-400 text-[10px] uppercase font-bold">{t.currentMeds}</p>
                        <p className="font-bold text-slate-200">{patientEmergencyProfile.activeMedications}</p>
                      </div>
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                        <p className="text-slate-400 text-[10px] uppercase font-bold">Past Surgeries / Risk</p>
                        <p className="font-bold text-slate-200">{patientEmergencyProfile.pastSurgeries}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-slate-100 bg-slate-50/50">
                    <div className={`p-4 rounded-xl border ${sosStep >= 1 ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs mb-1">
                        <MapPin className="w-4 h-4" /> 1. Exact Live Location
                      </div>
                      <p className="text-xs text-slate-700 font-medium">{patientEmergencyProfile.currentGPS}</p>
                    </div>

                    <div className={`p-4 rounded-xl border ${sosStep >= 2 ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs mb-1">
                        <FileText className="w-4 h-4" /> 2. Unified History Sync
                      </div>
                      <p className="text-xs text-slate-700 font-medium">3 verified hospital records attached</p>
                    </div>

                    <div className={`p-4 rounded-xl border ${sosStep >= 3 ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-amber-600 font-bold text-xs mb-1">
                        <ShieldAlert className="w-4 h-4" /> 3. Urgency & Criticality
                      </div>
                      <p className="text-xs text-slate-700 font-medium">Level 1 - Code Red Dispatch</p>
                    </div>

                    <div className={`p-4 rounded-xl border ${sosStep >= 4 ? 'border-red-300 bg-red-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-red-600 font-bold text-xs mb-1">
                        <Ambulance className="w-4 h-4" /> 4. Paramedic Dispatch
                      </div>
                      <p className="text-xs text-red-700 font-bold">Ambulance Dispatched (ETA: 4 mins)</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      Emergency response pipeline synced automatically with regional healthcare database.
                    </div>
                    <button 
                      onClick={() => setSosStep((prev) => Math.min(prev + 1, 4))}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
                    >
                      Advance Pipeline Step ({sosStep}/4)
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. AI SYMPTOM ASSISTANT */}
          {activeTab === 'ai-assistant' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[650px]">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{t.aiAssistant}</h3>
                    <p className="text-[11px] text-slate-400">Offline-ready multilingual triage engine</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Voice & Text Active
                </span>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-lg rounded-2xl p-4 text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : msg.triage === 'emergency'
                        ? 'bg-red-50 border border-red-300 text-red-900 rounded-bl-none'
                        : msg.triage === 'moderate'
                        ? 'bg-amber-50 border border-amber-300 text-amber-900 rounded-bl-none'
                        : 'bg-slate-100 text-slate-800 rounded-bl-none'
                    }`}>
                      {msg.triage && (
                        <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${
                          msg.triage === 'emergency' ? 'bg-red-600 text-white' : 'bg-amber-600 text-white'
                        }`}>
                          {msg.triage === 'emergency' ? 'High Risk - Escalation Required' : 'Moderate Priority'}
                        </span>
                      )}
                      <p className="leading-relaxed">{msg.text}</p>

                      {msg.triage === 'emergency' && (
                        <div className="mt-3 pt-3 border-t border-red-200 flex gap-2">
                          <button 
                            onClick={() => {
                              setSosActive(true);
                              setActiveTab('sos');
                            }}
                            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg flex items-center gap-1"
                          >
                            <AlertTriangle className="w-3.5 h-3.5" /> Trigger SOS
                          </button>
                          <button 
                            onClick={() => setActiveTab('telemedicine')}
                            className="px-3 py-1.5 bg-white border border-red-300 text-red-800 font-semibold text-xs rounded-lg"
                          >
                            Escalate to Doctor
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-3">
                <button
                  onClick={toggleSpeechRecognition}
                  className={`p-3 rounded-xl border transition-all ${
                    isListening 
                      ? 'bg-red-600 text-white border-red-600 animate-pulse' 
                      : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
                  }`}
                  title="Speech-to-Text in Selected Language"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isListening ? t.listening : t.speakSymptom}
                  className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={handleSendMessage}
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" /> Send
                </button>
              </div>
            </div>
          )}

          {/* 1. TELEMEDICINE MODULE */}
          {activeTab === 'telemedicine' && (
            <div className="space-y-6">
              {inCall ? (
                <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-2xl relative">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <h4 className="font-bold text-base">Live Consultation: {selectedDoctor}</h4>
                        <p className="text-xs text-slate-400">Low-latency stream ({networkMode} mode)</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setInCall(false)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl"
                    >
                      End Call
                    </button>
                  </div>
                  <div className="bg-slate-800 rounded-2xl h-80 flex flex-col items-center justify-center border border-slate-700">
                    <Video className="w-16 h-16 text-slate-500 animate-pulse mb-3" />
                    <p className="text-slate-400 text-sm">Consultation active with {selectedDoctor}</p>
                    <p className="text-slate-500 text-xs mt-1">Bitrate automatically adapted for low bandwidth connectivity</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Dr. Sarah Jenkins', spec: 'General Physician / Internal Medicine', rating: '4.9 (124 reviews)', available: 'Available Now', wait: '2 mins' },
                    { name: 'Dr. Rajesh Mukherjee', spec: 'Cardiologist & Triage Specialist', rating: '4.8 (89 reviews)', available: 'Available Now', wait: '5 mins' },
                    { name: 'Dr. Emily Chen', spec: 'Pediatric Care Specialist', rating: '5.0 (210 reviews)', available: 'Next Slot: 3:30 PM', wait: 'Scheduled' },
                  ].map((doc, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg">
                            {doc.name.split(' ')[1][0]}
                          </div>
                          <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {doc.available}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-base">{doc.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{doc.spec}</p>
                        <p className="text-xs text-amber-600 font-semibold mt-2">★ {doc.rating}</p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                        <button 
                          onClick={() => {
                            setSelectedDoctor(doc.name);
                            setInCall(true);
                          }}
                          className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                        >
                          <Video className="w-3.5 h-3.5" /> Start Call
                        </button>
                        <button className="p-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. MEDICINE TRACKER MODULE */}
          {activeTab === 'medicine' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">Prescribed Dosages & Schedule</h3>
                      <p className="text-xs text-slate-500">Automated adherence tracking and reminder sync</p>
                    </div>
                    <button className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Add Reminder
                    </button>
                  </div>

                  <div className="space-y-3">
                    {medicines.map((med) => (
                      <div 
                        key={med.id} 
                        className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                          med.taken ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => toggleMedicineTaken(med.id)}
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                              med.taken ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'border-2 border-slate-300 hover:border-emerald-500'
                            }`}
                          >
                            {med.taken && <Check className="w-5 h-5" />}
                          </button>
                          <div>
                            <h4 className={`text-sm font-bold ${med.taken ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                              {med.name}
                            </h4>
                            <p className="text-xs text-slate-500">{med.purpose} • <span className="font-semibold text-blue-600">{med.time}</span></p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            med.stock <= 5 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {med.stock} doses left
                          </span>
                          {med.stock <= 5 && <p className="text-[10px] text-amber-600 font-semibold mt-1">Refill alert active</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Nearby Pharmacy Locator</h4>
                        <p className="text-[11px] text-slate-500">Live stock verification & price lookup</p>
                      </div>
                    </div>

                    <input 
                      type="text" 
                      placeholder="Search medicine stock in local area..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    />

                    <div className="space-y-3">
                      {pharmacies.map((pharm, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                          <div className="flex justify-between items-start font-bold text-slate-800">
                            <span>{pharm.name}</span>
                            <span className="text-emerald-600">{pharm.price}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">{pharm.address}</p>
                          <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-200/60">
                            <span className="text-[10px] text-blue-600 font-semibold">{pharm.distance}</span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">{pharm.stock}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. PERSONAL MEDICAL RECORD (PMR) MODULE */}
          {activeTab === 'pmr' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{t.pmr}</h3>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      <Lock className="w-3 h-3" /> End-to-End Encrypted
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Continuous auto-sync with regional hospitals, lab reports, and doctor consultations.</p>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleManualSync}
                    disabled={isSyncing}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-600' : ''}`} />
                    {isSyncing ? 'Syncing with HIS...' : 'Auto-Sync Hospital HIS'}
                  </button>

                  <button 
                    onClick={handleShareRecord}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {shareSuccess ? 'Authorization Granted!' : 'Share with Doctor'}
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h4 className="font-bold text-sm text-slate-800">Verified Medical History Timeline</h4>
                  <span className="text-xs text-slate-400">Total 3 Verified Entries</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {medicalRecords.map((rec, index) => (
                    <div key={index} className="p-6 hover:bg-slate-50/70 transition-all flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl mt-1">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-bold text-slate-800 text-sm">{rec.type}</h5>
                            <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                              {rec.hospital}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{rec.details}</p>
                          <p className="text-[11px] text-slate-400 mt-2 font-medium">Attending: {rec.doctor} • {rec.date}</p>
                        </div>
                      </div>

                      <div className="flex md:flex-col items-end justify-between md:justify-center gap-2">
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {rec.status}
                        </span>
                        <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                          <Download className="w-3.5 h-3.5" /> View Original
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}