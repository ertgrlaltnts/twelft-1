import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import Wait from '../../assets/svg/wait.svg';
import {useSelector} from 'react-redux';

const PaidMatch = ({data, isPreview}) => {
  const {language} = useSelector(state => state.User);
  return (
    <View style={styles.container}>
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
          <Wait width={20} height={20} fill={'#fff'} />
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
        <Text style={styles.topText}>
          {isPreview &&
            `${language === 'tr' ? data.forecast : data.forecastEnglish}  ${
              data.ratio
            }`}
        </Text>
        <View style={styles.timing}>
          <Text style={styles.topText}>{data.day}</Text>
          <Text style={styles.topText}>{data.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaidMatch;
