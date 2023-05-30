import { HStack, Text,View } from "native-base"
import { FontAwesome5,Ionicons,EvilIcons,FontAwesome,AntDesign} from '@expo/vector-icons';

 const Header = () =>{
  
    return <HStack justifyContent={'space-between'} alignItems={'center'}>
        <HStack alignItems={'center'} justifyContent={'space-between'} mx={2} w="25%">
        <AntDesign name="youtube" size={30} color="black" />
            <Text fontSize={16}>YouTube</Text>
        </HStack>
        <HStack justifyContent={'space-between'} alignItems={'center'}   w="30%">
        <FontAwesome5 name="chromecast" size={24} color="black" />
        <Ionicons name="notifications" size={24} color="black" />
        <EvilIcons name="search" size={24} color="black" />
        <FontAwesome name="user-circle-o" size={24} color="black" />

        </HStack>
    </HStack>
    
 }

 export default Header