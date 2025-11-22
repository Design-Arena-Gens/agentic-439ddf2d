'use client';

import { useState } from 'react';
import { StudentAssistant } from '@/components/StudentAssistant';
import { TeacherSupport } from '@/components/TeacherSupport';
import { AdminTools } from '@/components/AdminTools';

export default function Home() {
  const [showTranslations, setShowTranslations] = useState(false);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-10">
      <header className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-xl shadow-blue-100/40 backdrop-blur-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
              SmartEd Tutor & Assistant Agent
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Class 6-12 students ke liye super friendly Hinglish mentor + teacher workload reducer
            </h1>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              Concepts basics se samjho, worksheets & test papers turant pao, aur sab kuch Hindi + English
              translation ke saath PDF-ready format me export karo. Motivational tone guaranteed!
            </p>
            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/60 px-3 py-2">
                <span className="text-xl">📚</span>
                <span>Physics, Chemistry, Math, Biology, English, Computer sab cover.</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-3 py-2">
                <span className="text-xl">📝</span>
                <span>Worksheets, chapter test, notes, mindmaps within seconds.</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-purple-100 bg-purple-50/60 px-3 py-2">
                <span className="text-xl">💡</span>
                <span>Har answer ke end me 2 examples + 2 MCQs fix.</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-orange-50/60 px-3 py-2">
                <span className="text-xl">🤝</span>
                <span>Admin templates ready: attendance, homework, parent updates.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-lg shadow-slate-200/50">
            <h2 className="text-lg font-semibold text-slate-900">Smart Translation Toggle</h2>
            <p>
              Hindi + English dono versions chaahiye? Bas switch on karo aur har explanation bilingual ho
              jayega.
            </p>
            <button
              onClick={() => setShowTranslations((prev) => !prev)}
              className={`inline-flex items-center justify-between rounded-2xl border px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${
                showTranslations
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700'
              }`}
            >
              <span>{showTranslations ? 'Bilingual Mode ON' : 'Bilingual Mode OFF'}</span>
              <span className="ml-3 text-lg">{showTranslations ? '🌐' : '🔁'}</span>
            </button>
            <p className="rounded-2xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs text-blue-700">
              Toggle off = Hinglish only. Toggle on = Hinglish + Hindi + English neatly formatted.
            </p>
          </div>
        </div>
      </header>

      <StudentAssistant showTranslations={showTranslations} />
      <TeacherSupport showTranslations={showTranslations} />
      <AdminTools showTranslations={showTranslations} />

      <footer className="rounded-3xl border border-slate-200 bg-white px-6 py-6 text-sm text-slate-600 shadow-lg shadow-slate-200/50">
        <p className="font-semibold text-slate-800">
          Ready for confident learning? SmartEd Tutor hamesha positive aur helpful rahega!
        </p>
        <p className="mt-2">
          Tip: Agar question clear nahi ho to pehle clarification lo. Main turant puchunga “Doubt thoda aur
          detail me batao?” taaki best help mile.
        </p>
      </footer>
    </main>
  );
}
