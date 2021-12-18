import React from "react";
import { connect } from "react-redux";
import { updateBossProgress } from "../../actions";
import { populateBoss } from "./populateBoss";

import Modal from "../Modal";
import { calculateGold } from "./calculateGold";

class BossEdit1 extends React.Component {
  state = {
    normal: false,
    hard: false,
    gateway: false,
    n1: false,
    n2: false,
    h1: false,
    h2: false,
    bus: false,
    busfee: 0,
    goldEarned: 0,
  };

  componentDidMount() {
    const pb = populateBoss(this.props.bossProgress, 1);
    const { normal, hard, gateway, n1, n2, h1, h2, bus, busfee, goldEarned } =
      pb;
    this.setState({
      normal,
      hard,
      gateway,
      n1,
      n2,
      h1,
      h2,
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
              1
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
    if (this.state.gateway) return;
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
        {this.props.editngCharitemLevel >= 1445 && (
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
              h1: false,
              h2: false,
            }));
          }}
        >
          관문별
        </button>
        {this.state.gateway && (
          <div style={{ paddingTop: "10px" }}>
            <button
              className={`tiny ui button ${this.state["n1"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  n1: !prevState.n1,
                  h1: false,
                }));
              }}
            >
              1-노말
            </button>
            <button
              className={`tiny ui button ${this.state["n2"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  n2: !prevState.n2,
                  h2: false,
                }));
              }}
            >
              2-노말
            </button>
          </div>
        )}
        {this.state.gateway && this.props.editngCharitemLevel >= 1445 && (
          <div style={{ paddingTop: "10px" }}>
            <button
              className={`tiny ui button ${this.state["h1"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  h1: !prevState.h1,
                  n1: false,
                }));
              }}
            >
              1-하드
            </button>
            <button
              className={`tiny ui button ${this.state["h2"] ? "violet" : ""}`}
              onClick={() => {
                this.setState((prevState) => ({
                  h2: !prevState.h2,
                  n2: false,
                }));
              }}
            >
              2-하드
            </button>
          </div>
        )}
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
    return <div>번 골드: {calculateGold(this.state, 1)}</div>;
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
          title={`발탄: ${this.props.editingCharName}`}
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
export default connect(mapStateToProps, { updateBossProgress })(BossEdit1);
