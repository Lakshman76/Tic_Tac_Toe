import { useState, useCallback} from "react";
import Card from "../Card/Card";
import './grid.css';
import CheckWinner from "../helper/CheckWinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Grid = ({numberOfCards}) => {

    const [turn, setTurn] = useState(true);
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));
    const [winner, setWinner] = useState(null);

    const play = useCallback( function playCallback(index){

        if(turn){
            board[index] = 'O';
        }
        else{
            board[index] = 'X';
        }

        const win = CheckWinner(board, turn ? 'O' : 'X');
        if(win){
            setWinner(win);
            toast.success(`Congrats! ${win} won the game`)
        }
        setBoard([...board]);
        setTurn(!turn);
    },[turn])
    function reset(){
        setBoard(Array(numberOfCards).fill(''));
        setTurn(true);
        setWinner(null);
    }
    return(
        <>
            {
                winner && (
                    <div>
                        <h1 className="turn-highlight">Winner is : {winner}</h1>   
                        <button onClick={reset} className="reset-btn">Play Again</button>
                        <ToastContainer position="top-center"/>
                    </div>
                )
            }
            <h1 className="turn-highlight">Current Turn : {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
            {board.map((value, Idx) => {
                return <Card onPlay={play} gameEnd ={winner ? true : false} player={value} key={Idx} index={Idx} />
            })}
            </div>
        </>
    )
}

export default Grid;