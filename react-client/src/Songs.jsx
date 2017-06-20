import React, { Component } from 'react';
import './style.css';

class Songs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUrl: '',
      audio: null,
      status: false
    }
  }
  playSong(url) {
    var audio = new Audio(url);


    audio.play();
  }
  render() {
    var tracks = this.props.tracks;
    return (
      <div>
        {
          tracks.map((track, i) => {
            return (
              <div key={i} className='songs'
                onClick={() => this.playSong(track.preview_url)}
              >
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