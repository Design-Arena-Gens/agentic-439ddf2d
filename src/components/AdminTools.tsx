'use client';

import { useState } from 'react';
import { DualText, dual } from '@/lib/content';
import { PrintableCard } from './PrintableCard';
import { TranslatedText } from './TranslatedText';

type AdminToolsProps = {
  showTranslations: boolean;
};

type TemplateBlock = {
  heading: DualText;
  body: DualText[];
};

const attendanceTemplate: TemplateBlock = {
  heading: dual(
    'Daily Attendance Snapshot',
    'दैनिक उपस्थिति सारांश',
    'Daily attendance snapshot',
  ),
  body: [
    dual(
      'Columns include: Date, Class, Total Strength, Present, Absent, Late Entry, Remarks.',
      'स्तंभ: तिथि, कक्षा, कुल उपस्थिति, उपस्थित, अनुपस्थित, विलंबित प्रवेश, टिप्पणी।',
      'Columns: Date, Class, Total strength, Present, Absent, Late entry, Remarks.',
    ),
    dual(
      'Use colour codes: green = full present, amber = 1-2 absentees, red = follow-up required.',
      'रंग कोड का उपयोग करें: हरा = सभी उपस्थित, एम्बर = 1-2 अनुपस्थित, लाल = फॉलो-अप आवश्यक।',
      'Use colour codes: green for all present, amber for 1-2 absentees, red for follow-up needed.',
    ),
    dual(
      'Parent update auto trigger karne ke liye absent students ka WhatsApp group note bhi likho.',
      'माता-पिता को तुरंत सूचना देने के लिए अनुपस्थित छात्रों का व्हाट्सएप समूह नोट भी लिखो।',
      'Add notes for absent students to trigger quick parent updates.',
    ),
  ],
};

const homeworkAssign: TemplateBlock = {
  heading: dual(
    'Homework Assignment Format',
    'गृहकार्य असाइनमेंट प्रारूप',
    'Homework assignment format',
  ),
  body: [
    dual(
      'Section 1: Topic intro + learning outcome (2 lines).',
      'खंड 1: विषय परिचय + सीखने का लक्ष्य (दो पंक्तियाँ).',
      'Section 1: topic intro + learning outcome (two lines).',
    ),
    dual(
      'Section 2: Task list with time estimate. Example: Q1-3 (15 min), Diagram (10 min).',
      'खंड 2: कार्य सूची और समय अनुमान। उदाहरण: प्रश्न 1-3 (15 मिनट), आरेख (10 मिनट)।',
      'Section 2: task list with time estimate e.g. Q1-3 (15 min), Diagram (10 min).',
    ),
    dual(
      'Section 3: Submission checklist + peer review buddy name.',
      'खंड 3: प्रस्तुतिकरण चेकलिस्ट + साथी समीक्षा का नाम।',
      'Section 3: submission checklist + peer review buddy name.',
    ),
  ],
};

const homeworkCheck: TemplateBlock = {
  heading: dual(
    'Homework Checking Rubric',
    'गृहकार्य जांच मानदंड',
    'Homework checking rubric',
  ),
  body: [
    dual(
      'Criteria: Completion (5), Accuracy (5), Presentation (5).',
      'मानदंड: पूर्णता (5), शुद्धता (5), प्रस्तुति (5)।',
      'Criteria: completion (5), accuracy (5), presentation (5).',
    ),
    dual(
      'Teacher comment line: “Strength + Next step” format use karo.',
      'शिक्षक टिप्पणी: “मजबूती + अगला कदम” प्रारूप का उपयोग करो।',
      'Use comment line: “Strength + Next step”.',
    ),
    dual(
      'Parent signature column add karo weekly tracker me.',
      'साप्ताहिक ट्रैकर में अभिभावक हस्ताक्षर स्तंभ जोड़ो।',
      'Add parent signature column in weekly tracker.',
    ),
  ],
};

const parentTemplates: TemplateBlock = {
  heading: dual(
    'Parent Communication Snippets',
    'माता-पिता संचार झलकियाँ',
    'Parent communication snippets',
  ),
  body: [
    dual(
      'Positive update: “Aaj ke class me ___ ne active participation dikhaya. Homework neat tha. Keep it up!”',
      'सकारात्मक संदेश: “आज की कक्षा में ___ ने सक्रिय भागीदारी दिखाई। गृहकार्य साफ़-सुथरा था। इसी तरह जारी रखें!”',
      'Positive update: “Today ___ was super active in class. Homework neat and complete. Keep it up!”',
    ),
    dual(
      'Support needed: “___ ko photosynthesis concept dubara revise karna hai. Humne recap sheet bheji hai.”',
      'सहायता आवश्यक: “___ को प्रकाश संश्लेषण अवधारणा दोबारा दोहरानी है। हमने पुनरावृत्ति शीट भेजी है।”',
      'Support note: “___ needs another revision of photosynthesis. Sharing recap sheet with you.”',
    ),
    dual(
      'Meeting invite: “Is Friday ko 4:30 pm par 10 min ka catch-up call schedule karein?”',
      'बैठक निमंत्रण: “क्या हम इस शुक्रवार 4:30 बजे 10 मिनट की बातचीत तय करें?”',
      'Meeting invite: “Can we schedule a 10-minute catch-up call this Friday at 4:30 pm?”',
    ),
  ],
};

const copyTemplates: Record<string, string> = {
  attendance: `Date | Class | Total | Present | Absent | Late | Remarks
dd/mm | IX A | 40 | 38 | 1 | 1 | Parent informed`,
  homework: `Homework Template
Topic:
Learning Outcome:
Tasks:
1.
2.
Time Estimate:
Submission Checklist:
- Completed all answers
- Checked with buddy
Teacher Comment (Strength + Next Step):`,
  parent: `Parent Update Template
Positive:
Need Support:
Meeting Invite:`,
};

export function AdminTools({ showTranslations }: AdminToolsProps) {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleCopy = async (key: string) => {
    try {
      await navigator.clipboard.writeText(copyTemplates[key]);
      setCopyStatus(key);
      setTimeout(() => setCopyStatus(null), 2000);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus(null), 2000);
    }
  };

  const statusMessage =
    copyStatus && copyStatus !== 'error'
      ? 'Template copied! Glue it into your docs.'
      : copyStatus === 'error'
        ? 'Copy fail hua, please manual select + copy try karo.'
        : '';

  return (
    <section id="admin-support" className="rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-200/50">
      <div className="border-b border-orange-100 bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-5 sm:px-8">
        <h2 className="text-lg font-semibold text-white">Administrative Magic Corner</h2>
        <p className="mt-1 text-sm text-orange-100">
          Attendance, homework aur parent updates bina stress ke manage karo.
        </p>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <PrintableCard
            title="Attendance Tracker"
            fileName="SmartEd-Attendance"
            description="Daily attendance template with reminder notes."
            className="h-full"
          >
            <TranslatedText text={attendanceTemplate.heading} showTranslations={showTranslations} />
            <div className="mt-3 space-y-2">
              {attendanceTemplate.body.map((line, index) => (
                <div key={index} className="rounded-xl border border-orange-100 bg-white px-3 py-2">
                  <TranslatedText text={line} showTranslations={showTranslations} />
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-dashed border-orange-200 bg-white">
              <table className="min-w-full divide-y divide-orange-200 text-sm text-slate-700">
                <thead className="bg-orange-50 text-xs uppercase text-orange-600">
                  <tr>
                    {['Date', 'Class', 'Total', 'Present', 'Absent', 'Late', 'Remarks'].map((cell) => (
                      <th key={cell} className="px-3 py-2 text-left">{cell}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  <tr>
                    <td className="px-3 py-2">__/__/20__</td>
                    <td className="px-3 py-2">IX A</td>
                    <td className="px-3 py-2">40</td>
                    <td className="px-3 py-2">38</td>
                    <td className="px-3 py-2 text-red-500">01</td>
                    <td className="px-3 py-2 text-amber-500">01</td>
                    <td className="px-3 py-2">Parent call done</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              onClick={() => handleCopy('attendance')}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Copy Table Layout
            </button>
          </PrintableCard>

          <PrintableCard
            title="Homework Assign + Review"
            fileName="SmartEd-Homework-Toolkit"
            description="Assignment format + checking rubric in bilingual style."
            className="h-full"
          >
            <TranslatedText text={homeworkAssign.heading} showTranslations={showTranslations} />
            <div className="mt-3 space-y-2">
              {homeworkAssign.body.map((line, index) => (
                <div key={index} className="rounded-xl border border-orange-100 bg-white px-3 py-2">
                  <TranslatedText text={line} showTranslations={showTranslations} />
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-semibold text-orange-600">Checking Rubric</h4>
              <TranslatedText text={homeworkCheck.heading} showTranslations={showTranslations} />
              {homeworkCheck.body.map((line, index) => (
                <div key={index} className="rounded-xl border border-orange-100 bg-white px-3 py-2">
                  <TranslatedText text={line} showTranslations={showTranslations} />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleCopy('homework')}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Copy Homework Format
            </button>
          </PrintableCard>

          <PrintableCard
            title="Parent Communication"
            fileName="SmartEd-Parent-Notes"
            description="Pre-drafted message bank for quick updates."
            className="h-full"
          >
            <TranslatedText text={parentTemplates.heading} showTranslations={showTranslations} />
            <div className="mt-3 space-y-2">
              {parentTemplates.body.map((line, index) => (
                <div key={index} className="rounded-xl border border-orange-100 bg-white px-3 py-2">
                  <TranslatedText text={line} showTranslations={showTranslations} />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleCopy('parent')}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Copy Message Template
            </button>
          </PrintableCard>
        </div>
        {statusMessage && (
          <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700">
            {statusMessage}
          </div>
        )}
      </div>
    </section>
  );
}
