import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

DelayedInput.propTypes = {
  type: PropTypes.string,
  initialValue: PropTypes.string,
  inputDelay: PropTypes.number,
  setInput: PropTypes.func.isRequired
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1.3rem;
  border-radius: 4px;
  border: 2px solid #dadada;
  box-sizing: border-box;
  color: #444;

  &:focus {
    outline: none;
    border: 2px solid #444;
  }

  &::placeholder {
    color: #ccc;
  }
`;

function DelayedInput({
  type = "text",
  initialValue = "",
  inputDelay = 300,
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
    <StyledInput
      type={type}
      value={theValue}
      onChange={handleChange}
      placeholder="Enter search term"
    />
  );
}

export default DelayedInput;
