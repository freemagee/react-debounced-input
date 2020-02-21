import React, { useState } from "react";
import styled from "styled-components";
import DelayedInput from "./DelayedInput";
import SearchResults from "./SearchResults";

const FormContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
`;

function Form() {
  const initialInput = "Llama";
  const [input, setInput] = useState(initialInput);
  return (
    <FormContainer>
      <DelayedInput
        type="text"
        initialValue={initialInput}
        inputDelay={500}
        setInput={setInput}
      />
      <SearchResults searchTerm={input} />
    </FormContainer>
  );
}

export default Form;
