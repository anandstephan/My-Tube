import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Library from '../screens/Library';
import PublishVideo from '../screens/PublishVideo';
import Shorts from '../screens/Shorts';
import Subscription from '../screens/Subscription';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shorts" component={Shorts} />
      <Tab.Screen name="Publish" component={PublishVideo} />
      <Tab.Screen name="Subscription" component={Subscription} />
      <Tab.Screen name="Library" component={Library}/>

    </Tab.Navigator>
  );
}

export default BottomTabNavigator