import React from 'react';
import {View, Text, Image} from 'react-native';
import X from '../../assets/svg/x.svg';
import Ok from '../../assets/svg/ok.svg';
import Wait from '../../assets/svg/wait.svg';
import styles from './style';
import {useSelector} from 'react-redux';

const Forecast = ({data}) => {
  const {language} = useSelector(state => state.User);
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
            <Text style={styles.text}>{data.score.home}</Text>
            {data.isFinished === 'false' ? (
              <X width={20} height={20} fill={'#fff'} />
            ) : data.isFinished === 'wait' ? (
              <Wait width={20} height={20} fill={'#fff'} />
            ) : (
              <Ok width={20} height={20} fill={'#fff'} />
            )}

            <Text style={styles.text}>{data.score.away}</Text>
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
            {language === 'tr' ? data.forecast : data.forecastEnglish}
          </Text>
          <Text style={styles.topText}>{data.ratio}</Text>
        </View>
      </View>
    </>
  );
};

export default Forecast;
