import React from "react";
import { FilterOptions } from "@/types";

interface Props {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel: React.FC<Props> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "start" || name === "end") {
      onFilterChange({
        ...filters,
        dateRange: { ...filters.dateRange, [name]: value },
      });
    } else {
      onFilterChange({ ...filters, [name]: value });
    }
  };

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl mb-2 font-bold">Filters</h2>
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block mb-1">Start Date</label>
          <input
            type="date"
            name="start"
            value={filters.dateRange.start}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">End Date</label>
          <input
            type="date"
            name="end"
            value={filters.dateRange.end}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Campaign Name</label>
          <input
            type="text"
            name="campaignName"
            value={filters.campaignName}
            onChange={handleInputChange}
            className="p-2 border rounded"
            placeholder="Enter campaign name"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
