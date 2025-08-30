# Multi-Step Form Assignment

A **mobile-first, multi-step form** built with **React, TypeScript, and Tailwind CSS**, fully driven by a configuration file. Supports **text, radio, and checkbox** question types with validation, inline error messages, and structured navigation.

Inspired by **Duolingo App UI**.

---

## Features

- Chapters → Screens → Questions structure
- Text, Radio, and Checkbox question types
- Validation for required fields
- Inline error messages
- Navigation: Back, Continue, Submit
- Collects answers in `{ questionId: answer }` format
- Mobile-first responsive design
- Tailwind CSS for styling
- Fully configuration-driven (no hardcoding)

---

## Project Structure

src/
├─ components/
│ ├─ Navigation.tsx
│ ├─ QuestionCheckbox.tsx
│ ├─ QuestionRadio.tsx
│ ├─ QuestionText.tsx
│ ├─ QuestionRenderer.tsx
│ └─ Screen.tsx
├─ config/
│ └─ formConfig.ts
├─ types/
│ └─ form.ts
├─ App.tsx
├─ main.tsx

## Running Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/<your-username>/multi-step-form.git
cd multi-step-form

2.Install dependencies:
npm install

3.Run the application locally:
npm run dev
```
