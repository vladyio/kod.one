import React from 'react'
import {
  Box, CloseButton,
  Alert, AlertIcon, AlertTitle, AlertDescription
} from "@chakra-ui/core"

const Notification = ({status, title, description}) => {
  return (
    <Alert status={status}>
    <AlertIcon />
    <Box flex="1">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription display="block">
        {description}
      </AlertDescription>
    </Box>
    <CloseButton position="absolute" right="8px" top="8px" />
  </Alert>
  )
}

export default Notification
