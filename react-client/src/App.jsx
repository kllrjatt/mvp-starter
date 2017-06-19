// create app structure 
import React, { Component } from 'react';
// add css file 
import './style.css';

// import multiple items from react - bootstrap 
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  // add constructor super and this.state 
  // this.state is just a query 
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }


  // add render component 
  render() {
    // add return function and add div tag to it with some text
    // add title, search bar, submit button 
    // use bootstrap components for css 
    // form group, form control, inputgroup and icon for search 
    // add artist picture, name and gallery 
    return (
      <div className='App'>
        <div className='AppTitle'>
          OneMusic App to Rule Them All
      </div>
        <FormGroup>
          <InputGroup>
            <FormControl type='text'
              placeholder='Search for a Artist' />
            <InputGroup.Addon>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
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