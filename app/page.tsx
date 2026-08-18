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
  ArrowRight
} from 'lucide-react';

export default function VitaLinkDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'telemedicine' | 'ai-assistant' | 'medicine' | 'sos' | 'pmr'>('dashboard');
  const [userRole, setUserRole] = useState<'Patient' | 'Healthcare Worker' | 'Doctor' | 'Paramedic' | 'Admin'>('Patient');
  
  // Emergency SOS State
  const [sosActive, setSosActive] = useState(false);
  const [sosStep, setSosStep] = useState<number>(1);

  // AI Assistant Chat State
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; triage?: 'low' | 'moderate' | 'emergency' }>>([
    {
      sender: 'ai',
      text: 'Hello! I am your VitaLink AI Symptom Assistant. Describe what you are feeling (e.g., "sharp chest pain", "mild fever and headache").'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    const newMessages = [...messages, { sender: 'user' as const, text: userMsg }];
    setMessages(newMessages);
    setInputText('');

    // Simulated Smart Healthcare Triage Logic
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      if (lower.includes('chest pain') || lower.includes('breath') || lower.includes('unconscious')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'CRITICAL ALERT: Your symptoms indicate high risk of an acute cardiopulmonary event. Please trigger Emergency SOS immediately or call emergency services.',
            triage: 'emergency'
          }
        ]);
      } else if (lower.includes('fever') || lower.includes('cough') || lower.includes('headache')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'ASSESSMENT: Mild-to-moderate viral or tension symptoms detected. Recommended First-Aid: Stay hydrated, rest, and monitor body temperature. If fever persists past 48 hours, book a Telemedicine consultation.',
            triage: 'moderate'
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: 'General inquiry noted. Please monitor symptoms closely. If condition changes, you can request an escalation to an available doctor.',
            triage: 'low'
          }
        ]);
      }
    }, 700);
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between hidden md:flex shadow-xl">
        <div className="p-5">
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-500/20">
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wide bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">VITALINK</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Healthcare Reimagined</p>
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
              <span>Overview & Alerts</span>
            </button>

            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'telemedicine' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>1. Telemedicine</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'ai-assistant' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>2. AI Symptom Assistant</span>
            </button>

            <button
              onClick={() => setActiveTab('medicine')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'medicine' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Pill className="w-4 h-4" />
              <span>3. Medicine Tracker</span>
            </button>

            <button
              onClick={() => setActiveTab('sos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'sos' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-semibold' : 'text-red-400 hover:bg-red-950/40 hover:text-red-300'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>4. Emergency SOS</span>
            </button>

            <button
              onClick={() => setActiveTab('pmr')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'pmr' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>5. Medical Record</span>
            </button>
          </nav>
        </div>

        {/* User Role Switcher */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Simulate Role</label>
          <select 
            value={userRole} 
            onChange={(e) => setUserRole(e.target.value as any)}
            className="w-full bg-slate-800 text-xs text-slate-200 border border-slate-700 rounded-lg p-2.5 outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value="Patient">Patient / Family</option>
            <option value="Healthcare Worker">Healthcare Worker</option>
            <option value="Doctor">Doctor / Specialist</option>
            <option value="Paramedic">Paramedics / Emergency</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-800 capitalize">
              {activeTab === 'dashboard' ? 'Overview & Alerts' : activeTab.replace('-', ' ')}
            </h2>
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Role: {userRole}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search health records, doctors..."
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
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <>
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-bold text-red-100 text-xs tracking-wider uppercase mb-1">
                    <AlertTriangle className="w-4 h-4" /> Instant Response Module
                  </div>
                  <h3 className="text-2xl font-black">Emergency SOS & Paramedic Dispatch</h3>
                  <p className="text-sm text-red-100 mt-1 max-w-xl">
                    One-tap triggers live GPS tracking, automatically bundles critical medical snapshots, and alerts nearby hospital networks.
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSosActive(true);
                    setActiveTab('sos');
                  }}
                  className="px-6 py-3 bg-white text-red-600 rounded-xl font-black shadow-md hover:bg-red-50 active:scale-95 transition-all text-sm uppercase tracking-wider"
                >
                  {sosActive ? 'SOS Active (View Live Tracker)' : 'Trigger SOS Now'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Blood Pressure</p>
                    <p className="text-xl font-bold text-slate-800">120/80 <span className="text-xs font-normal text-slate-500">mmHg</span></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Heart Rate</p>
                    <p className="text-xl font-bold text-slate-800">72 <span className="text-xs font-normal text-slate-500">bpm</span></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                    <Pill className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Next Dosage</p>
                    <p className="text-xl font-bold text-slate-800">2:00 PM <span className="text-xs font-normal text-amber-600">(Paracetamol)</span></p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Hospital Sync</p>
                    <p className="text-xl font-bold text-emerald-600">Active <span className="text-xs font-normal text-slate-500">(Encrypted)</span></p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div onClick={() => setActiveTab('telemedicine')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Video className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">1. Telemedicine</h4>
                  <p className="text-xs text-slate-500 mt-1">Connect with verified doctors & specialists via video or text consultations.</p>
                </div>

                <div onClick={() => setActiveTab('ai-assistant')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">2. AI Symptom Assistant</h4>
                  <p className="text-xs text-slate-500 mt-1">Instant symptom checking, preliminary triage risk score, and first-aid recommendations.</p>
                </div>

                <div onClick={() => setActiveTab('medicine')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">3. Medicine Tracker</h4>
                  <p className="text-xs text-slate-500 mt-1">Automated dosage reminders, refill alerts, and pharmacy stock locator.</p>
                </div>

                <div onClick={() => setActiveTab('sos')} className="bg-white p-6 rounded-2xl border border-red-200 hover:border-red-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl w-fit mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">4. Emergency SOS</h4>
                  <p className="text-xs text-slate-500 mt-1">Live GPS tracking and medical context transmission to ambulance paramedics.</p>
                </div>

                <div onClick={() => setActiveTab('pmr')} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl w-fit mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">5. Personal Medical Record</h4>
                  <p className="text-xs text-slate-500 mt-1">Auto-synced hospital history, lab results, prescriptions, and encrypted doctor sharing.</p>
                </div>
              </div>
            </>
          )}

          {/* 4. EMERGENCY SOS MODULE */}
          {activeTab === 'sos' && (
            <div className="space-y-6">
              {!sosActive ? (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center max-w-xl mx-auto py-12">
                  <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <AlertTriangle className="w-12 h-12 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">One-Tap Emergency SOS</h3>
                  <p className="text-sm text-slate-500 mt-2 mb-8">
                    Triggering this will automatically broadcast your live GPS coordinates, attach your encrypted medical snapshot (allergies, conditions), and alert the nearest paramedic dispatch team.
                  </p>
                  <button 
                    onClick={() => {
                      setSosActive(true);
                      setSosStep(1);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-red-600/30 active:scale-95 transition-all uppercase tracking-wider"
                  >
                    ACTIVATE SOS NOW
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
                        <h3 className="font-black text-xl tracking-wide">EMERGENCY SOS ACTIVE</h3>
                        <p className="text-xs text-red-200">Incident #SOS-9042 • Live Dispatch</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSosActive(false)}
                      className="text-xs bg-red-800/80 hover:bg-red-800 px-3 py-1.5 rounded-lg border border-red-400/40 text-red-100"
                    >
                      Cancel Alert
                    </button>
                  </div>

                  {/* Flow Steps Pipeline */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-slate-100 bg-slate-50/50">
                    <div className={`p-4 rounded-xl border ${sosStep >= 1 ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs mb-1">
                        <MapPin className="w-4 h-4" /> 1. Exact GPS
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Lat: 23.2324° N, Long: 87.0715° E</p>
                    </div>

                    <div className={`p-4 rounded-xl border ${sosStep >= 2 ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs mb-1">
                        <FileText className="w-4 h-4" /> 2. Medical History
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Allergies: Penicillin | Blood: O+</p>
                    </div>

                    <div className={`p-4 rounded-xl border ${sosStep >= 3 ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-amber-600 font-bold text-xs mb-1">
                        <ShieldAlert className="w-4 h-4" /> 3. Triage Severity
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Level 1 - High Criticality</p>
                    </div>

                    <div className={`p-4 rounded-xl border ${sosStep >= 4 ? 'border-red-300 bg-red-50/50' : 'border-slate-200'}`}>
                      <div className="flex items-center gap-2 text-red-600 font-bold text-xs mb-1">
                        <Ambulance className="w-4 h-4" /> 4. Paramedic Status
                      </div>
                      <p className="text-xs text-red-700 font-bold">Ambulance Dispatched (ETA: 6 mins)</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      Emergency response pipeline synced automatically with regional healthcare database.
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setSosStep((prev) => Math.min(prev + 1, 4))}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
                      >
                        Advance Pipeline Step ({sosStep}/4)
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. AI SYMPTOM ASSISTANT MODULE */}
          {activeTab === 'ai-assistant' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[650px]">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">AI Symptom Assistant & Triage</h3>
                    <p className="text-[11px] text-slate-400">Offline-ready neural health triage model</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Live Assistant
                </span>
              </div>

              {/* Chat Message Stream */}
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

              {/* Chat Input */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Describe symptoms (e.g., severe migraine, high fever, chest pressure)..."
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

          {/* Module Placeholder Views for Modules 1, 3, 5 */}
          {(activeTab === 'telemedicine' || activeTab === 'medicine' || activeTab === 'pmr') && (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center py-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 capitalize">{activeTab.replace('-', ' ')} Module</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
                Next phase will complete Telemedicine scheduling, Medicine Tracker stock queries, and encrypted Health History tables.
              </p>
              <button 
                onClick={() => setActiveTab('dashboard')} 
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}