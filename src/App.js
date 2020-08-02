import React from 'react'
import { BackButton, ClearButton, Display, EqualButton, FunctionButton, NegativeButton, NumberButton } from './components'

const App = () => {
    return (
        <div>
            <Display />
            {/* Row 1 */}
            <ClearButton />
            <BackButton />
            <NegativeButton />
            <FunctionButton />
            {/* Row 2 */}
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <FunctionButton />
            {/* Row 3 */}
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <FunctionButton />
            {/* Row 4 */}
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <FunctionButton />
            {/* Row 5 */}
            <NumberButton />
            <NumberButton />
            <EqualButton />


        </div>
    )
}

export default App
