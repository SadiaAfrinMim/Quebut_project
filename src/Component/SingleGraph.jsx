import React from 'react';
import { Outlet } from 'react-router-dom';

const SingleGraph = () => {
    return (
        <div>
           <div className='text-7xl text-bold text-red-700 border-4 border-red-500 py-12'>
           SingleGraph
           </div>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default SingleGraph;