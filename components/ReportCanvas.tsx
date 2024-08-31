import React from "react";
import { useDrop } from "react-dnd";
import { ChartType, DrillDownMetric } from "@/types";
import ChartComponent from "./ChartComponent";

interface Props {
  metric: DrillDownMetric | null;
  onDrop: (item: DrillDownMetric) => void;
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

const ReportCanvas: React.FC<Props> = ({
  metric,
  onDrop,
  chartType,
  onChartTypeChange,
}) => {
  const [, drop] = useDrop(() => ({
    accept: "metric",
    drop: (item: DrillDownMetric) => onDrop(item),
  }));

  return (
    <div
      ref={drop}
      className="min-h-[400px] border-2 border-dashed border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
    >
      {!metric ? (
        <p className="text-center text-gray-500">
          Drag a metric here to build your report
        </p>
      ) : (
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="mb-4 w-full">
            <h3 className="text-lg font-semibold mb-2">Selected Metric:</h3>
            <div className="bg-gray-100 p-2 rounded">{metric.name}</div>
          </div>
          <div className="mb-4 w-full flex justify-center">
            <label className="mr-2">Chart Type:</label>
            <select
              value={chartType}
              onChange={(e) => onChartTypeChange(e.target.value as ChartType)}
              className="p-2 border rounded"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
          </div>
          <div className="w-full aspect-video">
            <ChartComponent metrics={[metric]} chartType={chartType} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportCanvas;
