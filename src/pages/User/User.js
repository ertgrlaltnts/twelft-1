import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {useSelector} from 'react-redux';
import {adapty} from 'react-native-adapty';
import Vip from '../../assets/svg/vip.svg';
import Gold from '../../assets/svg/money.svg';
import UserInfo from '../../assets/svg/user_info.svg';
import Coin500 from '../../assets/svg/500.svg';
import Coin1000 from '../../assets/svg/1000.svg';
import Coin5000 from '../../assets/svg/5000.svg';
import StoreModal from '../../components/StoreModal/StoreModal';
import UserModal from '../../components/UserModal/UserModal';
import Skeleton from '../../components/Skeleton/Skeleton';
import packages from '../../data/payment.json';

const User = ({lang}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [paywalls, setPaywalls] = useState(null);
  const navigation = useNavigation();
  const {user} = useSelector(state => state.User);
  const [skeleton, setSkeleton] = useState(false);
  const {t} = lang;

  const handleButton = item => {
    setModalVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      setSkeleton(true);
      try {
        const id = 'default';
        const locale = 'en';
        const paywall = await adapty.getPaywall(id, locale);
        const products = await adapty.getPaywallProducts(paywall);
        setPaywalls(products);
      } catch (error) {}
      setTimeout(() => {
        setSkeleton(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      {!skeleton ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.block}>
            <View style={styles.image_block}>
              <Image
                style={styles.image}
                source={require('../../assets/profile.png')}
              />
              {user.isVip && <Vip style={styles.vip} width={40} height={40} />}
            </View>
            <View>
              <Text style={styles.text}>{user.name}</Text>
            </View>
            <View>
              <Text> </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.block_2}
            onPress={() => setUserModalVisible(true)}>
            <Text style={styles.text2}>{t('userInfo')}</Text>
            <UserInfo width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.store_block}
            onPress={() => navigation.navigate('Store')}>
            <Text style={styles.store_text}>{t('store')}</Text>
            <View style={styles.bags}>
              <Gold style={styles.absolute3} width={35} height={35} />
              <Coin1000 style={styles.absolute2} width={35} height={35} />
              <Coin500 style={styles.absolute} width={35} height={35} />
              <Coin5000 width={35} height={35} />
            </View>
          </TouchableOpacity>
          {packages.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleButton(item)}>
              <View style={styles.store_vip}>
                <Text style={[styles.store_text]}>{item.name}</Text>
                <Vip width={35} height={35} />
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.info}>
            <Vip width={25} height={25} />
            <Text style={styles.text3}>{t('info1')}</Text>
            <View />
          </View>

          <View style={styles.info}>
            <Vip width={25} height={25} />
            <Text style={styles.text3}>{t('info2')}</Text>
            <View />
          </View>

          <StoreModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            lang={lang}
            data={paywalls}
          />
          <UserModal
            modalVisible={userModalVisible}
            setModalVisible={setUserModalVisible}
            user={user}
            lang={lang}
          />
        </SafeAreaView>
      ) : (
        <Skeleton />
      )}
    </ScrollView>
  );
};

export default User;
