import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
    // Number
    const [number, setNumber] = useState('')
    // Stored Number
    const [storedNumber, setStoredNumber] = useState('')
    // Function Type
    const [functionType, setFunctionType] = useState('')

    // handle display value
    const handleSetDisplayValue = (num) => {
        if ((!number.includes('.') || num !== '.') && number.length < 8) {
            setNumber(`${(number + num).replace(/^0+/, '')}`)
        }
        console.log(number)
    }

    // store number and clear current number
    const handleSetStoredValue = () => {
        setStoredNumber(number)
        setNumber('')
    }

    // handle clear button
    const handleClearButton = () => {
        setNumber('')
        setStoredNumber('')
    }
    // handle back button
    const handleBackButton = () => {
        setNumber('')
    }

    // handle calc function
    const handleSetCalcFunction = (type) => {
        if (number) {
            setFunctionType(type)
            handleSetStoredValue()
        }

        if (storedNumber) {
            setFunctionType(type)
        }
    }

    // perform math operations

    const performOperation = () => {
        if (number && storedNumber ) {
            switch (functionType) {
                case '+':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 1000}`) / 1000}`)
                    break
                case '-':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`)
                    break
                case '*':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 1000}`) / 1000}`)
                    break
                case '/':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`)
                    break
                default:
                    break
            }
        }
        setNumber('')
    }

    // toggleNegative
    const handleToggleNegative = () => {
        if (number) {
            if (number > 0) {
                setNumber(`-${number}`)
            } else {
                const positiveNumber = number.slice(1)
                setNumber(positiveNumber)
            }
        } else if (storedNumber > 0) {
            setStoredNumber(`-${storedNumber}`)
        } else {
            const positiveNumber = storedNumber.slice(1)
            setStoredNumber(positiveNumber)
        }
    }
    // 

    return (
        <NumberContext.Provider 
            value=
                {{
                    performOperation, 
                    functionType, 
                    number, 
                    storedNumber, 
                    setNumber, 
                    handleSetDisplayValue, 
                    handleSetCalcFunction,
                    handleClearButton,
                    handleBackButton,
                    handleToggleNegative,
                }}>
                    {props.children}
        </NumberContext.Provider>
    )
}

export default NumberProvider
