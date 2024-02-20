import React from 'react';

const HeaderText = (props) => {
  return (
    <div
      className={`flex flex-col pt-3 pl-4 pb-4  ${
        props.className ? props.className : 'null'
      }`}
    >
      <span className='font-bold text-xl'>Beats Solo</span>
      <span className='font-bold text-3xl'>Wireless</span>
      <span className='font-extrabold text-4xl text-white'>Headphone</span>
    </div>
  );
};

export default HeaderText;
