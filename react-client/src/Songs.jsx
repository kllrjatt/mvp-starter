import React, { Component } from 'react';
import './style.css';

class Songs extends Component {
  render() {
    var tracks = this.props.tracks;
    return (
      <div>
        {
          tracks.map((track, i) => {
            return (
              <div key={i} className='songs'>
                <img src={track.album.images[0].url}
                  className='songImage'
                  alt='track' />
                <p className='songText'>{track.name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Songs;