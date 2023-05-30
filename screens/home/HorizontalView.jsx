import { FlatList, Box,Text } from "native-base"

const HorizontalView = () =>{

    return <FlatList
    data={["Trends","Bollywood","Programming","React","React Native"]}
    horizontal
    renderItem={({item,idx}) => <Box borderWidth={1} borderRadius={10} m={2}   p={1}>
        <Text p={1} mb={1}> {item}</Text>
    </Box>}
    />
}

export default HorizontalView