import React, { Component } from 'react';
import './style.css';

class Profile extends Component {
  render() {
    var artist = {name: '', followers: {total: ''}}
    if(this.props.artist !== null){
      artist = this.props.artist
    }
    return (
      <div>
        <div>{artist.name}</div>
        <div>{artist.followers.total}</div>
      </div>
    )
  }
}

export default Profile
