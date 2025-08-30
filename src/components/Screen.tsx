import React from "react";
import QuestionRenderer from "./QuestionRenderer";
import type { Screen as ScreenType, Question } from "../types/form";

interface Props {
  screen: ScreenType;
  answers: Record<string, any>;
  errors: Record<string, string>;
  setAnswer: (questionId: string, value: any, question?: Question) => void;
}

const Screen: React.FC<Props> = ({ screen, answers, errors, setAnswer }) => {
  return (
    <div>
      {screen.title && <h2 className="text-2xl font-bold mb-6">{screen.title}</h2>}
      {screen.questions.map((q: Question) => (
        <QuestionRenderer key={q.id} question={q} value={answers[q.id]} onChange={(val) => setAnswer(q.id, val, q)} error={errors[q.id]} />
      ))}
    </div>
  );
};

export default Screen;
