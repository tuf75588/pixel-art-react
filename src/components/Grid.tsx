import React from 'react';

type GridProps = {
  currentColor: string;
};

function Grid({ currentColor }: GridProps): JSX.Element {
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: `repeat(5, 1fr)`,
  };

  const buttonStyles = {
    display: 'inline',
  };
  const [cells] = React.useState(
    Array.from({ length: 40 }, (_, i) => ({ color: 'rgb(0,0,0)' }))
  );
  const renderCells = cells?.map((_, i) => (
    <button
      className="square"
      key={i}
      onClick={() => console.log('clicked on cell! ')}
      style={buttonStyles}
      name="colorChangeButton"
    />
  ));
  return (
    <section>
      <div className="grid-container" style={styles}>
        {renderCells}
      </div>
      <aside
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: 0,
        }}
      ></aside>
    </section>
  );
}

export default Grid;
