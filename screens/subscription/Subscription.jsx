import { SafeAreaView } from "react-native"
import { FlatList, HStack, Text,View } from "native-base"
import StoryContainer from "./StoryContainer"
import HorizontalView from "../../common/components/HorizontalView"
import VideoCard from "../../common/components/VideoCard"

const Subscription = () =>{
return <SafeAreaView>
    <Text>Subscription</Text>
    <HorizontalView/>
    <HStack alignItems={'center'}>
    <FlatList
    data={[1,2,3,4,5,6,7,8,9]}
    horizontal={true}
    keyExtractor={(item,idx) => idx.toString()}
    renderItem={({item}) => <StoryContainer/>}
    />
    <Text>View All</Text>
    </HStack>
    <FlatList
    data={[1,2,3,4,5]}
    renderItem={({item,idx}) => {
        return <View my={2} py={1} px={5}>
        <VideoCard/>
        </View>
    }}
    />
</SafeAreaView>
}

export default Subscription