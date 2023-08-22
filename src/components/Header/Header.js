import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import styles from './style';
import Menu from '../../assets/svg/menu.svg';
import Money from '../../assets/svg/money.svg';

const Header = ({drawer}) => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.User);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => drawer.current.openDrawer()}>
        <Menu width={24} height={24} fill={'#fff'} />
      </TouchableWithoutFeedback>
      <Image
        style={styles.image}
        source={require('../../assets/logo-text.png')}
      />
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Store')}>
        <View style={styles.money}>
          <Money width={32} height={32} fill={'#fff'} />
          <Text style={styles.money_text}>{user.coin}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
