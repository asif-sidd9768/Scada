import DataCard from "../../components/DataCard";

import machineImg from "../../assets/images/machine.jpg"

const HomePage = ({ data }) => {
  return (
    <div className="my-4 mx-2 mx-sm-4">
      <h4 className="homepage-header">Locations</h4>
      <hr />
      <div className="row">
        <div className="row col-md-6 p-5">
          {data.map((d) => (
            <DataCard
              key={d.id}
              {...d}
            />
          ))}
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-start">
          <img src={machineImg} className="w-75 mt-3" />
        </div>
      </div>
        
    </div>
  );
};

export default HomePage;
