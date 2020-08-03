import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

const ClearButton = () => {
    const { handleClearButton } = useContext(NumberContext)
    return (
        <button className="aqua-button" type="button" onClick={() => handleClearButton()}>C</button>
    )
}

export default ClearButton
