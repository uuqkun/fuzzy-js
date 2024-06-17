import { ChakraProvider, Heading, Box } from "@chakra-ui/react";
import { CalculationForm, PonselBekasForm } from "./components";

const App = () => {
  return (
    <>
      <Box width="400px" marginX="auto" marginY="100px">
        {/* 2 inputs */}
        {/* <CalculationForm /> */}

        {/* 3 inputs */}
        <PonselBekasForm />
      </Box>
    </>
  );
};

export default App;
