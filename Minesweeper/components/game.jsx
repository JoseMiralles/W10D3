import React from "react";

import Board from "./board"

import * as Minesweeper from "../minesweeper";

export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(10, 6),
            won: false,
            lost: false
        };
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    restartGame(){
        this.setState({
            board: new Minesweeper.Board(5, 6),
            won: false,
            lost: false
        });
    }

    updateGame(tile, shouldFlag){
        if (shouldFlag){
            tile.toggleFlag();
        } else {
            tile.explore();
            if (this.state.board.lost()){
                this.setState({lost: true});
            } else if (this.state.board.won()){
                this.setState({won: true});
            }
        }

        this.setState({board: this.state.board});
    }

    render(){

        let message = "";
        if (this.state.won) message = "You've won!";
        if (this.state.lost) message = "You've lost!"

        let modal = "";
        if (message){
            modal = 
            <div className="modal">
                <div className="modal-screen">
                    <div className="modal-banner">
                        <h1>{message}</h1>
                        <button onClick={this.restartGame}>Restart</button>
                    </div>
                </div>
            </div>
        }

        return(
            <div className="board-wrapper">
                <Board board={this.state.board} updateGame={this.updateGame} />
                {modal}
            </div>
        );
    }
}