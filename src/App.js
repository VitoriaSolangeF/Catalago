import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

function App() {

  const number = "(85) 98780-5592"

  const message = "helo, word!";

  return (

    <div className="App">
      <div className="content">
        <h1 className="title">React Whatsapp</h1>
          <section className="library">
            <input
              id="number"
              placeholder="Number"
              value={number}
            />
            <input
              id="message"
              placeholder="Message"
              value={message}
            />
            <ReactWhatsapp number={number} message={message}>
              Open Whatsapp
            </ReactWhatsapp>
          </section>
      </div>
    </div>

  );
}

export default App;
