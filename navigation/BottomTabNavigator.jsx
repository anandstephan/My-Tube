import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Library from '../screens/Library';
import PublishVideo from '../screens/PublishVideo';
import Shorts from '../screens/Shorts';
import Subscription from '../screens/subscription/Subscription';
import { Entypo } from '@expo/vector-icons';
import Short from '../svg/Short';
import { AntDesign,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { BOTTOM_ROUTES } from './routes';
import Colors from '../constants/Color';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name={BOTTOM_ROUTES.HOME} component={Home}
      options={{
        tabBarLabelStyle:{color:Colors.black,fontSize:15},
        tabBarIcon:(({color,size}) => <Entypo name="home" size={size} color={Colors.black} />)
      }}
      />
      <Tab.Screen name={BOTTOM_ROUTES.SHORTS} component={Shorts}
      options={{
        tabBarLabelStyle:{color:Colors.black,fontSize:15},
        tabBarIcon:(({color,size}) => <Short/>)
      }}
      />
      <Tab.Screen name="Publish" component={PublishVideo}
      options={{
        tabBarLabelStyle:{color:Colors.black,fontSize:15},
        tabBarIcon:(({color,size}) => <AntDesign name="pluscircleo" size={size} color={Colors.black} />)
      }}
      />
      <Tab.Screen name={BOTTOM_ROUTES.SUBSCRIBED} component={Subscription}
      options={{
        tabBarLabelStyle:{color:Colors.black,fontSize:15},
        tabBarIcon:(({color,size}) => <MaterialCommunityIcons name="youtube-subscription" size={size} color={Colors.black} />)
      }}
      />
      <Tab.Screen name={BOTTOM_ROUTES.LIBRARY} component={Library}
      options={{
        tabBarLabelStyle:{color:Colors.black,fontSize:15},
        tabBarIcon:(({color,size}) => <MaterialIcons name="video-collection" size={size} color={Colors.black} />)
      }}
      />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator