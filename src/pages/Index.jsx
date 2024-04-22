import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaAngleRight, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex align="center" justify="space-between" py={8}>
        <Heading as="h1" size="xl">
          Startup Accelerator
        </Heading>
        <Button colorScheme="teal" rightIcon={<FaAngleRight />}>
          Apply Now
        </Button>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} spacing={10} py={10}>
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwwfHx8fDE3MTM3Nzc5NDB8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
        <VStack flex="1" align="start" justify="center">
          <Heading as="h2" size="lg">
            Empowering Innovators
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Join our accelerator program and turn your startup idea into a reality. Get access to funding, mentoring, and a network of successful entrepreneurs.
          </Text>
          <Button colorScheme="orange" rightIcon={<FaRocket />}>
            Learn More
          </Button>
        </VStack>
      </Stack>
      <Box py={10}>
        <Heading as="h3" size="md" mb={4}>
          Our Programs
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <ProgramCard title="Seed Funding" description="Secure initial funding to kickstart your business idea." icon={<FaRocket />} />
          <ProgramCard title="Mentorship" description="Gain insights and advice from industry leaders." icon={<FaAngleRight />} />
          <ProgramCard title="Networking" description="Connect with other entrepreneurs and potential investors." icon={<FaRocket />} />
        </Flex>
      </Box>
      <Flex align="center" justify="center" py={10}>
        <Link href="#" color="teal.500" fontSize="lg">
          See all programs <FaAngleRight />
        </Link>
      </Flex>
    </Container>
  );
};

const ProgramCard = ({ title, description, icon }) => {
  return (
    <VStack p={5} boxShadow="md" borderRadius="lg" border="1px" borderColor="gray.200" align="start" spacing={4} width="100%">
      <Flex align="center" gap={2}>
        {icon}
        <Heading as="h4" size="md">
          {title}
        </Heading>
      </Flex>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

export default Index;
