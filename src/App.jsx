import { ChakraProvider, Heading, Box } from "@chakra-ui/react";

import Search from "./components/Search";
import { CalculationForm } from "./components";

const App = () => {
  return (
    <>
      <Box width="400px" marginX="auto" marginY="100px">
        <CalculationForm />
      </Box>
    </>
  );
};

export default App;
