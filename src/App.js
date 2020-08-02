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
            <FunctionButton buttonValue="/" />
            {/* Row 2 */}
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <FunctionButton buttonValue="*" />
            {/* Row 3 */}
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <FunctionButton buttonValue="-" />
            {/* Row 4 */}
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <FunctionButton buttonValue="+" />
            {/* Row 5 */}
            <NumberButton buttonValue={0}/>
            <NumberButton buttonValue="."/>
            <EqualButton />


        </div>
    )
}

export default App
