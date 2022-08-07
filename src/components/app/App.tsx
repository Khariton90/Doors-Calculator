import { useState } from 'react';
import '../../App.css';
import { BlankDoor } from '../blank-door/blank-door';


function App():JSX.Element {
  const [count, setCount] = useState([1]);

  const addBlankDoorHandle = () => {
    setCount((prevCount) => {
      const next = (prevCount.length - 1) + 1;
      return [...prevCount, next]
    });
  }

  return (
    <div className="App">
      {
        count.map((el, index, arr) => (
          <BlankDoor 
            key={index}
            open={index === arr.length - 1 && true}
            addBlankDoorHandle={addBlankDoorHandle}
             />
        ))
      }
    </div>
  );
}

export default App;
