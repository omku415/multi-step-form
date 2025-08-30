import React from "react";

interface Props {
  onBack?: () => void;
  onContinue?: () => void;
  onSubmit?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  canContinue: boolean;
}

const Navigation: React.FC<Props> = ({
  onBack,
  onContinue,
  onSubmit,
  isFirst,
  isLast,
  canContinue,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3">
      {/* Back Button */}
      {!isFirst && (
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
        >
          Back
        </button>
      )}

      {/* Continue Button */}
      {!isLast && (
        <button
          onClick={onContinue}
          disabled={!canContinue}
          className={`w-full sm:w-auto px-4 py-2 rounded text-white font-medium transition-colors ${
            canContinue
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      )}

      {/* Submit Button */}
      {isLast && (
        <button
          onClick={onSubmit}
          disabled={!canContinue}
          className={`w-full sm:w-auto px-4 py-2 rounded text-white font-medium transition-colors ${
            canContinue
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
