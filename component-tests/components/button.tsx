import React from "react";


export default function Popup() {
  const [x, setX] = React.useState<number>(0);

  return (
    <div>
      <button onClick={() => setX(Math.floor(Math.random()*100))}>Random</button>
      <h1>Random Value: {x}</h1>
    </div>
  )
}
