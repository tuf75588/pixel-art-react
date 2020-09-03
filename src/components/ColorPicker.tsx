import React from 'react';

type ColorProps = {
  color: string;
};

function ColorPicker({ color }: ColorProps) {
  const colorPickerStyles = {
    height: 50,
    width: 50,
    padding: 0,
    border: 0,
    outline: 0,
    cursor: 'pointer',
    margin: '1rem',
  };

  const handleColorChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <div className="color-picker">
      <input
        id="colorPicker"
        name="colorPicker"
        className="colorPicker"
        type="color"
        value={color}
        style={colorPickerStyles}
        onChange={(e) => handleColorChange(e)}
      />
    </div>
  );
}

export default ColorPicker;
