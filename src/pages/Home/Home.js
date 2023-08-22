import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Forecast from '../../components/Forecast/Forecast';
import Skeleton from '../../components/Skeleton/Skeleton';
import styles from './style';
import axios from 'axios';
import Config from 'react-native-config';

const Home = ({lang}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [filterMatch, setFilterMatch] = useState(1);
  const [played, setPlayed] = useState([]);
  const [unPlayed, setUnPlayed] = useState([]);
  const [skeleton, setSkeleton] = useState(false);
  const {t} = lang;

  useEffect(() => {
    const fetchData = async () => {
      setSkeleton(true);
      const data = await axios.get(`http://${Config.IP}/admin/match`);
      const {matches} = data.data;
      setPlayed(matches.filter(item => item.isFinished !== 'wait'));
      setUnPlayed(matches.filter(item => item.isFinished === 'wait'));
      setTimeout(() => {
        setSkeleton(false);
      }, 1000);
    };
    fetchData();
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    const data = await axios.get(`http://${Config.IP}/admin/match`);
    const {matches} = data.data;
    setPlayed(matches.filter(item => item.isFinished !== 'wait'));
    setUnPlayed(matches.filter(item => item.isFinished === 'wait'));
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const listHeader = () => {
    return (
      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilterMatch(1)}>
          <Text style={styles.filter_button}>{t('played')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilterMatch(2)}>
          <Text style={styles.filter_button}>{t('unplayed')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => <Forecast data={item} />;

  return (
    <SafeAreaView>
      {!skeleton ? (
        <>
          <FlatList
            data={filterMatch === 1 ? played : unPlayed}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            ListHeaderComponent={listHeader}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </>
      ) : (
        <Skeleton />
      )}
    </SafeAreaView>
  );
};

export default Home;
