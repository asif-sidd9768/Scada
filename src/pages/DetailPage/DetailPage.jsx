import DetailDashboard from "../../components/DetailDashboard/DetailDashboard";
import DetailList from "../../components/DetailList/DetailList";
import OperationPage from "../../components/DetailDashboard/Operations/OperationPage";
import { useParams } from "react-router-dom";
const DetailPage = ({ data }) => {
  const { dashId } = useParams();
  const detail = data.filter((d) => d.id === Number(dashId));
  console.log(detail);
  return (
    <div className="row p-3">
      <div className="col-md-2 border-end">
        {/* {
          data.map((d, i) => (
            <DetailList key={i} {...d} />
          ))
        } */}
        <OperationPage />
      </div>
      <div className="col-md-10">
        <DetailDashboard />
      </div>
    </div>
  );
};

export default DetailPage;
