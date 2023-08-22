import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import Ok from '../../assets/svg/ok.svg';
import {useSelector} from 'react-redux';

const WinnerBlock = ({data, setReadyBet, setModalVisible, lang}) => {
  const {t} = lang;
  const {language} = useSelector(state => state.User);

  const handleBlock = () => {
    setReadyBet(data);
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleBlock}>
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <Text style={styles.topText}>{t('winnerCoupon')}</Text>
          <View style={styles.time}>
            <Text style={styles.topText}> </Text>
          </View>
        </View>
        <View style={styles.midBlock}>
          <View style={styles.left}>
            <View style={styles.one}>
              <Text> </Text>
            </View>
          </View>
          <View style={styles.mid}>
            <View style={styles.mid_col}>
              <Text style={styles.text}>
                {language === 'tr' ? data.comment : data.commentEnglish}
              </Text>
              <Ok width={30} height={30} fill={'#fff'} />
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.edit}>
              <View style={styles.one}>
                <Text style={styles.textRight}> </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <Text style={styles.topText}>
            {t('totalRatio')} : {data.ratio}{' '}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WinnerBlock;
