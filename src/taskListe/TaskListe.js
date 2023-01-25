import React from 'react'
import { TaskCard } from '../taskCard/TaskCard'



 export  const TaskListe = ({tab , del , complete}) => {
    return (
        <div>
            {tab.map((el) => (<TaskCard key={el.id} el={el} del={del} complete={complete}/>))}
        </div>
    )
}

