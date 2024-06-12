import { useState } from "react";

import rules from "../helper/production-planner/rules.js";
import membership from "../helper/production-planner/membership.js";
import aggregation from "../helper/production-planner/aggregation.js";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";

const CalculationForm = () => {
  const [demand, setDemand] = useState(4700);
  const [supply, setSupply] = useState(800);
  const [production, setProduction] = useState(0);

  const calculateProduction = () => {
    const fuzzyDemandValues = membership.fuzzyDemand(demand);
    const fuzzySupplyValues = membership.fuzzySupply(supply);
    const ruleResults = rules.applyRules(fuzzyDemandValues, fuzzySupplyValues);
    const productionResult = aggregation.defuzzify(ruleResults);

    setProduction(productionResult);
  };

  return (
    <Container>
      <Text textTransform="uppercase" fontSize="xl" as="b">
        Fuzzy Mamdani Production Planner
      </Text>

      <Text fontSize="sm" textColor="gray.400">For bottled water</Text>

      <FormControl
        border="1px"
        borderColor="lightgray"
        borderRadius="md"
        padding="8"
        marginY="4"
      >
        <Box marginBottom={4}>
          <FormLabel>Demand </FormLabel>
          <Input
            type="number"
            value={demand}
            onChange={(e) => setDemand(e.target.value)}
          />
        </Box>
        <Box marginBottom={4}>
          <FormLabel>Supply </FormLabel>
          <Input
            type="number"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />
        </Box>
        <Button colorScheme="blue" size="sm" onClick={calculateProduction}>
          Calculate Production
        </Button>
      </FormControl>

      <Text textTransform="uppercase" fontSize="lg" as="b">
        Calculated Production
      </Text>
      <Container
        border="1px"
        borderColor="lightgray"
        borderRadius="md"
        padding="8"
        marginTop={4}
      >
        <Text as="b" fontSize="md">
          {production !== null && production}
        </Text>
      </Container>
    </Container>
  );
};

export default CalculationForm;
