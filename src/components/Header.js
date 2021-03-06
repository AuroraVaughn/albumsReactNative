import React from 'react'
import { Text, View } from 'react-native'


const Header = (props) => {
  const { textStyle, viewStyle } = styles
  const { headerText } = props
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
}

export default Header
