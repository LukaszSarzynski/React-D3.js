import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { select } from 'd3'

function App() {
  const [data, setData] = useState([20,100, 300, 800])
  const d3Ref = useRef()

  useEffect(() => {
    const svg = select(d3Ref.current)
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', v => v/2)
      .attr('cx', v => v)
      .attr('cy', v => v/2)
      .attr('stroke', 'deepskyblue')
      .attr('fill', 'deepskyblue')
  }, [data])

  return (
    <>
      <svg ref={d3Ref}></svg>
      <br />
      {data.map((v,k) =>  <div style={{cursor: 'pointer'}} onClick={() => setData(data.filter(fv => fv !== v))}>Remove <strong>{k+1}</strong> circle </div>)}
    </>

  );
}

export default App;