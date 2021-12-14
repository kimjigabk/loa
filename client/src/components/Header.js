import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {

  renderAuthButton() {
    // console.log(this.props.auth);
    if (this.props.auth === null) {
      return "";
    } else if (this.props.auth) {
      return (
        <div
          className="ui simple dropdown item"
          style={{ paddingBottom: "10px", borderRight: 0 }}
        >
          {this.props.auth.displayName}
          <div className="menu transition">
            <div
              className="item"
              onClick={() => this.props.history.push("/statistics")}
            >
              <i className="chart bar icon" />
              Statistics
            </div>
            <div
              className="item"
              onClick={() => this.props.history.push("/config")}
            >
              <i className="edit outline icon" />
              Config
            </div>
            <div className="item">
              <a href="/api/logout/">
                <i className="google icon" />
                Sign Out
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return <span className="ui item link"></span>;
    }
  }
  render() {
    return (
      <div className="ui tabular menu">
        <div className="item" onClick={() => this.props.history.push("/")}>
          Main
        </div>
        <div className="right menu">{this.renderAuthButton()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
const menu = withRouter(Header);
export default connect(mapStateToProps)(menu);
