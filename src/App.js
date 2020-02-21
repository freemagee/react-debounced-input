import React, { useState } from "react";
import styled from "styled-components";
import { FancyDelayedInput } from "./FancyDelayedInput";
import SearchResults from "./SearchResults";

const AppContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
`;

function App() {
  const initialInput = "Llama";
  const [input, setInput] = useState(initialInput);
  return (
    <AppContainer>
      <FancyDelayedInput
        type="text"
        initialValue={initialInput}
        inputDelay={500}
        placeHolder="Enter search term"
        setInput={setInput}
      />
      <SearchResults searchTerm={input} />
    </AppContainer>
  );
}

export default App;
