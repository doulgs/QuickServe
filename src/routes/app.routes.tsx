import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/App/HomeScreen";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export { AppRoutes };
