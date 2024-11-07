import React from "react";

const steps = [
  { title: "Step 1", description: "All recipes are written using certain conventions..." },
  { title: "Step 2", description: "The first mate and his Skipper..." },
  { title: "Step 3", description: "Tell them I hate them. Is the Space Pope reptilian!?" },
  { title: "Step 4", description: "If one examines precultural libertarianism..." },
  { title: "Success", description: "" }
];

const Step = ({ title, description, isLast }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
        <svg
          className="w-4 text-gray-600"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {/* Icon SVG paths here */}
        </svg>
      </div>
      {!isLast && <div className="w-px h-full bg-gray-300" />}
    </div>
    <div className="pt-1 pb-8">
      <p className="mb-2 text-lg font-bold">{title}</p>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  </div>
);

const AutomatedCalls = () => {
  return (
    <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg">
      {/* Other sections above */}
      <div className="lg:py-6 lg:pr-16">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} isLast={index === steps.length - 1} />
        ))}
      </div>
      {/* Other sections below */}
    </div>
  );
};

export default AutomatedCalls;
