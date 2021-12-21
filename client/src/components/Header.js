import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
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
              통계
            </div>
            <div
              className="item"
              onClick={() => this.props.history.push("/config")}
            >
              <i className="edit outline icon" />
              닉네임 변경
            </div>
            <div className="item">
              <a href="/api/logout/">
                <i className="google icon" />
                로그아웃
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
        <Link to={this.props.auth ? "/homework" : "/"} className="item">
          홈
        </Link>
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
