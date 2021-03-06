import React from "react";
import { connect } from "react-redux";
import { updateBossProgress } from "../../actions";
import { populateBoss } from "./populateBoss";

import Modal from "../Modal";
import { calculateGold } from "../calculation/calculateGold";

class BossEdit4 extends React.Component {
  state = {
    normal: false,
    hard: false,
    gateway: false,
    n1: false,
    n2: false,
    n3: false,
    h1: false,
    h2: false,
    h3: false,
    bus: false,
    busfee: 0,
    goldEarned: 0,
  };

  componentDidMount() {
    const pb = populateBoss(this.props.bossProgress, 4);
    const {
      normal,
      hard,
      gateway,
      n1,
      n2,
      n3,
      h1,
      h2,
      h3,
      bus,
      busfee,
      goldEarned,
    } = pb;
    this.setState({
      normal,
      hard,
      gateway,
      n1,
      n2,
      n3,
      h1,
      h2,
      h3,
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
            this.props.updateBossProgress(
              this.props.editingCharId,
              {
                ...this.state,
              },
              4
            );
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
    if (this.state.gateway || this.props.editngCharitemLevel < 1520) return;
    return (
      <div>
        <button
          className={`ui button ${this.state["normal"] ? "violet" : ""}`}
          onClick={() => {
            if (!this.state.normal && this.state.hard) {
              this.setState({
                normal: true,
                hard: false,
              });
            } else
              this.setState((prevState) => ({
                normal: !prevState.normal,
              }));
          }}
        >
          노말
        </button>
        {this.props.editngCharitemLevel >= 1560 && (
          <button
            className={`ui button ${this.state["hard"] ? "violet" : ""}`}
            onClick={() => {
              if (!this.state.hard && this.state.normal) {
                this.setState({
                  normal: false,
                  hard: true,
                });
              } else
                this.setState((prevState) => ({
                  hard: !prevState.hard,
                }));
            }}
          >
            하드
          </button>
        )}
        <hr></hr>
      </div>
    );
  }
  renderGateway() {
    return (
      <div>
        <button
          className={`ui button ${this.state["gateway"] ? "violet" : ""}`}
          onClick={() => {
            this.setState((prevState) => ({
              gateway: !prevState.gateway,
              hard: false,
              normal: false,
              n1: false,
              n2: false,
              n3: false,
              h1: false,
              h2: false,
              h3: false,
            }));
          }}
        >
          관문별
        </button>
        <div style={{ paddingTop: "5px" }}>
          {this.state.gateway && (
            <button
              className={`tiny ui button ${this.state["n1"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  n1: !prevState.n1,
                  h1: false,
                }));
              }}
            >
              12-노말
            </button>
          )}
          {this.state.gateway && this.props.editngCharitemLevel >= 1500 && (
            <button
              className={`tiny ui button ${this.state["n2"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  n2: !prevState.n2,
                  h2: false,
                }));
              }}
            >
              34-노말
            </button>
          )}
          {this.state.gateway && this.props.editngCharitemLevel >= 1520 && (
            <button
              className={`tiny ui button ${this.state["n3"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  n3: !prevState.n3,
                  h3: false,
                }));
              }}
            >
              56-노말
            </button>
          )}
        </div>
        <div style={{ paddingTop: "5px" }}>
          {this.state.gateway && this.props.editngCharitemLevel >= 1540 && (
            <button
              className={`tiny ui button ${this.state["h1"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  h1: !prevState.h1,
                  n1: false,
                }));
              }}
            >
              12-하드
            </button>
          )}

          {this.state.gateway && this.props.editngCharitemLevel >= 1550 && (
            <button
              className={`tiny ui button ${this.state["h2"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  h2: !prevState.h2,
                  n2: false,
                }));
              }}
            >
              34-하드
            </button>
          )}
          {this.state.gateway && this.props.editngCharitemLevel >= 1560 && (
            <button
              className={`tiny ui button ${this.state["h3"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  h3: !prevState.h3,
                  n3: false,
                }));
              }}
            >
              56-하드
            </button>
          )}
        </div>
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
    return <div>번 골드: {calculateGold(this.state, 4)}</div>;
  }
  modalContent() {
    return (
      <div>
        {this.renderDifficulty()}
        {this.renderGateway()}
        <hr></hr>
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
          title={`아브렐슈드 for: ${this.props.editingCharName}`}
          content={this.modalContent()}
          actions={this.saveAction()}
          onDismiss={this.props.hideEditModal}
        ></Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ boss }) => {
  return {
    boss,
  };
};
export default connect(mapStateToProps, { updateBossProgress })(BossEdit4);
