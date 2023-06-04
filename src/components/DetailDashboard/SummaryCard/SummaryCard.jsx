import "./SummaryCard.css"

const SummaryCard = ({name, value, icon, unit=null}) => {
  return (
    <div className="py-3 shadow-sm d-inline-block col-md-2 position-relative">
      <div className="d-flex">
        <span className="summary-card-icon"><i className={`bi bi-${icon} fs-2`}></i></span>
        <div className="px-3 mt-2">
          <p className="summary-card-name">{name}</p>
          <p className="fs-5 mt-1">{value} <span className="summary-card-unit-text">{unit}</span></p>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard