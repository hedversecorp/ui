import React from "react";

interface ComponentPreviewProps {
  title: string;
  code: string;
  demo?: React.ReactNode;
}

const ComponentPreview = ({ title, code, demo }: ComponentPreviewProps) => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
    {demo && (
      <div className="p-8 border-b border-gray-700 flex items-center justify-center bg-gray-900">
        {demo}
      </div>
    )}
    <div className="p-4 border-b border-gray-700">
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <div className="bg-gray-900 p-4">
      <pre className="text-gray-300 font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default ComponentPreview;
