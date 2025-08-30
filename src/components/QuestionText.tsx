import React from "react";

interface Props {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const QuestionText: React.FC<Props> = ({
  id,
  label,
  value,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default QuestionText;
