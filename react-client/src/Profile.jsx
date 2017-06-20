import React, { Component } from 'react';
import './style.css';

class Profile extends Component {
  render() {
    var artist =
      {
        name: '',
        followers: { total: '' },
        images: [{ url: '' }],
        genres: []
      }
    if (this.props.artist !== null) {
      artist = this.props.artist
    }
    return (
      <div>
        <img
          alt='Profile'
          className='profileImage'
          src={artist.images[0].url}
        />
        <div className='profileInfo'>
          <div className='profileName'>{artist.name}</div>
          <div className='profileFollowers'>{artist.followers.total}</div>
          <div clasName='profileGenre'>
            {
              artist.genres.map((genre, i) => {
                genre = genre !== artist.genres[artist.genres.length - 1] ? `${genre}, ` : `${genre}.`
                return (
                  <span key={i}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
