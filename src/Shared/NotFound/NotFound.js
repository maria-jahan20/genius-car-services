import React from 'react';
import lazy from '../../../src/image/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Machanic is Sleeping</h2>
            <img className='w-100' src={lazy} alt="" />
        </div>
    );
};

export default NotFound;