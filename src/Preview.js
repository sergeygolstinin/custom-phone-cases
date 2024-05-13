import React from 'react';

function Preview({ customization }) {
  const { background, text, image, material } = customization;

  const style = {
    backgroundColor: background,
    border: `2px solid ${material === 'silicone' ? 'grey' : 'black'}`,
    padding: '10px',
    width: '200px',
    height: '400px',
    position: 'relative',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    color: 'black'
  };

  return (
    <div style={style}>
      <p>{text}</p>
    </div>
  );
}

export default Preview;
