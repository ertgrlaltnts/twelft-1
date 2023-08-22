import React from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './style';
import Gmail from '../../assets/svg/gmail.svg';
import Whatsapp from '../../assets/svg/whatsapp.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {logoutUser} from '../../store/reducers/User';

const LeftDrawer = ({children, drawer, lang}) => {
  const dispatch = useDispatch(state => state.User);
  const navigation = useNavigation();
  const {t} = lang;
  const handleExit = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logoutUser());
    navigation.navigate('LoginNavigation');
  };
  const navigationView = () => (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../assets/logo-text.png')}
        />
      </View>
      <Text style={styles.title}>{t('contact')}</Text>
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL('wa.me/447365039671')}
          style={styles.row}>
          <Whatsapp width={28} height={28} />
          <Text style={styles.name}>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:ertwostudio@gmail.com')}
          style={styles.row}>
          <Gmail width={28} height={28} />
          <Text style={styles.name}>Gmail</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.exit} onPress={handleExit}>
        <Text style={styles.title}>{t('logout')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={navigationView}>
      {children}
    </DrawerLayoutAndroid>
  );
};

export default LeftDrawer;
