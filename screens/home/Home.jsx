import { StyleSheet } from "react-native";
import { FlatList, View } from "native-base"
import VideoCard from "../../common/components/VideoCard";
import Header from "../../common/components/Header";
const Home = () =>{
return  <>
  <Header/>
<FlatList
        data={[1,2,3,4,5,6]}
        renderItem={({item,idx})=>{
          return  <View my={2} py={1} px={5}>
          <VideoCard/>
          </View>
        }}
/>
</>
}

export default Home

const styles = StyleSheet.create({
    container:{
        // flex:1,
        width:"100%",
        height:"100%"
    }
})