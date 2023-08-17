import { useState } from "react";
import Card from "../Card/Card";
import './grid.css';
import CheckWinner from "../helper/CheckWinner";

const Grid = ({numberOfCards}) => {

    const [turn, setTurn] = useState(true);
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));
    const [winner, setWinner] = useState(null);

    function play(index){

        if(turn){
            board[index] = 'O';
        }
        else{
            board[index] = 'X';
        }

        const win = CheckWinner(board, turn ? 'O' : 'X');
        if(win){
            setWinner(win)
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setBoard(Array(numberOfCards).fill(''));
        setTurn(true);
        setWinner(null);
    }
    return(
        <>
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is : {winner}</h1>   
                        <button onClick={reset} className="reset-btn">Play Again</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current Turn : {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
            {board.map((value, Idx) => {
                return <Card onPlay={play} player={value} key={Idx} index={Idx} />
            })}
        </div>
        </>
    )
}

export default Grid;