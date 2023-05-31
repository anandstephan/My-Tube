import { ScrollView } from "native-base"
import ShareItem from "./ShareItem"

const ShareList = () =>{
    const data = [{text:"Like"},{text:"DisLike"},{text:"Share"},{text:"Download"},{text:"Clip"},{text:"Share"}]
return <ScrollView horizontal indicatorStyle="white">
    {data.map((item ,idx) => <ShareItem item={item.text} key={idx}/>)}
    </ScrollView>
}

export default ShareList