import React from 'react'
import { Image, View } from 'native-base'

const StoryContainer = () => {
  return (
    <View paddingX={2}>
        <Image size={50} borderRadius={50} source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" />
    </View>
  )
}

export default StoryContainer