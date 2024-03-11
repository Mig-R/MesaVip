import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import AgendarMesa from "./src/screens/AgendarMesa";
import testeBtn from "./src/screens/testeBtn";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AgendarMesa'>

        <Stack.Screen 
          name='testeBtn'
          component={testeBtn}
          options={{
            headerShown: true
          }}
      
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

