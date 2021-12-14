import React, { Component } from "react";
import { connect } from "react-redux";

import { createCharacter } from "../../actions";
import CharacterForm from "./CharacterForm";

class CharacterCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createCharacter(formValues);
  };
  render() {
    return (
      <div style={{ margin: "0 5rem" }}>
        <h2>Create a Entry</h2>
        <CharacterForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { createCharacter })(CharacterCreate);
