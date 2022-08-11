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
  PopoverFooter,
  FormLabel,
  Editable,
  EditablePreview,
  EditableInput,
  Input,
  Button,
  Text,
  Link,
  Center,
  Flex,
  Switch,
} from "@chakra-ui/react";

import SnippetAPI from "../../api/snippet";

const SettingsPopover = ({ snippetId, setLoadedSnippetId }) => {
  function handleChange(value) {
    if (!value) {
      return;
    }
    SnippetAPI.update(snippetId, {
      sid: value,
    }).then((snippet) => {
      setLoadedSnippetId(snippet.data.id);
      window.history.replaceState(null, null, `/${value}`);
    });
  }

  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button colorScheme="teal" variant="outline">
          <FiSettings size="1.2em" />
        </Button>
      </PopoverTrigger>
      <PopoverContent minWidth="25%">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader> Settings </PopoverHeader>
        <PopoverBody>
          <Flex
            direction="column"
            alignItems="stretch"
            justifyContent="space-between"
          >
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              marginBottom="1em"
            >
              <FormLabel> Snippet ID </FormLabel>
              <Editable
                placeholder={snippetId}
                defaultValue={snippetId}
                maxWidth="50%"
                onSubmit={handleChange}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Flex>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              marginBottom="1em"
            >
              <FormLabel> Read-Only </FormLabel>
              <Switch maxWidth="50%"></Switch>
            </Flex>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              marginBottom="1em"
            >
              <FormLabel> Password </FormLabel>
              <Input type="password" maxWidth="50%" />
            </Flex>
          </Flex>
        </PopoverBody>
        <PopoverFooter className="copyright">
          <Center>
            <Link
              href="https://github.com/vladyio/kod.one"
              target="_blank"
              display="block"
              marginTop="8px"
              marginLeft="10px"
              color="#3182CE"
            >
              <Text> &copy; Vladislav Andreev </Text>
            </Link>
          </Center>
        </PopoverFooter>
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
