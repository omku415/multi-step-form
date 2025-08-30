import type { FormConfig } from "../types/form";

export const formConfig: FormConfig = {
  chapters: [
    {
      id: "chapter1",
      title: "Personal Info",
      screens: [
        {
          id: "screen1",
          title: "Basic Details",
          questions: [
            {
              id: "q1",
              type: "text",
              label: "What is your full name?",
              placeholder: "Enter your name",
              required: true,
            },
            {
              id: "q2",
              type: "radio",
              label: "What is your gender?",
              options: ["Male", "Female", "Other"],
              required: true,
            },
          ],
        },
        {
          id: "screen2",
          title: "Contact Info",
          questions: [
            {
              id: "email", // ✅ Updated ID for email validation
              type: "text",
              label: "Email address",
              placeholder: "Enter your email",
              required: true,
            },
            {
              id: "q4",
              type: "checkbox",
              label: "Preferred contact methods",
              options: ["Email", "Phone", "WhatsApp"],
              required: true,
            },
          ],
        },
      ],
    },
    {
      id: "chapter2",
      title: "Professional Info",
      screens: [
        {
          id: "screen3",
          title: "Job Details",
          questions: [
            {
              id: "q5",
              type: "text",
              label: "Current company",
              placeholder: "Enter company name",
            },
            {
              id: "q6",
              type: "radio",
              label: "Experience level",
              options: ["Junior", "Mid", "Senior"],
              required: true,
            },
          ],
        },
        {
          id: "screen4",
          title: "Skills",
          questions: [
            {
              id: "q7",
              type: "checkbox",
              label: "Select your skills",
              options: ["JavaScript", "React", "TypeScript", "Tailwind"],
              required: true,
            },
            {
              id: "q8",
              type: "text",
              label: "Other skills",
              placeholder: "Enter any other skills",
            },
          ],
        },
      ],
    },
  ],
};
