"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReportBuilder from "@/components/ReportBuilder";
import { AdData } from "@/types";

interface Props {
  initialData: AdData;
}

const ReportBuilderClient: React.FC<Props> = ({ initialData }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReportBuilder initialData={initialData} />
    </DndProvider>
  );
};

export default ReportBuilderClient;
