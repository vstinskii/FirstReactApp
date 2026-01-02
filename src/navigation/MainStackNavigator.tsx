import { createStackNavigator } from "@react-navigation/stack";
import ReactNativeBasics from "../screens/ReactNativeBasics";
import Menu from "../screens/Menu";
import ReactFlex from "../screens/ReactFlex";
import ReactFlexWrap from "../screens/ReactFlexWrap";
import ReactUIScale from "../screens/ReactUIScale";
import ReactHooks from "../screens/ReactHooks";
import ReactModal from "../screens/ReactModal";
import ReactImageBackground from "../screens/ReactImageBackground";

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
        <Stack.Screen name="ReactUIScale" 
            component={ReactUIScale} />
        <Stack.Screen name="ReactHooks" 
            component={ReactHooks} />
        <Stack.Screen name="ReactModal" 
            component={ReactModal} />
        <Stack.Screen name="ReactImageBackground" 
            component={ReactImageBackground} />

    </Stack.Navigator>
    )
}

export default MainStackNavigator