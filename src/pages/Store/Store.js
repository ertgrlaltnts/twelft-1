import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from './style';
import Gold from '../../assets/svg/money.svg';
import Gold1000 from '../../assets/svg/500.svg';
import Gold5000 from '../../assets/svg/1000.svg';
import Gold10000 from '../../assets/svg/5000.svg';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import Config from 'react-native-config';
import {buyCoin} from '../../store/reducers/User';
import {adapty} from 'react-native-adapty';

const Store = ({lang}) => {
  const [paywalls, setPaywalls] = useState(null);
  const {user} = useSelector(state => state.User);
  const dispatch = useDispatch(state => state.User);
  const {t} = lang;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = 'default';
        const locale = 'en';
        const paywall = await adapty.getPaywall(id, locale);
        const products = await adapty.getPaywallProducts(paywall);
        setPaywalls(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const buyProduct = async (number, price) => {
    try {
      await adapty.makePurchase(paywalls[number]);
      const takeCoin = await axios.put(`http://${Config.IP}/user/buy/coin`, {
        _id: user._id,
        coins: price,
      });
      if (takeCoin.data.res === 2) {
        ToastAndroid.showWithGravity(
          'Satın alma başarısız',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Satın alma başarılı !',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        dispatch(buyCoin(price));
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        'Satın alma başarısız',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('store')}</Text>
      <TouchableOpacity
        onPress={() => {
          buyProduct(6, 500);
        }}>
        <View style={styles.block}>
          <Text style={styles.text}>500 GOLD</Text>
          <Gold width={40} height={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          buyProduct(4, 1000);
        }}>
        <View style={styles.block}>
          <Text style={styles.text}>1000 GOLD</Text>
          <Gold1000 width={40} height={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          buyProduct(7, 5000);
        }}>
        <View style={styles.block}>
          <Text style={styles.text}>5000 GOLD</Text>
          <Gold5000 width={40} height={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          buyProduct(5, 10000);
        }}>
        <View style={styles.block}>
          <Text style={styles.text}>10000 GOLD</Text>
          <Gold10000 width={40} height={40} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Store;
