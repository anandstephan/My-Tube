import { Video, ResizeMode } from 'expo-av';
import React from 'react'
import { StyleSheet } from 'react-native';

const VideoCard = () => {

  const video = React.useRef(null);
  React.useEffect(()=>{
    // console.log("uid",video.current)
    video.current.playAsync()
  },[])
  return (
    <Video
    ref={video}
    style={styles.videoContainer}
    source={{
      uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    }}
    useNativeControls
    resizeMode={ResizeMode.CONTAIN}
    isLooping
    onPlaybackStatusUpdate={status => console.log(status.isPlaying)}
  />

  )
}

export default VideoCard

const styles = StyleSheet.create({
 
    videoContainer:{
        height:200,
        width:"100%"
    }
})