import React from "react";
import BossEdit from "../bossedit/BossEdit";
import AbyssEdit from "../abyssedit/AbyssEdit";
import GuildEdit from "../guild/GuildEdit";

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
      <td>
        <AbyssEdit />
      </td>
      <td>
        <GuildEdit />
      </td>
    </React.Fragment>
  );
};

export default Character;
