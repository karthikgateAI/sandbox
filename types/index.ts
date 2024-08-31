export type ChartType = "bar" | "line" | "pie";

export interface DrillDownMetric {
  id: string;
  name: string;
  value: number;
  drillDown?: DrillDownMetric[];
}

export interface AdData {
  metrics: DrillDownMetric[];
}

export interface FilterOptions {
  dateRange: { start: string; end: string };
  campaignName: string;
}
