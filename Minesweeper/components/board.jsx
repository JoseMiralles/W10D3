import React from "react";

import Tile from "./tile";

export default class Board extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const mappedBoard = this.props.board.grid.map((row, x)=>{
            return (
                <div className="board-row" key={x}>
                    {row.map((tile, i) => <Tile tile={tile} updateGame={this.props.updateGame} key={i}/>)}
                </div>
            );
        });

        
        return(
            <div className="board">
                {mappedBoard}
            </div>
        );
    }

}