import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Vip from '../../assets/svg/vip.svg';
import styles from './style';

const VipBlock = ({data, lang}) => {
  const {user, language} = useSelector(state => state.User);
  const {t} = lang;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <Text style={styles.topText}>{data.league}</Text>
          <View style={styles.time}>
            <Text style={styles.topText}>{data.day}</Text>
            <Text style={styles.topText}>{data.time}</Text>
          </View>
        </View>
        <View style={styles.midBlock}>
          <View style={styles.left}>
            <View style={styles.two}>
              <Image style={styles.image} source={{uri: data.teamHomeIcon}} />
            </View>
            <View style={styles.one}>
              <Text style={styles.text}>{data.teamHome}</Text>
            </View>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}> </Text>
            <Vip width={50} height={50} fill={'#fff'} />
            <Text style={styles.text}> </Text>
          </View>
          <View style={styles.right}>
            <View style={styles.edit}>
              <View style={styles.one}>
                <Text style={styles.textRight}>{data.teamAway}</Text>
              </View>
              <View style={styles.two}>
                <Image style={styles.image} source={{uri: data.teamAwayIcon}} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomBlock}>
          {user.isVip === true ? (
            <>
              <Text style={styles.topText}>
                {language === 'tr' ? data.forecast : data.forecastEnglish}
              </Text>
              <Text style={styles.topText}>{data.ratio}</Text>
            </>
          ) : (
            <Text style={styles.topText}>{t('must')}</Text>
          )}
        </View>
      </View>
    </>
  );
};

export default VipBlock;
