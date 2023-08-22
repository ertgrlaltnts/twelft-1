import React, {useEffect, useState} from 'react';
import {Modal, View, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import styles from './style';
import Close from '../../assets/svg/close.svg';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import Config from 'react-native-config';
import {adapty} from 'react-native-adapty';
import {buyVip} from '../../store/reducers/User';

const StoreModal = ({modalVisible, setModalVisible, packages, lang}) => {
  const {user} = useSelector(state => state.User);
  const [paywalls, setPaywalls] = useState(null);
  const dispatch = useDispatch(state => state.User);

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

  const {t} = lang;

  const handleButton = async (number, time) => {
    try {
      await adapty.makePurchase(paywalls[number]);
      const takeVip = await axios.put(`http://${Config.IP}/user/buy/vip`, {
        _id: user._id,
        time: time,
      });
      setModalVisible(false);
      if (takeVip.data.res === 2) {
        ToastAndroid.showWithGravity(
          t('error14'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          t('success3'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        dispatch(buyVip(time));
      }
    } catch (error) {
      ToastAndroid.showWithGravity(
        t('error14'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.close}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Close width={32} height={32} fill={'#fff'} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => handleButton(0, 30)}>
                <View style={styles.block}>
                  <Text style={styles.text}>{t('aylik')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButton(2, 90)}>
                <View style={styles.block}>
                  <Text style={styles.text}>{t('aylik3')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButton(1, 180)}>
                <View style={styles.block}>
                  <Text style={styles.text}>{t('aylik6')}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButton(3, 365)}>
                <View style={styles.block}>
                  <Text style={styles.text}>{t('yillik')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StoreModal;
