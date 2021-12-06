import React from 'react';
import Expert from '../Expert/Expert';


// https://i.ibb.co/68fDTfS/1-1.png
// https://i.ibb.co/2YcH2Hq/1-2.png
// https://i.ibb.co/Hp0PmHd/1-3.png
// https://i.ibb.co/PZ17y5D/1-4.png
// https://i.ibb.co/JCnBSrv/1-5.png
// https://i.ibb.co/G3pHDy2/1-6.png

const expertMan = [
    {
        id: "1",
        img: 'https://i.ibb.co/68fDTfS/1-1.png',
        name: 'Adam Smith',
        Expertize: 'Alrouder Expert' 
    },
    {
        id: "2",
        img: 'https://i.ibb.co/2YcH2Hq/1-2.png',
        name: 'Jack harde',
        Expertize: 'Polish Expert'
    },
    {
        id: "3",
        img: 'https://i.ibb.co/Hp0PmHd/1-3.png',
        name: 'Pandy',
        Expertize: 'Engin Expert'
    },
    {
        id: "4",
        img: 'https://i.ibb.co/PZ17y5D/1-4.png',
        name: 'Roam',
        Expertize: 'Mobile Expert'
    },
    {
        id: "5",
        img: 'https://i.ibb.co/JCnBSrv/1-5.png',
        name: 'Smith Jan',
        Expertize: 'Parking Expert'
    },
    {
        id: "6", 
        img: 'https://i.ibb.co/G3pHDy2/1-6.png',
        name: 'Pank',
        Expertize: 'Wind Expert'
    }
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary my-3 text-uppercase">This is Experts</h2>
            <div className="row">
                {
                    expertMan.map(expert =><Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;