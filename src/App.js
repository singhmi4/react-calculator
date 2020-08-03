import React from 'react'
import { Calculator, NumberProvider } from './components'

const App = () => {
    return (
        <NumberProvider>
            <Calculator />
        </NumberProvider>
    )
}

export default App
