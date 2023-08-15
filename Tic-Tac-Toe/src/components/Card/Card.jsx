import Icon from "../Icons/Icons";
import './card.css'
import '../../App.css'

const Card = ({iconName}) => {
    return(
        <div className="cards">
            <Icon  name={iconName}/>
        </div>
    )
}

export default Card;