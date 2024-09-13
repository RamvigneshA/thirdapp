import { useState } from "react";
import "./App.css";

function App() {
  const [defi, setdefi] = useState("fellow");
  const [text, settext] = useState("fellow");
  const [newt,setnewt] = useState('') ;
  let item;


  getdata();
  function getdata(val) {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ text;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          item = data;
          gotit();
        }
      });
  }
  
  function gotit() {
    const def = item[0].meanings[0].definitions[0].definition;
    setdefi(def);
  }

  function handle(e) {
   setnewt(e);
  }

  function clicked() {
    settext(newt);
  }


  return (
    <div className="App">
      <input onChange={(e) => handle(e.target.value)}  />
      <button onClick={()=>clicked()} >click</button>
      <p>{defi}</p>
    </div>
  );
}

export default App;
