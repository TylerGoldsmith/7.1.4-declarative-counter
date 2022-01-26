// Enable React
import React, { useState } from 'react'

// Create Counter HTML
function App(){
  // 
    let [ counter, changeCounter ] = useState(1)
    // Global
    window.changeCounter = changeCounter
    return (
        <div>
          {/* Counter Shown in HTML */}
            <h1>{counter}</h1>
            <h4>{counter}</h4>
        </div>
    )
}
// exporting app
export default App;