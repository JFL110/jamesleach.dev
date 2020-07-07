import React from 'react'
import { render } from 'react-dom'

// Queue rendering until after all resources (css) have loaded, or after one second
setLoaded(() => {
  setLoaded(null);

  render(<h1>Coming soon</h1>,
    document.getElementById('root')
  );
});

// Decrement the resource count and set a trigger to trigger the root func even if resources don't load
dec();
setTimeout(function () {
  let currentLoaded = getLoaded();
  if (currentLoaded != null) {
    // Didn't trigger - trigger it now
    setLoaded(null);
    console.log("Warning - Delayed load");
    currentLoaded();
  }
}, 2000);
