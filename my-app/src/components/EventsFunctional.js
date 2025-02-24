import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("Functional")
    }
    return (
        <div>
        <button onClick={clickHandler}>Click Me! Functional-Comp</button>
        </div>
    )
}

export default EventsFunctional
