'use client'
import { FC } from 'react';

const Helpers: FC<{}> = () => {
  return (
    <div>
      <h2>Helper Tools</h2>
      <input type="text" placeholder="Search" className='' onChange={(e)=>console.log(e.target.value)}/>
      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-gray-200 p-4 rounded-lg'>Hex Decimal</div>
        <div className='bg-gray-200 p-4 rounded-lg'>Json validator</div>  
        <div className='bg-gray-200 p-4 rounded-lg'>Regex matcher</div>  
        <div className='bg-gray-200 p-4 rounded-lg'>Date lookup</div>
      </div>
    </div>
  );
};

export default Helpers;
