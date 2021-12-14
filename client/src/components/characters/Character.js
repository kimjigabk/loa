import React from "react";
import BossEdit from "../bossedit/BossEdit";

const Character = ({ characterName, id, itemLevel, bossProgress }) => {
  // console.log(bossProgress);
  return (
    // <tr key={props.id}>
    <React.Fragment>
      <td>{characterName}</td>
      <td>{itemLevel}</td>
      <td>
        <BossEdit
          charId={id}
          charName={characterName}
          itemLevel={itemLevel}
          bossProgress={bossProgress}
        />
      </td>
    </React.Fragment>
  );
};

export default Character;
