import React from "react";

const InfoCard = (props) => {
  return (
    <div className="border border-gray-400 py-2 px-3 rounded-lg">
      <h4 className="font-semibold">Dependabot</h4>
      <h5
        className={`${
          props.theme == "dark" ? "text-gray-400" : "text-Cgray"
        } md:text-xl text-md`}
      >
        22% of repositories affected
      </h5>

      <span className="mt-2 block">Repositories</span>
      <div className="w-full overflow-hidden rounded-lg h-2 flex gap-px">
        <span className="w-[25%] h-full bg-orange-700"></span>
        <span className="w-[75%] h-full bg-neutral-500"></span>
      </div>

      <div className="flex justify-between">
        <div
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          } text-sm`}
        >
          41 affected
        </div>
        <div
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          } text-sm`}
        >
          144 unaffected
        </div>
      </div>

      <span className="mt-2 block">Open alerts</span>
      <div className="w-full overflow-hidden rounded-lg h-2 flex gap-px">
        <span className="w-[12%] h-full bg-orange-600"></span>
        <span className="w-[35%] h-full bg-red-700"></span>
        <span className="w-[45%] h-full bg-neutral-500"></span>
        <span className="w-[8%] h-full bg-blue-700"></span>
      </div>

      <div className="flex justify-between gap-6">
        <div
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          } text-[13.5px]`}
        >
          98 critical
        </div>
        <div
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          } text-[13.5px]`}
        >
          405 high
        </div>
        <div
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          } text-[13.5px]`}
        >
          285 moderate
        </div>
        <div
          className={`${
            props.theme == "dark" ? "text-gray-400" : "text-Cgray"
          } text-[13.5px]`}
        >
          67 low
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
