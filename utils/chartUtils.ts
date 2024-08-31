import { Metric } from "@/types";

export const generateChartColors = (count: number): string[] => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(`hsl(${(i * 360) / count}, 70%, 50%)`);
  }
  return colors;
};

export const formatChartData = (metrics: Metric[]) => {
  return {
    labels: metrics.map((metric) => metric.name),
    datasets: [
      {
        data: metrics.map((metric) => metric.value),
        backgroundColor: generateChartColors(metrics.length),
      },
    ],
  };
};
