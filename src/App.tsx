import { useState, useEffect } from "react";
import { formConfig } from "./config/formConfig";
import Screen from "./components/Screen";
import Navigation from "./components/Navigation";
import type { Chapter, Screen as ScreenType, Question } from "./types/form";

function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentChapter: Chapter = formConfig.chapters[currentChapterIndex];
  const currentScreen: ScreenType = currentChapter.screens[currentScreenIndex];

  useEffect(() => {
    const initialErrors: Record<string, string> = {};
    currentScreen.questions.forEach((q: Question) => {
      if (q.required) {
        const val = answers[q.id];
        if ((q.type === "checkbox" && (!val || val.length === 0)) || (q.type !== "checkbox" && !val)) {
          initialErrors[q.id] = "This field is required";
        }
      }
    });
    setErrors(initialErrors);
  }, [currentScreenIndex, currentChapterIndex, currentScreen.questions, answers]);

  const setAnswer = (questionId: string, value: any, question?: Question) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    if (question?.required) {
      if (question.type === "checkbox") {
        setErrors((prev) => ({ ...prev, [questionId]: Array.isArray(value) && value.length > 0 ? "" : "This field is required" }));
      } else {
        setErrors((prev) => ({ ...prev, [questionId]: value ? "" : "This field is required" }));
      }
    } else {
      setErrors((prev) => ({ ...prev, [questionId]: "" }));
    }
  };

  const canContinue = currentScreen.questions.every((q: Question) => {
    if (q.required) {
      const val = answers[q.id];
      if (q.type === "checkbox") return Array.isArray(val) && val.length > 0;
      return val !== undefined && val !== "";
    }
    return true;
  });

  const handleBack = () => {
    if (currentScreenIndex > 0) setCurrentScreenIndex(currentScreenIndex - 1);
    else if (currentChapterIndex > 0) {
      const prevChapter = formConfig.chapters[currentChapterIndex - 1];
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentScreenIndex(prevChapter.screens.length - 1);
    }
  };

  const handleContinue = () => {
    if (!canContinue) return;
    if (currentScreenIndex < currentChapter.screens.length - 1) setCurrentScreenIndex(currentScreenIndex + 1);
    else if (currentChapterIndex < formConfig.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      setCurrentScreenIndex(0);
    }
  };

  const handleSubmit = () => {
    console.log("Form Answers:", answers);
    alert("Form submitted! Check console for answers.");
  };

  const isFirst = currentChapterIndex === 0 && currentScreenIndex === 0;
  const isLast = currentChapterIndex === formConfig.chapters.length - 1 && currentScreenIndex === currentChapter.screens.length - 1;

  return (
    <div className="max-w-md w-full mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">
      <Screen screen={currentScreen} answers={answers} errors={errors} setAnswer={setAnswer} />
      <Navigation onBack={handleBack} onContinue={handleContinue} onSubmit={handleSubmit} isFirst={isFirst} isLast={isLast} canContinue={canContinue} />
    </div>
  );
}

export default App;
