import "./OperationPage.css";
const OperationPage = () => {
  return (
    <div className="operation-list">
      <h3 className="mb-3">Operations</h3>

      <h4 className="my-3">Mode</h4>
      <div className="operation-switch">
        <span className="bg-dark text-white px-2 py-1">AUTO</span>
        <span className="bg-secondary text-white px-2 py-1">MANUAL</span>
      </div>

      <h4 className="my-3">GASS FLOW</h4>
      <div className="operation-switch">
        <span className="bg-dark text-white px-2 py-1">FIXED</span>
        <span className="bg-secondary text-white px-2 py-1">REAL</span>
      </div>

      <h4 className="my-3">PUMP</h4>
      <div className="operation-switch">
        <span className="bg-dark text-white px-2 py-1">A1</span>
        <span className="bg-secondary text-white px-2 py-1">A2</span>
      </div>

      <h4 className="my-3">STATUS</h4>
      <div className="operation-switch">
        <span className="bg-secondary text-white px-2 py-1">ON</span>
        <span className="bg-dark text-white px-2 py-1">OFF</span>
      </div>
    </div>
  );
};

export default OperationPage;
