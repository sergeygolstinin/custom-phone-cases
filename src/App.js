import React, { useState } from 'react';
import Customizer from './Customizer';
import Preview from './Preview';

function App() {
  const [customization, setCustomization] = useState({
    background: '#ffffff',
    text: '',
    image: null,
    material: 'silicone'
  });

  return (
    <div className="App">
      <Customizer onUpdate={setCustomization} />
      <Preview customization={customization} />
    </div>
  );
}

export default App;
