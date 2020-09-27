import React from "react";
import { Link, Text, Flex, Spacer, Box } from "@chakra-ui/core";

import "./index.css";

import ForkButton from "../ForkButton";
import LanguageSelect from "../LanguageSelect";
import SettingsPopover from "../SettingsPopover";

const Footer = () => {
  return (
    <footer>
      <Flex direction={["row"]}>
        <Box mr="10px">
          <ForkButton />
        </Box>
        <LanguageSelect />
        <Spacer />
        <SettingsPopover />
      </Flex>
    </footer>
  );
};

export default Footer;
