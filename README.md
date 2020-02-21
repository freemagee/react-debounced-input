# React Debounced Input

A react form input component that adds a "debounced" delay to input `onChange` events. This is a controlled element, so it must have a container component that passes props to it. 

[Demo](https://freemagee.github.io/react-debounced-input/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

The **DelayedInput** component is located in */src/*. It has no external dependencies. You can take either the DelayedInput *dir*, or the DelayedInput.js *file*.

## Usage

Example usage in an App:

```javascript
import React, { useState } from "react";
import { DelayedInput } from "./DelayedInput";

function App() {
  const initialInput = "The initial input";
  const [input, setInput] = useState(initialInput);
  return (
    <App>
      <DelayedInput
        type="text"
        initialValue={initialInput}
        inputDelay={500}
        placeHolder="Enter search term"
        setInput={setInput}
      />
    </App>
  );
}

export default App;
```

### Props

**DelayedInput** uses these props:

```javascript
DelayedInput.propTypes = {
  type: PropTypes.string,
  initialValue: PropTypes.string,
  inputDelay: PropTypes.number,
  placeHolder: PropTypes.string,
  setInput: PropTypes.func.isRequired
};
```

Most props have a default value if they are not provided:

```
type = "text"
initialValue = ""
inputDelay = 300
placeHolder = ""
```

`setInput` is a callback function passed in as a prop from it's container component. That will feed back the new values and "lift state up".