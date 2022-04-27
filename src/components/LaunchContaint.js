import { useState, useEffect } from "react";
import * as API from "../services/launchesApi";
import { Center, Heading } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";

export function LaunchContaint() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={3} color="#ffffff">
        <Center>Lanzamientos</Center>
      </Heading>
      <section className="Section-container">
        {launches.map((launch) => {
          return (
            <LaunchItem key={launch.flight_number} {...launch} />
          )          
        })}
      </section>
    </>
  );
}
