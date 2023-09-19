import './IngredientList.css';
import React from 'react';

function IngredientList(props){
    const IngredientListItems = props.ingredients.map((ingredient, index) =>{
        return(
            <li key={index} className = { ingredient.prepared  ? 'prepared' : ''}>
                { ingredient.name }
            </li>
        );
    });

    return (
        
        <ul>
            { IngredientListItems }
        </ul>
    )
}

export default IngredientList;

