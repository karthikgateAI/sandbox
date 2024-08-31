import { DrillDownMetric } from "@/types";

export const generateMockDrillDownData = (
  metric: DrillDownMetric
): DrillDownMetric => {
  return {
    ...metric,
    value: Math.floor(metric.value * (0.8 + Math.random() * 0.4)),
    drillDown: metric.drillDown?.map((subMetric) => ({
      ...subMetric,
      value: Math.floor(subMetric.value * (0.8 + Math.random() * 0.4)),
    })),
  };
};

export const refreshMockData = (
  metrics: DrillDownMetric[]
): DrillDownMetric[] => {
  return metrics.map(generateMockDrillDownData);
};
