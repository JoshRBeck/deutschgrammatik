// import MultipleChoice from "../components/LessonComponents/MultipleChoice";
// import FillInTheBlank from "../components/LessonComponents/FillInTheBlank";
// import MatchingPairs from "../components/LessonComponents/MatchingPairs";
// import SentenceOrdering from "../components/LessonComponents/SentenceOrdering";
// import TypingPractice from "../components/LessonComponents/TypingPractice";

// interface TestPageProps {
//   isDark: boolean;
// }

// export default function TestPage({ isDark }: TestPageProps) {
//   return (
//     <div
//       className={`min-h-screen px-4 py-12 space-y-8 ${
//         isDark
//           ? "bg-gradient-to-br from-violet-900 to-pink-900 text-white"
//           : "bg-gradient-to-br from-violet-100 to-pink-100 text-gray-800"
//       }`}
//     >
//       <div
//         className={`max-w-lg mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-sm ${
//           isDark ? "bg-gray-800/80" : "bg-white/80"
//         }`}
//       >
//         <MultipleChoice
//           question="Which article matches the noun 'Auto'?"
//           options={[
//             { id: "a", text: "Der", isCorrect: false },
//             { id: "b", text: "Die", isCorrect: false },
//             { id: "c", text: "Das", isCorrect: true },
//           ]}
//           onAnswer={(isCorrect) =>
//             alert(isCorrect ? "✅ Correct!" : "❌ Nope, try again!")
//           }
//         />
//       </div>

//       <div
//         className={`max-w-lg mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-sm ${
//           isDark ? "bg-gray-800/80" : "bg-white/80"
//         }`}
//       >
//         <FillInTheBlank
//           sentence="Ich ___ ein Buch."
//           correctAnswer="lese"
//           onAnswer={(isCorrect) =>
//             alert(isCorrect ? "✅ Nice one!" : "❌ Not quite.")
//           }
//         />
//       </div>
//       <div
//         className={`max-w-lg mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-sm ${
//           isDark ? "bg-gray-800/80" : "bg-white/80"
//         }`}
//       >
//         <MatchingPairs
//           pairs={[
//             { id: "1", left: "Der", right: "Masculine" },
//             { id: "2", left: "Die", right: "Feminine" },
//             { id: "3", left: "Das", right: "Neuter" },
//           ]}
//           onComplete={(correct) =>
//             alert(correct ? "✅ All matched!" : "❌ Some were wrong!")
//           }
//         />
//       </div>
//       <div
//         className={`max-w-lg mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-sm ${
//           isDark ? "bg-gray-800/80" : "bg-white/80"
//         }`}
//       >
//         <SentenceOrdering
//           sentence="Ich habe einen Hund"
//           onAnswer={(isCorrect) =>
//             alert(isCorrect ? "✅ Woohoo! Gut gemacht!" : "❌ Fast, try again!")
//           }
//         />
//       </div>
//       <div
//         className={`max-w-lg mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-sm ${
//           isDark ? "bg-gray-800/80" : "bg-white/80"
//         }`}
//       >
//         <TypingPractice
//           prompt="Type the German sentence for 'I have a dog'"
//           answer="Ich habe einen Hund"
//           onAnswer={(isCorrect) =>
//             alert(isCorrect ? "✅ Jawohl!" : "❌ Try again, bitte!")
//           }
//         />
//       </div>
//     </div>
//   );
// }
