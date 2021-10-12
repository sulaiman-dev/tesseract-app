import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
import image from './arapus.jpg'

function App() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('pus+ara');
    await worker.initialize('pus+ara');
    console.log('image', image)
    const { data: { text } } = await worker.recognize(image);
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}

export default App;
