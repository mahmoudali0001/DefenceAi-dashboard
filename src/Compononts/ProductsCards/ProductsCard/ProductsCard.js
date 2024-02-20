import React from "react";
import Button from "../../UI/Button/Button";

const productsCard = (props) => (
  <div
    className={[
      "rounded-xl flex items-end sm:px-6 sm:py-5 py-3 px-3 relative xl:h-48 md:h-44 sm:36",
      props.styleClass,
    ].join(" ")}
  >
    <div className="flex flex-col">
      <span className="font-light md:text-base text-sm">Enjoy</span>
      <span className="font-bold md:text-2xl text-lg">With</span>
      <span className={["spanTxtClass", props.spanTxtClass].join(" ")}>
        EARPHONE
      </span>
      <Button buttonClass={props.spicelBg}>More Info</Button>
    </div>
    {/* <img
      className="md:w-24 md:h-24 lg:w-36 lg:h-36 xl:w-40 xl:h-40 sm:w-24 sm:h-24 w-20 h-20 absolute md:right-1 lg:right-4 right-[2px] lg:top-5 top-1/2  lg:translate-y-0 -translate-y-1/2"
      src={props.cardImg}
    /> */}
  </div>
);

export default productsCard;
