import {
  FormControl,
  FormLabel,
  HStack,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import logo from "/src/assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
