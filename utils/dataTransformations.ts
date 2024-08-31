import { Metric } from "@/types";

export const calculatePercentage = (part: number, total: number): number => {
  return (part / total) * 100;
};

export const sortMetricsByValue = (metrics: Metric[]): Metric[] => {
  return [...metrics].sort((a, b) => b.value - a.value);
};

export const filterMetricsByThreshold = (
  metrics: Metric[],
  threshold: number
): Metric[] => {
  return metrics.filter((metric) => metric.value >= threshold);
};
