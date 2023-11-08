import React from 'react'

function Card({ state }) {
    return (
        <div>
            {state.map((state1) => {
                console.log(state1.name);
            })}
        </div>
    )
}

export default Card