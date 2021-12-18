import React from "react";

import BossEdit1 from "./BossEdit1";
import BossEdit2 from "./BossEdit2";
import BossEdit3 from "./BossEdit3";
import BossEdit4 from "./BossEdit4";
// this.props.charId
import { bossCode, BALTAN, BIA, KOKOU, ABREL } from "./bossCode";

class BossEdit extends React.Component {
  state = {
    isModalActive: false,
    editingCharId: null,
    showingModal: 0,
  };
  showEditModal = (charId, boss) => {
    this.setState({
      isModalActive: true,
      editingCharId: charId,
      showingModal: boss,
    });
  };
  hideEditModal = () => {
    this.setState({
      isModalActive: false,
      editingCharId: null,
      showingModal: 0,
    });
  };

  renderEdit(bp, bossnumber) {
    if (Object.keys(bp).length === 3 && !bp[bossnumber]) return;
    let color = "";
    if (bp[bossnumber]) {
      if (bp[bossnumber].includes("H0") || bp[bossnumber].includes("N0"))
        color = "blue";
      if (bp[bossnumber].includes("H1") || bp[bossnumber].includes("N1"))
        color = "yellow";
    }
    return (
      <div className="item">
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.showEditModal(this.props.charId, bossnumber);
          }}
          className={`compact ui icon button ${color}`}
        >
          <i className="edit outline icon"></i>
        </button>
        {bossCode[bossnumber]}
      </div>
    );
  }

  render() {
    const lvl = this.props.itemLevel;
    const bp = this.props.bossProgress;
    const name = this.props.charName;
    return (
      <div>
        {(() => {
          if (this.state.isModalActive) {
            if (this.state.showingModal === 1) {
              return (
                <BossEdit1
                  hideEditModal={this.hideEditModal}
                  editingCharName={name}
                  editingCharId={this.state.editingCharId}
                  editngCharitemLevel={lvl}
                  bossProgress={bp}
                />
              );
            }
            if (this.state.showingModal === 2) {
              return (
                <BossEdit2
                  hideEditModal={this.hideEditModal}
                  editingCharName={name}
                  editingCharId={this.state.editingCharId}
                  editngCharitemLevel={lvl}
                  bossProgress={bp}
                />
              );
            }
            if (this.state.showingModal === 3) {
              return (
                <BossEdit3
                  hideEditModal={this.hideEditModal}
                  editingCharName={name}
                  editingCharId={this.state.editingCharId}
                  editngCharitemLevel={lvl}
                  bossProgress={bp}
                />
              );
            }
            if (this.state.showingModal === 4) {
              return (
                <BossEdit4
                  hideEditModal={this.hideEditModal}
                  editingCharName={name}
                  editingCharId={this.state.editingCharId}
                  editngCharitemLevel={lvl}
                  bossProgress={bp}
                />
              );
            }
          }
        })()}

        <div className="ui  horizontal divided list">
          {1415 <= lvl ? this.renderEdit(bp, BALTAN) : ""}
          {1430 <= lvl ? this.renderEdit(bp, BIA) : ""}
          {1475 <= lvl ? this.renderEdit(bp, KOKOU) : ""}
          {1490 <= lvl ? this.renderEdit(bp, ABREL) : ""}
        </div>
      </div>
    );
  }
}

export default BossEdit;
