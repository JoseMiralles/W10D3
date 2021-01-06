import React from "react";

import Tile from "./tile";

export default class Board extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const mappedBoard = this.props.board.grid.map((row, x)=>{
            return (
                <div key={x}>
                    {row.map((tile, i) => <Tile key={i}/>)}
                </div>
            );
        });

        return(
            <>
                {mappedBoard}
            </>
        );
    }

}