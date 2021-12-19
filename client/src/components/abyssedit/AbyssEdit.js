import React from "react";
// import { bossCode, ARGOS } from "../bossedit/bossCode";
import AbyssModal from "./AbyssModal";

class AbyssEdit extends React.Component {
  state = {
    isModalActive: false,
    editingCharId: null,
  };
  showEditModal = (charId, boss) => {
    this.setState({
      isModalActive: true,
      editingCharId: charId,
    });
  };
  hideEditModal = () => {
    this.setState({
      isModalActive: false,
      editingCharId: null,
    });
  };
  renderEdit(ap) {
    if (!ap) return;
    let color = "";
    if (ap["normal"]) color = "blue";
    return (
      <div className="item">
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.showEditModal(this.props.charId);
          }}
          className={`compact ui icon button ${color}`}
        >
          <i className="edit outline icon"></i>
        </button>
        아르고스
      </div>
    );
  }

  render() {
    const lvl = this.props.itemLevel;
    const ap = this.props.abyssProgress;
    const name = this.props.charName;
    return (
      <div>
        {this.state.isModalActive && (
          <AbyssModal
            hideEditModal={this.hideEditModal}
            editingCharName={name}
            editingCharId={this.state.editingCharId}
            editingCharitemLevel={lvl}
            abyssProgress={ap}
          />
        )}
        <div>{this.renderEdit(ap)}</div>
      </div>
    );
  }
}

export default AbyssEdit;
