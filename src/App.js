import "./App.css";
import logo from "./assets/spacex.png";
import { Grid, Image } from "@chakra-ui/react";
import { LaunchContaint } from "./components/LaunchContaint";

export default function App() {
  return (
    <Grid background="#10182a">
      <Image src={logo} width={300} alt="Logo SpaceX" />
      <LaunchContaint />
    </Grid>
  );
}