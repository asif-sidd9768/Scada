import DataCard from "../../components/DataCard";

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <div className="my-4 mx-2 mx-sm-4">
      <h4 className="homepage-header">Locations</h4>
      <hr />
      <div className="row ">
        {data.map((d) => (
          <DataCard
            key={d.id}
            {...d}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
