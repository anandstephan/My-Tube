import { Box, HStack, Text,Image } from "native-base"


const Comment = () => {
  return (
    <Box p={2} borderWidth={1} bgColor={'gray.200'} borderRadius={8} mb={2}>
        <HStack >
        <Text bold>Comments</Text>
        <Text>16K</Text>
        </HStack>
        <HStack>
             <Image source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} 
            borderRadius={100}
            alt="Alternate Text" 
            size="xs" />
            <Text>Lorem ipsum dolor sit amet, consectetur.</Text>
        </HStack>
    </Box>
  )
}

export default Comment