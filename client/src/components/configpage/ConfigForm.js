import React from "react";
import { Field, reduxForm } from "redux-form";

class ConfigForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div
          className="ui error message"
          style={{ paddingTop: "2px", paddingBottom: "2px", marginTop: "5px" }}
        >
          <div>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    //calls parent's onSubmit.
    this.props.onSubmit(formValues);
  };
  render() {
    // console.log(this.props);
    // handleSubmit: callback function that is provided to our component by redux form.
    // by implementing reduxForm it is automatically added to props
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="displayName"
            component={this.renderInput}
            label="Enter New Name"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.displayName) {
    errors.title = "You must enter a Name";
  }

  return errors;
};

export default reduxForm({
  form: "configForm",
  validate: validate
})(ConfigForm);
