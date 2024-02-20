import React from "react";

const authentication = (props) => {
  return (
    <div className="relative w-4/5 z-50 text-slate-400">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="pl-16 py-3 bg-slate-800 z-50 w-full"
      />
      {props.children}
    </div>
  );
};

export default authentication;
