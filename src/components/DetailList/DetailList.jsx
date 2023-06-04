import { useParams } from "react-router-dom"
import "./DetailList.css"

const DetailList = ({location, place, id}) => {
  const {dashId} = useParams()
  return (
    <div className={`p-2 ${Number(dashId)===id ? "bg-secondary text-white" : ""}`}>
      <p className="detail-list-place-text">{place}</p>
      <p className="detail-list-location-text">{location}</p>
    </div>
  )
}

export default DetailList