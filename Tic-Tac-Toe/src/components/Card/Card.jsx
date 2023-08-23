import Icon from "../Icons/Icons";
import "./card.css";
import "../../App.css";
import {memo} from "react";

const Card = ({ onPlay, player, index, gameEnd }) => {

    let icon = <Icon />
    if(player == "X"){
        icon = <Icon name={'cross'} />
    }
    else if(player == "O"){
        icon = <Icon name={'circle'} />
    }

  return (
    <div className="cards" onClick={() => !gameEnd && player=="" && onPlay(index)}>
      {icon}
    </div>
  );
};

export default memo(Card);
