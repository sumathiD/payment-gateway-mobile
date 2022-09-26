import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCard from '../screens/AddCard';
import Pay from '../screens/Pay';
import PaymentOptions from '../screens/PaymentOptions';
import { STRINGS } from '../utils/strings';
import { COLORS, SIZE } from '../utils/theme';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PaymentOptions" component={PaymentOptions}
        options={route=>({
          headerTitle: '',
          headerBackVisible: false,
          headerBackground:()=><Header title={STRINGS.paymentOptions}  onBackClick={()=>{
            console.log('ca;;ed')
            route.navigation.pop()
          }} />
        })}
        />
        <Stack.Screen name="AddCard" component={AddCard} 
        options={route=>({
          headerTitle: '',
          headerBackVisible: false,
          headerBackground:()=><Header title={STRINGS.creditAndDebitCard}  onBackClick={()=>{
            route.navigation.pop()
          }} />
        })}
        />
        <Stack.Screen name="Pay" component={Pay} 
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route