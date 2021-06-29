import React from 'react'
import classes from "../MealItem/MealItem.module.css"
import MealItemForm from './MealItemForm'

export default function MealItems(props) {
    return (
        <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <h3 className={classes.description}>{props.description}</h3>
            <h3 className={classes.price}>{props.price}</h3>
</div>
<div>
    <MealItemForm/>
</div>
            </li>
        
    )
}
