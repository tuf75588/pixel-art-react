import React from 'react';

type GridProps = {
  columns: number;
  rows: number;
};

function Grid({ columns, rows }: GridProps): JSX.Element {
  const [cells] = React.useState(Array.from({ length: columns * rows }));
  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };
  const renderCells = cells.map((_, i) => <div className="square" key={i} />);
  return (
    <main className="grid-container" style={styles}>
      {renderCells}
    </main>
  );
}

export default Grid;
