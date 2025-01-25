import React from "react";

type CounterProps = {
  initialValue?: number
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = React.useState<number>(props.initialValue ?? 0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}
