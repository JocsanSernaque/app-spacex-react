import { FaCalendarAlt, FaWikipediaW, FaYoutube } from "react-icons/fa";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  Icon,
  Image,
  Center,
  Link,
  Badge,
} from "@chakra-ui/react";
export const LaunchItem = (launch) => {
  return (
    <Box
      bg="#ffffff"
      color="#011a43"
      p={4}
      m={5}
      borderRadius="lg"
      width="300px"
      height="420px"
      _hover={{
        background:
          "linear-gradient(180deg, rgba(20,170,125,1) 0%, rgba(44,90,112,1) 50%);",
        color: "#ffffff",
      }}
    >
      <Flex m={2} alignItems="center">
        <Box>
          <Text>Misión</Text>
          <strong>
            <Text fontSize="md" as="i">
              {launch.mission_name}
            </Text>
          </strong>
        </Box>
        <Spacer />
        <Box>
          <Text>Cohete</Text>
          <strong>
            <Text fontSize="md" as="i">
              {launch.rocket.rocket_name}
            </Text>
          </strong>
        </Box>
      </Flex>
      <Flex mb={4}>
        <Center w="full">
          <Image
            src={launch.links.mission_patch_small}
            width={150}
            alt={launch.mission_name}
          />
        </Center>
      </Flex>

      <Flex alignItems="center" mt={8}>
        <Icon as={FaCalendarAlt} w={6} h={6} />
        <Text fontSize="sm" ml={1}>
          {launch.launch_date_local.split("T")[0]}
        </Text>
        <Spacer />
        <Badge p={2} bg={launch.launch_success ? "#40d970" : "#e74b4b"}>
          {launch.launch_success ? "Misión exitosa" : "Misión fallida"}
        </Badge>
      </Flex>
      <Flex mt={5} align="center" justify="center">
        <Box>
          <Button
            as="a"
            target="_blank"
            href={launch.links.article_link}
            colorScheme="#011a43"
            variant="outline"
            mt={2}
          >
            Ver más
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Flex mt={4}>
            <Link href={launch.links.wikipedia} isExternal m={2}>
              <Icon as={FaWikipediaW} w={8} h={8}></Icon>
            </Link>
            <Link href={launch.links.video_link} isExternal m={2}>
              <Icon as={FaYoutube} w={8} h={8}></Icon>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};