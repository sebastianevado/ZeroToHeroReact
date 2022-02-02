import './App.css';
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0)
  const [loaded, setLoaded] = useState(false)

    // useEffect(()=>{
    //     fetch('foo').then(() => setLoaded(true))
    // }, [count])
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  );
}

export default App;
