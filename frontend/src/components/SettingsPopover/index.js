import React from 'react'
import {
  connect
} from 'react-redux';
import {
  FiSettings
} from "react-icons/fi"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, FormLabel, Input, Button
} from "@chakra-ui/core"

const SettingsPopover = ({ snippetId }) => {
  return (
    <Popover placement='top'>
      <PopoverTrigger>
        <Button
          colorScheme="teal"
          variant="outline">
          <FiSettings size="1.2em" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Settings</PopoverHeader>
        <PopoverBody>
          <FormLabel>Snippet ID</FormLabel>
          <Input placeholder={snippetId} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const mapStateToProps = (state) => {
  return {
    snippetId: state.snippet.snippetId
  }
}

export default connect(mapStateToProps, null)(SettingsPopover)
