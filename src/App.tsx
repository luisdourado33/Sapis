import 'react-native-gesture-handler';

import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppRegistry, StatusBar } from 'react-native';
import { name as appName } from '../app.json';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './helpers/theme';

import { AuthContext, AuthProvider } from './context/AuthContext';

import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import Preferences from './screens/Preferences';
import ShowGraph from './screens/ShowGraph';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthFlow() {
  return (
    <>
      <StatusBar backgroundColor={'#FFF'} barStyle='dark-content' />
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Splash'
          component={Splash}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={Login}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='SignUp'
          component={SignUp}
        />
      </AuthStack.Navigator>
    </>
  );
}

function DashboardFlow() {
  return (
    <>
      <StatusBar backgroundColor={'#000'} barStyle='light-content' />
      <BottomTab.Navigator
        lazy
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;
            size = 20;
            switch (route.name) {
              case 'Dashboard':
                iconName = 'home';
                break;
              case 'Cultivos':
                iconName = 'seedling';
                break;
              case 'Configurações':
                iconName = 'cog';
                break;
              default:
                iconName = 'circle';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: colors.light.secondGreen,
          inactiveBackgroundColor: colors.light.firstGreen,
          activeTintColor: colors.light.grayDark,
          inactiveTintColor: colors.light.secondGreen,
          showLabel: false,
          keyboardHidesTabBar: true,
          tabStyle: { paddingHorizontal: 15 },
        }}>
        <BottomTab.Screen name='Dashboard' component={Dashboard} />
        <BottomTab.Screen name='Cultivos' component={ShowGraph} />
        <BottomTab.Screen name='Configurações' component={Preferences} />
      </BottomTab.Navigator>
    </>
  );
}

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer independent>
      <RootStack.Navigator headerMode='none'>
        {state.isAuth ? (
          <RootStack.Screen name='Auth' component={AuthFlow} />
        ) : (
          <RootStack.Screen name='Home' component={DashboardFlow} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
};

export default () => {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
