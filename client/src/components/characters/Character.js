import React from "react";
import { Link } from "react-router-dom";
import BossEdit from "../bossedit/BossEdit";
import AbyssEdit from "../abyssedit/AbyssEdit";
import GuildEdit from "../guild/GuildEdit";

const Character = ({
  characterName,
  id,
  itemLevel,
  bossProgress,
  abyssProgress,
  guildProgress,
}) => {
  return (
    <React.Fragment>
      <td>{characterName}</td>
      <td>
        <Link to={`/characters/edit/${id}`}>{itemLevel}</Link>
      </td>
      <td>
        <BossEdit
          charId={id}
          charName={characterName}
          itemLevel={itemLevel}
          bossProgress={bossProgress}
        />
      </td>
      <td>
        <AbyssEdit
          charId={id}
          charName={characterName}
          itemLevel={itemLevel}
          abyssProgress={abyssProgress}
        />
      </td>
      <td>
        <GuildEdit
          charId={id}
          charName={characterName}
          guildProgress={guildProgress}
        />
      </td>
    </React.Fragment>
  );
};

export default Character;
