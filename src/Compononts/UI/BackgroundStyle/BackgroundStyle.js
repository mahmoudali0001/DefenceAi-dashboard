import React from "react";

const backgroundStyle = (props) => {
  console.log(props.theme);
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        props.theme == "dark" ? "bg-black" : "bg-zinc-100"
      } z-10 blur-sm`}
    >
      <div className="absolute left-2 top-[17%] w-20 h-full">
        <div className="absolute top-[50%] left-1/4 w-0 h-0 shadow-blue10xl"></div>
        <div className="absolute top-[10%] left-1/3 w-0 h-0 shadow-pink10xl"></div>
      </div>

      <div className="absolute right-2 bottom-[20%] w-20 h-full">
        <div className="absolute bottom-[25%] left-1/4 w-0 h-0 shadow-blue10xl"></div>
        <div className="absolute bottom-[-10%] left-1/3 w-0 h-0 shadow-pink10xl"></div>
      </div>
    </div>
  );
};

export default backgroundStyle;
