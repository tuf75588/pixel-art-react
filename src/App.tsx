import React from 'react';

function App(): JSX.Element {
  const [background, setBackground] = React.useState(
    'rgb(255, 255, 255) none repeat scroll 0% 0%;'
  );
  return (
    <div className="App container">
      <main className="grid-container">
        {Array.from({ length: 40 }, (_, i: number) => {
          return (
            <div
              key={i}
              className="square"
              style={{ backgroundColor: background }}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
