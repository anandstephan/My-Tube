import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
        <Stack.Screen name="home" component={BottomTabNavigator}/>
    </Stack.Navigator>  
  );
}

export default Navigator