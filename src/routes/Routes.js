import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/Product';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import AllProductDemo from '../screens/AllProductDemo';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';
import Register from '../screens/Register';
export default Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
                <Stack.Screen name="AllProductDemo" component={AllProductDemo} />
                <Stack.Screen name="DetailScreen" component={Detail} />
                <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// creating routes for the app using stack navigator
// every component recieves nagigation prop,
// it has many functionalities like navigate, goback etc