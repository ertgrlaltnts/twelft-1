import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getFCMToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmtoken');
  if (!fcmToken) {
    try {
      const fcmToken2 = await messaging().getToken();
      if (fcmToken2) {
        await AsyncStorage.setItem('fcmtoken', fcmToken2);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging.onMessage(async remoteMessage => {
    console.log('foreground', remoteMessage);
  });
};
