import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  Pressable,
  Linking,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import Background from '../../assets/background.png';
import styles from './style';
import Google from '../../assets/svg/google.svg';
import Email from '../../assets/svg/email.svg';
import Loading from '../../components/Loading/Loading';
import Config from 'react-native-config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/reducers/User';

const Login = ({lang}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch(state => state.User);
  const {language} = useSelector(state => state.User);
  const {t} = lang;

  GoogleSignin.configure({
    webClientId:
      '553794752352-hk4bmd84ugqtfd57eve0eh96b67qcofb.apps.googleusercontent.com',
  });

  const isValidEmail = e => {
    return /\S+@\S+\.\S+/.test(e);
  };

  const navigation = useNavigation();
  const handleGoogleButton = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const data = {
        name: userInfo.user.name,
        email: userInfo.user.email,
      };
      const withGoogle = await axios.post(
        `http://${Config.IP}/user/google`,
        data,
      );

      setModalVisible(true);
      await AsyncStorage.setItem('token', withGoogle.data.token);
      const fetchUser = await axios.post(`http://${Config.IP}/user/getUser`, {
        token: withGoogle.data.token,
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
      setTimeout(() => {
        setModalVisible(false);
        ToastAndroid.showWithGravity(
          t('success1'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }, 3000);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        ToastAndroid.showWithGravity(
          t('error1'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else if (error.code === statusCodes.IN_PROGRESS) {
        ToastAndroid.showWithGravity(
          t('error2'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        ToastAndroid.showWithGravity(
          t('error3'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          t('error4'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
    }
  };
  const handleSubmit = async () => {
    if (email.length === 0) {
      ToastAndroid.showWithGravity(
        t('error5'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
    if (!isValidEmail(email)) {
      ToastAndroid.showWithGravity(
        t('error6'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else if (password.length === 0) {
      ToastAndroid.showWithGravity(
        t('error7'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      const obj = {
        email: email,
        password: password,
      };

      const user = await axios.post(`http://${Config.IP}/user/login`, obj);
      if (user.data.res === 2) {
        ToastAndroid.showWithGravity(
          t('error8'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        setModalVisible(true);
        await AsyncStorage.setItem('token', user.data.token);
        const fetchUser = await axios.post(`http://${Config.IP}/user/getUser`, {
          token: user.data.token,
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
        setTimeout(() => {
          setModalVisible(false);
          ToastAndroid.showWithGravity(
            t('success1'),
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        }, 3000);
      }
    }
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.block}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.input_block}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder={t('email')}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry={true}
            placeholder={t('sifre')}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>{t('login')}</Text>
          </TouchableOpacity>
          <View style={styles.or}>
            <View style={styles.divider} />
            <Text style={styles.or_text}>{t('or')}</Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.margin}>
            <TouchableOpacity
              style={styles.sign_button}
              onPress={handleGoogleButton}>
              <Google width={24} height={24} />
              <Text style={styles.sign_text}>{t('google')}</Text>
              <View />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sign_button}
              onPress={() => navigation.navigate('SignUp')}>
              <Email width={24} height={24} />
              <Text style={styles.sign_text}>{t('signin')}</Text>
              <View />
            </TouchableOpacity>
          </View>
          {language === 'tr' ? (
            <Text style={styles.policy}>
              <Text>Kayıt olarak ve giriş yaparak</Text>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://docs.google.com/document/d/1AGH-tH2DlTvoexeBh7tq7IA1FrkO3_VwpuzZPoMveQ8/edit?usp=sharing',
                  )
                }>
                <Text style={styles.span}> Kullanım Şartları</Text>
              </Pressable>{' '}
              <Text style={styles.and}> ve </Text>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://docs.google.com/document/d/1AGH-tH2DlTvoexeBh7tq7IA1FrkO3_VwpuzZPoMveQ8/edit?usp=sharing',
                  )
                }>
                <Text style={styles.span}> Gizlilik Politikasını</Text>
              </Pressable>
              <Text> kabul etmiş sayılırsınız.</Text>
            </Text>
          ) : (
            <Text style={styles.policy}>
              <Text>By registering and logging in, you agree to the</Text>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://docs.google.com/document/d/1AGH-tH2DlTvoexeBh7tq7IA1FrkO3_VwpuzZPoMveQ8/edit?usp=sharing',
                  )
                }>
                <Text style={styles.span}> Terms of Use </Text>
              </Pressable>
              <Text style={styles.and}> and </Text>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://docs.google.com/document/d/1AGH-tH2DlTvoexeBh7tq7IA1FrkO3_VwpuzZPoMveQ8/edit?usp=sharing',
                  )
                }>
                <Text style={styles.span}> Privacy Policy.</Text>
              </Pressable>
            </Text>
          )}
        </View>
      </View>
      <Loading modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ImageBackground>
  );
};

export default Login;
