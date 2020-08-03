import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

const NegativeButton = () => {
    const { handleToggleNegative } = useContext(NumberContext)
    return (
        <button className="aqua-button" onClick={() => handleToggleNegative()}>-/+</button>
    )
}

export default NegativeButton
