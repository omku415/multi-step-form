import React from "react";

interface Props {
  id: string;
  label: string;
  value: string[];
  options: string[];
  required?: boolean;
  onChange: (selected: string[]) => void;
}

const QuestionCheckbox: React.FC<Props> = ({
  id,
  label,
  value,
  options,
  required,
  onChange,
}) => {
  const handleChange = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="mb-6">
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>
      <div className="flex flex-col">
        {options.map((option) => (
          <label
            key={option}
            htmlFor={`${id}-${option}`}
            className="flex items-center mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id={`${id}-${option}`}
              checked={value.includes(option)}
              onChange={() => handleChange(option)}
              className="mr-2 w-4 h-4"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCheckbox;
