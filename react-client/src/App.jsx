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

  search() {
    // add url for search
    var url = 'https://api.spotify.com/v1/search?';
    var searchUrl = `${url}q=${this.state.query}&type=artist&limit=1`
    // use postman to add settings to the search function with token and cache 
    var options = {
      "async": true,
      "crossDomain": true,
      "url": this.searchUrl,
      "method": "GET",
      "headers": {
        "authorization": "Bearer BQCRW7PfM9R1h0TyB2HeeNKLKiGubRM6osif_fLCMHVG7pmsmvbZrCWcyPoJROooIOCFJCThoHCns0KSubgviBJK0ICWrUT0Y0nE7u_TdSngpLeBupnZDoiD9mP5Xh3_8ncpodOsH3C2bkcCah47ZtNziYJAzfN8hiicXWO4ru0nDwCEcXkHUnZaapVd5ezZ5JWp",
        "cache-control": "no-cache"
      }
    }
    // add fetch function 
    fetch(options).then(response => console.log(response))
      // .then(json => console.log(json))
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
            <FormControl
              type='text'
              placeholder='Search for a Artist'
              value={this.state.query}
              onChange={event => { this.setState({ query: event.target.value }) }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
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


// add query field to search 
  // add a onchange event 
    // use on change event to set the new state 
    // state will be the value of the event aka the value of the input bar
  // invoke the search function on the input field
  // use onkeypress event.key = enter to invoke the search 