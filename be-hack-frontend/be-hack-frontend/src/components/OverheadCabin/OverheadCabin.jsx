import "./OverheadCabin.css";
import { Grid, GridItem, Divider, VStack, Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";

const OverheadCabin = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBoxClick = (value) => {
    if (selectedOption === value) {
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
    }
  };

  const isBoxSelected = (value) => {
    return selectedOption === value;
  };

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <VStack spacing="10px" className="cabin" padding={5}>
            <Box
              onClick={() => handleBoxClick("A1")}
              bg={isBoxSelected("A1") ? "red" : "#0d73b1"}
              color={isBoxSelected("A1") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              A1
            </Box>
            <Divider />
            <Box
              onClick={() => handleBoxClick("A2")}
              bg={isBoxSelected("A2") ? "red" : "#0d73b1"}
              color={isBoxSelected("A2") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              A2
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              A3
            </Box>
          </VStack>
        </GridItem>

        <GridItem w="100%" h="10" bg="white" />

        <GridItem>
          <VStack spacing="10px" className="cabin" padding={5}>
            <Box
              onClick={() => handleBoxClick("A4")}
              bg={isBoxSelected("A4") ? "red" : "#0d73b1"}
              color={isBoxSelected("A4") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              A4
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              A5
            </Box>
            <Divider />
            <Box
              onClick={() => handleBoxClick("A6")}
              bg={isBoxSelected("A6") ? "red" : "#0d73b1"}
              color={isBoxSelected("A6") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              A6
            </Box>
          </VStack>
        </GridItem>
      </Grid>

      <Divider />

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <VStack spacing="10px" className="cabin" padding={5}>
            <Box
              onClick={() => handleBoxClick("B1")}
              bg={isBoxSelected("B1") ? "red" : "#0d73b1"}
              color={isBoxSelected("B1") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              B1
            </Box>
            <Divider />
            <Box
              onClick={() => handleBoxClick("B2")}
              bg={isBoxSelected("B2") ? "red" : "#0d73b1"}
              color={isBoxSelected("B2") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              B2
            </Box>
            <Divider />
            <Box
              onClick={() => handleBoxClick("B3")}
              bg={isBoxSelected("B3") ? "red" : "#0d73b1"}
              color={isBoxSelected("B3") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              B3
            </Box>
          </VStack>
        </GridItem>

        <GridItem w="100%" h="10" bg="white" />

        <GridItem>
          <VStack spacing="10px" className="cabin" padding={5}>
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              B4
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              B5
            </Box>
            <Divider />
            <Box
              onClick={() => handleBoxClick("B6")}
              bg={isBoxSelected("B6") ? "red" : "#0d73b1"}
              color={isBoxSelected("option12") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              B6
            </Box>
          </VStack>
        </GridItem>
      </Grid>

      <Divider />

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <VStack spacing="10px" className="cabin" padding={5}>
            <Box
              onClick={() => handleBoxClick("C1")}
              bg={isBoxSelected("C1") ? "red" : "#0d73b1"}
              color={isBoxSelected("C1") ? "white" : "white"}
              cursor="pointer"
              p={3}
              borderRadius="md"
            >
              C1
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              C2
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              C3
            </Box>
          </VStack>
        </GridItem>

        <GridItem w="100%" h="10" bg="white" />

        <GridItem>
          <VStack spacing="10px" className="cabin" padding={5}>
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              C4
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              C5
            </Box>
            <Divider />
            <Box
              className="border-right"
              bg="gray.100"
              color="#A9A9A9"
              cursor="not-allowed"
              p={3}
              borderRadius="md"
            >
              C6
            </Box>
          </VStack>
        </GridItem>
      </Grid>

      <div>
        <Center>
        You are Reserving: {selectedOption && <p> {selectedOption} </p>}
        </Center>
        <Center>
        <Button>Save Selection</Button>
        </Center>
        
      </div>
    </div>
  );
};

export default OverheadCabin;
