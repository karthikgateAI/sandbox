"use client";

import React, { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AdData, ChartType, DrillDownMetric, FilterOptions } from "@/types";
import DraggableMetric from "./DraggableMetric";
import ReportCanvas from "./ReportCanvas";
import FilterPanel from "./FilterPanel";
import ExportPanel from "./ExportPanel";

interface Props {
  initialData: AdData;
}

const ReportBuilder: React.FC<Props> = ({ initialData }) => {
  const [selectedMetric, setSelectedMetric] = useState<DrillDownMetric | null>(
    null
  );
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: { start: "", end: "" },
    campaignName: "",
  });

  const handleDrop = useCallback((item: DrillDownMetric) => {
    setSelectedMetric(item);
  }, []);

  const handleChartTypeChange = useCallback((type: ChartType) => {
    setChartType(type);
  }, []);

  const handleFilterChange = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
    console.log("Filters applied:", newFilters);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Ad Campaign Report Builder</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/4">
            <h2 className="text-xl mb-2 font-bold">Available Metrics</h2>
            {initialData.metrics.map((metric) => (
              <DraggableMetric key={metric.id} metric={metric} />
            ))}
          </div>
          <div className="w-full md:w-3/4">
            <ReportCanvas
              metric={selectedMetric}
              onDrop={handleDrop}
              chartType={chartType}
              onChartTypeChange={handleChartTypeChange}
            />
          </div>
        </div>
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        <ExportPanel metrics={selectedMetric ? [selectedMetric] : []} />
      </div>
    </DndProvider>
  );
};

export default ReportBuilder;
