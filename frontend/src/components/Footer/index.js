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
        <Link
          href="https://github.com/vladyio/kod.one"
          target="_blank"
          color="white"
          display="block"
          marginTop="8px"
          marginLeft="10px"
        >
          <Text> &copy; Vladislav Andreev </Text>
        </Link>
      </Flex>
    </footer>
  );
};

export default Footer;
