import React from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BasicFlatListData from './BasicFlatListData';

const HomeScreen =({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: '$fff', borderRadius: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate(BasicFlatListData)}>
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <Text style={{
                        padding: 12,
                        backgroundColor: 'darkgreen',
                        borderRadius: 17,
                        color: '#fff',
                        width: 200,
                        textAlign: 'center'
                    }}>
                        Menu Makanan
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

const Home = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="BasicFlatListData" component={BasicFlatListData} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    }

export default Home;