// import React from 'react';

class Store{
    
    constructor(rootReducer){
        this.rootReducer = rootReducer;
        this.state = {};
    }

    getState(){
        let copy = {};
        Object.assign(copy, this.state);
        return copy;
    }

}

//why cant action have a field like attributeName so it know which part of state to modify so i don't need to go through a 
//forEach loop and do nothing for certain reducers. I know from type that it can have this type of info since it already would have
//something like type:"change role" and role is probably attribute. 
//If the type works for many reducers and it is intended to be so, this would be why it doesn't have a field like attributeName.
function combineReducers(obj){
    function reduced (prevState, action){
        let c = {};
        Object.assign(c, prevState);
        Object.keys(prevState).forEach((key) => {
            let oldValue = prevState[key];
            let possiblyChangedValue = obj[key](oldValue, action) 
            c[key] = possiblyChangedValue;
        })  

        return c;
    }
    return reduced;
}


let state = {
    user: "Andy",
    role: "Instructor"
};

const roleAction = {
    type: "change role",
    newRole: "Student"
};

const roleReducer = (oldRole = null, roleAction) => {
    if (roleAction.type === "change role") {
        return roleAction.newRole;
    } else {
        return oldRole;
    }
};

const roleAction = {
    type: "rename user",
    newName: "George"
};

const userReducer = (oldUser = null, action) => {
    if(action.type === "rename user"){
        return action.newName;
    }else{
        return oldUser
    }
}