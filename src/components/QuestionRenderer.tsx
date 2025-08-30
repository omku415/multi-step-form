import React from "react";
import QuestionText from "./QuestionText";
import QuestionRadio from "./QuestionRadio";
import QuestionCheckbox from "./QuestionCheckbox";
import type { Question } from "../types/form";

interface Props {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

const QuestionRenderer: React.FC<Props> = ({ question, value, onChange, error }) => {
  let Component;

  switch (question.type) {
    case "text":
      Component = <QuestionText id={question.id} label={question.label} placeholder={question.placeholder} required={question.required} value={value || ""} onChange={onChange} />;
      break;
    case "radio":
      Component = <QuestionRadio id={question.id} label={question.label} options={question.options} required={question.required} value={value || ""} onChange={onChange} />;
      break;
    case "checkbox":
      Component = <QuestionCheckbox id={question.id} label={question.label} options={question.options} required={question.required} value={value || []} onChange={onChange} />;
      break;
    default:
      Component = null;
  }

  return (
    <div className="mb-4">
      {Component}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default QuestionRenderer;
