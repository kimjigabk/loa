import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchCharacter, editCharacter } from "../../actions";
import CharacterForm from "./CharacterForm";

class CharacterEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCharacter(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editCharacter(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.character) {
      return <div>불러오는 중</div>;
    }
    return (
      <div style={{ margin: "0 5rem" }}>
        <h2>수정할 캐릭터: {this.props.character.characterName}</h2>
        <CharacterForm
          initialValues={_.pick(
            this.props.character,
            "characterName",
            "itemLevel"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    character: state.char[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchCharacter,
  editCharacter,
})(CharacterEdit);
