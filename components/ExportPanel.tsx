import React from "react";
import { DrillDownMetric } from "../types";

interface Props {
  metrics: DrillDownMetric[];
}

const ExportPanel: React.FC<Props> = ({ metrics }) => {
  const handleExport = (format: "csv" | "pdf") => {
    // In a real application, you would implement the export functionality here
    console.log(`Exporting data in ${format} format`, metrics);
    alert(`Exporting data in ${format} format. Check the console for details.`);
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl mb-2 font-bold">Export</h2>
      <div className="flex gap-4">
        <button
          onClick={() => handleExport("csv")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Export as CSV
        </button>
        <button
          onClick={() => handleExport("pdf")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
};

export default ExportPanel;
