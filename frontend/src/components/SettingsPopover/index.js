import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoadedSnippetId } from "../../actions/snippet";
import { FiSettings } from "react-icons/fi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";

import SnippetAPI from "../../api/snippet";

const SettingsPopover = ({ snippetId, setLoadedSnippetId }) => {
  function handleChange(event) {
    const value = event.target.value;
    SnippetAPI.update(snippetId, {
      sid: value,
    }).then((snippet) => {
      setLoadedSnippetId(snippet.data.id);
      window.history.replaceState(null, null, `/${value}`);
    });
  }

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button colorScheme="teal" variant="outline">
          <FiSettings size="1.2em" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader> Settings </PopoverHeader>
        <PopoverBody>
          <FormLabel> Snippet ID </FormLabel>
          <Input placeholder={snippetId} onChange={handleChange} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const mapStateToProps = (state) => {
  return {
    snippetId: state.snippet.snippetId,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLoadedSnippetId: setLoadedSnippetId,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPopover);
