import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

DelayedInput.propTypes = {
  type: PropTypes.string,
  initialValue: PropTypes.string,
  inputDelay: PropTypes.number,
  placeHolder: PropTypes.string,
  setInput: PropTypes.func.isRequired
};

function DelayedInput({
  type = "text",
  initialValue = "",
  inputDelay = 300,
  placeHolder = "",
  setInput
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInput(value);
    }, inputDelay);
    return () => clearTimeout(timer);
  }, [value, inputDelay, setInput]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const theValue = value;

  return (
    <input
      type={type}
      value={theValue}
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
}

export default DelayedInput;
