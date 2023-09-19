import React from 'react'

function Instructions(prop){
    const InstructionsList = prop.instructions.map((currStep, index) => {

        return(
            
            <li key={index} >{currStep.step}</li>
        )
    })
    return(
        <ol>
             {InstructionsList}
        </ol>
    )
}

export default Instructions;