import React, {useRef, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {adapty} from 'react-native-adapty';
import {useDispatch, useSelector} from 'react-redux';
import 'react-native-gesture-handler';
import UserIcon from './assets/svg/user.svg';
import HomeIcon from './assets/svg/home.svg';
import VipIcon from './assets/svg/vip_icon.svg';
import BetIcon from './assets/svg/paper.svg';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Splash from './pages/Splash/Splash';
import Bet from './pages/Bet/Bet';
import User from './pages/User/User';
import Store from './pages/Store/Store';
import Header from './components/Header/Header';
import LeftDrawer from './components/LeftDrawer/LeftDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser, setLang} from './store/reducers/User';
import axios from 'axios';
import Config from 'react-native-config';
import Vip from './pages/Vip/Vip';
import {getLocales} from 'react-native-localize';
import {useTranslation} from 'react-i18next';
import i18n from './helper/language';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const initI18n = i18n;

const App = () => {
  const [splash, setSplash] = useState(false);
  const dispatch = useDispatch(state => state.User);
  const {isLoggedIn, user} = useSelector(state => state.User);

  const {t} = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLang(getLocales()[0].languageCode));
      setSplash(true);
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const fetchUser = await axios.post(`http://${Config.IP}/user/getUser`, {
          token: token,
        });
        const bets = await axios.get(`http://${Config.IP}/admin/bet`);
        const winners = await axios.get(`http://${Config.IP}/admin/winner`);
        dispatch(
          loginUser({
            user: {...fetchUser.data.user},
            bets: [...bets.data.bets],
            winners: [...winners.data.winners],
          }),
        );

        adapty.activate('public_live_kfqIkFHt.iSuh2evVT6yD6kDDJ43e', {
          customerUserId: user._id,
        });
      }
      setTimeout(() => {
        setSplash(false);
      }, 3000);
    };

    fetchData();
  }, [dispatch, user._id]);

  const drawer = useRef(null);
  const LoginStack = createNativeStackNavigator();
  const LoginStackScreen = () => {
    return (
      <LoginStack.Navigator>
        <LoginStack.Screen name="Login" options={{headerShown: false}}>
          {() => <Login lang={{t}} />}
        </LoginStack.Screen>
        <LoginStack.Screen name="SignUp" options={{headerShown: false}}>
          {() => <SignUp lang={{t}} />}
        </LoginStack.Screen>
      </LoginStack.Navigator>
    );
  };

  const HomeStack = createNativeStackNavigator();
  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" options={{headerShown: false}}>
          {() => <Home lang={{t}} />}
        </HomeStack.Screen>
        <HomeStack.Screen name="Store" options={{headerShown: false}}>
          {() => <Store lang={{t}} />}
        </HomeStack.Screen>
      </HomeStack.Navigator>
    );
  };
  const VipStack = createNativeStackNavigator();
  const VipStackScreen = () => {
    return (
      <VipStack.Navigator>
        <VipStack.Screen name="Vip" options={{headerShown: false}}>
          {() => <Vip lang={{t}} />}
        </VipStack.Screen>
        <VipStack.Screen name="Store" options={{headerShown: false}}>
          {() => <Store lang={{t}} />}
        </VipStack.Screen>
      </VipStack.Navigator>
    );
  };
  const BetStack = createNativeStackNavigator();
  const BetStackScreen = () => {
    return (
      <BetStack.Navigator>
        <BetStack.Screen name="Bet" options={{headerShown: false}}>
          {() => <Bet lang={{t}} />}
        </BetStack.Screen>
        <BetStack.Screen name="Store" options={{headerShown: false}}>
          {() => <Store lang={{t}} />}
        </BetStack.Screen>
      </BetStack.Navigator>
    );
  };
  const UserStack = createNativeStackNavigator();
  const UserStackScreen = () => {
    return (
      <UserStack.Navigator>
        <UserStack.Screen name="User" options={{headerShown: false}}>
          {() => <User lang={{t}} />}
        </UserStack.Screen>
        <UserStack.Screen name="Store" options={{headerShown: false}}>
          {() => <Store lang={{t}} />}
        </UserStack.Screen>
      </UserStack.Navigator>
    );
  };
  const TabNavigation = () => {
    return (
      <LeftDrawer drawer={drawer} lang={{t}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: '#0F3460',
              elevation: 0,
              height: 60,
            },
          })}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{
              headerTitle: () => <Header drawer={drawer} />,
              headerStyle: {
                backgroundColor: '#0F3460',
              },
              tabBarIcon: ({}) => (
                <HomeIcon width={40} height={40} fill={'#fff'} />
              ),
            }}
          />
          <Tab.Screen
            name="VipStack"
            component={VipStackScreen}
            options={{
              headerTitle: () => <Header drawer={drawer} />,
              headerStyle: {
                backgroundColor: '#0F3460',
              },
              tabBarIcon: ({}) => (
                <VipIcon width={40} height={40} fill={'#fff'} />
              ),
            }}
          />

          <Tab.Screen
            name="BetStack"
            component={BetStackScreen}
            options={{
              headerTitle: () => <Header drawer={drawer} />,
              headerStyle: {
                backgroundColor: '#0F3460',
              },
              tabBarIcon: ({}) => (
                <BetIcon width={40} height={40} fill={'#fff'} />
              ),
            }}
          />
          <Tab.Screen
            name="UserStack"
            component={UserStackScreen}
            options={{
              headerTitle: () => <Header drawer={drawer} />,
              headerStyle: {
                backgroundColor: '#0F3460',
              },
              tabBarIcon: ({}) => (
                <UserIcon width={40} height={40} fill={'#fff'} />
              ),
            }}
          />
        </Tab.Navigator>
      </LeftDrawer>
    );
  };

  return (
    <NavigationContainer>
      <>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <>
              {splash ? (
                <Stack.Screen
                  name="Splash"
                  options={{headerShown: false}}
                  component={Splash}
                />
              ) : (
                <Stack.Screen
                  name="LoginNavigation"
                  component={LoginStackScreen}
                  options={{headerShown: false}}
                />
              )}
            </>
          ) : (
            <>
              {splash ? (
                <Stack.Screen
                  name="Splash"
                  options={{headerShown: false}}
                  component={Splash}
                />
              ) : (
                <>
                  <Stack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{headerShown: false}}
                  />
                </>
              )}
            </>
          )}
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default App;
