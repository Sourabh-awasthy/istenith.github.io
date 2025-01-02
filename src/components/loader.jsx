import React from 'react';
import "./loader.css"

const Loader = () => {
  return (
    <div className='w-full min-h-screen justify-center mx-auto flex  lg:pt-0   place-items-center bg-black '>
<div className="spinner ">
    <div className="spinner1"></div>
</div>
</div>
  );
};

export default Loader;
