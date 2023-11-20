import './App.css';
import { useReducer} from 'react';

function App() {
  function reducer(state,action){
    switch (action.type) {
      case "increment";
        reutn
        
        break;
    
      default:
        break;
    }
  }
  
 }
  
 // const [state, dispatch] = useReducer(reducer, {count:1})
  // return(
  //   <>
  //     <button>+</button>
  //     <div>deyerim: {state.count}</div>
  //   </>

  // )
  







export default App;



// const input = useRef()
//   const showbtn = useRef()
//   function showValue(){
//     console.log(input.current.value);
//      console.log(showbtn.current.textContent);
//   }
//   return (
//     <div>
//       <input type="text" ref={input}/>
//       <button onClick={showValue} ref={showbtn}>Show</button>
      
//     </div>
//   );

