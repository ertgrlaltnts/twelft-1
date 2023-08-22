import React from 'react';
import {
  Modal,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import Close from '../../assets/svg/close.svg';
import Vip from '../../assets/svg/vip.svg';
import Ok from '../../assets/svg/ok.svg';
import X from '../../assets/svg/x.svg';
import styles from './style';

const UserModal = ({modalVisible, setModalVisible, lang}) => {
  const {user} = useSelector(state => state.User);
  const {t} = lang;
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

            <View style={styles.image_block}>
              <Image
                style={styles.image}
                source={require('../../assets/profile.png')}
              />
              {user.isVip && <Vip style={styles.vip} width={40} height={40} />}
            </View>
            <ScrollView style={styles.text_block}>
              <View style={styles.row}>
                <Text style={styles.text}>{t('ad')} : </Text>
                <Text style={styles.text}>{user.name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Mail : </Text>
                <Text style={styles.text}>{user.email}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>VIP : </Text>
                {user.isVip ? (
                  <Ok width={20} height={20} />
                ) : (
                  <X width={20} height={20} />
                )}
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>{t('packageEnd')} : </Text>
                <Text style={styles.text}>
                  {user.isVip ? user.finishVip : '-'}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserModal;
