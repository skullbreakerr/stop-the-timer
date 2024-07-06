import { useRef } from "react";
import { useState } from "react";
export default function Player() {
  const [playerName,setPlayerName] = useState(null);
  const inputedPlayerName = useRef();

  function handleClick(){
    setPlayerName(inputedPlayerName.current.value);
    inputedPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputedPlayerName} type="text" required/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
