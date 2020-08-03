import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider";

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction, performOperation } = useContext(NumberContext);
  return (
    <button
      className="function-button"
      type="button"
      onClick={() => {
        // performOperation();
        handleSetCalcFunction(buttonValue);
      }}
    >
      {buttonValue}
    </button>
  );
};

export default FunctionButton;
