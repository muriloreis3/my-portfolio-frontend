import React from 'react'

import classes from './Footer.module.css'

export default function Footer() {
    const elClasses = [classes.Footer, 'bg-heading'];
    return (
        <div className={elClasses.join(' ')}>
            <span>
                By Murilo Alves &copy; 2020
            </span>
        </div>
    )
}
