'use client';

import { useMemo, useState } from 'react';
import {
  DualText,
  QAItem,
  SubjectKey,
  TopicContent,
  subjects,
  topics,
  dual,
} from '@/lib/content';
import { TranslatedText } from './TranslatedText';
import { PrintableCard } from './PrintableCard';

type TeacherSupportProps = {
  showTranslations: boolean;
};

type WorksheetBundle = {
  header: DualText;
  objectives: DualText[];
  questions: QAItem[];
};

type NotesBundle = {
  summary: DualText[];
  mindmap: DualText[];
  quickRevision: DualText[];
};

type TestBundle = {
  header: DualText;
  duration: DualText;
  questions: QAItem[];
};

const defaultObjectives: DualText[] = [
  dual(
    'Concept clarity check karna',
    'अवधारणा की स्पष्टता जांचना',
    'Check concept clarity',
  ),
  dual(
    'Exam style practice karwana',
    'परीक्षा शैली अभ्यास करवाना',
    'Provide exam-style practice',
  ),
];

const defaultQuickRevision: DualText[] = [
  dual(
    'Ek page summary print karo aur students ko highlight karne do.',
    'एक पेज सारांश प्रिंट करो और छात्रों को हाइलाइट करने दो।',
    'Print the one-page summary and let students highlight key bits.',
  ),
  dual(
    'Worksheet ke baad reflection question pucho.',
    'वर्कशीट के बाद आत्ममंथन प्रश्न पूछो।',
    'Ask reflection questions after worksheet practice.',
  ),
];

const teacherTabs = [
  { key: 'worksheet', label: 'Worksheets' },
  { key: 'test', label: 'Chapter Test' },
  { key: 'notes', label: 'Notes & Mindmap' },
];

function findRelevantTopics(subject: SubjectKey, grade: number, chapter: string) {
  const chapterLower = chapter.trim().toLowerCase();
  return topics.filter((topic) => {
    if (topic.subject !== subject) return false;
    if (grade < topic.gradeRange[0] || grade > topic.gradeRange[1]) return false;
    if (!chapterLower) return true;
    const matchTitle = topic.title.toLowerCase().includes(chapterLower);
    const matchKeyword = topic.keywords.some((keyword) =>
      keyword.toLowerCase().includes(chapterLower),
    );
    return matchTitle || matchKeyword;
  });
}

function buildWorksheetBundle(
  topicList: TopicContent[],
  chapter: string,
  count: number,
): WorksheetBundle {
  const questions: QAItem[] = [];
  for (const topic of topicList) {
    questions.push(...topic.worksheetQuestions);
    if (questions.length >= count) break;
  }
  return {
    header: dual(
      `${chapter || 'Selected Topic'} Worksheet Ready hai!`,
      `${chapter || 'चयनित विषय'} वर्कशीट तैयार है!`,
      `${chapter || 'Selected topic'} worksheet is ready!`,
    ),
    objectives: defaultObjectives,
    questions: questions.slice(0, count),
  };
}

function buildTestBundle(
  topicList: TopicContent[],
  chapter: string,
  count: number,
): TestBundle {
  const questions: QAItem[] = [];
  topicList.forEach((topic) => {
    questions.push(...topic.testQuestions);
  });
  return {
    header: dual(
      `${chapter || 'Unit'} - Chapter Test`,
      `${chapter || 'अध्याय'} - अध्याय परीक्षण`,
      `${chapter || 'Unit'} - Chapter Test`,
    ),
    duration: dual('Suggested time: 45 minutes', 'सुझावित समय: 45 मिनट', 'Suggested duration: 45 minutes'),
    questions: questions.slice(0, count),
  };
}

function buildNotesBundle(topicList: TopicContent[]): NotesBundle {
  const summary: DualText[] = [];
  const mindmap: DualText[] = [];
  topicList.forEach((topic) => {
    summary.push(...topic.summaryPoints);
    mindmap.push(...topic.mindmap);
  });

  return {
    summary,
    mindmap,
    quickRevision: defaultQuickRevision,
  };
}

export function TeacherSupport({ showTranslations }: TeacherSupportProps) {
  const [tab, setTab] = useState<(typeof teacherTabs)[number]['key']>('worksheet');
  const [grade, setGrade] = useState(10);
  const [subject, setSubject] = useState<SubjectKey>('physics');
  const [chapter, setChapter] = useState('');
  const [questionCount, setQuestionCount] = useState(6);

  const relevantTopics = useMemo(
    () => findRelevantTopics(subject, grade, chapter),
    [subject, grade, chapter],
  );

  const worksheet = useMemo(
    () => buildWorksheetBundle(relevantTopics, chapter, questionCount),
    [relevantTopics, chapter, questionCount],
  );
  const chapterTest = useMemo(
    () => buildTestBundle(relevantTopics, chapter, Math.max(4, questionCount)),
    [relevantTopics, chapter, questionCount],
  );
  const notes = useMemo(() => buildNotesBundle(relevantTopics), [relevantTopics]);

  return (
    <section id="teacher-support" className="rounded-3xl border border-lime-100 bg-white shadow-xl shadow-lime-200/50">
      <div className="border-b border-lime-100 bg-gradient-to-r from-lime-500 to-emerald-500 px-6 py-5 sm:px-8">
        <h2 className="text-lg font-semibold text-white">Teacher Productivity Toolkit</h2>
        <p className="mt-1 text-sm text-lime-100">
          Worksheets, tests, notes, mindmaps aur PDF export ready within seconds.
        </p>
      </div>

      <div className="grid gap-6 px-6 py-6 sm:grid-cols-[minmax(0,_320px)_1fr] sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-lime-100 bg-lime-50/80 p-4">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white bg-white/70 p-1">
            {teacherTabs.map((item) => (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  tab === item.key
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-400/40'
                    : 'text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase text-emerald-800">Class</span>
            <input
              type="number"
              min={6}
              max={12}
              value={grade}
              onChange={(event) => setGrade(Number(event.target.value))}
              className="rounded-xl border border-lime-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase text-emerald-800">Subject</span>
            <select
              value={subject}
              onChange={(event) => setSubject(event.target.value as SubjectKey)}
              className="rounded-xl border border-lime-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              {subjects.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase text-emerald-800">
              Chapter / Focus Topic
            </span>
            <input
              value={chapter}
              onChange={(event) => setChapter(event.target.value)}
              placeholder="e.g. Newton Laws ya Photosynthesis"
              className="rounded-xl border border-lime-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase text-emerald-800">
              Questions Count
            </span>
            <input
              type="number"
              min={4}
              max={12}
              value={questionCount}
              onChange={(event) => setQuestionCount(Number(event.target.value))}
              className="rounded-xl border border-lime-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>

          <p className="rounded-xl border border-emerald-200 bg-white px-3 py-3 text-xs text-emerald-700">
            Translation toggle se worksheet Hindi + English dono format me print ho sakti hai. PDF button use karke direct share karo.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {tab === 'worksheet' && (
            <PrintableCard
              title="Daily Practice Worksheet"
              fileName="SmartEd-Worksheet"
              description="Custom worksheet auto-generated for your class."
            >
              <TranslatedText text={worksheet.header} showTranslations={showTranslations} />
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-semibold text-emerald-700">Objectives</h4>
                <ul className="space-y-2">
                  {worksheet.objectives.map((objective, index) => (
                    <li key={index} className="rounded-lg border border-emerald-100 bg-white px-3 py-2">
                      <TranslatedText text={objective} showTranslations={showTranslations} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-semibold text-emerald-700">Question Bank</h4>
                {worksheet.questions.length > 0 ? (
                  <ol className="space-y-3">
                    {worksheet.questions.map((question, index) => (
                      <li key={index} className="rounded-xl border border-lime-100 bg-white p-3">
                        <TranslatedText text={question.prompt} showTranslations={showTranslations} />
                        <div className="mt-2 rounded-lg border border-lime-100 bg-lime-50/70 p-2">
                          <p className="text-xs font-semibold text-lime-700">Suggested Answer Key</p>
                          <TranslatedText text={question.answer} showTranslations={showTranslations} />
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="rounded-xl border border-dashed border-lime-200 bg-white/70 p-3 text-sm text-lime-700">
                    Is chapter ke liye data nahi mila. Chapter name thoda aur specific likho.
                  </p>
                )}
              </div>
            </PrintableCard>
          )}

          {tab === 'test' && (
            <PrintableCard
              title="Chapter Mastery Test"
              fileName="SmartEd-Chapter-Test"
              description="Chapter-wise test paper with bilingual answer key."
            >
              <div className="space-y-3">
                <TranslatedText text={chapterTest.header} showTranslations={showTranslations} />
                <TranslatedText text={chapterTest.duration} showTranslations={showTranslations} />
                <div className="mt-4 space-y-3">
                  <h4 className="text-sm font-semibold text-emerald-700">Questions</h4>
                  {chapterTest.questions.length > 0 ? (
                    <ol className="space-y-3">
                      {chapterTest.questions.map((question, index) => (
                        <li key={index} className="rounded-xl border border-emerald-100 bg-white p-3">
                          <TranslatedText text={question.prompt} showTranslations={showTranslations} />
                          <div className="mt-2 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2">
                            <p className="text-xs font-semibold text-emerald-700">Evaluation Hint</p>
                            <TranslatedText text={question.answer} showTranslations={showTranslations} />
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="rounded-xl border border-dashed border-emerald-200 bg-white/70 p-3 text-sm text-emerald-700">
                      Add chapter keyword taki relevant test questions mile.
                    </p>
                  )}
                </div>
              </div>
            </PrintableCard>
          )}

          {tab === 'notes' && (
            <PrintableCard
              title="Smart Notes & Mindmap"
              fileName="SmartEd-Notes"
              description="Concise bilingual notes + visual mindmap statements."
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-emerald-700">Bullet Summary</h4>
                  {notes.summary.length > 0 ? (
                    <ul className="space-y-2">
                      {notes.summary.map((point, index) => (
                        <li key={index} className="rounded-xl border border-lime-100 bg-white px-3 py-2">
                          <TranslatedText text={point} showTranslations={showTranslations} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="rounded-xl border border-dashed border-lime-200 bg-white/70 p-3 text-sm text-lime-700">
                      Notes ke liye ek relevant chapter select karo.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-emerald-700">Mindmap Nodes</h4>
                  {notes.mindmap.length > 0 ? (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {notes.mindmap.map((node, index) => (
                        <li key={index} className="rounded-xl border border-emerald-100 bg-white px-3 py-2">
                          <TranslatedText text={node} showTranslations={showTranslations} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="rounded-xl border border-dashed border-emerald-200 bg-white/70 p-3 text-sm text-emerald-700">
                      Mindmap nodes yaha appear honge.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-emerald-700">Quick Revision Tasks</h4>
                  <ul className="space-y-2">
                    {notes.quickRevision.map((task, index) => (
                      <li key={index} className="rounded-xl border border-lime-100 bg-white px-3 py-2">
                        <TranslatedText text={task} showTranslations={showTranslations} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </PrintableCard>
          )}
        </div>
      </div>
    </section>
  );
}
