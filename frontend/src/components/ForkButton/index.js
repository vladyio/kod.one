import React from 'react'

import {
  Button,
  Text
} from "@chakra-ui/core"

import { GoRepoForked } from "react-icons/go"

const ForkButton = () => {
  return (
    <Button colorScheme="teal" variant="solid">
      <Text>Fork</Text>
      <GoRepoForked size="1.2em" />
    </Button>
  )
}

export default ForkButton
