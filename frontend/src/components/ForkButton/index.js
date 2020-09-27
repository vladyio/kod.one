import React from "react";
import { connect } from "react-redux";
import { Button, Text } from "@chakra-ui/core";
import { GoRepoForked } from "react-icons/go";

import { Notification } from "../Notification";
import SnippetAPI from "../../api/snippet";

const ForkButton = ({ snippetId }) => {
  function handleClick() {
    SnippetAPI.fork(snippetId)
      .then((snippetFork) => {
        const currentUrl = window.location.origin;
        const sid = snippetFork.data.id;
        window.open(`${currentUrl}/${sid}`);
      })
      .catch((error) => {
        // TODO Add alert with error
      });
  }

  return (
    <Button
      colorScheme="teal"
      variant="solid"
      onClick={handleClick}
      rightIcon={<GoRepoForked size="1.2em" />}
    >
      <Text>Fork</Text>
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    snippetId: state.snippet.snippetId,
  };
};

export default connect(mapStateToProps, null)(ForkButton);
