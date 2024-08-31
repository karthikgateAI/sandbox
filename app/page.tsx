import { AdData } from "@/types";
import ReportBuilderClient from "./ReportBuilderClient";

const data: AdData = {
  metrics: [
    {
      id: "1",
      name: "Impressions",
      value: 100000,
      drillDown: [
        { id: "1-1", name: "Mobile", value: 600000 },
        { id: "1-2", name: "Desktop", value: 300000 },
        { id: "1-3", name: "Tablet", value: 100000 },
      ],
    },
    {
      id: "2",
      name: "Clicks",
      value: 5000,
      drillDown: [
        { id: "2-1", name: "Mobile", value: 30000 },
        { id: "2-2", name: "Desktop", value: 15000 },
        { id: "2-3", name: "Tablet", value: 5000 },
      ],
    },
    {
      id: "3",
      name: "Conversions",
      value: 500,
      drillDown: [
        { id: "3-1", name: "Mobile", value: 3000 },
        { id: "3-2", name: "Desktop", value: 1500 },
        { id: "3-3", name: "Tablet", value: 500 },
      ],
    },
    {
      id: "4",
      name: "Revenue",
      value: 10000,
      drillDown: [
        { id: "4-1", name: "Mobile", value: 60000 },
        { id: "4-2", name: "Desktop", value: 30000 },
        { id: "4-3", name: "Tablet", value: 10000 },
      ],
    },
  ],
};

export default async function Home() {
  return (
    <main>
      <ReportBuilderClient initialData={data} />
    </main>
  );
}
