import Card from "../Card/Card";
import './grid.css';

const Grid = ({numberOfCards}) => {
    return(
        <div className="grid">
            {Array(numberOfCards).fill(<Card />).map((el, Idx) => {
                return <Card key={Idx} />
            })}
        </div>
    )
}

export default Grid;