//import a library to help create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// create component
const App = () => {
  const headTxt = 'Turtles'
  return (
    <View style={{ flex: 1 }} >
      <Header headerText={headTxt} />
      <AlbumList />
    </View >
  )

}

// render on device
AppRegistry.registerComponent('albums', () => App)
