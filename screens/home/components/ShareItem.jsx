import { View,Text } from "native-base"

const ShareItem = ({item}) =>{
return <View p={2} borderWidth={1} borderRadius={20} mx={1} my={3}>
    <Text>{item}</Text>
</View>
}

export default ShareItem