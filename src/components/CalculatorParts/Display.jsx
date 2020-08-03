import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider' 
import { DisplayStyles } from './styles/Styles'

const Display = () => {
    const { number, storedNumber, functionType } = useContext(NumberContext)
    return (
        <DisplayStyles>
            <p>{!storedNumber ? '' : `${storedNumber} ${functionType} ${number}`}</p>
            <h2>{!number.length && !storedNumber ? '0' : number || storedNumber } </h2>
        </DisplayStyles>
    )
}

export default Display
