import React, { useState, useEffect } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  // Number
  const [number, setNumber] = useState("");
  // Stored Number
  const [storedNumber, setStoredNumber] = useState("");
  // Function Type
  const [functionType, setFunctionType] = useState("");

  const debugConsoleDisplay = () => {
    console.log("number", number);
    console.log("stored number", storedNumber);
    console.log("functionType", functionType);
  };

  // handle display value
  const handleSetDisplayValue = (num) => {
    console.log("Before:");
    debugConsoleDisplay();

    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }

    console.log("After:");
    debugConsoleDisplay();
  };

  // store number and clear current number
  const handleSetStoredValue = () => {
    console.log("Before:");
    debugConsoleDisplay();

    setStoredNumber(number);
    setNumber("");

    console.log("After:");
    debugConsoleDisplay();
  };

  // handle clear button
  const handleClearButton = () => {
    console.log("Before:");
    debugConsoleDisplay();
    setNumber("");
    setStoredNumber("");
    console.log("After:");
    debugConsoleDisplay();
  };
  // handle back button
  const handleBackButton = () => {
    console.log("Before:");
    debugConsoleDisplay();

    setNumber("");

    console.log("After:");
    debugConsoleDisplay();
  };

  // handle calc function
  const handleSetCalcFunction = (type) => {
    if (functionType) {
      console.log("There is a function type");
      performOperation();
    }

    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }

    if (storedNumber) {
      setFunctionType(type);
    }
    console.log("After:");
    debugConsoleDisplay();
  };

  // perform math operations

  const performOperation = () => {
    console.log("Inside Perform Operation Function:");

    if (number && storedNumber) {
      console.log("Perform operation if there is a number and stored number");
      console.log("functionType", functionType);
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) + parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "-":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "*":
          setStoredNumber(
            `${
              Math.round(
                `${parseFloat(storedNumber) * parseFloat(number) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "/":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        default:
          break;
      }
    }
    setNumber("");
    console.log("After:");
    debugConsoleDisplay();
  };

  // toggleNegative
  const handleToggleNegative = () => {
    console.log("Before:");
    debugConsoleDisplay();
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
    console.log("After:");
    debugConsoleDisplay();
  };

  return (
    <NumberContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
