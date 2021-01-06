import React from "react";

export default class Tile extends React.Component{
    constructor(props){
        super(props);
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
            <div className={classNames}>
                {c}
            </div>
        );
    }
}