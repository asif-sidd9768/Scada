import DetailAlarms from "./DetailAlarms/DetailAlarms"
import DetailGraph from "./DetailGraph/DetailGraph"
import SummaryCard from "./SummaryCard/SummaryCard"

const DetailDashboard = () => {
  return (
    <div className="px-2">
      <div className="py-2 border-bottom">
        <span className="bg-secondary py-2 px-3 text-white rounded-pill mx-1">DASHBOARD</span>
        <span className="py-2 px-3 mx-1">REPORTS</span>
        <span className="py-2 px-3 mx-1">MIMIC</span>
      </div>
      <div className="px-3 py-3 d-flex justify-content-between w-75">
        <p >Last Update: 10-05-2023 12:12:12</p>
        <div>
          <span className="bg-dark text-white px-2 py-1">MODE</span>
          <span className="bg-secondary text-white px-2 py-1">MANUAL</span>
        </div>
        <div>
        <span className="bg-dark text-white px-2 py-1">GAS FLOW</span>
          <span className="bg-secondary text-white px-2 py-1">FIXED FLOW</span>
        </div>
      </div>
      <div className="d-flex border-top">
        <SummaryCard name="RUNNING STATUS" value="ON" icon="hdd-network" />
        <SummaryCard name="REAL FLOW RATE" value="390" icon="flower1" unit="m3/h" />
        <SummaryCard name="CUMULATIVE INJECTION" value="60121.5" icon="graph-up" unit="m3" />
        <SummaryCard name="TANK LEVEL" value="281" icon="bar-chart-fill" unit="Ltr" />
        <SummaryCard name="PUMP 1 LAST INJECTION" value="0.4199" icon="1-circle" />
        <SummaryCard name="PUMP 2 LAST INJECTION" value="0.8384" icon="2-circle" />
      </div>
      <div className="mt-5 px-2 row">
        <DetailGraph />
        <DetailAlarms />
      </div>
    </div>
  )
}

export default DetailDashboard