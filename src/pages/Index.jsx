import React, { useState } from "react";
import { Container, VStack, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaSmile, FaMeh, FaFrown, FaAngry, FaGrinHearts } from "react-icons/fa";

const teamMembers = ["Alice", "Bob", "Charlie", "Diana"];

const Index = () => {
  const [ratings, setRatings] = useState({});

  const handleRating = (name, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: rating,
    }));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Team Member Survey
        </Text>
        {teamMembers.map((member) => (
          <Box key={member} p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text fontSize="xl" mb={4}>
              {member}
            </Text>
            <HStack spacing={4}>
              <IconButton aria-label="Dislike" icon={<FaAngry />} size="lg" colorScheme={ratings[member] === 1 ? "red" : "gray"} onClick={() => handleRating(member, 1)} />
              <IconButton aria-label="Frown" icon={<FaFrown />} size="lg" colorScheme={ratings[member] === 2 ? "orange" : "gray"} onClick={() => handleRating(member, 2)} />
              <IconButton aria-label="Meh" icon={<FaMeh />} size="lg" colorScheme={ratings[member] === 3 ? "yellow" : "gray"} onClick={() => handleRating(member, 3)} />
              <IconButton aria-label="Smile" icon={<FaSmile />} size="lg" colorScheme={ratings[member] === 4 ? "green" : "gray"} onClick={() => handleRating(member, 4)} />
              <IconButton aria-label="Love" icon={<FaGrinHearts />} size="lg" colorScheme={ratings[member] === 5 ? "teal" : "gray"} onClick={() => handleRating(member, 5)} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
