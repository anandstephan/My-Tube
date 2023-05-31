import { Heading, HStack, Stack, VStack,Image, Text } from "native-base"
import CustomBtn from "./CustomBtn"
import ShareList from "./SharetList"

const About = () =>{
return <VStack justifyContent={'center'} px={2} mb={2}>
        <Heading fontSize={18}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </Heading>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
            <HStack justifyContent={'space-between'} alignItems={'center'} >
            <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} 
            borderRadius={100}
            alt="Alternate Text" 
            size="xs" />
            <Text ml={2}>YT Channel</Text>
            <Text ml={2}>13.9M</Text>
            </HStack>
            <CustomBtn/>
        </HStack>
        <ShareList/>
</VStack>
}

export default About