import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";
import Navigator from './navigation/Navigator';

import { NavigationContainer } from '@react-navigation/native';
const App = () =>{
return  <NavigationContainer>
    <NativeBaseProvider>
        <Navigator/>
    </NativeBaseProvider>
    </NavigationContainer> 
}

export default App