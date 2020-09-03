import React from 'react';
import Grid from './components/Grid';
function App(): JSX.Element {
  return (
    <div className="App container">
      <input type="color" name="color-picker" id="color-picker" />
      <React.Fragment>
        <Grid rows={5} columns={8} />
      </React.Fragment>
    </div>
  );
}

export default App;
