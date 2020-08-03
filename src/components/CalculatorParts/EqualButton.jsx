import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider' 

const EqualButton = () => {
    const { performOperation } = useContext(NumberContext)
    return (
        <button className="aqua-button" onClick={() => performOperation()}>=</button>
    )
}

export default EqualButton
