import React from 'react';

export default function HomeHere() {
  return (
    <div>
      <div
        className='w-full h-80 flex justify-center items-center bg-center bg-no-repeat bg-cover bg-fixed'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1682685797886-79020b7462a4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8')"
        }}
      >
        <h1 className='text-4xl font-bold text-white bg-[]'>
          Hello there this is Homepage
        </h1>
      </div>
    </div>
  );
}
