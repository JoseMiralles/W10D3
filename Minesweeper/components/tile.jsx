import React from "react";

export default class Tile extends React.Component{
    constructor(props){
        super(props);

        this.shouldFlag = false;

        this.handleTileClick = this.handleTileClick.bind(this);
        this.handleAltKeyDown = this.handleAltKeyDown.bind(this);
        this.handleAltKeyUp = this.handleAltKeyUp.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleAltKeyDown, false);
        document.addEventListener("keyup", this.handleAltKeyUp, false);
    }

    handleAltKeyUp(event){
        if (event.isComposing || event.keyCode === 18) {
            this.shouldFlag = false;
        }
    }

    handleAltKeyDown(event){
        if (event.isComposing || event.keyCode === 18) {
            this.shouldFlag = true;
        }
    }

    handleTileClick(e){
        this.props.updateGame(this.props.tile, this.shouldFlag);
    }

    render(){
        const t = this.props.tile;
        
        let c = (t.adjacentBombCount() === 0) ? <>&nbsp;</> : t.adjacentBombCount();
        if (t.bombed) c = <>&#x1F4A3;</>;
        if (t.flagged && !t.explored) c = <>&#127988;</>;
        
        let classNames = "tile";
        if (t.bombed) classNames += " bombed";
        if (t.flagged) classNames += " flagged";
        if (t.explored) classNames += " revealed";
        if (!t.explored) classNames += " hidden";

        return(
            <div onClick={this.handleTileClick} className={classNames}>
                {c}
            </div>
        );
    }
}