import React from 'react'
import { BackButton, ClearButton, Display, EqualButton, FunctionButton, NegativeButton, NumberButton } from './CalculatorParts'
import { CalculatorStyles } from './CalculatorParts/styles/Styles';

const Calculator = () => {
    return (
        <CalculatorStyles>
            <div className="display">
                <Display />
                {/* Row 1 */}
            </div>
            <div className="numpad">
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
                <div className="zero-button">
                    <NumberButton buttonValue={0}/>
                </div>
                <NumberButton buttonValue="."/>
                <EqualButton />
            </div>
        </CalculatorStyles>
    )
}

export default Calculator
