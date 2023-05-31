import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Library from '../screens/Library';
import PublishVideo from '../screens/PublishVideo';
import Shorts from '../screens/Shorts';
import Subscription from '../screens/Subscription';
import { Entypo } from '@expo/vector-icons';
import Short from '../svg/Short';
import { AntDesign,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { BOTTOM_ROUTES } from './routes';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name={BOTTOM_ROUTES.HOME} component={Home}
      options={{
   
        tabBarIcon:(({color,size}) => <Entypo name="home" size={size} color={color} />)
      }}
      />
      <Tab.Screen name={BOTTOM_ROUTES.SHORTS} component={Shorts}
      options={{
        tabBarIcon:(({color,size}) => <Short/>)
      }}
      />
      <Tab.Screen name="Publish" component={PublishVideo}
      options={{
        tabBarIcon:(({color,size}) => <AntDesign name="pluscircleo" size={size} color={color} />)
      }}
      />
      <Tab.Screen name={BOTTOM_ROUTES.SUBSCRIBED} component={Subscription}
      options={{
        tabBarIcon:(({color,size}) => <MaterialCommunityIcons name="youtube-subscription" size={size} color={color} />)
      }}
      />
      <Tab.Screen name={BOTTOM_ROUTES.LIBRARY} component={Library}
      options={{
        tabBarIcon:(({color,size}) => <MaterialIcons name="video-collection" size={size} color={color} />)
      }}
      />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator