import React from "react";
import { connect } from "react-redux";
import { editUser } from "../../actions";
import ConfigForm from "./ConfigForm";

class Config extends React.Component {
  onSubmit = (formValues) => {
    this.props.editUser(formValues);
  };
  render() {
    if (!this.props.auth) return "Loading";
    return (
      <div style={{ margin: "0 5rem" }}>
        <h2>이름 바꾸기</h2>
        <ConfigForm
          initialValues={{ displayName: this.props.auth.displayName }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps, { editUser })(Config);
