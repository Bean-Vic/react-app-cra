import React from 'react';
import { items } from './map-item';

export const EventHandling = () => {
    return (
        <div>
            {items.map((item, index) => {
                const vipStatus = !!item.vip; //need to add !! here for converted undefined to falsy value
                return (
                   <div key={index}>
                       <input type="checkbox" id={item.name} onChange={e => console.log(e)} /> {/* how to make this controlled? */}
                       <label>Name: {item.name} Age: {item.age} IsVIP: {vipStatus.toString()}</label>
                   </div>
                )
            })}
        </div>
    )
}