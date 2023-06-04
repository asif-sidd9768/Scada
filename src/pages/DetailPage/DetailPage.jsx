import DetailDashboard from "../../components/DetailDashboard/DetailDashboard"
import DetailList from "../../components/DetailList/DetailList"

const DetailPage = ({data}) => {
  return (
    <div className="row p-3">
      <div className="col-md-2 border-end">
        {
          data.map((d, i) => (
            <DetailList key={i} {...d} />
          ))
        }
      </div>
      <div className="col-md-10">
        <DetailDashboard />
      </div>
    </div>
  )
}

export default DetailPage