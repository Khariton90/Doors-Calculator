import { useEffect, useState } from 'react';
import '../../App.css';
import { BlankDoor } from '../blank-door/blank-door';


function App():JSX.Element {
  const [count, setCount] = useState([1]);

  useEffect(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  },[count])

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
            open={arr.length - 1 === index && true}
            addBlankDoorHandle={addBlankDoorHandle}
             />
        ))
      }
    </div>
  );
}

export default App;
