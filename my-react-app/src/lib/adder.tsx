import React from "react";



export default function Adder() {
  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);

  return (
    <div>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input value={a} onChange={(e) => setB(Number(e.currentTarget.value))}/>
      <h2>Result: {a+b}</h2>
    </div>
  )
}