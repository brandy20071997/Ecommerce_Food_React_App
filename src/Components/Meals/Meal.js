import {Fragment} from 'react'
import MealsSummary from './MealSummary'
import AvailableMeal from './AvailableMeal'

export default function Meal() {
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeal/>
        </Fragment>
    )
}
