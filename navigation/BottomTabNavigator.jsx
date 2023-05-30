import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Library from '../screens/Library';
import PublishVideo from '../screens/PublishVideo';
import Shorts from '../screens/Shorts';
import Subscription from '../screens/Subscription';
import { Entypo } from '@expo/vector-icons';
import Short from '../svg/Short';
import { AntDesign,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon:(({color,size}) => <Entypo name="home" size={size} color={color} />)
      }}
      />
      <Tab.Screen name="Shorts" component={Shorts}
      options={{
        tabBarIcon:(({color,size}) => <Short/>)
      }}
      />
      <Tab.Screen name="Publish" component={PublishVideo}
      options={{
        tabBarIcon:(({color,size}) => <AntDesign name="pluscircleo" size={size} color={color} />)
      }}
      />
      <Tab.Screen name="Subscription" component={Subscription}
      options={{
        tabBarIcon:(({color,size}) => <MaterialCommunityIcons name="youtube-subscription" size={size} color={color} />)
      }}
      />
      <Tab.Screen name="Library" component={Library}
      options={{
        tabBarIcon:(({color,size}) => <MaterialIcons name="video-collection" size={size} color={color} />)
      }}
      />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator