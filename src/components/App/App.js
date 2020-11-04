import React from 'react';
import animals from './data';
import AnimalCard from '../AnimalCard/AnimalCard';

import Instructions from '../Instructions/Instructions';

import './App.css';

const displayEmojiName = event => alert(event.target.id);

const showAdditional = (additional) => {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation);
}

const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = true;
  return (
    <div className="container">
      <h1 id={greeting}>Hello World</h1>
      {displayAction && <p>I am wrigin</p>}
      <Instructions />
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
      <div className="wrapper">
        <h1>Animals</h1>
        {animals.map(animal => (
          <AnimalCard 
          // additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          // scientificName={animal.scientificName}
          size={animal.size}
          // showAdditional={showAdditional}
          />
        ))}
      </div>
    </div>


  );
}
export default App;
