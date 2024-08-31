"use client";

import React from "react";
import { useDrag } from "react-dnd";
import { DrillDownMetric } from "@/types";

interface Props {
  metric: DrillDownMetric;
}

const DraggableMetric: React.FC<Props> = ({ metric }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "metric",
    item: metric,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 bg-white rounded shadow cursor-move ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <h3 className="font-bold">{metric.name}</h3>
    </div>
  );
};

export default DraggableMetric;
