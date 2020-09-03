import React from 'react';
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
function App(): JSX.Element {
  const [currentColor, setCurrentColor] = React.useState('#ffe4e1');

  return (
    <div className="App container">
      <React.Fragment>
        <ColorPicker color={currentColor} />
        <Grid currentColor={currentColor} />
      </React.Fragment>
    </div>
  );
}

export default App;
