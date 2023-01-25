import React from 'react'
import './TaskCard.css'

export const TaskCard = ({el,del,complete}) => {
    return (
        <div className="task">
        <p id={el.isdone?"comp":"uncomp"}>{el.action}</p>
        <button onClick={()=>del(el.id)}>Delete</button>
        <button onClick={()=>complete(el.id)}>{el.isdone?"Undo" :"Complete"}</button>
            
        </div>
    )
}
