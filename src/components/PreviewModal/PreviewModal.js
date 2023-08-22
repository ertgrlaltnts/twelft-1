import React from 'react';
import {Modal, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Close from '../../assets/svg/close.svg';
import Back from '../../assets/svg/back.svg';
import PaidMatch from '../PaidMatch/PaidMatch';
import styles from './style';

const PreviewModal = ({preview, setPreview, data, isPreview, lang}) => {
  const {t} = lang;
  const handleBack = () => {
    setPreview(false);
  };
  const header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>{t('ready')}</Text>
      </View>
    );
  };
  const footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.topSide}>
          <View style={styles.footer_block}>
            <Text style={styles.text1}>{t('earlyDate')} :</Text>
            <Text style={styles.text2}>{data.day}</Text>
          </View>
          <View style={styles.footer_block}>
            <Text style={styles.text1}>{t('earlyTime')} :</Text>
            <Text style={styles.text2}>{data.time}</Text>
          </View>
          <View style={styles.footer_block}>
            <Text style={styles.text1}>{t('totalRatio')} :</Text>
            <Text style={styles.text3}>{data.ratio}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <PaidMatch data={item} isPreview={isPreview} />
  );

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={preview}
        onRequestClose={() => {
          setPreview(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.close}>
              <TouchableOpacity onPress={handleBack}>
                <Back width={23} height={23} fill={'#fff'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPreview(false)}>
                <Close width={32} height={32} fill={'#fff'} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={data.matches}
              keyExtractor={item => item.teamHome}
              renderItem={renderItem}
              ListHeaderComponent={header}
              ListFooterComponent={footer}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PreviewModal;
