const DetailAlarms = () => {
  return (
    <div className="col-md-4 p-2 shadow-sm">
      <p>
        <span className="me-1"><i className="bi bi-patch-exclamation-fill"></i></span>
        Alarms
      </p>
      <div className="mt-3">
        <p className="bg-secondary text-white py-2 my-1">
          <span className="me-2 bg-danger px-2 py-2 text-white rounded-1"><i className="bi bi-alarm"></i></span>
          TANK_LEVEL
        </p>
        <p className="bg-secondary text-white py-2 my-1">
          <span className="me-2 bg-danger px-2 py-2 text-white rounded-1"><i className="bi bi-alarm"></i></span>
          PUMP 1
        </p>
        <p className="bg-secondary text-white py-2 my-1">
          <span className="me-2 bg-danger px-2 py-2 text-white rounded-1"><i className="bi bi-alarm"></i></span>
          PUMP 2
        </p>
      </div>
    </div>
  )
}

export default DetailAlarms