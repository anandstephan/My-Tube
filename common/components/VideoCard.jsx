import { useNavigation } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { SPECIFIC_VIDEO } from '../../navigation/routes';

const VideoCard = () => {
  const navigation = useNavigation()
  const video = React.useRef(null);
  React.useEffect(()=>{
    // console.log("uid",video.current)
    video.current.playAsync()
  },[])

  const onPressHandler = () =>{
    navigation.navigate(SPECIFIC_VIDEO)
  }
  return (
    <Pressable onPress={onPressHandler}>
    <Video
    ref={video}
    style={styles.videoContainer}
    source={{
      uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    }}
    useNativeControls
    resizeMode={ResizeMode.CONTAIN}
    isLooping
    onPlaybackStatusUpdate={()=>{}}
  />
</Pressable>
  )
}

export default VideoCard

const styles = StyleSheet.create({
 
    videoContainer:{
        height:200,
        width:"100%"
    }
})