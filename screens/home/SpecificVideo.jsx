import { FlatList, Text,View } from "native-base"
import { SafeAreaView } from "react-native"
import VideoCard from "../../common/components/VideoCard"
import About from "./components/About"

const SpecificVideo = () =>{

    return <SafeAreaView>
            <VideoCard/>
            <FlatList
            data={[1,2,3,4,4,5]}
            
            ListHeaderComponent={<About/>}
            renderItem={({item,idx}) => <VideoCard/>}
            />
    </SafeAreaView>
}

export default SpecificVideo