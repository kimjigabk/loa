import React from "react";
import { connect } from "react-redux";
import { fetchCharacters, saveProgress, resetProgress } from "../../actions";
import { calculateAchievement } from "../calculation/calculateAchievement";
import { calculateTotalGoldEarned } from "../calculation/calculateTotalGoldEarned";

class NextWeek extends React.Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  onClickSave = () => {
    const [top, bottom] = calculateAchievement(this.props.chars);
    const totalGold = calculateTotalGoldEarned(this.props.chars);
    this.props.saveProgress(top, bottom, totalGold);
    this.props.resetProgress(this.props.charIds);
  };
  renderSave() {
    return (
      <div className="row" style={{ marginTop: "25px", marginBottom: "10px" }}>
        <div style={{ textAlign: "right" }}>
          <button onClick={this.onClickSave} className="ui button negative">
            Save
          </button>
        </div>
      </div>
    );
  }
  render() {
    const [top, bottom] = calculateAchievement(this.props.chars);
    const totalGold = calculateTotalGoldEarned(this.props.chars);
    return (
      <div className="ui container">
        <h3 className="ui header">Summary</h3>
        <div className="ui list">
          <div className="item">이번주 벌어들인 골드: {totalGold}</div>
          <div className="item">
            군단장 진행도: {top} out of {bottom}
          </div>
        </div>
        <div className="ui section divider"></div>

        {this.renderSave()}
      </div>
    );
  }
}
const mapStateToProps = ({ char }) => {
  return {
    chars: Object.values(char),
    charIds: Object.keys(char),
  };
};
export default connect(mapStateToProps, {
  fetchCharacters,
  saveProgress,
  resetProgress,
})(NextWeek);
