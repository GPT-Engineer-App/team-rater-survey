import React, { useState } from "react";
import { Container, VStack, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaSmile, FaMeh, FaFrown, FaAngry, FaGrinHearts, FaQuestion } from "react-icons/fa";

const teamMembers = ["Alice", "Bob", "Charlie", "Diana"];

const Index = () => {
  const [ratings, setRatings] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleRating = (name, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: rating,
    }));
    if (currentIndex < teamMembers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/finish");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Team Member Survey
        </Text>
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <Text fontSize="xl" mb={4}>
            {teamMembers[currentIndex]}
          </Text>
          <HStack spacing={4}>
            <IconButton aria-label="Dislike" icon={<FaAngry />} size="lg" colorScheme={ratings[teamMembers[currentIndex]] === 1 ? "red" : "gray"} onClick={() => handleRating(teamMembers[currentIndex], 1)} />
            <IconButton aria-label="Frown" icon={<FaFrown />} size="lg" colorScheme={ratings[teamMembers[currentIndex]] === 2 ? "orange" : "gray"} onClick={() => handleRating(teamMembers[currentIndex], 2)} />
            <IconButton aria-label="Meh" icon={<FaMeh />} size="lg" colorScheme={ratings[teamMembers[currentIndex]] === 3 ? "yellow" : "gray"} onClick={() => handleRating(teamMembers[currentIndex], 3)} />
            <IconButton aria-label="Smile" icon={<FaSmile />} size="lg" colorScheme={ratings[teamMembers[currentIndex]] === 4 ? "green" : "gray"} onClick={() => handleRating(teamMembers[currentIndex], 4)} />
            <IconButton aria-label="Love" icon={<FaGrinHearts />} size="lg" colorScheme={ratings[teamMembers[currentIndex]] === 5 ? "teal" : "gray"} onClick={() => handleRating(teamMembers[currentIndex], 5)} />
            <IconButton aria-label="Unknown" icon={<FaQuestion />} size="lg" colorScheme={ratings[teamMembers[currentIndex]] === 0 ? "blue" : "gray"} onClick={() => handleRating(teamMembers[currentIndex], 0)} />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
