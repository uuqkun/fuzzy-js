import { useState, useEffect } from "react";
import { Box, Flex, Center, chakra } from "@chakra-ui/react";

import data from "../MOCK_DATA.json";
import Fuse from "fuse.js";

import { SearchIcon } from "@chakra-ui/icons";

import SearchResults from "./SearchResults";

const Search = () => {
  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => setQueryText(e.target.value);

  useEffect(() => {
    if (!queryText) {
      setSearchResults([]);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["first_name", "last_name", "email"],
      includeMatches: true,
      threshold: 0.5,
    });

    const result = fuse.search(queryText, { limit: 10 });
    console.log(result);
    setSearchResults(result);
  }, [queryText]);

  return (
    <Box
      sx={{
        rounded: "lg",
        overflow: "hidden",
        bg: "transparent",
        shadow: "lg",
        maxW: "600px",
        width: "90%",
        mt: "1rem",
        mx: "auto",
      }}
    >
      <Flex pos="relative" align="strech">
        <chakra.input
          type=""
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          maxLength={64}
          sx={{
            w: "100%",
            h: "68px",
            pl: "68px",
            fontWeight: "medium",
            outline: 0,
          }}
          placeholder="Search"
          value={queryText}
          onChange={handleChange}
        />

        <Center pos="absolute" left={7} h="68px">
          <SearchIcon color="teal.500" boxSize="20px" />
        </Center>
      </Flex>

      {queryText && (
        <Box maxH="70vh" p="0" overflowY="auto">
          <Box px={4}>
            <Box borderTopWidth="1px" pt={2} pb={4}>
              <SearchResults searchResults={searchResults} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Search;
