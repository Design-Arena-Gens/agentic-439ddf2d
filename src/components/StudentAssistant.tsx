'use client';

import { useMemo, useState } from 'react';
import {
  DualText,
  ExamplePair,
  MCQBlock,
  SubjectKey,
  TopicContent,
  subjects,
  topics,
  dual,
} from '@/lib/content';
import { TranslatedText } from './TranslatedText';

type StudentAssistantProps = {
  showTranslations: boolean;
};

type StudentResponse = {
  topic: TopicContent | null;
  explanation: DualText[];
  tips: DualText[];
  examples: ExamplePair[];
  mcqs: MCQBlock[];
  examImportant: boolean;
  uplift: DualText;
};

const fallbackResponse: StudentResponse = {
  topic: null,
  explanation: [
    dual(
      'Chalo pehle basics clear karte hain: apne doubt ko thoda detail me likho taki main exact concept pakad saku.',
      'चलो पहले मूल बातें साफ़ करते हैं: अपना संदेह थोड़ा विस्तार से लिखो ताकि मैं सही अवधारणा पकड़ सकूँ।',
      'Let us first clarify the basics: describe your doubt in a little more detail so I can capture the exact concept.',
    ),
    dual(
      'General tip: question me keywords jaise formula, process, reason mention karo.',
      'सामान्य सुझाव: प्रश्न में सूत्र, प्रक्रिया, कारण जैसे संकेत शब्द लिखो।',
      'General tip: mention keywords like formula, process, reason inside the question.',
    ),
  ],
  tips: [
    dual(
      'Concept ko basic definition se start karo, phir real-life example connect karo.',
      'अवधारणा को मूल परिभाषा से शुरू करो और फिर वास्तविक जीवन उदाहरण से जोड़ो।',
      'Start the concept with a basic definition, then connect to a real-life example.',
    ),
    dual(
      'Agar tumhe exam practice chahiye to topic ka naam zaroor add karo.',
      'अगर तुम्हें परीक्षा अभ्यास चाहिए तो विषय का नाम जरूर लिखो।',
      'If you need exam practice, add the topic name clearly.',
    ),
  ],
  examples: [
    {
      situation: dual(
        'Example 1 placeholder: apne question ko detail me likhne ki practice karo.',
        'उदाहरण 1: अपना प्रश्न विस्तार से लिखने की आदत डालो।',
        'Example 1: practise writing your question in detail.',
      ),
      solution: dual(
        'Solution: keyword list banao jisse concept easy detect ho.',
        'समाधान: संकेत शब्दों की सूची बनाओ ताकि अवधारणा आसानी से पहचानो।',
        'Tip: make a keyword list to detect the concept quickly.',
      ),
    },
    {
      situation: dual(
        'Example 2 placeholder: ek topic choose karo aur 3 questions socho.',
        'उदाहरण 2: एक विषय चुनो और तीन प्रश्न सोचो।',
        'Example 2: pick one topic and create three questions.',
      ),
      solution: dual(
        'Solution: concept clarity automatic improve hogi.',
        'समाधान: अवधारणा की स्पष्टता अपने आप बढ़ेगी।',
        'Result: concept clarity improves automatically.',
      ),
    },
  ],
  mcqs: [
    {
      question: dual(
        'Sample MCQ: Tum doubt poochte waqt kya include karoge?',
        'नमूना प्रश्न: संदेह पूछते समय क्या शामिल करोगे?',
        'Sample MCQ: What will you include while asking a doubt?',
      ),
      options: [
        dual('Topic name', 'विषय का नाम', 'Topic name'),
        dual('Class grade', 'कक्षा स्तर', 'Class grade'),
        dual('Previous knowledge', 'पहले से क्या पता है', 'Prior understanding'),
        dual('Sabhi upar wale', 'सभी ऊपर वाले', 'All of the above'),
      ],
      answer: dual(
        'Option D sabse best hai.',
        'विकल्प D सबसे अच्छा है।',
        'Option D works best.',
      ),
    },
    {
      question: dual(
        'Sample MCQ: Concept weak ho to pehla step?',
        'नमूना प्रश्न: अवधारणा कमजोर हो तो पहला कदम?',
        'Sample MCQ: First step when concept feels weak?',
      ),
      options: [
        dual('Basics revise karo', 'मूल बातें दोहराओ', 'Revise basics'),
        dual('Skip topic', 'विषय छोड़ दो', 'Skip topic'),
        dual('Stress lo', 'तनाव लो', 'Take stress'),
        dual('Confuse ho jao', 'भ्रमित हो जाओ', 'Get confused'),
      ],
      answer: dual(
        'Option A hamesha best.',
        'विकल्प A हमेशा श्रेष्ठ।',
        'Option A is always best.',
      ),
    },
  ],
  examImportant: false,
  uplift: dual(
    'Tum doubt share karo, main turant friendly explanation dunga!',
    'तुम संदेह साझा करो, मैं तुरंत दोस्ताना समझाऊँगा!',
    'Share the doubt and I will jump in with a friendly explanation!',
  ),
};

const examKeywords = ['board', 'exam', 'ntse', 'jee', 'neet', 'test', 'important'];
const basicsKeywords = ['what', 'define', 'basic', 'start', 'kya', 'meaning'];

const normalize = (value: string) => value.toLowerCase();

function pickTopics(subject: SubjectKey, grade: number) {
  return topics.filter(
    (item) =>
      item.subject === subject &&
      grade >= item.gradeRange[0] &&
      grade <= item.gradeRange[1],
  );
}

function scoreTopic(question: string, topic: TopicContent) {
  const q = normalize(question);
  let score = 0;
  topic.keywords.forEach((keyword) => {
    if (q.includes(keyword.toLowerCase())) {
      score += 3;
    }
  });
  if (q.includes(topic.title.split(' ')[0].toLowerCase())) {
    score += 2;
  }
  return score;
}

function buildResponse(
  question: string,
  selectedTopic: TopicContent,
  confidence: number,
): StudentResponse {
  const lowerQuestion = normalize(question);
  const needsBasics =
    confidence <= 3 ||
    basicsKeywords.some((word) => lowerQuestion.includes(word));

  const explanation: DualText[] = [
    selectedTopic.baseline,
    ...(needsBasics ? selectedTopic.basics : selectedTopic.basics.slice(0, 1)),
    ...selectedTopic.deepDive,
  ];

  const uplift = dual(
    `${selectedTopic.motivational.hinglish} Tumne great question poocha hai!`,
    `${selectedTopic.motivational.hindi} तुमने शानदार प्रश्न पूछा है!`,
    `${selectedTopic.motivational.english} You have asked a wonderful question!`,
  );

  const tips = [...selectedTopic.tips];
  if (!needsBasics) {
    tips.push(
      dual(
        'Ab advanced numericals try karo taaki concept aur strong ho jaye.',
        'अब उन्नत संख्यात्मक प्रश्न हल करो ताकि अवधारणा और मजबूत हो जाए।',
        'Now try advanced numericals to strengthen the concept further.',
      ),
    );
  } else {
    tips.unshift(
      dual(
        'Basics revise karne ke baad ek concept map banao.',
        'मूल बातें दोहराने के बाद एक अवधारणा मानचित्र बनाओ।',
        'After revising basics, create a concept map.',
      ),
    );
  }

  const examples = selectedTopic.examples.slice(0, 2);
  const mcqs = selectedTopic.mcqs.slice(0, 2);

  const examImportant =
    selectedTopic.examImportant ||
    examKeywords.some((word) => lowerQuestion.includes(word));

  return {
    topic: selectedTopic,
    explanation,
    tips,
    examples,
    mcqs,
    examImportant,
    uplift,
  };
}

export function StudentAssistant({ showTranslations }: StudentAssistantProps) {
  const [grade, setGrade] = useState(9);
  const [subject, setSubject] = useState<SubjectKey>('physics');
  const [question, setQuestion] = useState('');
  const [confidence, setConfidence] = useState(3);
  const [response, setResponse] = useState<StudentResponse | null>(null);

  const subjectTopics = useMemo(() => pickTopics(subject, grade), [subject, grade]);

  const handleGenerate = () => {
    if (!question.trim()) {
      setResponse(fallbackResponse);
      return;
    }

    if (subjectTopics.length === 0) {
      setResponse(fallbackResponse);
      return;
    }

    const bestTopic =
      subjectTopics
        .map((topic) => ({ topic, score: scoreTopic(question, topic) }))
        .sort((a, b) => b.score - a.score)[0]?.topic ?? subjectTopics[0];

    setResponse(buildResponse(question, bestTopic, confidence));
  };

  return (
    <section id="student-support" className="rounded-3xl bg-white shadow-xl shadow-blue-100/40 ring-1 ring-blue-100">
      <div className="border-b border-blue-50 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 sm:px-8">
        <h2 className="text-lg font-semibold text-white">SmartEd Student Doubt Solver</h2>
        <p className="mt-1 text-sm text-blue-100">
          Friendly Hinglish me explanation + exam focus + examples + MCQs ek hi jagah.
        </p>
      </div>
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-[minmax(0,_360px)_1fr] sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-slate-50/60 p-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-slate-800">Class/Grade</span>
            <input
              type="number"
              min={6}
              max={12}
              value={grade}
              onChange={(event) => setGrade(Number(event.target.value))}
              className="w-full rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-slate-800">Subject</span>
            <select
              value={subject}
              onChange={(event) => setSubject(event.target.value as SubjectKey)}
              className="w-full rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {subjects.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-800">
              Tumhara current confidence level
            </span>
            <input
              type="range"
              min={1}
              max={5}
              value={confidence}
              onChange={(event) => setConfidence(Number(event.target.value))}
              className="accent-blue-600"
            />
            <p className="text-xs text-slate-600">
              {confidence <= 2
                ? 'Mujhe basics se shuru karna hai.'
                : confidence >= 4
                  ? 'Main concept ko achchi tarah revise karna chahta/chahti hoon.'
                  : 'Thoda basic + thoda advance please.'}
            </p>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-slate-800">
              Apna doubt type karo (keywords include karo)
            </span>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={5}
              placeholder="Example: Newton ke third law ke real life examples kya hain?"
              className="w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>

          <button
            onClick={handleGenerate}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
          >
            Doubt Solve Karo 🚀
          </button>
          <p className="text-xs text-blue-600">
            Tip: Agar question exam se related ho to “board” ya “important” likho taki highlight ho sake.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {response ? (
            <div className="flex flex-col gap-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Friendly Hinglish Explanation
                </span>
                {response.examImportant && (
                  <span className="rounded-full border border-amber-400 bg-amber-50 px-4 py-1 text-xs font-semibold text-amber-700">
                    ⭐ Exam Important Topic
                  </span>
                )}
                {response.topic && (
                  <span className="rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold text-indigo-700">
                    {response.topic.title}
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {response.explanation.map((line, index) => (
                  <TranslatedText
                    key={index}
                    text={line}
                    showTranslations={showTranslations}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                  />
                ))}
              </div>

              <TranslatedText
                text={response.uplift}
                showTranslations={showTranslations}
                className="rounded-2xl border border-teal-100 bg-teal-50/70 p-4"
              />

              <div className="space-y-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-4">
                <h3 className="text-sm font-semibold text-blue-700">Quick Tips</h3>
                <ul className="space-y-2">
                  {response.tips.map((tip, index) => (
                    <li key={index} className="rounded-xl border border-blue-100 bg-white/70 p-3">
                      <TranslatedText text={tip} showTranslations={showTranslations} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                <h3 className="text-sm font-semibold text-emerald-700">
                  Concept Boost Examples (Always 2)
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {response.examples.map((example, index) => (
                    <div key={index} className="flex flex-col gap-2 rounded-xl border border-emerald-100 bg-white/80 p-3">
                      <h4 className="text-xs font-semibold uppercase text-emerald-600">
                        Example {index + 1}
                      </h4>
                      <TranslatedText text={example.situation} showTranslations={showTranslations} />
                      <TranslatedText
                        text={example.solution}
                        showTranslations={showTranslations}
                        className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-2 text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-purple-200 bg-purple-50/60 p-4">
                <h3 className="text-sm font-semibold text-purple-700">
                  Practice MCQs (Always 2 with Answers)
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {response.mcqs.map((mcq, index) => (
                    <div key={index} className="flex flex-col gap-3 rounded-xl border border-purple-200 bg-white/80 p-3">
                      <div>
                        <span className="text-xs font-semibold uppercase text-purple-600">
                          MCQ {index + 1}
                        </span>
                        <TranslatedText
                          text={mcq.question}
                          showTranslations={showTranslations}
                          className="mt-1"
                        />
                      </div>
                      <ul className="space-y-2">
                        {mcq.options.map((option, optionIndex) => (
                          <li
                            key={optionIndex}
                            className="rounded-lg border border-purple-100 bg-purple-50/40 px-3 py-2 text-sm"
                          >
                            <TranslatedText text={option} showTranslations={showTranslations} />
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2">
                        <p className="text-xs font-semibold uppercase text-green-700">Correct Answer</p>
                        <TranslatedText text={mcq.answer} showTranslations={showTranslations} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-blue-200 bg-slate-50/40 p-6 text-center text-slate-500">
              <p className="text-base font-semibold text-slate-600">
                Pehle apna doubt likho, phir main super simple Hinglish me answer dunga ✨
              </p>
              <p className="text-sm">
                Examples + MCQs end me automatically add honge, bas submit dabao.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
