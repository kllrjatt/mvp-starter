// create app structure 
import React, { Component } from 'react';
// add css file 
import './style.css';
// import multiple items from react - bootstrap 
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import Promise from 'promise';


class App extends Component {
  // add constructor super and this.state 
  // this.state is just a query 
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      artist: ''
    }
  }

  componenetDidMount() {
    this.getArtistInfo();
  }

  getArtistInfo() {
    axios.get('/music', {
      artist: this.state.query
    })
      .then((response) => {
        this.setState({ artist: res.data })
      })
      .catch((error) => {
        console.log('there is a get error', error)
      })
  }

  addArtist() {
    axios.post('/music', {
      artist: this.state.query
    })
      .then((response) => {
        console.log('Post Works')
        this.getArtistInfo();
      })
      .catch((error) => {
        console.log('There is a post request error', error)
      })
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
                  this.addArtist();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.addArtist()}>
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