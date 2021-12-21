import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import { fetchCharacters } from "../../actions";
import logo from "./apple-icon-precomposed.png";

import Character from "../characters/Character";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }
  renderList() {
    if (this.props.auth == null) {
      return;
    }
    // not logged in
    else if (this.props.auth === false) {
      return <Redirect to="/" />;
    }
    const chars = _.orderBy(this.props.chars, ["itemLevel"], ["desc"]);
    // console.log(chars);
    if (chars.length === 0) return "";

    return (
      <table className="ui selectable celled table">
        <thead>
          <tr key={"Head"}>
            <th>이름</th>
            <th>레벨</th>
            <th>군단장</th>
            <th>어비스</th>
            <th>길드</th>
          </tr>
        </thead>
        <tbody>
          {chars.map((char) => {
            return (
              <tr key={char._id}>
                <Character
                  id={char._id}
                  characterName={char.characterName}
                  itemLevel={char.itemLevel}
                  bossProgress={char.bossProgress || {}}
                  abyssProgress={char.abyssProgress || {}}
                  guildProgress={char.guildProgress || {}}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  renderCreate() {
    return (
      <div className="row" style={{ marginTop: "25px", marginBottom: "10px" }}>
        <div style={{ textAlign: "right" }}>
          <Link to="/characters/save" className="ui button primary">
            Next Week
          </Link>
          <Link to="/characters/new" className="ui button primary">
            Create Entry
          </Link>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <span>
          <img alt="놀자에몽" src={logo} height="64" width="64"></img>
        </span>
        <div>{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = ({ char, auth }) => {
  return {
    chars: Object.values(char),
    auth,
  };
};
export default connect(mapStateToProps, { fetchCharacters })(Dashboard);
