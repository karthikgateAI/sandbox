import React, { useState, useCallback } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { ChartType, DrillDownMetric } from "@/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  metrics: DrillDownMetric[];
  chartType: ChartType;
}

const ChartComponent: React.FC<Props> = ({ metrics, chartType }) => {
  const [currentMetrics, setCurrentMetrics] =
    useState<DrillDownMetric[]>(metrics);
  const [drillDownStack, setDrillDownStack] = useState<DrillDownMetric[][]>([]);

  const handleDrillDown = useCallback(
    (metric: DrillDownMetric) => {
      if (metric.drillDown && metric.drillDown.length > 0) {
        setDrillDownStack((prev) => [...prev, currentMetrics]);
        setCurrentMetrics(metric.drillDown);
      }
    },
    [currentMetrics]
  );

  const handleDrillUp = useCallback(() => {
    if (drillDownStack.length > 0) {
      const previousMetrics = drillDownStack[drillDownStack.length - 1];
      setCurrentMetrics(previousMetrics);
      setDrillDownStack((prev) => prev.slice(0, -1));
    }
  }, [drillDownStack]);

  const data = {
    labels: currentMetrics.map((metric) => metric.name),
    datasets: [
      {
        label: "Value",
        data: currentMetrics.map((metric) => metric.value),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: (event: any, elements: any) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        handleDrillDown(currentMetrics[index]);
      }
    },
  };

  const renderChart = () => {
    if (currentMetrics.length === 0) {
      return <p>No data to display</p>;
    }

    switch (chartType) {
      case "bar":
        return <Bar data={data} options={options} />;
      case "line":
        return <Line data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      default:
        return <Bar data={data} options={options} />;
    }
  };

  return (
    <div className="w-full h-96">
      {drillDownStack.length > 0 && (
        <button
          onClick={handleDrillUp}
          className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back
        </button>
      )}
      {renderChart()}
    </div>
  );
};

export default ChartComponent;
