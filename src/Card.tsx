import React from 'react';

interface Cardprpos{
    title: string;
    rate?: number;
    onChange:(value:any)=>void;
    onDelete:()=>void;
}
function Card({title,rate,onChange,onDelete}:Cardprpos) {
    return (
        <div>
            {title}
            <div>{rate}</div>
        </div>
    );
}

export default Card;