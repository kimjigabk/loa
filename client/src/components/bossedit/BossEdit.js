import React from "react";

import BossEdit1 from "./BossEdit1";
import BossEdit2 from "./BossEdit2";
import BossEdit3 from "./BossEdit3";
import BossEdit4 from "./BossEdit4";
// this.props.charId
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

  renderItem1(bp) {
    if (Object.keys(bp).length === 3 && !bp["1"]) return;
    let color = "";
    if (bp["1"]) {
      if (bp["1"].includes("H0") || bp["1"].includes("N0")) color = "blue";
      if (bp["1"].includes("H1") || bp["1"].includes("N1")) color = "yellow";
    }
    return (
      <div className="item">
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.showEditModal(this.props.charId, 1);
          }}
          className={`compact ui icon button ${color}`}
        >
          <i className="edit outline icon"></i>
        </button>
        Boss1
      </div>
    );
  }
  renderItem2(bp) {
    if (Object.keys(bp).length === 3 && !bp["2"]) return;
    let color = "";
    if (bp["2"]) {
      if (bp["2"].includes("H0") || bp["2"].includes("N0")) color = "blue";
      if (bp["2"].includes("H1") || bp["2"].includes("N1")) color = "yellow";
    }
    return (
      <div className="item">
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.showEditModal(this.props.charId, 2);
          }}
          className={`compact ui icon button ${color}`}
        >
          <i className="edit outline icon"></i>
        </button>
        Boss2
      </div>
    );
  }
  renderItem3(bp) {
    if (Object.keys(bp).length === 3 && !bp["3"]) return;
    let color = "";
    if (bp["3"]) {
      if (bp["3"].includes("H0") || bp["3"].includes("N0")) color = "blue";
      if (bp["3"].includes("H1") || bp["3"].includes("N1")) color = "yellow";
    }
    return (
      <div className="item">
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.showEditModal(this.props.charId, 3);
          }}
          className={`compact ui icon button ${color}`}
        >
          <i className="edit outline icon"></i>
        </button>
        Boss3
      </div>
    );
  }
  renderItem4(bp) {
    if (Object.keys(bp).length === 3 && !bp["4"]) return;
    let color = "";
    if (bp["4"]) {
      if (bp["4"].includes("H0") || bp["4"].includes("N0")) color = "blue";
      if (bp["4"].includes("H1") || bp["4"].includes("N1")) color = "yellow";
    }
    return (
      <div className="item">
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.showEditModal(this.props.charId, 4);
          }}
          className={`compact ui icon button ${color}`}
        >
          <i className="edit outline icon"></i>
        </button>
        Boss4
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
          {1415 <= lvl ? this.renderItem1(bp) : ""}
          {1430 <= lvl ? this.renderItem2(bp) : ""}
          {1475 <= lvl ? this.renderItem3(bp) : ""}
          {1490 <= lvl ? this.renderItem4(bp) : ""}
        </div>
      </div>
    );
  }
}

export default BossEdit;
