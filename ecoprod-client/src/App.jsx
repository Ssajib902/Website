import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Set the default theme to light
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
      {/* Hi this is app.jsx */}
    </>
  );
}

export default App;
