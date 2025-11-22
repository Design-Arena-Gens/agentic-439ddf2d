export type SubjectKey =
  | "physics"
  | "chemistry"
  | "math"
  | "biology"
  | "english"
  | "computer";

export type DualText = {
  hinglish: string;
  hindi: string;
  english: string;
};

export type ExamplePair = {
  situation: DualText;
  solution: DualText;
};

export type MCQBlock = {
  question: DualText;
  options: DualText[];
  answer: DualText;
};

export type QAItem = {
  prompt: DualText;
  answer: DualText;
};

export interface TopicContent {
  id: string;
  subject: SubjectKey;
  title: string;
  gradeRange: [number, number];
  keywords: string[];
  examImportant: boolean;
  baseline: DualText;
  basics: DualText[];
  deepDive: DualText[];
  motivational: DualText;
  tips: DualText[];
  examples: ExamplePair[];
  mcqs: MCQBlock[];
  worksheetQuestions: QAItem[];
  testQuestions: QAItem[];
  summaryPoints: DualText[];
  mindmap: DualText[];
}

export const dual = (
  hinglish: string,
  hindi: string,
  english: string,
): DualText => ({
  hinglish,
  hindi,
  english,
});

export const subjects: { key: SubjectKey; label: string }[] = [
  { key: "physics", label: "Physics" },
  { key: "chemistry", label: "Chemistry" },
  { key: "math", label: "Math" },
  { key: "biology", label: "Biology" },
  { key: "english", label: "English" },
  { key: "computer", label: "Computer Science" },
];

export const topics: TopicContent[] = [
  {
    id: "physics-newton-laws",
    subject: "physics",
    title: "Newton ke Motion ke Niyam",
    gradeRange: [8, 11],
    keywords: [
      "newton",
      "law",
      "motion",
      "force",
      "inertia",
      "f=ma",
      "third law",
      "first law",
      "second law",
    ],
    examImportant: true,
    baseline: dual(
      "Newton ke laws batate hain kaise force aur motion connected hote hain.",
      "न्यूटन के नियम बताते हैं कि बल और गति एक-दूसरे से कैसे जुड़े होते हैं।",
      "Newton's laws describe how force and motion are connected.",
    ),
    basics: [
      dual(
        "1st law: agar external force zero ho to object apni current state me rahega (rest ya uniform motion).",
        "पहला नियम: अगर बाहरी बल शून्य हो तो वस्तु अपनी वर्तमान अवस्था (विश्राम या समान गति) में बनी रहती है।",
        "First law: if net external force is zero, an object stays in its current state of rest or uniform motion.",
      ),
      dual(
        "2nd law: Force = mass × acceleration, yaani jitni zyada force, utni zyada acceleration.",
        "दूसरा नियम: बल = द्रव्यमान × त्वरण, यानी जितना अधिक बल होगा उतना अधिक त्वरण होगा।",
        "Second law: Force equals mass times acceleration; more force produces more acceleration.",
      ),
      dual(
        "3rd law: Har action ke opposite direction me equal reaction hota hai.",
        "तीसरा नियम: हर क्रिया के विपरीत दिशा में बराबर प्रतिक्रिया होती है।",
        "Third law: every action has an equal and opposite reaction.",
      ),
    ],
    deepDive: [
      dual(
        "Resultant force calculate karne ke liye sab forces vector form me add karo aur uska direction bhi notice karo.",
        "परिणामी बल निकालने के लिए सभी बलों को सदिश रूप में जोड़ो और उसकी दिशा भी ध्यान में रखो।",
        "To find the resultant force, add all forces as vectors and note the resulting direction.",
      ),
      dual(
        "Acceleration ka direction hamesha net force ke direction ke along hota hai.",
        "त्वरण की दिशा हमेशा परिणामी बल की दिशा के साथ होती है।",
        "Acceleration always points along the direction of the net force.",
      ),
    ],
    motivational: dual(
      "Shabash! Newton ke laws samajhkar tum real-life physics ko asaani se crack kar sakte ho.",
      "शाबाश! न्यूटन के नियम समझकर तुम वास्तविक भौतिकी को आसानी से समझ लोगे।",
      "Great work! Understanding Newton's laws helps you decode real-life physics easily.",
    ),
    tips: [
      dual(
        "Diagram banao, forces ko arrows se show karo aur phir equations apply karo.",
        "आरेख बनाओ, बलों को तीरों से दिखाओ और फिर समीकरण लागू करो।",
        "Draw diagrams, show forces with arrows, then apply the equations.",
      ),
      dual(
        "Units consistent rakho (Newton, kilogram, meter, second).",
        "सभी मात्रक एक जैसे रखो (न्यूटन, किलोग्राम, मीटर, सेकंड)।",
        "Keep units consistent (Newton, kilogram, meter, second).",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Ek 5 kg ka box ko 20 N ka horizontal force mil raha hai. Acceleration?",
          "एक 5 किलोग्राम के डिब्बे पर 20 न्यूटन का क्षैतिज बल लग रहा है। त्वरण क्या होगा?",
          "A 5 kg box experiences a 20 N horizontal force. What is the acceleration?",
        ),
        solution: dual(
          "F = m a, to a = 20/5 = 4 m/s². Box 4 m/s² se accelerate karega.",
          "बल = द्रव्यमान × त्वरण, तो a = 20/5 = 4 मी/से²। डिब्बा 4 मी/से² से आगे बढ़ेगा।",
          "Using F = ma, a = 20/5 = 4 m/s², so the box accelerates at 4 m/s².",
        ),
      },
      {
        situation: dual(
          "Tum skating kar rahe ho aur friend ko push karte ho; tum peeche kyu slide ho jate ho?",
          "तुम स्केटिंग करते समय दोस्त को धक्का देते हो, तो तुम पीछे क्यों खिसक जाते हो?",
          "While skating you push your friend; why do you slide backward?",
        ),
        solution: dual(
          "Third law: tumne forward action diya, equal reaction opposite direction me mila.",
          "तीसरा नियम: तुमने आगे की क्रिया दी, बराबर प्रतिक्रिया पीछे की दिशा में मिली।",
          "Third law: your forward action results in an equal reaction pushing you backward.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Kaunsa statement Newton ke first law ko best describe karta hai?",
          "कौन सा कथन न्यूटन के प्रथम नियम को सबसे अच्छी तरह समझाता है?",
          "Which statement best describes Newton's first law?",
        ),
        options: [
          dual(
            "Object bina net force ke apni state maintain karega.",
            "वस्तु बिना परिणामी बल के अपनी अवस्था बनाए रखेगी।",
            "An object keeps its state if no net force acts.",
          ),
          dual(
            "Force hamesha direction change karta hai.",
            "बल हमेशा दिशा बदलता है।",
            "Force always changes direction.",
          ),
          dual(
            "Acceleration mass par depend nahi karta.",
            "त्वरण द्रव्यमान पर निर्भर नहीं करता।",
            "Acceleration does not depend on mass.",
          ),
          dual(
            "Action aur reaction same direction me hote hain.",
            "क्रिया और प्रतिक्रिया एक ही दिशा में होते हैं।",
            "Action and reaction are in the same direction.",
          ),
        ],
        answer: dual(
          "Option A correct hai.",
          "विकल्प A सही है।",
          "Option A is correct.",
        ),
      },
      {
        question: dual(
          "Net force double ho jaye aur mass same rahe to acceleration?",
          "परिणामी बल दुगुना हो जाए और द्रव्यमान वही रहे तो त्वरण?",
          "If net force doubles with same mass, what happens to acceleration?",
        ),
        options: [
          dual("Half ho jayega.", "आधा हो जाएगा।", "It halves."),
          dual(
            "Same rahega.",
            "जैसा था वैसा रहेगा।",
            "It stays the same.",
          ),
          dual(
            "Double ho jayega.",
            "दुगुना हो जाएगा।",
            "It doubles.",
          ),
          dual(
            "Zero ho jayega.",
            "शून्य हो जाएगा।",
            "It becomes zero.",
          ),
        ],
        answer: dual(
          "Option C sahi: acceleration bhi double.",
          "विकल्प C सही: त्वरण भी दुगुना।",
          "Option C is correct: acceleration doubles.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "10 kg body par net force 50 N hai. Acceleration find karo.",
          "10 किग्रा पिंड पर परिणामी बल 50 न्यूटन है। त्वरण निकालो।",
          "A 10 kg body has a net force of 50 N. Find the acceleration.",
        ),
        answer: dual(
          "a = 50/10 = 5 m/s²",
          "त्वरण 5 मी/से²",
          "Acceleration is 5 m/s².",
        ),
      },
      {
        prompt: dual(
          "Seat belt ka role Newton ke kis law se explain hota hai?",
          "सीट बेल्ट का महत्व न्यूटन के किस नियम से समझाया जाता है?",
          "Which Newton's law explains the role of seat belts?",
        ),
        answer: dual(
          "First law (inertia).",
          "पहला नियम (जड़त्व)।",
          "First law (inertia).",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Newton ka third law real life se koi example ke saath samjhao.",
          "न्यूटन का तीसरा नियम वास्तविक जीवन के उदाहरण के साथ समझाओ।",
          "Explain Newton's third law with a real-life example.",
        ),
        answer: dual(
          "Rowing boat ya rocket launch best example hai.",
          "नौका चलाना या रॉकेट प्रक्षेपण इसका सर्वोत्तम उदाहरण है।",
          "Rowing a boat or rocket launch exemplifies it.",
        ),
      },
      {
        prompt: dual(
          "20 N force se 4 kg object ko pull kiya ja raha hai. Velocity-time graph draw karo.",
          "20 न्यूटन बल से 4 किग्रा वस्तु को खींचा जा रहा है। वेग-समय आलेख बनाओ।",
          "A 4 kg object is pulled with 20 N. Draw the velocity-time graph.",
        ),
        answer: dual(
          "Constant slope line with slope 5 m/s².",
          "5 मी/से² ढलान वाली सीधी रेखा।",
          "A straight line with slope 5 m/s².",
        ),
      },
    ],
    summaryPoints: [
      dual(
        "Net force zero ⇒ motion constant.",
        "परिणामी बल शून्य ⇒ गति समान रहती है।",
        "Zero net force ⇒ constant motion.",
      ),
      dual(
        "F = m a se acceleration decide hota hai.",
        "बल = द्रव्यमान × त्वरण से त्वरण निर्धारित होता है।",
        "F = ma determines acceleration.",
      ),
      dual(
        "Action = Reaction magnitude but opposite direction.",
        "क्रिया और प्रतिक्रिया बराबर पर विपरीत दिशा में होते हैं।",
        "Action and reaction are equal but opposite.",
      ),
    ],
    mindmap: [
      dual(
        "Law 1 → Inertia → Seat belts, table cloth trick.",
        "नियम 1 → जड़त्व → सीट बेल्ट, मेज़पोश ट्रिक।",
        "Law 1 → Inertia → Seat belts, tablecloth trick.",
      ),
      dual(
        "Law 2 → F=ma → Calculations, graphs.",
        "नियम 2 → F=ma → गणनाएँ, आलेख।",
        "Law 2 → F=ma → Calculations, graphs.",
      ),
      dual(
        "Law 3 → Action-Reaction → Rockets, walking.",
        "नियम 3 → क्रिया-प्रतिक्रिया → रॉकेट, चलना।",
        "Law 3 → Action-Reaction → Rockets, walking.",
      ),
    ],
  },
  {
    id: "physics-electricity",
    subject: "physics",
    title: "Ohm ka Law aur Basic Electricity",
    gradeRange: [9, 12],
    keywords: ["ohm", "resistance", "voltage", "current", "v=ir", "electric", "circuit"],
    examImportant: true,
    baseline: dual(
      "Ohm ka law batata hai ki voltage, current aur resistance kaise relate karte hain.",
      "ओम का नियम बताता है कि वोल्टेज, धारा और रोध में आपसी संबंध क्या है।",
      "Ohm's law explains how voltage, current, and resistance relate.",
    ),
    basics: [
      dual(
        "Formula: V = I × R. Voltage matlab push, current matlab flow, R matlab opposition.",
        "सूत्र: V = I × R। वोल्टेज धक्का है, धारा प्रवाह है, रोध विरोध है।",
        "Formula: V = I × R. Voltage is push, current is flow, resistance is opposition.",
      ),
      dual(
        "Series me resistors add ho jate hain, parallel me reciprocal add hote hain.",
        "श्रृंखला संयोजन में रोध सीधे जोड़ते हैं, समानांतर में व्युत्क्रम जोड़ते हैं।",
        "Series resistors add directly, parallel resistors add via reciprocals.",
      ),
    ],
    deepDive: [
      dual(
        "Ohmic materials linear IV graph show karte hain; slope = 1/R.",
        "ओमिक पदार्थ रैखिक IV आलेख दिखाते हैं; ढलान = 1/R।",
        "Ohmic materials show linear IV graphs with slope equal to 1/R.",
      ),
      dual(
        "Power calculation ke liye P = VI ya P = I²R use karo.",
        "शक्ति निकालने के लिए P = VI या P = I²R प्रयोग करो।",
        "For power use P = VI or P = I²R.",
      ),
    ],
    motivational: dual(
      "Tum electrical numericals ko easily crack kar sakte ho, bas formulae yaad rakho!",
      "तुम विद्युत के प्रश्न आसानी से हल कर सकते हो, बस सूत्र याद रखो!",
      "You can crack electrical numericals easily—just keep the formulas handy!",
    ),
    tips: [
      dual(
        "Units volt, ampere, ohm consistent rakho.",
        "मात्रक वोल्ट, एम्पीयर, ओम सही रखो।",
        "Keep units as volt, ampere, ohm.",
      ),
      dual(
        "Circuit diagram clean banao, direction arrows lagao.",
        "परिपथ चित्र साफ बनाओ और दिशा के तीर लगाओ।",
        "Draw clean circuit diagrams with direction arrows.",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Resistor 4 Ω hai aur current 3 A flow kar raha hai. Voltage kitna?",
          "रोध 4 ओम है और धारा 3 एंपियर बह रही है। वोल्टेज कितना होगा?",
          "A 4 Ω resistor carries 3 A current. What is the voltage?",
        ),
        solution: dual(
          "V = IR = 3 × 4 = 12 V.",
          "V = IR = 3 × 4 = 12 वोल्ट।",
          "V = IR ⇒ 12 V.",
        ),
      },
      {
        situation: dual(
          "Do resistors 6 Ω aur 3 Ω series me hain. Total resistance?",
          "6 ओम और 3 ओम के दो रोध श्रृंखला में हैं। कुल रोध?",
          "Two resistors 6 Ω and 3 Ω in series. Total resistance?",
        ),
        solution: dual(
          "Series me directly add: 9 Ω.",
          "श्रृंखला में सीधे जोड़ें: 9 ओम।",
          "Series sum gives 9 Ω.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Agar voltage double ho aur R same rahe to current?",
          "अगर वोल्टेज दुगुना हो जाए और रोध वही रहे तो धारा?",
          "If voltage doubles with same resistance, what happens to current?",
        ),
        options: [
          dual("Half", "आधा", "Halves"),
          dual("Same", "समान", "Same"),
          dual("Double", "दुगुना", "Doubles"),
          dual("Zero", "शून्य", "Zero"),
        ],
        answer: dual(
          "Option C correct.",
          "विकल्प C सही।",
          "Option C is correct.",
        ),
      },
      {
        question: dual(
          "Power ko current aur resistance se kaise likhenge?",
          "शक्ति को धारा और रोध से कैसे लिखेंगे?",
          "How to express power using current and resistance?",
        ),
        options: [
          dual("P = IR", "P = IR", "P = IR"),
          dual("P = I²R", "P = I²R", "P = I²R"),
          dual("P = R/I", "P = R/I", "P = R/I"),
          dual("P = V/R", "P = V/R", "P = V/R"),
        ],
        answer: dual(
          "Option B sahi.",
          "विकल्प B सही।",
          "Option B is correct.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "Circuit me 2 Ω aur 3 Ω parallel me hain. Equivalent resistance calculate karo.",
          "परिपथ में 2 ओम और 3 ओम समानांतर हैं। तुल्य रोध निकालो।",
          "Find equivalent resistance for 2 Ω and 3 Ω in parallel.",
        ),
        answer: dual(
          "Req = 1 / (1/2 + 1/3) = 1.2 Ω",
          "Req = 1 / (1/2 + 1/3) = 1.2 ओम",
          "Req ≈ 1.2 Ω.",
        ),
      },
      {
        prompt: dual(
          "6 V battery me 2 A current flow ho raha hai. Resistance?",
          "6 वोल्ट बैटरी में 2 एंपियर धारा बह रही है। रोध?",
          "6 V battery drives 2 A current. Find resistance.",
        ),
        answer: dual(
          "R = V/I = 3 Ω",
          "R = V/I = 3 ओम",
          "R = V/I = 3 Ω.",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Ohm ka kanun kab fail ho jata hai? Example do.",
          "ओम का नियम कब असफल हो जाता है? उदाहरण दो।",
          "When does Ohm's law fail? Provide an example.",
        ),
        answer: dual(
          "Diode jaise non-ohmic devices me law valid nahi.",
          "डायोड जैसे अन-ओमिक अवयवों में नियम लागू नहीं।",
          "In non-ohmic devices like diodes, it doesn't hold.",
        ),
      },
      {
        prompt: dual(
          "IV graph ka slope kya indicate karta hai?",
          "IV आलेख का ढलान क्या बताता है?",
          "What does the slope of an IV graph denote?",
        ),
        answer: dual(
          "Slope = 1/R.",
          "ढलान = 1/R।",
          "Slope equals 1/R.",
        ),
      },
    ],
    summaryPoints: [
      dual("V = IR core relation hai.", "V = IR मुख्य संबंध है।", "V = IR is core relation."),
      dual(
        "Series me resistance badhta hai, parallel me kam hota hai.",
        "श्रृंखला में रोध बढ़ता है, समानांतर में घटता है।",
        "Resistance increases in series, decreases in parallel.",
      ),
      dual(
        "Power ko alag-alag formula se likh sakte ho.",
        "शक्ति को अलग-अलग सूत्रों से लिख सकते हो।",
        "Power can be written in multiple forms.",
      ),
    ],
    mindmap: [
      dual(
        "Voltage → Push → Battery",
        "वोल्टेज → धक्का → बैटरी",
        "Voltage → Push → Battery",
      ),
      dual(
        "Current → Flow → Electrons",
        "धारा → प्रवाह → इलेक्ट्रॉन",
        "Current → Flow → Electrons",
      ),
      dual(
        "Resistance → Opposition → Resistor",
        "रोध → विरोध → रोधक",
        "Resistance → Opposition → Resistor",
      ),
    ],
  },
  {
    id: "chemistry-chemical-reactions",
    subject: "chemistry",
    title: "Chemical Reactions aur Equations",
    gradeRange: [9, 11],
    keywords: [
      "chemical reaction",
      "equation",
      "balancing",
      "oxidation",
      "reduction",
      "combination",
    ],
    examImportant: true,
    baseline: dual(
      "Chemical reaction me reactants products me convert hote hain, equation balance karna zaroori hai.",
      "रासायनिक अभिक्रिया में अभिकारक उत्पादों में बदलते हैं और समीकरण संतुलन ज़रूरी है।",
      "In chemical reactions, reactants turn into products and balancing the equation is essential.",
    ),
    basics: [
      dual(
        "Equation balance karne ke liye atoms dono side equal hone chahiye.",
        "समीकरण संतुलित करने में दोनों तरफ परमाणु बराबर होने चाहिए।",
        "To balance, atoms on both sides must be equal.",
      ),
      dual(
        "Reaction types: combination, decomposition, displacement, redox.",
        "अभिक्रिया प्रकार: संयोजन, अपघटन, विस्थापन, रिडॉक्स।",
        "Reaction types: combination, decomposition, displacement, redox.",
      ),
    ],
    deepDive: [
      dual(
        "Redox reactions me oxidation number change ko track karo.",
        "रिडॉक्स अभिक्रियाओं में ऑक्सीकरण संख्या के परिवर्तन को देखो।",
        "In redox, track changes in oxidation numbers.",
      ),
      dual(
        "Indicators se reaction progress check hota hai, jaise phenolphthalein.",
        "सूचक से अभिक्रिया की प्रगति जांचते हैं, जैसे फिनॉल्फ्थलीन।",
        "Indicators help monitor progress, like phenolphthalein.",
      ),
    ],
    motivational: dual(
      "Great! Reactions samajhkar tum lab experiments confidently karoge.",
      "बहुत बढ़िया! अभिक्रियाएं समझकर तुम प्रयोगशाला में आत्मविश्वास से काम करोगे।",
      "Awesome! With reactions clear, you'll handle lab work confidently.",
    ),
    tips: [
      dual(
        "Pehle metals aur non-metals ko pair karo, phir coefficients adjust karo.",
        "पहले धातु और अधातु को जोड़ी बनाओ, फिर गुणांक ठीक करो।",
        "Pair metals/non-metals first, then adjust coefficients.",
      ),
      dual(
        "Physical state symbols likhna mat bhoolo (s, l, g, aq).",
        "भौतिक अवस्था के प्रतीक (s, l, g, aq) लिखना मत भूलो।",
        "Don't forget state symbols (s, l, g, aq).",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Magnesium burning equation balance karo.",
          "मैग्नीशियम के जलने का समीकरण संतुलित करो।",
          "Balance the equation for burning magnesium.",
        ),
        solution: dual(
          "2Mg + O₂ → 2MgO.",
          "2Mg + O₂ → 2MgO।",
          "2Mg + O₂ → 2MgO.",
        ),
      },
      {
        situation: dual(
          "Zn + HCl reaction type identify karo.",
          "Zn + HCl अभिक्रिया का प्रकार बताओ।",
          "Identify reaction type for Zn + HCl.",
        ),
        solution: dual(
          "Ye displacement reaction hai: Zn + 2HCl → ZnCl₂ + H₂.",
          "यह विस्थापन अभिक्रिया है: Zn + 2HCl → ZnCl₂ + H₂।",
          "It's a displacement reaction: Zn + 2HCl → ZnCl₂ + H₂.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Kaunsa example decomposition reaction ka hai?",
          "कौन सा उदाहरण अपघटन अभिक्रिया का है?",
          "Which example represents a decomposition reaction?",
        ),
        options: [
          dual("2H₂ + O₂ → 2H₂O", "2H₂ + O₂ → 2H₂O", "2H₂ + O₂ → 2H₂O"),
          dual("CaCO₃ → CaO + CO₂", "CaCO₃ → CaO + CO₂", "CaCO₃ → CaO + CO₂"),
          dual("Zn + CuSO₄ → ZnSO₄ + Cu", "Zn + CuSO₄ → ZnSO₄ + Cu", "Zn + CuSO₄ → ZnSO₄ + Cu"),
          dual("Fe + S → FeS", "Fe + S → FeS", "Fe + S → FeS"),
        ],
        answer: dual(
          "Option B sahi hai.",
          "विकल्प B सही है।",
          "Option B is correct.",
        ),
      },
      {
        question: dual(
          "Balanced equation me coefficients kya represent karte hain?",
          "संतुलित समीकरण में गुणांक क्या दर्शाते हैं?",
          "What do coefficients represent in a balanced equation?",
        ),
        options: [
          dual("Mass ratio", "द्रव्यमान अनुपात", "Mass ratio"),
          dual("Number of atoms multipliers", "परमाणुओं की संख्या के गुणक", "Multipliers for number of particles"),
          dual("Temperature", "तापमान", "Temperature"),
          dual("Pressure", "दाब", "Pressure"),
        ],
        answer: dual(
          "Option B correct.",
          "विकल्प B सही।",
          "Option B is correct.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "Fe + O₂ → Fe₂O₃ ko balance karo.",
          "Fe + O₂ → Fe₂O₃ को संतुलित करो।",
          "Balance Fe + O₂ → Fe₂O₃.",
        ),
        answer: dual(
          "4Fe + 3O₂ → 2Fe₂O₃.",
          "4Fe + 3O₂ → 2Fe₂O₃।",
          "4Fe + 3O₂ → 2Fe₂O₃.",
        ),
      },
      {
        prompt: dual(
          "Oxidation aur reduction me difference likho.",
          "ऑक्सीकरण और अपचयन में अंतर लिखो।",
          "Write the difference between oxidation and reduction.",
        ),
        answer: dual(
          "Oxidation: e⁻ loss, Reduction: e⁻ gain.",
          "ऑक्सीकरण: इलेक्ट्रॉन का खोना, अपचयन: इलेक्ट्रॉन का पाना।",
          "Oxidation: loss of electrons, reduction: gain of electrons.",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Redox reaction ka real-life use explain karo.",
          "रिडॉक्स अभिक्रिया का एक वास्तविक उपयोग समझाओ।",
          "Explain a real-life use of redox reactions.",
        ),
        answer: dual(
          "Rusting ya electroplating common example hai.",
          "जंग लगना या विद्युतलेपन सामान्य उदाहरण हैं।",
          "Rusting or electroplating is a common example.",
        ),
      },
      {
        prompt: dual(
          "Law of conservation of mass ko kisi experiment se justify karo.",
          "द्रव्यमान संरक्षण के नियम को किसी प्रयोग से सिद्ध करो।",
          "Justify law of conservation of mass with an experiment.",
        ),
        answer: dual(
          "Closed flask reaction me initial aur final mass same rehta hai.",
          "बंद पात्र प्रयोग में आरंभिक और अंतिम द्रव्यमान समान रहता है।",
          "In a closed flask reaction, initial and final masses remain same.",
        ),
      },
    ],
    summaryPoints: [
      dual(
        "Atoms conserve hote hain; coefficients se balance karo.",
        "परमाणु संरक्षित रहते हैं; गुणांकों से संतुलन करो।",
        "Atoms are conserved; balance via coefficients.",
      ),
      dual(
        "Reaction types ko identify karo to equations easy ho jate hain.",
        "अभिक्रिया प्रकार पहचानने से समीकरण आसान हो जाते हैं।",
        "Identifying reaction type simplifies equations.",
      ),
      dual(
        "Lab safety follow karo jab bhi reactions perform karo.",
        "अभिक्रिया करते समय लैब सुरक्षा का पालन करो।",
        "Follow lab safety during reactions.",
      ),
    ],
    mindmap: [
      dual(
        "Reactants → Equation → Balance",
        "अभिकारक → समीकरण → संतुलन",
        "Reactants → Equation → Balance",
      ),
      dual(
        "Types → Combination/Decomposition/Displacement",
        "प्रकार → संयोजन/अपघटन/विस्थापन",
        "Types → Combination/Decomposition/Displacement",
      ),
      dual(
        "Redox → Oxidation ↔ Reduction",
        "रिडॉक्स → ऑक्सीकरण ↔ अपचयन",
        "Redox → Oxidation ↔ Reduction",
      ),
    ],
  },
  {
    id: "math-quadratic",
    subject: "math",
    title: "Quadratic Equations ke Concepts",
    gradeRange: [9, 12],
    keywords: [
      "quadratic",
      "roots",
      "factorisation",
      "discriminant",
      "ax^2",
      "solution",
    ],
    examImportant: true,
    baseline: dual(
      "Quadratic equation form ax² + bx + c = 0 hoti hai aur iska solution roots ke form me milta hai.",
      "द्विघात समीकरण का रूप ax² + bx + c = 0 होता है और इसका हल मूलों के रूप में मिलता है।",
      "A quadratic equation has the form ax² + bx + c = 0 and its solutions are its roots.",
    ),
    basics: [
      dual(
        "Discriminant D = b² - 4ac decide karta hai roots real ya imaginary.",
        "अवकलन D = b² - 4ac तय करता है कि मूल वास्तविक हैं या कल्पित।",
        "The discriminant D = b² - 4ac decides whether the roots are real or imaginary.",
      ),
      dual(
        "Sum of roots = -b/a, product = c/a.",
        "मूलों का योग = -b/a, गुणनफल = c/a.",
        "Sum of roots equals -b/a, product equals c/a.",
      ),
    ],
    deepDive: [
      dual(
        "Quadratic formula: x = [-b ± √(b² - 4ac)] / (2a).",
        "द्विघात सूत्र: x = [-b ± √(b² - 4ac)] / (2a).",
        "Quadratic formula: x = [-b ± √(b² - 4ac)] / (2a).",
      ),
      dual(
        "Graph parabola hota hai; vertex = (-b/2a, -D/4a).",
        "ग्राफ परबोला होता है; शीर्ष = (-b/2a, -D/4a).",
        "Graph is a parabola; vertex at (-b/2a, -D/4a).",
      ),
    ],
    motivational: dual(
      "Math magician banne ke liye step-by-step practice karo, tum zaroor succeed karoge!",
      "गणित के जादूगर बनने के लिए चरण-दर-चरण अभ्यास करो, तुम ज़रूर सफल होगे!",
      "Practice step by step and you'll surely succeed in math!",
    ),
    tips: [
      dual(
        "Sabse pehle D calculate karo; usse hi approach decide hogi.",
        "सबसे पहले D निकालो; उसी से तरीका तय होगा।",
        "Always compute D first to decide the approach.",
      ),
      dual(
        "Factorisation sirf tab try karo jab integer factors mil rahe ho.",
        "गुणनखंडन तभी आज़माओ जब पूर्णांक गुणनखंड मिलें।",
        "Use factorisation only when integer factors appear.",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Equation x² - 5x + 6 = 0 solve karo.",
          "समीकरण x² - 5x + 6 = 0 हल करो।",
          "Solve x² - 5x + 6 = 0.",
        ),
        solution: dual(
          "Factors (x-2)(x-3)=0, to roots 2 aur 3.",
          "गुणनखंड (x-2)(x-3)=0, तो मूल 2 और 3।",
          "Factors (x-2)(x-3)=0 ⇒ roots 2 and 3.",
        ),
      },
      {
        situation: dual(
          "x² + 4x + 8 = 0 ke roots nature batao.",
          "x² + 4x + 8 = 0 के मूलों का प्रकार बताओ।",
          "Describe the nature of roots of x² + 4x + 8 = 0.",
        ),
        solution: dual(
          "D = 16 - 32 = -16 < 0, to roots imaginary (complex).",
          "D = 16 - 32 = -16, इसलिए मूल कल्पित हैं।",
          "D = -16 < 0, so roots are complex.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Sum of roots kitna hota hai equation 2x² - 3x + 7 = 0 ka?",
          "समीकरण 2x² - 3x + 7 = 0 के मूलों का योग कितना है?",
          "What is sum of roots for 2x² - 3x + 7 = 0?",
        ),
        options: [
          dual("-7/2", "-7/2", "-7/2"),
          dual("3/2", "3/2", "3/2"),
          dual(
            "7/3",
            "7/3",
            "7/3",
          ),
          dual("2/7", "2/7", "2/7"),
        ],
        answer: dual("Option B sahi.", "विकल्प B सही।", "Option B is correct."),
      },
      {
        question: dual(
          "Agar D = 0 ho to roots kaise honge?",
          "अगर D = 0 हो तो मूल कैसे होंगे?",
          "If D = 0, what is the nature of roots?",
        ),
        options: [
          dual("Distinct real", "अलग-अलग वास्तविक", "Distinct real"),
          dual("Equal real", "समान वास्तविक", "Equal real"),
          dual("Complex pair", "कल्पित युग्म", "Complex pair"),
          dual("No roots", "कोई मूल नहीं", "No roots"),
        ],
        answer: dual(
          "Option B correct: equal real roots.",
          "विकल्प B सही: समान वास्तविक मूल।",
          "Option B correct: equal real roots.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "3x² + 7x - 6 = 0 ke roots quadratic formula se find karo.",
          "3x² + 7x - 6 = 0 के मूल द्विघात सूत्र से निकालो।",
          "Find roots of 3x² + 7x - 6 = 0 using quadratic formula.",
        ),
        answer: dual(
          "x = [ -7 ± √(49 + 72) ] / 6 = ( -7 ± √121 ) / 6 ⇒ x = 2/3 ya -3.",
          "x = [ -7 ± √(49 + 72) ] / 6 = ( -7 ± √121 ) / 6 ⇒ x = 2/3 या -3।",
          "x = (-7 ± √121)/6 ⇒ x = 2/3 or -3.",
        ),
      },
      {
        prompt: dual(
          "Equation ke roots real hon is condition me discriminant ≥ 0 hona chahiye. x² - 4x + k = 0 ke liye k ka range?",
          "मूल वास्तविक होने के लिए D ≥ 0 होना चाहिए। x² - 4x + k = 0 के लिए k की सीमा?",
          "For x² - 4x + k = 0 to have real roots, find range of k.",
        ),
        answer: dual(
          "D = 16 - 4k ≥ 0 ⇒ k ≤ 4.",
          "D = 16 - 4k ≥ 0 ⇒ k ≤ 4.",
          "Since D≥0 ⇒ 16 - 4k ≥0 ⇒ k ≤4.",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Quadratic graph ka vertex form derive karo.",
          "द्विघात ग्राफ का शीर्ष रूप सिद्ध करो।",
          "Derive the vertex form of a quadratic graph.",
        ),
        answer: dual(
          "Complete the square to get a(x-h)² + k form.",
          "वर्ग पूर्ण करके a(x-h)² + k रूप प्राप्त होता है।",
          "Complete the square to obtain a(x-h)² + k.",
        ),
      },
      {
        prompt: dual(
          "Ek practical situation batayo jaha quadratic equation use hoti hai.",
          "एक व्यावहारिक स्थिति बताओ जहां द्विघात समीकरण का उपयोग होता है।",
          "Give a practical use case of quadratic equations.",
        ),
        answer: dual(
          "Projectile motion ya area optimization.",
          "प्रक्षेप्य गति या क्षेत्रफल अनुकूलन।",
          "Projectile motion or area optimisation.",
        ),
      },
    ],
    summaryPoints: [
      dual(
        "D > 0 ⇒ real distinct, D = 0 ⇒ equal, D < 0 ⇒ complex.",
        "D > 0 ⇒ अलग वास्तविक, D = 0 ⇒ समान, D < 0 ⇒ कल्पित।",
        "D > 0 ⇒ real distinct, D = 0 ⇒ equal, D < 0 ⇒ complex.",
      ),
      dual(
        "Roots ka sum/product formulas se jaldi verify karo.",
        "मूलों का योग/गुणनफल सूत्रों से जल्दी जांचो।",
        "Use sum/product formulas to verify roots quickly.",
      ),
      dual(
        "Graph ek parabola hota hai jiska vertex important hai.",
        "ग्राफ परबोला होता है जिसका शीर्ष महत्वपूर्ण है।",
        "Graph is a parabola with key vertex.",
      ),
    ],
    mindmap: [
      dual(
        "General form → ax² + bx + c",
        "सामान्य रूप → ax² + bx + c",
        "General form → ax² + bx + c",
      ),
      dual(
        "Methods → Factorise / Formula / Completing square",
        "तरीके → गुणनखंड / सूत्र / वर्ग पूर्ण करना",
        "Methods → Factorise / Formula / Complete square",
      ),
      dual(
        "Graph → Parabola → Vertex, Axis of symmetry",
        "ग्राफ → परबोला → शीर्ष, सममिति अक्ष",
        "Graph → Parabola → Vertex, axis",
      ),
    ],
  },
  {
    id: "biology-photosynthesis",
    subject: "biology",
    title: "Photosynthesis ka Process",
    gradeRange: [6, 10],
    keywords: [
      "photosynthesis",
      "chlorophyll",
      "sunlight",
      "glucose",
      "stomata",
      "oxygen",
    ],
    examImportant: true,
    baseline: dual(
      "Photosynthesis me plants sunlight se food banate hain aur oxygen release hoti hai.",
      "प्रकाश संश्लेषण में पौधे सूर्य प्रकाश से भोजन बनाते हैं और ऑक्सीजन निकलती है।",
      "In photosynthesis plants use sunlight to make food and release oxygen.",
    ),
    basics: [
      dual(
        "Leaf ke chlorophyll pigment light absorb karta hai.",
        "पत्तियों का क्लोरोफिल वर्णक प्रकाश को अवशोषित करता है।",
        "Chlorophyll in leaves absorbs light.",
      ),
      dual(
        "CO₂ stomata se enter karta hai aur roots se paani aata hai.",
        "CO₂ स्टोमाटा से प्रवेश करता है और पानी जड़ों से आता है।",
        "CO₂ enters via stomata and water comes from roots.",
      ),
    ],
    deepDive: [
      dual(
        "Light reaction me ATP aur NADPH bante hain, dark reaction me glucose synthesize hota hai.",
        "प्रकाश अभिक्रिया में ATP और NADPH बनते हैं, अंधकार अभिक्रिया में ग्लूकोज बनता है।",
        "Light reactions produce ATP & NADPH; dark reactions form glucose.",
      ),
      dual(
        "Overall equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
        "समग्र समीकरण: 6CO₂ + 6H₂O + प्रकाश → C₆H₁₂O₆ + 6O₂.",
        "Overall equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
      ),
    ],
    motivational: dual(
      "Nature ke is magic ko samajhkar tum biology champion ban sakte ho!",
      "प्रकृति के इस जादू को समझकर तुम जीवविज्ञान के चैंपियन बन सकते हो!",
      "Understand this natural magic and become a biology champion!",
    ),
    tips: [
      dual(
        "Diagram practice karo: leaf cross-section, chloroplast structure.",
        "आरेख अभ्यास करो: पत्ती क्रॉस-सेक्शन, क्लोरोप्लास्ट संरचना।",
        "Practice diagrams like leaf cross-section and chloroplast.",
      ),
      dual(
        "Equation yaad rakhne ke liye 6-6 rule follow karo.",
        "समीकरण याद रखने के लिए 6-6 नियम अपनाओ।",
        "Remember the equation using the 6-6 trick.",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Din me plant ko cover karne par kya hota hai?",
          "दिन में पौधे को ढक देने पर क्या होता है?",
          "What happens if a plant is covered during daytime?",
        ),
        solution: dual(
          "Light nahi milegi to photosynthesis slow ya stop ho jayega.",
          "प्रकाश नहीं मिलने पर प्रकाश संश्लेषण धीमा या बंद हो जाएगा।",
          "Without light, photosynthesis slows or stops.",
        ),
      },
      {
        situation: dual(
          "Iodine test se starch detect karke photosynthesis kaise prove karte hain?",
          "आयोडीन परीक्षण से स्टार्च पहचान कर प्रकाश संश्लेषण कैसे सिद्ध करते हैं?",
          "How does iodine test for starch prove photosynthesis?",
        ),
        solution: dual(
          "Starch blue-black ho jata hai → plant ne food banaya.",
          "स्टार्च नीला-काला हो जाता है → पौधे ने भोजन बनाया।",
          "Starch turns blue-black indicating food production.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Photosynthesis me oxygen kis step me banti hai?",
          "प्रकाश संश्लेषण में ऑक्सीजन किस चरण में बनती है?",
          "During which step of photosynthesis is oxygen released?",
        ),
        options: [
          dual("Light reaction", "प्रकाश अभिक्रिया", "Light reaction"),
          dual("Dark reaction", "अंधकार अभिक्रिया", "Dark reaction"),
          dual("Glycolysis", "ग्लाइकोलिसिस", "Glycolysis"),
          dual("Calvin cycle end", "कैल्विन चक्र अंत", "End of Calvin cycle"),
        ],
        answer: dual(
          "Option A sahi.",
          "विकल्प A सही।",
          "Option A is correct.",
        ),
      },
      {
        question: dual(
          "Stomata ka main function kya hai?",
          "स्टोमाटा का मुख्य कार्य क्या है?",
          "What is the main function of stomata?",
        ),
        options: [
          dual("Light absorb karna", "प्रकाश अवशोषित करना", "Absorb light"),
          dual("Water store karna", "पानी संग्रह करना", "Store water"),
          dual(
            "Gas exchange control karna",
            "गैसों का आदान-प्रदान नियंत्रित करना",
            "Control gas exchange",
          ),
          dual(
            "Chlorophyll banana",
            "क्लोरोफिल बनाना",
            "Make chlorophyll",
          ),
        ],
        answer: dual(
          "Option C correct.",
          "विकल्प C सही।",
          "Option C is correct.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "Photosynthesis equation likho.",
          "प्रकाश संश्लेषण का समीकरण लिखो।",
          "Write the photosynthesis equation.",
        ),
        answer: dual(
          "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
          "6CO₂ + 6H₂O + प्रकाश → C₆H₁₂O₆ + 6O₂",
          "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
        ),
      },
      {
        prompt: dual(
          "Chloroplast ke do main parts ka naam likho.",
          "क्लोरोप्लास्ट के दो मुख्य भाग लिखो।",
          "Name two main parts of chloroplast.",
        ),
        answer: dual(
          "Grana aur stroma.",
          "ग्राना और स्ट्रोमा।",
          "Grana and stroma.",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Light aur dark reactions ke difference explain karo.",
          "प्रकाश और अंधकार अभिक्रियाओं का अंतर समझाओ।",
          "Explain differences between light and dark reactions.",
        ),
        answer: dual(
          "Light reaction sunlight dependent, dark reaction enzyme driven.",
          "प्रकाश अभिक्रिया सूर्य प्रकाश पर निर्भर, अंधकार अभिक्रिया एंजाइम आधारित।",
          "Light reactions need sunlight; dark reactions are enzyme driven.",
        ),
      },
      {
        prompt: dual(
          "Leaf adaptations list karo jo photosynthesis enhance karte hain.",
          "पत्तियों में वे अनुकूलन लिखो जो प्रकाश संश्लेषण बढ़ाते हैं।",
          "List leaf adaptations that enhance photosynthesis.",
        ),
        answer: dual(
          "Broad surface, thin structure, stomata presence.",
          "चौड़ी सतह, पतली संरचना, स्टोमाटा की उपस्थिति।",
          "Broad surface, thin structure, presence of stomata.",
        ),
      },
    ],
    summaryPoints: [
      dual(
        "Sunlight + Chlorophyll + CO₂ + Water = Glucose + Oxygen.",
        "सूर्य प्रकाश + क्लोरोफिल + CO₂ + पानी = ग्लूकोज + ऑक्सीजन।",
        "Sunlight + chlorophyll + CO₂ + water = glucose + oxygen.",
      ),
      dual(
        "Light reactions energy banate hain, dark reactions food.",
        "प्रकाश अभिक्रिया ऊर्जा बनाती है, अंधकार अभिक्रिया भोजन।",
        "Light reactions make energy carriers; dark reactions make food.",
      ),
      dual(
        "Stomata gas exchange ke liye essential hain.",
        "स्टोमाटा गैस विनिमय के लिए आवश्यक हैं।",
        "Stomata are essential for gas exchange.",
      ),
    ],
    mindmap: [
      dual("Sunlight → Chlorophyll", "सूर्य प्रकाश → क्लोरोफिल", "Sunlight → Chlorophyll"),
      dual("Light Reaction → ATP/NADPH", "प्रकाश अभिक्रिया → ATP/NADPH", "Light reaction → ATP/NADPH"),
      dual("Dark Reaction → Glucose", "अंधकार अभिक्रिया → ग्लूकोज", "Dark reaction → Glucose"),
    ],
  },
  {
    id: "english-tenses",
    subject: "english",
    title: "Tenses ka Easy Framework",
    gradeRange: [6, 12],
    keywords: ["tense", "present", "past", "future", "grammar", "continuous", "perfect"],
    examImportant: true,
    baseline: dual(
      "Tenses bataate hain ki action kab hua: past, present ya future.",
      "काल बताता है कि क्रिया कब हुई: भूत, वर्तमान या भविष्य।",
      "Tenses tell us when an action happens: past, present, or future.",
    ),
    basics: [
      dual(
        "Har tense ke four forms hote hain: simple, continuous, perfect, perfect continuous.",
        "हर काल के चार रूप होते हैं: साधारण, अपूर्ण, पूर्ण, पूर्ण अपूर्ण।",
        "Each tense has four forms: simple, continuous, perfect, perfect continuous.",
      ),
      dual(
        "Sentence structure samjho: subject + verb form + object.",
        "वाक्य संरचना समझो: कर्ता + क्रिया रूप + कर्म।",
        "Understand sentence structure: subject + verb form + object.",
      ),
    ],
    deepDive: [
      dual(
        "Present perfect me 'has/have + V3', past continuous me 'was/were + V-ing'.",
        "वर्तमान पूर्ण में 'has/have + V3', भूत अपूर्ण में 'was/were + V-ing'.",
        "Present perfect uses 'has/have + V3'; past continuous uses 'was/were + V-ing'.",
      ),
      dual(
        "Signal words jaise just, already, yesterday se tense guess kar sakte ho.",
        "just, already, yesterday जैसे संकेत शब्दों से काल पहचान सकते हो।",
        "Signal words like just, already, yesterday hint the tense.",
      ),
    ],
    motivational: dual(
      "Grammar strong hoga to writing aur speaking dono shine karega!",
      "व्याकरण मजबूत होगा तो लेखन और बोलना दोनों चमकेंगे!",
      "Strong grammar makes both writing and speaking shine!",
    ),
    tips: [
      dual(
        "Verb forms ki table banakar daily revise karo.",
        "क्रिया रूपों की तालिका बनाकर रोज अभ्यास करो।",
        "Make a verb table and revise daily.",
      ),
      dual(
        "Examples ko khud loudly bolkar practice karo.",
        "उदाहरणों को खुद ज़ोर से बोलकर अभ्यास करो।",
        "Practice by reading examples aloud.",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Present perfect sentence banayo 'finish homework'.",
          "वर्तमान पूर्ण वाक्य बनाओ 'finish homework'.",
          "Make a present perfect sentence with 'finish homework'.",
        ),
        solution: dual(
          "I have finished my homework.",
          "I have finished my homework. (मैंने अपना गृहकार्य पूरा कर लिया है।)",
          "I have finished my homework.",
        ),
      },
      {
        situation: dual(
          "Past continuous ka sentence banayo 'play football'.",
          "भूत अपूर्ण वाक्य बनाओ 'play football'.",
          "Create a past continuous sentence with 'play football'.",
        ),
        solution: dual(
          "We were playing football yesterday evening.",
          "We were playing football yesterday evening. (हम कल शाम फुटबॉल खेल रहे थे।)",
          "We were playing football yesterday evening.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "'She ____ (go) to school every day.' Me kaunsa form use hoga?",
          "'She ____ (go) to school every day.' में कौन सा रूप आएगा?",
          "Which form fits 'She ____ (go) to school every day.'?",
        ),
        options: [
          dual("go", "go", "go"),
          dual("goes", "goes", "goes"),
          dual("is going", "is going", "is going"),
          dual("gone", "gone", "gone"),
        ],
        answer: dual(
          "Option B correct: goes.",
          "विकल्प B सही: goes.",
          "Option B correct: goes.",
        ),
      },
      {
        question: dual(
          "'They have been sleeping for two hours' ka tense kaunsa?",
          "'They have been sleeping for two hours' का काल कौन सा है?",
          "What is the tense of 'They have been sleeping for two hours'?",
        ),
        options: [
          dual("Present perfect", "वर्तमान पूर्ण", "Present perfect"),
          dual("Present continuous", "वर्तमान अपूर्ण", "Present continuous"),
          dual(
            "Present perfect continuous",
            "वर्तमान पूर्ण अपूर्ण",
            "Present perfect continuous",
          ),
          dual(
            "Past perfect",
            "भूत पूर्ण",
            "Past perfect",
          ),
        ],
        answer: dual(
          "Option C bilkul sahi.",
          "विकल्प C बिल्कुल सही।",
          "Option C is correct.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "Sentence ko future continuous me change karo: 'I paint the wall'.",
          "वाक्य को भविष्य अपूर्ण में बदलो: 'I paint the wall'.",
          "Change 'I paint the wall' into future continuous.",
        ),
        answer: dual(
          "I will be painting the wall.",
          "I will be painting the wall. (मैं दीवार रंग रहा होऊँगा।)",
          "I will be painting the wall.",
        ),
      },
      {
        prompt: dual(
          "Correct tense choose karo: 'He ____ (finish) the work before you arrived.'",
          "सही काल चुनो: 'He ____ (finish) the work before you arrived.'",
          "Choose the correct form for 'He ____ (finish) the work before you arrived.'",
        ),
        answer: dual(
          "had finished",
          "had finished (उसने तुम्हारे आने से पहले काम पूरा कर लिया था)",
          "had finished",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Past perfect aur past perfect continuous ka difference likho.",
          "भूत पूर्ण और भूत पूर्ण अपूर्ण का अंतर लिखो।",
          "Write the difference between past perfect and past perfect continuous.",
        ),
        answer: dual(
          "Past perfect: action complete; past perfect continuous: action ongoing until another action.",
          "भूत पूर्ण: क्रिया पूरी हो चुकी; भूत पूर्ण अपूर्ण: क्रिया चल रही थी जब दूसरी क्रिया हुई।",
          "Past perfect means completed; past perfect continuous means ongoing up to another event.",
        ),
      },
      {
        prompt: dual(
          "Narrative writing me tense consistency kyun zaroori hai?",
          "कथा लेखन में काल का सामंजस्य क्यों ज़रूरी है?",
          "Why is tense consistency important in narrative writing?",
        ),
        answer: dual(
          "Reader ko timeline samajh me aata hai aur clarity rehti hai.",
          "पाठक को समयरेखा समझ में आती है और स्पष्टता बनी रहती है।",
          "It keeps the timeline clear for the reader.",
        ),
      },
    ],
    summaryPoints: [
      dual("Tense = Time + Verb form.", "काल = समय + क्रिया रूप।", "Tense = Time + verb form."),
      dual(
        "Signal words pe focus karo for quick detection.",
        "त्वरित पहचान के लिए संकेत शब्दों पर ध्यान दो।",
        "Focus on signal words for quick detection.",
      ),
      dual(
        "Practice se fluency aati hai.",
        "अभ्यास से प्रवाह आता है।",
        "Fluency comes with practice.",
      ),
    ],
    mindmap: [
      dual("Tenses → Past/Present/Future", "काल → भूत/वर्तमान/भविष्य", "Tenses → Past/Present/Future"),
      dual(
        "Forms → Simple/Continuous/Perfect",
        "रूप → साधारण/अपूर्ण/पूर्ण",
        "Forms → Simple/Continuous/Perfect",
      ),
      dual(
        "Clues → Signal words",
        "संकेत → संकेत शब्द",
        "Clues → Signal words",
      ),
    ],
  },
  {
    id: "computer-algorithms",
    subject: "computer",
    title: "Algorithm Thinking aur Flowcharts",
    gradeRange: [8, 12],
    keywords: ["algorithm", "flowchart", "pseudocode", "steps", "problem solving"],
    examImportant: false,
    baseline: dual(
      "Algorithm ek step-by-step plan hota hai problem solve karne ka.",
      "एल्गोरिथ्म समस्या हल करने का चरणबद्ध योजना है।",
      "An algorithm is a step-by-step plan to solve a problem.",
    ),
    basics: [
      dual(
        "Har step clear aur finite hona chahiye.",
        "हर चरण स्पष्ट और सीमित होना चाहिए।",
        "Each step must be clear and finite.",
      ),
      dual(
        "Flowchart symbols standard shapes follow karte hain: oval start/stop, parallelogram input/output.",
        "फ़्लोचार्ट चिन्ह मानक आकृतियाँ होते हैं: अंडाकार आरंभ/समाप्ति, समांतर चतुर्भुज इनपुट/आउटपुट।",
        "Flowcharts use standard symbols: oval for start/end, parallelogram for I/O.",
      ),
    ],
    deepDive: [
      dual(
        "Algorithm likhte waqt loops aur conditions ko clearly mention karo.",
        "एल्गोरिथ्म में लूप और शर्तों को स्पष्ट लिखो।",
        "Mention loops and conditions clearly when writing algorithms.",
      ),
      dual(
        "Dry run se algorithm ke errors pakad sakte ho.",
        "ड्राई रन से एल्गोरिथ्म की गलतियाँ पकड़ सकते हो।",
        "Dry runs help catch algorithm errors.",
      ),
    ],
    motivational: dual(
      "Problem solving ko game ke jaise lo, tumhari logic power roz improve hogi!",
      "समस्या हल करना खेल की तरह लो, तुम्हारी तर्कशक्ति रोज़ बेहतर होगी!",
      "Treat problem solving like a game—your logic power will grow daily!",
    ),
    tips: [
      dual(
        "Pseudo-code simple English me likho taaki koi bhi samajh sake.",
        "छद्म-कोड सरल अंग्रेज़ी में लिखो ताकि हर कोई समझे।",
        "Write pseudocode in simple English for clarity.",
      ),
      dual(
        "Symbols ka legend top me mention karo jab worksheet banao.",
        "वर्कशीट बनाते समय प्रतीकों का विवरण ऊपर लिखो।",
        "Mention symbol legend at the top of worksheets.",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Number ka factorial find karne ka algorithm steps batao.",
          "संख्या का फैक्टरियल निकालने के एल्गोरिथ्म के चरण बताओ।",
          "List steps of an algorithm to find factorial.",
        ),
        solution: dual(
          "Step 1: result = 1 set karo; Step 2: 1 se n tak multiply karo; Step 3: result output.",
          "चरण 1: result = 1 लो; चरण 2: 1 से n तक गुणा करो; चरण 3: result दिखाओ।",
          "Step 1: set result=1; Step 2: multiply from 1 to n; Step 3: output result.",
        ),
      },
      {
        situation: dual(
          "Flowchart me decision symbol ka example do.",
          "फ़्लोचार्ट में निर्णय चिन्ह का उदाहरण दो।",
          "Give an example of a decision symbol in a flowchart.",
        ),
        solution: dual(
          "Triangle-like diamond wale box me 'Is number even?' likho, yes/no branch banao.",
          "हीरे के आकार में 'क्या संख्या सम है?' लिखो और हाँ/नहीं शाखाएँ बनाओ।",
          "Use a diamond box with 'Is number even?' and branch yes/no.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Flowchart start/end ke liye kaunsa symbol use hota hai?",
          "फ़्लोचार्ट आरंभ/समाप्ति के लिए कौन सा चिन्ह होता है?",
          "Which symbol indicates start/stop in a flowchart?",
        ),
        options: [
          dual("Rectangle", "आयत", "Rectangle"),
          dual("Oval", "अंडाकार", "Oval"),
          dual("Diamond", "हीरा", "Diamond"),
          dual("Parallelogram", "समांतर चतुर्भुज", "Parallelogram"),
        ],
        answer: dual(
          "Option B sahi.",
          "विकल्प B सही।",
          "Option B is correct.",
        ),
      },
      {
        question: dual(
          "Algorithm kaunsa hona chahiye?",
          "एल्गोरिथ्म कैसा होना चाहिए?",
          "Which property must an algorithm have?",
        ),
        options: [
          dual("Infinite steps", "अनंत चरण", "Infinite steps"),
          dual("Ambiguous steps", "अस्पष्ट चरण", "Ambiguous steps"),
          dual(
            "Well-defined aur finite steps",
            "सुस्पष्ट और सीमित चरण",
            "Well-defined and finite steps",
          ),
          dual("Random order", "बिना क्रम", "Random order"),
        ],
        answer: dual(
          "Option C correct.",
          "विकल्प C सही।",
          "Option C is correct.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "Pseudo-code likho number even ya odd check karne ke liye.",
          "संख्या सम या विषम जांचने का छद्म-कोड लिखो।",
          "Write pseudocode to check whether a number is even or odd.",
        ),
        answer: dual(
          "Input n; if n % 2 == 0 then print Even else print Odd.",
          "इनपुट n; यदि n % 2 == 0 तो 'Even' अन्यथा 'Odd' दिखाओ।",
          "Input n; if n % 2 == 0 print Even else print Odd.",
        ),
      },
      {
        prompt: dual(
          "Flowchart symbols ka legend banao start, input, process, decision ke liye.",
          "स्टार्ट, इनपुट, प्रोसेस, निर्णय के लिए फ़्लोचार्ट प्रतीकों की सूची बनाओ।",
          "Create a legend of flowchart symbols for start, input, process, decision.",
        ),
        answer: dual(
          "Start/End: Oval, Input/Output: Parallelogram, Process: Rectangle, Decision: Diamond.",
          "आरंभ/समाप्ति: अंडाकार, इनपुट/आउटपुट: समांतर चतुर्भुज, प्रक्रिया: आयत, निर्णय: हीरा।",
          "Start/End: Oval, Input/Output: Parallelogram, Process: Rectangle, Decision: Diamond.",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Dry run ka matlab explain karo ek example ke saath.",
          "ड्राई रन का मतलब उदाहरण सहित समझाओ।",
          "Explain dry run with an example.",
        ),
        answer: dual(
          "Paper par algorithm ke steps execute karke outputs note karna.",
          "कागज़ पर एल्गोरिथ्म के चरण चलाकर आउटपुट नोट करना।",
          "Executing steps on paper and noting outputs.",
        ),
      },
      {
        prompt: dual(
          "Flowchart ka ek advantage aur ek limitation likho.",
          "फ़्लोचार्ट का एक लाभ और एक सीमा लिखो।",
          "Write one advantage and one limitation of flowcharts.",
        ),
        answer: dual(
          "Advantage: visual clarity; Limitation: complex diagrams time-consuming.",
          "लाभ: दृश्य स्पष्टता; सीमा: जटिल चार्ट समय लेते हैं।",
          "Advantage: visual clarity; limitation: complex charts take time.",
        ),
      },
    ],
    summaryPoints: [
      dual(
        "Algorithm = clear steps, Flowchart = visual map.",
        "एल्गोरिथ्म = स्पष्ट चरण, फ़्लोचार्ट = दृश्य मानचित्र।",
        "Algorithm = clear steps, Flowchart = visual map.",
      ),
      dual(
        "Dry run karke bugs jaldi milte hain.",
        "ड्राई रन से गलतियाँ जल्दी मिलती हैं।",
        "Dry runs catch bugs early.",
      ),
      dual(
        "Standard symbols se communication easy hoti hai.",
        "मानक प्रतीकों से संचार आसान होता है।",
        "Standard symbols make communication easy.",
      ),
    ],
    mindmap: [
      dual("Problem → Steps", "समस्या → चरण", "Problem → Steps"),
      dual("Flowchart → Symbols", "फ़्लोचार्ट → प्रतीक", "Flowchart → Symbols"),
      dual("Dry Run → Testing", "ड्राई रन → परीक्षण", "Dry run → Testing"),
    ],
  },
  {
    id: "chemistry-periodic-trends",
    subject: "chemistry",
    title: "Periodic Table Trends",
    gradeRange: [10, 12],
    keywords: ["periodic", "trends", "atomic size", "ionization", "electronegativity"],
    examImportant: false,
    baseline: dual(
      "Periodic table me properties predictable pattern follow karti hain.",
      "आवर्त सारणी में गुणों का पूर्वानुमेय पैटर्न होता है।",
      "Properties follow predictable patterns in the periodic table.",
    ),
    basics: [
      dual(
        "Atomic size period me decrease aur group me increase karta hai.",
        "परमाणु आकार आवर्त में घटता और समूह में बढ़ता है।",
        "Atomic size decreases across a period and increases down a group.",
      ),
      dual(
        "Ionization energy opposite trend follow karti hai.",
        "आयनन ऊर्जा विपरीत रुझान का पालन करती है।",
        "Ionisation energy follows the opposite trend.",
      ),
    ],
    deepDive: [
      dual(
        "Effective nuclear charge increase se outer electrons pull zyada hota hai.",
        "सक्रिय नाभिकीय आवेश बढ़ने से बाहरी इलेक्ट्रॉन अधिक आकर्षित होते हैं।",
        "Increasing effective nuclear charge pulls outer electrons closer.",
      ),
      dual(
        "Electronegativity period me badhkar fluorine pe max hoti hai.",
        "ऋणात्मक विद्युतता आवर्त में बढ़ती है और फ्लोरीन पर अधिकतम होती है।",
        "Electronegativity increases across periods and peaks at fluorine.",
      ),
    ],
    motivational: dual(
      "Ye trends yaad karoge to inorganic chemistry tumhare liye cakewalk ho jayegi!",
      "ये रुझान याद करने से अकार्बनिक रसायन आसान हो जाएगा!",
      "Remember these trends and inorganic chemistry becomes a cakewalk!",
    ),
    tips: [
      dual(
        "Arrow diagram banao jo trends direction show kare.",
        "रुझानों का दिशा चित्र बनाओ जिसमें तीर दिखें।",
        "Draw arrow diagrams showing trend directions.",
      ),
      dual(
        "Exceptions (like group 13) ko highlight karo.",
        "अपवाद (जैसे समूह 13) को हाइलाइट करो।",
        "Highlight exceptions like those in group 13.",
      ),
    ],
    examples: [
      {
        situation: dual(
          "Na aur K me kaunsa atomic radius bada?",
          "Na और K में किसका परमाणु त्रिज्या अधिक है?",
          "Which has larger atomic radius: Na or K?",
        ),
        solution: dual(
          "Group me niche jaane se size badhta hai, to K bada hai.",
          "समूह में नीचे जाने से आकार बढ़ता है, इसलिए K बड़ा है।",
          "Size increases down the group, so K is larger.",
        ),
      },
      {
        situation: dual(
          "Oxygen ya Sulfur me ionization energy kise zyada?",
          "ऑक्सीजन या सल्फर में आयनीकरण ऊर्जा किसकी अधिक है?",
          "Which has higher ionization energy: oxygen or sulfur?",
        ),
        solution: dual(
          "Period me aage badhne se ionization energy badhti hai → oxygen zyada.",
          "आवर्त में आगे बढ़ने पर आयनीकरण ऊर्जा बढ़ती है, इसलिए ऑक्सीजन अधिक।",
          "Across period energy increases, so oxygen's is higher.",
        ),
      },
    ],
    mcqs: [
      {
        question: dual(
          "Electronegativity trend wrong option choose karo.",
          "ऋणात्मक विद्युतता के रुझान में गलत विकल्प चुनो।",
          "Pick the incorrect statement about electronegativity.",
        ),
        options: [
          dual(
            "Period me left to right increase.",
            "आवर्त में बाएँ से दाएँ बढ़ती है।",
            "Increases left to right across a period.",
          ),
          dual(
            "Group me top se bottom decrease.",
            "समूह में ऊपर से नीचे घटती है।",
            "Decreases from top to bottom in a group.",
          ),
          dual(
            "Fluorine ka value highest.",
            "फ्लोरीन का मान अधिकतम है।",
            "Fluorine has the highest value.",
          ),
          dual(
            "Cesium electronegativity most.",
            "सीज़ियम की ऋणात्मक विद्युतता सबसे अधिक है।",
            "Cesium has the highest electronegativity.",
          ),
        ],
        answer: dual(
          "Option D galat hai.",
          "विकल्प D गलत है।",
          "Option D is incorrect.",
        ),
      },
      {
        question: dual(
          "Atomic radius kis direction me fastest decrease karta hai?",
          "परमाणु त्रिज्या किस दिशा में सबसे तेजी से घटती है?",
          "In which direction does atomic radius decrease fastest?",
        ),
        options: [
          dual("Down the group", "समूह में नीचे", "Down a group"),
          dual("Across period left to right", "आवर्त में बाएँ से दाएँ", "Across a period left to right"),
          dual("Diagonal", "आड़ी", "Diagonally"),
          dual("No change", "कोई परिवर्तन नहीं", "No change"),
        ],
        answer: dual(
          "Option B sahi.",
          "विकल्प B सही।",
          "Option B is correct.",
        ),
      },
    ],
    worksheetQuestions: [
      {
        prompt: dual(
          "Mg aur Ca ki ionization energy compare karo.",
          "Mg और Ca की आयनीकरण ऊर्जा तुलना करो।",
          "Compare ionisation energies of Mg and Ca.",
        ),
        answer: dual(
          "Mg > Ca because group down energy decrease.",
          "Mg > Ca क्योंकि समूह नीचे जाते हुए ऊर्जा घटती है।",
          "Mg is higher since ionization energy decreases down the group.",
        ),
      },
      {
        prompt: dual(
          "Ek diagram draw karo jisme atomic size ka trend show ho.",
          "एक आरेख बनाओ जिसमें परमाणु आकार का रुझान दिखे।",
          "Draw a diagram showing atomic size trend.",
        ),
        answer: dual(
          "Left se right decrease arrow, top se bottom increase arrow.",
          "बाएँ से दाएँ घटने वाला तीर, ऊपर से नीचे बढ़ने वाला तीर।",
          "Arrow decreasing across period, increasing down group.",
        ),
      },
    ],
    testQuestions: [
      {
        prompt: dual(
          "Diagonal relationship ka example share karo.",
          "तिर्यक संबंध का एक उदाहरण बताओ।",
          "Give an example of diagonal relationship.",
        ),
        answer: dual(
          "Li aur Mg properties me similar hain.",
          "Li और Mg गुणों में समान हैं।",
          "Li and Mg show similar properties.",
        ),
      },
      {
        prompt: dual(
          "Why noble gases have highest ionization energy?",
          "निष्क्रिय गैसों की आयनीकरण ऊर्जा सबसे अधिक क्यों?",
          "Why do noble gases have the highest ionization energy?",
        ),
        answer: dual(
          "Stable configuration hai, electrons tightly bound.",
          "उनकी स्थिर संरचना होती है, इलेक्ट्रॉन कसकर बंधे होते हैं।",
          "They have stable configurations so electrons are tightly bound.",
        ),
      },
    ],
    summaryPoints: [
      dual(
        "Atomic size ↓ across, ↑ down.",
        "परमाणु आकार आवर्त में घटता, समूह में बढ़ता।",
        "Atomic size decreases across, increases down.",
      ),
      dual(
        "Ionization energy opposite trend follow karti.",
        "आयनन ऊर्जा विपरीत रुझान रखती है।",
        "Ionisation energy follows opposite trend.",
      ),
      dual(
        "Electronegativity highest fluorine pe.",
        "ऋणात्मक विद्युतता फ्लोरीन पर सर्वोच्च।",
        "Electronegativity is highest for fluorine.",
      ),
    ],
    mindmap: [
      dual("Atomic size ← → Ionization Energy", "परमाणु आकार ← → आयनीकरण ऊर्जा", "Atomic size ↔ ionization energy"),
      dual("Electronegativity → Fluorine peak", "ऋणात्मक विद्युतता → फ्लोरीन शिखर", "Electronegativity → Fluorine peak"),
      dual("Metallic → Left/below high", "धात्विक → बाएँ/नीचे उच्च", "Metallic → High on left/down"),
    ],
  },
];
