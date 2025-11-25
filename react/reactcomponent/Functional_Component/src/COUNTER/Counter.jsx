import React from 'react'

function Counter()
{
  const [count, setCount] = React.useState(7);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <h1>Functional Component Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
    </div>
  )
}

export default Counter
