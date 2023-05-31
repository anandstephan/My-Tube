import { Pressable, Text, View } from "native-base"

const CustomBtn  = () =>{
return <Pressable>
    <View p={2} borderWidth={1} borderRadius={20} bgColor={'#000000'} mx={2}>
        <Text color={'#FFFFFF'}>Subscribe</Text>
    </View>
    </Pressable>
}
export default CustomBtn