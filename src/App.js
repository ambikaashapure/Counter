import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react' ;


function App() { 
  const [inputValue, setInputValue] = useState(0);

  const incrementCount = (event) => {
    event.preventDefault();
    setInputValue(inputValue+1);
  };

  const decrementCount = (event) => {
    if (inputValue<1){
      alert('invalid input')
    }
    else{
    event.preventDefault();
    setInputValue(inputValue-1);
    }
   
  };

  const increamentCountByFifty = (event) => {
    event.preventDefault();
    setInputValue(inputValue+50);
  };

  const handleChange=(event)=>{
    setInputValue(parseInt(event.target.value));
  };

  
  
  return (
    <>
    <title>My Counter</title>
    <h1 align = "center">
    <div className="blank">COUNTER</div>
    </h1>
    <div className="container">
      <form >
      <label>Enter you number:
      <input type="number" name="num" id="num" onChange={handleChange} />
      </label>
      <br/><button onClick ={incrementCount} type="submit"> Increment </button>
      <button onClick ={decrementCount} type="submit"> Decrement </button>
      <button onClick ={increamentCountByFifty} type="submit"> Increment by 50 </button><br/>
      <label>Output:
      <textarea type="number" name="num" id="num" value ={inputValue} />
      </label>
    </form>
    </div>
    </>
  );
  }

export default App;
