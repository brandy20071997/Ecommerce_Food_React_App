// import { classes } from 'istanbul-lib-coverage'
import React from 'react'
import CartIcon from '../Cart/CartIcon'
import Classes from './HeaderButton.module.css'


export default function HeaderButton() {
    return (
        <button className={Classes.button}>
            <span>
        <CartIcon/>
            </span>
            <span>
Your Cart
            </span>
            <span className={Classes.badge}>3</span>
        </button>
    )
}
