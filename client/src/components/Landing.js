import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";

class Landing extends Component {
  renderContent() {
    // console.log(this.props.auth);
    //loading
    if (this.props.auth == null) {
      return;
    }
    // not logged in
    else if (this.props.auth === false) {
      return (
        <div>
          <h2>Lost Ark homework</h2>
          <span className="ui item link">
            <a href="/auth/google">
              <i className="google icon" />
              Sign in with Google
            </a>
          </span>
        </div>
      );
    }
    // logged in, send to homework page
    else return history.push("/homework");
  }

  render() {
    // console.log(this.props);
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Landing);
