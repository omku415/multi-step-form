// Question Types
export type QuestionType = "text" | "radio" | "checkbox";


export interface BaseQuestion {
  id: string;               
  type: QuestionType;       
  label: string;           
  required?: boolean;       
}

// Text Question
export interface TextQuestion extends BaseQuestion {
  type: "text";
  placeholder?: string;
}

// Radio Question
export interface RadioQuestion extends BaseQuestion {
  type: "radio";
  options: string[];       
}

// Checkbox Question
export interface CheckboxQuestion extends BaseQuestion {
  type: "checkbox";
  options: string[];      
}

// Union of All Question Types
export type Question = TextQuestion | RadioQuestion | CheckboxQuestion;

// Screen → contains multiple questions
export interface Screen {
  id: string;
  title?: string;
  questions: Question[];
}

// Chapter → contains multiple screens
export interface Chapter {
  id: string;
  title: string;
  screens: Screen[];
}

// Full Form Structure
export interface FormConfig {
  chapters: Chapter[];
}
