import { DrillDownMetric } from "@/types";

export const exportToCSV = (metrics: DrillDownMetric[]) => {
  const headers = ["Name", "Value"];
  const csvContent = [
    headers.join(","),
    ...metrics.map((metric) => `${metric.name},${metric.value}`),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "ad_campaign_report.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
