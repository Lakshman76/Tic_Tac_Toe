import Icon from "../Icons/Icons";
import "./card.css";
import "../../App.css";

const Card = ({ onPlay, player, index }) => {

    let icon = <Icon />
    if(player == "X"){
        icon = <Icon name={'cross'} />
    }
    else if(player == "O"){
        icon = <Icon name={'circle'} />
    }

  return (
    <div className="cards" onClick={() => onPlay(index)}>
      {icon}
    </div>
  );
};

export default Card;
