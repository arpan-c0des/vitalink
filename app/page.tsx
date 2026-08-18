'use client';

import React, { useState } from 'react';
import { 
  Heart, 
  Video, 
  Bot, 
  Pill, 
  AlertTriangle, 
  FileText, 
  UserCheck, 
  Calendar, 
  Bell, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  Search,
  CheckCircle2,
  Stethoscope,
  Ambulance,
  User,
  Settings
} from 'lucide-react';

export default function VitaLinkDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'telemedicine' | 'ai-assistant' | 'medicine' | 'sos' | 'pmr'>('dashboard');
  const [userRole, setUserRole] = useState<'Patient' | 'Healthcare Worker' | 'Doctor' | 'Paramedic' | 'Admin'>('Patient');
  const [sosTriggered, setSosTriggered] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between hidden md:flex shadow-xl">
        <div className="p-5">
          <div className="flex items-center gap-3 mb-8">
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

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
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
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 text-white flex items-center justify-center font-bold text-xs shadow">
              {userRole[0]}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-6 max-w-7xl mx-auto w-full space-y-6">
          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <>
              {/* Emergency Banner */}
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
                    setSosTriggered(!sosTriggered);
                    setActiveTab('sos');
                  }}
                  className="px-6 py-3 bg-white text-red-600 rounded-xl font-black shadow-md hover:bg-red-50 active:scale-95 transition-all text-sm uppercase tracking-wider"
                >
                  {sosTriggered ? 'SOS Active (View Status)' : 'Trigger SOS Now'}
                </button>
              </div>

              {/* Quick Health Summary Grid */}
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

              {/* Module Cards Grid */}
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

          {/* Module Placeholder Views */}
          {activeTab !== 'dashboard' && (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center py-16">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 capitalize">{activeTab.replace('-', ' ')} Module</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
                This section is ready for detailed component implementation in the next step.
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