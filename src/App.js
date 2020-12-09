import React from 'react'

function App() {
  if (typeof window === 'undefined') {
    return (
      <div id="your-comp-id-server">
        <div id="child-id-server">server</div>
      </div>
    )
  }
  return (
    <div id="your-comp-id-client">
      <div id="child-id-client">client</div>
    </div>
  )
}

export default App;
