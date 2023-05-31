import { createStackNavigator } from '@react-navigation/stack';
import SpecificVideo from '../screens/home/SpecificVideo';
import BottomTabNavigator from './BottomTabNavigator';
import { HOME, SPECIFIC_VIDEO } from './routes';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
        <Stack.Screen name={HOME} component={BottomTabNavigator}/>
        <Stack.Screen name={SPECIFIC_VIDEO} component={SpecificVideo}/>
    </Stack.Navigator>  
  );
}

export default Navigator