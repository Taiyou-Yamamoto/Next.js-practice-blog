'use client';
import React from 'react';

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className='bg-red-100 border-1-4 border-red-500 text-red-700 mt-4 rounded shadow max-w-md mx-auto'>
      <h3 className='font-bold mb-2'>エラーが発生しました</h3>
      <button
        onClick={() => reset()}
        className='bg-red-600 text-white p-4 rounded shadow'
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
