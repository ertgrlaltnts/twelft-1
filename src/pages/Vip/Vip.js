import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import VipBlock from '../../components/VipBlock/VipBlock';
import axios from 'axios';
import Config from 'react-native-config';
import Skeleton from '../../components/Skeleton/Skeleton';

const Vip = ({lang}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [vips, setVips] = useState([]);
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setSkeleton(true);
      const vip = await axios.get(`http://${Config.IP}/admin/vip`);
      setVips(vip.data.bets);
      setTimeout(() => {
        setSkeleton(false);
      }, 1000);
    };
    fetchData();
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    const vip = await axios.get(`http://${Config.IP}/admin/vip`);
    setVips(vip.data.bets);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const renderMatch = ({item}) => <VipBlock data={item} lang={lang} />;
  return (
    <View>
      {!skeleton ? (
        <>
          <FlatList
            data={vips}
            keyExtractor={item => item._id}
            renderItem={renderMatch}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </>
      ) : (
        <Skeleton />
      )}
    </View>
  );
};

export default Vip;
