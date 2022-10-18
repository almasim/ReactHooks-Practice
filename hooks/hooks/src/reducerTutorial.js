import React,{useReducer} from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return{count:state.count+1,showtext:state.showtext};
        case "toggleShowtext":
            return{count:state.count,showtext:!state.showtext};
        default:
            return state;
    }
};

const ReducerTutorial=()=>{
   const [state, dispatch] = useReducer(reducer, {count:0,showtext:true});
    return(
            <div>
                <h1>{state.count}</h1>
                <button onClick={()=>{
                    dispatch({type: "INCREMENT"});
                    dispatch({type:"toggleShowtext"});}}
                    >Click Here</button>
                {state.showtext && <p>This is a text</p>}
            </div>
    );
}

export default ReducerTutorial;