import DetailAlarms from "./DetailAlarms/DetailAlarms";
import DetailGraph from "./DetailGraph/DetailGraph";
import SummaryCard from "./SummaryCard/SummaryCard";
const DetailDashboard = () => {
  const summary = [
    {
      icon: "graph-up",
      name: "REAL FLOW RATE",
      unit: "m3",
      value: "60121.5",
    },
    {
      icon: "graph-up",
      name: "TANK LEVEL",
      unit: "ltr",
      value: "15000",
    },
    {
      icon: "graph-up",
      name: "TANK PRESSURE",
      unit: "people",
      value: "500",
    },
    {
      icon: "graph-up",
      name: "TANK TEMPERATURE",
      unit: "USD",
      value: "10000",
    },
    {
      icon: "graph-up",
      name: "VEROMETER LEVEL",
      unit: "hours",
      value: "120",
    },
    {
      icon: "graph-up",
      name: "P A1 LAST INJECTION",
      unit: "people",
      value: "1000",
    },
    {
      icon: "graph-up",
      name: "P A2 LAST INJECTION",
      unit: "count",
      value: "5000",
    },
    {
      icon: "graph-up",
      name: "P A1 TOTAL COUNTER",
      unit: "count",
      value: "10000",
    },
    {
      icon: "graph-up",
      name: "P A2 TOTAL COUNTER",
      unit: "USD",
      value: "25000",
    },
    {
      icon: "graph-up",
      name: "TOTAL INJECTION",
      unit: "count",
      value: "2000",
    },
  ];

  return (
    <div className="px-2 dashboard">
      <div className="py-2 border-bottom">
        <span className="bg-secondary py-2 px-3 text-white rounded-pill mx-1">
          DASHBOARD
        </span>
        <span className="py-2 px-3 mx-1">REPORTS</span>
        <span className="py-2 px-3 mx-1">MIMIC</span>
        <span>Last Update: 10-05-2023 12:12:12</span>
      </div>

      <div className="d-border-top dashboard-summary ">
        {summary.map((s, i) => (
          <SummaryCard key={i} name={s.name} value={s.value} icon={s.icon} />
        ))}
      </div>

      <div className="mt-5 px-2 row">
        <DetailGraph />
        <DetailAlarms />
      </div>
    </div>
  );
};

export default DetailDashboard;
