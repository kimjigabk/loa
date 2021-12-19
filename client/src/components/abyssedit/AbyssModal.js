import React from "react";
import { connect } from "react-redux";
import { updateAbyssProgress } from "../../actions";
// import { populateAbyss } from "./populateAbyss";
import { calculateGold } from "../calculation/calculateGold";

import { ARGOS } from "../bossedit/bossCode";

import Modal from "../Modal";

class AbyssModal extends React.Component {
  state = {
    normal: false,
    bus: false,
    busfee: 0,
    goldEarned: 0,
  };

  componentDidMount() {
    const { normal, bus, busfee, goldEarned } = this.props.abyssProgress;

    this.setState({
      normal,
      bus,
      busfee,
      goldEarned,
    });
  }

  saveAction() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.updateAbyssProgress(this.props.editingCharId, {
              ...this.state,
              goldEarned: calculateGold(
                this.state,
                ARGOS,
                this.props.editingCharitemLevel
              ),
            });
            this.props.hideEditModal();
          }}
          className="ui button negative"
        >
          저장
        </button>
        <button onClick={this.props.hideEditModal} className="ui button">
          취소
        </button>
      </React.Fragment>
    );
  }
  renderDifficulty() {
    if (this.state.gateway) return;
    return (
      <div>
        <button
          className={`ui button ${this.state["normal"] ? "violet" : ""}`}
          onClick={() => {
            this.setState((prevState) => ({
              normal: !prevState.normal,
            }));
          }}
        >
          3페클리어
        </button>
        <hr></hr>
      </div>
    );
  }

  renderBus() {
    return (
      <div>
        <button
          className={`ui button ${this.state["bus"] ? "violet" : ""}`}
          onClick={() => {
            this.setState((prevState) => ({
              bus: !prevState.bus,
            }));
          }}
        >
          버스
        </button>
        {this.state.bus && (
          <input
            type="text"
            value={this.state.busfee}
            onChange={(e) => this.setState({ busfee: e.target.value })}
          ></input>
        )}
      </div>
    );
  }
  renderGold() {
    return (
      <div>
        번 골드:{" "}
        {calculateGold(this.state, ARGOS, this.props.editingCharitemLevel)}
      </div>
    );
  }
  modalContent() {
    return (
      <div>
        {this.renderDifficulty()}
        {this.renderBus()}
        <hr></hr>
        {this.renderGold()}
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal
          title={`아르고스: ${this.props.editingCharName}`}
          content={this.modalContent()}
          actions={this.saveAction()}
          onDismiss={this.props.hideEditModal}
        ></Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ abyss }) => {
  return {
    abyss,
  };
};
export default connect(mapStateToProps, { updateAbyssProgress })(AbyssModal);
