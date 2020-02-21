import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ResultsTitle = styled.p`
  margin: 1.2rem 0;
  font-size: 1.2rem;
  font-family: Ubuntu, sans-serif;
`;
const ResultsContainer = styled.ul`
  margin: 0;
  padding: 0 0 0 1rem;
  font-size: 1rem;
  font-family: Ubuntu, sans-serif;
`;
const ResultItem = styled.li`
  padding-bottom: 0.2rem;
  line-height: 1.4;
`;
const Link = styled.a`
  display: inline-block;
  padding: 0 0.5rem;
  background-color: #22a7f0;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #2574a9;
  }
`;

function SearchResults({ searchTerm = "" }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    function parseSearchTerm(term) {
      return term.trim();
    }

    const parsedSearchTerm = parseSearchTerm(searchTerm);

    if (parsedSearchTerm !== "") {
      fetch(`https://api.duckduckgo.com/?q=${parsedSearchTerm}&format=json`)
        .then(response => response.json())
        .then(json => {
          if (Object.keys(json).includes("RelatedTopics")) {
            setResults(json.RelatedTopics);
          } else {
            throw new Error("No related topics available");
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    } else {
      setResults([]);
    }
  }, [searchTerm, setResults]);

  return (
    <>
      <ResultsTitle>
        Related topics for:{" "}
        <em>{searchTerm !== "" ? searchTerm : "No search term provided"}</em>
      </ResultsTitle>
      <ResultsContainer>
        {results.length > 0 &&
          results.map((result, i) => {
            if (Object.keys(result).includes("Text")) {
              return (
                <ResultItem key={i}>
                  {result.Text} <Link href={result.FirstURL}>Link</Link>
                </ResultItem>
              );
            }

            return null;
          })}
        {results.length === 0 && <ResultItem>No related topics</ResultItem>}
      </ResultsContainer>
    </>
  );
}

export default SearchResults;
