
import { useReducer } from 'react';

function Reducer(state,action) {
  switch (action.type) {
    case 'increment':
      console.log("Increment");
      return{count:state.count+1}
    case 'decrement':
      console.log("Decrement");
      return{count:state.count-1}
    default:
      break;
  } 
}

export const App=()=>{
  const [state,setState]=useReducer(Reducer,{count:0})
    return (
      <>
      {state.count}
      <button onClick={()=>setState({type:'increment'})}>+</button>
      <button onClick={()=>setState({type:'decrement'})}>-</button>
      </>
    );
}

export default App
