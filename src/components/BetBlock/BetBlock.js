import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import Money from '../../assets/svg/money.svg';
import Ok from '../../assets/svg/ok.svg';

const BetBlock = ({data, setReadyBet, setModalVisible, lang}) => {
  const {ownedIds, language} = useSelector(state => state.User);
  const {t} = lang;

  const handleBlock = () => {
    setReadyBet(data);
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleBlock}>
      <View style={styles.container}>
        {ownedIds.indexOf(data._id) !== -1 && (
          <View style={styles.vip}>
            <Ok width={32} height={32} />
          </View>
        )}
        <View style={styles.topBlock}>
          <Text style={styles.topText}>{t('ready')}</Text>
          <View style={styles.time}>
            <Text style={styles.topText}>
              {ownedIds.indexOf(data._id) !== -1 ? t('purchased') : t('paid')}
            </Text>
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
              <Money width={30} height={30} fill={'#fff'} />
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

export default BetBlock;
