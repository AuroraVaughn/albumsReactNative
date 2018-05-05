import React, { Component } from 'react'
import { View } from 'react-native'
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'

  }
}
const CardSection = (props) => {

  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}
export default CardSection
