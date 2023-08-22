import React from 'react';
import {Modal, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Close from '../../assets/svg/close.svg';
import Ok from '../../assets/svg/ok.svg';
import Money from '../../assets/svg/money.svg';
import styles from './style';
import axios from 'axios';
import Config from 'react-native-config';
import {buyBet} from '../../store/reducers/User';

const BetModal = ({
  setPreview,
  modalVisible,
  setModalVisible,
  data,
  isPreview,
  lang,
}) => {
  const {user} = useSelector(state => state.User);
  const dispatch = useDispatch(state => state.User);
  const {t} = lang;

  const handlePreview = () => {
    setModalVisible(false);
    setPreview(true);
  };

  const handleBuy = async () => {
    const request = await axios.post(`http://${Config.IP}/user/buy/bet`, {
      userID: user._id,
      couponID: data._id,
    });
    if (request.data.res === 3) {
      ToastAndroid.showWithGravity(
        t('error13'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else if (request.data.res === 2) {
      ToastAndroid.showWithGravity(
        t('error4'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      const obj = {
        bet: data,
        coin: data.pay,
      };
      ToastAndroid.showWithGravity(
        t('success2'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      dispatch(buyBet(obj));
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
            <View style={styles.line}>
              <Money width={50} height={50} />
            </View>
            <View style={styles.info_line}>
              <Text style={styles.text}>
                {t('earlyDate')} : {data.day}
              </Text>
              <Text style={styles.text}>
                {t('earlyTime')} : {data.time}
              </Text>
              <Text style={styles.text}>
                {t('totalRatio')} : {''}
                <Text style={styles.ratio}>{data.ratio}</Text>
              </Text>
            </View>

            <TouchableOpacity onPress={handlePreview}>
              <View style={styles.preview}>
                <Text style={styles.button_text}>
                  {isPreview ? t('seeBet') : t('preview')}
                </Text>
              </View>
            </TouchableOpacity>

            {!isPreview ? (
              <TouchableOpacity onPress={handleBuy}>
                <View style={styles.button}>
                  <Text style={styles.button_text}>{t('buy')}</Text>
                  <View style={styles.rowLine}>
                    <Text style={styles.pay_text}>{data.pay}</Text>
                    <Money width={30} height={30} />
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.button}>
                <Text style={styles.button_text}>{t('purchased')}</Text>
                <Ok width={30} height={30} />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BetModal;
