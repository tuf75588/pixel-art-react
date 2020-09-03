import React from 'react';

function App() {
  return (
    <div className="App container">
      <main className="grid-container">
        {Array.from({ length: 40 }, (_, i) => {
          return <div key={i} children={i + 1} className="square" />;
        })}
      </main>
    </div>
  );
}

export default App;
