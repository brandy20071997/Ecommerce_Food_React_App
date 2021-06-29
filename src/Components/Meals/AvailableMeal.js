import { classes } from 'istanbul-lib-coverage';
import React from 'react'
import Card from "../UI/Card"
import MealItems  from './MealItem/MealItems';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

export default function AvailableMeal() {
    const mealDetail = DUMMY_MEALS.map(meal=>
        <MealItems
        key= {meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
        )
    return (
        <section className={classes.meals}>
            <Card>
            <ul>{mealDetail}</ul>
            </Card>
        </section>
    )
}
