import React from 'react'
import classes from '../MealItem/MealItemForm.module.css'
import Input from "../../UI/Input"

export default function MealItemForm() {
    return (
        <form className={classes.form}>
            <Input label="amount" input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
                }}/>
            <button>+Add</button>
        </form>
    )
}
