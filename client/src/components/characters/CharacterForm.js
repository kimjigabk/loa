import React from "react";
import { Field, reduxForm } from "redux-form";

class CharacterForm extends React.Component {
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
  onSubmit = (formValues) => {
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
            name="characterName"
            component={this.renderInput}
            label="Enter Character Name"
          />
          <Field
            name="itemLevel"
            component={this.renderInput}
            label="Enter Item Level"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

function matchItemlevel(itemLevel) {
  if (itemLevel >= 1415 && itemLevel < 1700) return true;
  else return false;
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.characterName) {
    errors.characterName = "You must enter a name";
  }

  if (!formValues.itemLevel) {
    errors.itemLevel = "You must enter an item level";
  }
  if (!matchItemlevel(formValues.itemLevel)) {
    errors.itemLevel = "You must enter a valid item level";
  }
  return errors;
};

// const mapStateToProps = state => {};

export default reduxForm({
  form: "characterForm",
  validate: validate,
})(CharacterForm);
