import {Fragment} from 'react'
import MainImage from "../../assets/main-Img.jpg"
import Classes from "./Header.module.css"
import HeaderButton from './HeaderButton'

export default function Header() {
    return (
        <Fragment>
            <header className={Classes.header}>
                <h1>The Hotel</h1>
                <HeaderButton></HeaderButton>
                {/* <button>Cart</button> */}
            </header>
            <div className={Classes['main-image']}>
                <img src={MainImage} alt="main-image"/>
            </div>
        </Fragment>
    )
}
