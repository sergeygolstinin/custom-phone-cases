import React, { useState } from 'react';

function Customizer({ onUpdate }) {
  const [background, setBackground] = useState('#fff');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [material, setMaterial] = useState('silicone');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Customize your phone case</h2>
      <label>
        Background Color:
        <input type="color" value={background} onChange={e => setBackground(e.target.value)} />
      </label>
      <br />
      <label>
        Add Text:
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </label>
      <br />
      <label>
        Upload Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        Material:
        <select value={material} onChange={e => setMaterial(e.target.value)}>
          <option value="silicone">Silicone</option>
          <option value="plastic">Plastic</option>
        </select>
      </label>
      <br />
      <button onClick={() => onUpdate({ background, text, image, material })}>Update Preview</button>
    </div>
  );
}

export default Customizer;
