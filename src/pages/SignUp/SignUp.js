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
import Background from '../../assets/background.png';
import styles from './style';
import Loading from '../../components/Loading/Loading';
import Config from 'react-native-config';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser} from '../../store/reducers/User';

const SignUp = ({lang}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = lang;
  const {language} = useSelector(state => state.User);
  const dispatch = useDispatch(state => state.User);

  const isValidEmail = e => {
    return /\S+@\S+\.\S+/.test(e);
  };

  const handleSubmit = async () => {
    if (name.length === 0) {
      ToastAndroid.showWithGravity(
        t('error9'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else if (email.length === 0) {
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
    } else if (password.length < 7) {
      ToastAndroid.showWithGravity(
        t('error10'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else if (rePassword.length < 7) {
      ToastAndroid.showWithGravity(
        t('error10'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else if (password !== rePassword) {
      ToastAndroid.showWithGravity(
        t('error11'),
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      const obj = {
        name: name,
        email: email,
        password: password,
      };
      const user = await axios.post(`http://${Config.IP}/user/create`, obj);
      if (user.data.res === 2) {
        ToastAndroid.showWithGravity(
          t('error12'),
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        const login = await axios.post(`http://${Config.IP}/user/login`, {
          email: email,
          password: password,
        });
        if (login.data.res === 2) {
          ToastAndroid.showWithGravity(
            t('error4'),
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        } else {
          setModalVisible(true);
          await AsyncStorage.setItem('token', login.data.token);
          const bets = await axios.get(`http://${Config.IP}/admin/bet`);
          const winners = await axios.get(`http://${Config.IP}/admin/winner`);
          dispatch(
            loginUser({
              user: {...user.data.user},
              bets: {...bets.data.bets},
              winners: [...winners.data.winners],
            }),
          );
          setModalVisible(false);
        }
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
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder={t('pname')}
          />
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

          <TextInput
            value={rePassword}
            onChangeText={setRePassword}
            style={styles.input}
            secureTextEntry={true}
            placeholder={t('againPassword')}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>{t('signbutton')}</Text>
          </TouchableOpacity>

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

export default SignUp;
