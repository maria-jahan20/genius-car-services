import React from 'react';
import expert1 from '../../../image/experts/expert-1.jpg';
import expert2 from '../../../image/experts/expert-2.jpg';
import expert3 from '../../../image/experts/expert-3.jpg';
import expert4 from '../../../image/experts/expert-4.jpg';
import expert5 from '../../../image/experts/expert-5.jpg';
import expert6 from '../../../image/experts/expert-6.png';
import Expert from '../Expert/Expert';
const experts=[
    {id:1,name:'will smith',img:expert1},
    {id:2,name:'lionel messi',img:expert2},
    {id:3,name:'ronldo',img:expert3},
    {id:4,name:' smith',img:expert4},
    {id:5,name:'will ',img:expert5},
    {id:6,name:'Billie rock',img:expert6}
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center'>Our experts</h2>
            <div className='row'>
                {
                    experts.map(expert=><Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;