import { destinationData, destinationType, fetchData } from "../assets/data";

const Metric = ({ label, data }: { label: string; data: string }) => {
  return (
    <section>
      <span className="text-sh2 tracking-sh2 font-barlow-condensed text-violet">
        {label}
      </span>
      <h5 className="text-h5 font-bellefair">{data}</h5>
    </section>
  );
};

const DestinationIntro = () => {
  const currDestData: destinationType = fetchData(
    destinationData,
    "destinationId",
  );

  return (
    <div>
      <h2 className="text-h2 font-bellefair">
        {currDestData.name.toUpperCase()}
      </h2>
      <p className="text-desc text-violet font-barlow leading-content pb-[54px] border-b border-white/20">
        {currDestData.description}
      </p>
      <div className="flex justify-start gap-[86px] pt-[28px]">
        <Metric
          label={"AVG. DISTANCE"}
          data={currDestData.distance.toUpperCase()}
        />
        <Metric
          label={"EST. TRAVEL TIME"}
          data={currDestData.travelTime.toUpperCase()}
        />
      </div>
    </div>
  );
};

export default DestinationIntro;
