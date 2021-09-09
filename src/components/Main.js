import React from 'react'
import Card from './images/card.png'
import "./Main.scss";

function App() {
  return (
    <div className="main-container">
      <div className="img-container">
          <img className="card-img" src={Card} />
      </div>
      <div className="description-container">
        <p className="desc-title">Credit Card Debt Relief</p>
        <p className="desc-about">"It would have taken me 15 years to get out of debt. With freedom, it's only going to take me 3."</p>
        <span>- Alejandra, durjent FDR client</span>
      </div>
    </div>
  );
}

export default App;
