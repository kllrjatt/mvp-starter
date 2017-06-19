// create app structure 
import React, { Component } from 'react';
// add css file 
import './style.css';

class App extends Component {
  // add render component 
  render() {
    // add return function and add div tag to it with some text
    // add title, search bar, submit button 
    // add artist picture, name and gallery 
    return (
      <div>
        <div className='title'>
          Music App to Rule Them All
      </div>
        <div>
          <input placeholder='Search for Your Artist Here' />
          <button>Search!</button>
        </div>
        <div className='artistProfile'>
          <div>Artist Picture Goes Here</div>
          <div>Artist Name Goes Here</div>
        </div>
        <div className='music'>
          Artist Music Goes Here
        </div>
      </div>
    )
  }
}

export default App