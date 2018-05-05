import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'
import axios from 'axios'

class AlbumList extends Component {
  state = {
    albums: []
  }
  componentWillMount() {

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(albumsRes => {
        this.setState({ albums: albumsRes.data })
      })
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail
        key={album.title}
        {...album} />)
    )
  }
  render() {
    const { albums } = this.state
    console.log(albums)
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList
