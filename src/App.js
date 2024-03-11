import React, { useState } from 'react';
import './App.css';

function generateLoremIpsum(numParagraphs) {
  const words = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
    'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua.',
    'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris',
    'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat.', 'Duis', 'aute', 'irure', 'dolor',
    'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat',
    'nulla', 'pariatur.', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt',
    'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum.'
  ];

  let loremText = '';

  for (let i = 0; i < numParagraphs; i++) {
    let paragraph = '';
    for (let j = 0; j < 70; j++) { // 50 words per paragraph
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + ' ';
    }
    loremText += paragraph.trim() + '\n\n';
  }

  return loremText.trim();
}

function App() {
  const [numParagraphs, setNumParagraphs] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const generateLoremipsum = () => {
    const text = generateLoremIpsum(numParagraphs);
    setGeneratedText(text);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Generate Paragraphs!!</h1>
        <div className="maindiv">
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            type="number"
            name=""
            id="paragraphs"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(e.target.value)}
          />
          <button className='btn' onClick={generateLoremipsum}>GENERATE</button>
        </div>
        <div className='Paragraph-container'>
          
          {generatedText.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
