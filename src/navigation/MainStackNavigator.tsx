import { createStackNavigator } from "@react-navigation/stack";
import ReactNativeBasics from "../screens/ReactNativeBasics";
import Menu from "../screens/Menu";
import ReactFlex from "../screens/ReactFlex";
import ReactFlexWrap from "../screens/ReactFlexWrap";

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Menu" 
            component={Menu} />
        <Stack.Screen name="ReactNativeBasics" 
            component={ReactNativeBasics} />
        <Stack.Screen name="ReactFlex" 
            component={ReactFlex} />
        <Stack.Screen name="ReactFlexWrap" 
            component={ReactFlexWrap} />
    
    </Stack.Navigator>
    )
}

export default MainStackNavigator