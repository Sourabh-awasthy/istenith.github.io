import React from 'react';

const Loader = () => {
  return (
    <div className="flex pt-8 justify-center h-screen">
      <div className="w-10 h-10 border-8 border-t-8 border-white border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
