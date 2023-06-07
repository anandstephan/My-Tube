import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList, View } from "native-base"
import VideoCard from "../../common/components/VideoCard";
import Header from "../../common/components/Header";
import HorizontalView from "../../common/components/HorizontalView";
import { useNavigation } from "@react-navigation/native";
const Home = () =>{
  
return  <SafeAreaView>
  <Header/>
  <HorizontalView/>
<FlatList
        data={[1,2,3,4,5,6]}
        renderItem={({item,idx})=>{
          return  <View my={2} py={1} px={5}>
          <VideoCard/>
          </View>
        }}
/>
</SafeAreaView>
}

export default Home

const styles = StyleSheet.create({
    container:{
        // flex:1,
        width:"100%",
        height:"100%"
    }
})