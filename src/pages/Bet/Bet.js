import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  RefreshControl,
} from 'react-native';
import BetBlock from '../../components/BetBlock/BetBlock';
import WinnerBlock from '../../components/WinnerBlock/WinnerBlock';
import BetModal from '../../components/BetModal/BetModal';
import PreviewModal from '../../components/PreviewModal/PreviewModal';
import {useSelector} from 'react-redux';
import styles from './style';
import EmptyOwned from '../../components/EmptyOwned/EmptyOwned';
import axios from 'axios';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import {refreshBet} from '../../store/reducers/User';

const Bet = ({lang}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [filterData, setFilterData] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [preview, setPreview] = useState(false);
  const [readyBet, setReadyBet] = useState({});
  const {user, bets, ownedIds, winners} = useSelector(state => state.User);
  const {t} = lang;

  const dispatch = useDispatch(state => state.User);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    const winnersData = await axios.get(`http://${Config.IP}/admin/winner`);
    const betsData = await axios.get(`http://${Config.IP}/admin/bet`);
    dispatch(
      refreshBet({
        bets: [...betsData.data.bets],
        winners: [...winnersData.data.winners],
      }),
    );
    wait(1000).then(() => setRefreshing(false));
  }, [dispatch]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const listHeader = () => {
    return (
      <View>
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => setFilterData(1)}>
            <Text style={styles.filter_button}>{t('coupons')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilterData(2)}>
            <Text style={styles.filter_button}>{t('winners')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderMatch = ({item}) => (
    <BetBlock
      data={item}
      setReadyBet={setReadyBet}
      setModalVisible={setModalVisible}
      filterData={filterData}
      lang={lang}
    />
  );

  const renderWinner = ({item}) => (
    <WinnerBlock
      data={item}
      setReadyBet={setReadyBet}
      setModalVisible={setPreview}
      lang={lang}
    />
  );

  return (
    <View>
      <FlatList
        data={filterData === 1 ? bets : winners}
        keyExtractor={item => item._id}
        renderItem={filterData === 1 ? renderMatch : renderWinner}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={<EmptyOwned />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <BetModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPreview={setPreview}
        data={readyBet}
        coupons={bets}
        isPreview={ownedIds.indexOf(readyBet._id) === -1 ? false : true}
        user={user}
        lang={lang}
      />
      <PreviewModal
        preview={preview}
        setPreview={setPreview}
        setModalVisible={setModalVisible}
        data={readyBet}
        lang={lang}
        isPreview={
          filterData === 2
            ? true
            : ownedIds.indexOf(readyBet._id) === -1
            ? false
            : true
        }
        user={user}
      />
    </View>
  );
};

export default Bet;
