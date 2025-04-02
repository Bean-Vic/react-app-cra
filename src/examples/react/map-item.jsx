import React from 'react';

export const items = [
    {
        name: 'abc',
        age: 19,
    },
    {
        name: 'def',
        age: 20,
    },
    {
        name: 'ghi',
        age: 30,
    },
    {
        name: 'hhi',
        age: 30,
    },
    {
        name: 'bcd',
        age: 25,
        vip: true,
    }
]

export const MapItem = () => { // functional component
    return (
        <div>
            {items.map((item, index) => {
                const vipStatus = !!item.vip; //need to add !! here for converted undefined to falsy value
                return (
                    <div key={index}>
                        <span>Name: {item.name}</span>
                        {' '}
                        <span>Age: {item.age}</span>
                        {' '}
                        <span>VIP status: {vipStatus.toString()}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default MapItem;